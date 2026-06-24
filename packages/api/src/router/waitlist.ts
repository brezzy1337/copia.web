import type { TRPCRouterRecord } from "@trpc/server";

import { CreateWaitlistSchema, Waitlist } from "@acme/db/schema";

import { publicProcedure } from "../trpc";

export const waitlistRouter = {
  join: publicProcedure
    .input(CreateWaitlistSchema)
    .mutation(async ({ ctx, input }) => {
      // Idempotent: a repeat signup just succeeds. We don't error or reveal
      // whether the email was already on the list.
      await ctx.db
        .insert(Waitlist)
        .values(input)
        .onConflictDoNothing({ target: Waitlist.email });
      return { ok: true };
    }),
} satisfies TRPCRouterRecord;
