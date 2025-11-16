import prisma from "@/lib/db";
import { protectedProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query((opts) => {
    return prisma.workflow.findMany({});
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    return prisma.workflow.create({
      data: {
        name: "test-workflow",
      },
    });
  }),
});
export type AppRouter = typeof appRouter;
