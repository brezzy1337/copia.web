import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { waitlistRouter } from "./router/waitlist";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  waitlist: waitlistRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
