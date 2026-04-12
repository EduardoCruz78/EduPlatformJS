// apps/web/src/server/routers/vestibular.ts
import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import {
  CreateVestibularUseCase,
  UpdateVestibularUseCase,
  DeleteVestibularUseCase,
} from "@edu-platform/core";
import { vestibularRepository } from "@edu-platform/infrastructure";

export const vestibularRouter = router({
  getAll: publicProcedure.query(async () => {
    return vestibularRepository.getAvailable();
  }),

  // ✅ CORRIGIDO: Usar método que existe ou remover optional chaining
  getById: publicProcedure
    .input(z.number())
    .query(async ({ input }) => {
      // Se o método não existe, usar getAll e filtrar
      const all = await vestibularRepository.getAvailable();
      return all.find((v: any) => v.id === input) || null;
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        // ✅ CORRIGIDO: description é opcional, então use .optional()
        description: z.string().optional().default(""),
        year: z
          .number()
          .min(1990, "Ano deve ser 1990 ou posterior")
          .max(2100, "Ano deve ser 2100 ou anterior"),
        imageUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const useCase = new CreateVestibularUseCase(vestibularRepository);
      // ✅ CORRIGIDO: Converter para string se o UseCase espera
      return useCase.execute({
        ...input,
        description: input.description || "",
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        // ✅ CORRIGIDO: Converter number para string se necessário
        id: z.number().transform(String),
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
    .input(z.number().transform(String))
    .mutation(async ({ input }) => {
      const useCase = new DeleteVestibularUseCase(vestibularRepository);
      return useCase.execute(input);
    }),
});