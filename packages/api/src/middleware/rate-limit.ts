import type { Ratelimit as RatelimitType } from "@upstash/ratelimit";
import { TRPCError } from "@trpc/server";

import { t } from "../trpc";

/**
 * Derive the client IP for rate-limit keying.
 *
 * We use ONLY `x-real-ip`, which Vercel's edge sets from the trusted TCP
 * connection — a client cannot forge it. We deliberately do NOT trust
 * `x-forwarded-for`: a client can send their own `X-Forwarded-For` and Vercel
 * appends the real IP after it, so the left-most entry is attacker-controlled
 * and could be rotated to mint a fresh bucket per request (limit bypass).
 * Falls back to a constant key (shared bucket) when no trusted IP is present.
 */
function getClientIp(headers: Headers): string {
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "anonymous";
}

/**
 * Lazily-built, module-scoped Upstash sliding-window limiter.
 *
 * Built ONCE, and only when both Upstash env vars are present. When they are
 * absent (local dev / placeholder env) we never construct a client and the
 * middleware is a pass-through — no throw, no crash, no network calls.
 */
let limiter: RatelimitType | null | undefined;

async function getLimiter(): Promise<RatelimitType | null> {
  if (limiter !== undefined) return limiter;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    limiter = null;
    return limiter;
  }

  const [{ Ratelimit }, { Redis }] = await Promise.all([
    import("@upstash/ratelimit"),
    import("@upstash/redis"),
  ]);

  limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    // ~5 requests per 15 minutes, keyed by client IP.
    limiter: Ratelimit.slidingWindow(5, "15 m"),
    prefix: "@acme/api/ratelimit",
    analytics: false,
  });

  return limiter;
}

/**
 * tRPC middleware that rate-limits by client IP using Upstash.
 *
 * Gracefully degrades to a no-op pass-through when Upstash is not configured.
 */
export const rateLimitMiddleware = t.middleware(async ({ ctx, next }) => {
  const rl = await getLimiter();

  // Graceful degradation: no Upstash config → allow the request.
  if (!rl) return next();

  const ip = getClientIp(ctx.headers);

  try {
    const { success } = await rl.limit(ip);
    if (!success) {
      throw new TRPCError({
        code: "TOO_MANY_REQUESTS",
        message: "Too many requests. Please try again in a few minutes.",
      });
    }
  } catch (err) {
    // A genuine rate-limit rejection must propagate.
    if (err instanceof TRPCError) throw err;
    // Fail OPEN on limiter/Upstash failure (network, timeout, outage): never
    // take the endpoint down because the limiter is unavailable.
    console.error("[rate-limit] limiter unavailable, allowing request:", err);
  }

  return next();
});
