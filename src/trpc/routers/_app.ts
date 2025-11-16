import prisma from "@/lib/db";
import { protectedProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query((opts) => {
    return prisma.account.findMany({});
  }),
});
export type AppRouter = typeof appRouter;
