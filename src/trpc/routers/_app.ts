import { baseProcedure, createTRPCRouter } from "../init";
import prisma from "@/lib/db";

export const appRouter = createTRPCRouter({
  getUsers: baseProcedure.query(async () => {
    return {
      users: await prisma.user.findMany(),
    };
  }),
});

export type AppRouter = typeof appRouter;
