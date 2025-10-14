import { baseProcedure, createTRPCRouter } from "../init";
import prisma from "@/lib/db";

export const appRouter = createTRPCRouter({
  getUsers: baseProcedure.query(() => {
    return {
      users: prisma.user.findMany(),
    };
  }),
});

export type AppRouter = typeof appRouter;
