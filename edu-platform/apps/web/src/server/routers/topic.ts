import { router, publicProcedure, protectedProcedure } from "@/server/trpc";
import { z } from "zod";
import {
    CreateTopicUseCase,
    UpdateTopicUseCase,
    DeleteTopicUseCase,
    GetAllTopicsUseCase,
    GetTopicsBySubjectUseCase,
} from "@edu-platform/core";

export const topicRouter = router({
    getAll: publicProcedure.query(async ({ ctx }) => {
        const useCase = new GetAllTopicsUseCase(ctx.topicRepository);
        return useCase.execute();
    }),

    getById: publicProcedure
        .input(z.number())
        .query(({ input, ctx }) => {
            return ctx.topicRepository.findById(input);
        }),

    getBySubject: publicProcedure
        .input(z.object({ subjectId: z.number() }))
        .query(async ({ input, ctx }) => {
            const useCase = new GetTopicsBySubjectUseCase(ctx.topicRepository);
            return useCase.execute(input.subjectId);
        }),

    create: protectedProcedure
        .input(
            z.object({
                name: z.string().min(1, "Nome é obrigatório"),
                subjectIds: z.array(z.number()).min(1, "Selecione ao menos uma matéria"),
                description: z.string().optional(),
                seriesId: z.number().optional(),
                imageUrl: z.string().optional(),
                order: z.number().optional(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new CreateTopicUseCase(ctx.topicRepository);
            return useCase.execute(input);
        }),

    update: protectedProcedure
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
        .mutation(async ({ input, ctx }) => {
            const useCase = new UpdateTopicUseCase(ctx.topicRepository);
            return useCase.execute(input);
        }),

    delete: protectedProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const useCase = new DeleteTopicUseCase(
                ctx.topicRepository,
                ctx.contentRepository
            );
            return useCase.execute(input);
        }),
});