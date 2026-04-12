// apps/web/src/server/routers/topic.ts
import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import {
  CreateTopicUseCase,
  UpdateTopicUseCase,
  DeleteTopicUseCase,
  GetAllTopicsUseCase,
} from "@edu-platform/core";
import { topicRepository, contentRepository } from "@edu-platform/infrastructure";
import { typeConverters } from "@/server/utils/typeConverters";

export const topicRouter = router({
  getAll: publicProcedure.query(async () => {
    const useCase = new GetAllTopicsUseCase(topicRepository);
    return useCase.execute();
  }),

  getById: publicProcedure
    .input(z.number())
    .query(async ({ input }) => {
      return topicRepository.findById(typeConverters.idToString(input));
    }),

  getBySubject: publicProcedure
    .input(z.object({ subjectId: z.number() }))
    .query(async ({ input }: { input: { subjectId: number } }) => {
      return topicRepository.getBySubject(input.subjectId);
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        description: z.string().min(1, "Descrição é obrigatória"),
        seriesId: z.number().min(1, "Série é obrigatória"),
        subjectIds: z
          .array(z.number())
          .min(1, "Pelo menos uma matéria deve ser selecionada"),
        imageUrl: z.string().optional(),
        order: z.number().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const useCase = new CreateTopicUseCase(topicRepository);
      return useCase.execute(input);
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        subjectIds: z.array(z.number()).optional(),
        imageUrl: z.string().optional(),
        order: z.number().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, subjectIds, ...data } = input;
      const useCase = new UpdateTopicUseCase(topicRepository);
      return useCase.execute({
        id: typeConverters.idToString(id),
        subjectIds: typeConverters.arrayToStrings(subjectIds),
        ...data,
      });
    }),

  delete: publicProcedure
    .input(z.number())
    .mutation(async ({ input }) => {
      const useCase = new DeleteTopicUseCase(topicRepository, contentRepository);
      return useCase.execute(typeConverters.idToString(input));
    }),
});