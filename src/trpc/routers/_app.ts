import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  getUsers: baseProcedure.query((opts) => {}),
});
export type AppRouter = typeof appRouter;
