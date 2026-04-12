// apps/web/src/server/routers/content.ts
import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import {
  CreateContentUseCase,
  UpdateContentUseCase,
  DeleteContentUseCase,
} from "@edu-platform/core";
import {
  contentRepository,
  checklistRepository,
} from "@edu-platform/infrastructure";

export const contentRouter = router({
  getById: publicProcedure
    .input(z.number())
    .query(async ({ input }: { input: number }) => {
      return contentRepository.findById(input);
    }),

  // ✅ CORRIGIDO: Espera objeto com topicId, não apenas number
  getByTopic: publicProcedure
    .input(z.object({ topicId: z.number() }))
    .query(async ({ input }: { input: { topicId: number } }) => {
      return contentRepository.getByTopic(input.topicId);
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1, "Título é obrigatório"),
        topicId: z.number().min(1, "Tópico é obrigatório"),
        type: z.string(),
        link: z.string(),
        thumbnailUrl: z.string(),
        pdfUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input }: { input: any }) => {
      const useCase = new CreateContentUseCase(contentRepository);
      return useCase.execute(input);
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        type: z.string().optional(),
        link: z.string().optional(),
        thumbnailUrl: z.string().optional(),
        pdfUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input }: { input: any }) => {
      const { id, ...data } = input;
      const useCase = new UpdateContentUseCase(contentRepository);
      return useCase.execute({ id, ...data });
    }),

  delete: publicProcedure
    .input(z.number())
    .mutation(async ({ input }: { input: number }) => {
      const useCase = new DeleteContentUseCase(
        contentRepository,
        checklistRepository
      );
      return useCase.execute(input);
    }),
});