import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import {
  CreateChecklistUseCase,
  DeleteChecklistUseCase,
} from "@edu-platform/core";
import { checklistRepository } from "@edu-platform/infrastructure";

export const checklistRouter = router({
  getById: publicProcedure
    .input(z.number())
    .query(async ({ input }: { input: number }) => {
      return checklistRepository.findById(input.toString());
    }),

  getByContentId: publicProcedure
    .input(z.number())
    .query(async ({ input }: { input: number }) => {
      return checklistRepository.findByContentId(input);
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1, "Título é obrigatório"),
        description: z.string().optional(),
        contentId: z.number().min(1, "Conteúdo é obrigatório"),
        items: z
          .array(
            z.object({
              text: z.string().min(1, "Texto do item é obrigatório"),
              order: z.number(),
            })
          )
          .min(1, "Pelo menos um item deve ser adicionado"),
      })
    )
    .mutation(async ({ input }: { input: any }) => {
      const useCase = new CreateChecklistUseCase(checklistRepository);
      return useCase.execute(input);
    }),

  delete: publicProcedure
    .input(z.number())
    .mutation(async ({ input }: { input: number }) => {
      const useCase = new DeleteChecklistUseCase(checklistRepository);
      return useCase.execute(input.toString());
    }),
});