import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import { CreateVestibularUseCase, UpdateVestibularUseCase, DeleteVestibularUseCase } from "@edu-platform/core";
import { vestibularRepository } from "@edu-platform/infrastructure";

export const vestibularRouter = router({
  getAll: publicProcedure.query(async () => {
    return vestibularRepository.getAvailable();
  }),

  getById: publicProcedure.input(z.number()).query(async ({ input }) => {
    return vestibularRepository.findById?.(input) || null;
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        description: z.string().optional(),
        year: z
          .number()
          .min(1990, "Ano deve ser 1990 ou posterior")
          .max(2100, "Ano deve ser 2100 ou anterior"),
        imageUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const useCase = new CreateVestibularUseCase(vestibularRepository);
      return useCase.execute(input);
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        year: z.number().optional(),
        imageUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const useCase = new UpdateVestibularUseCase(vestibularRepository);
      return useCase.execute({ id, ...data });
    }),

  delete: publicProcedure
    .input(z.number())
    .mutation(async ({ input }) => {
      const useCase = new DeleteVestibularUseCase(vestibularRepository);
      return useCase.execute(input);
    }),
});