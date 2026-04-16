// apps/web/src/server/routers/topic.ts

import { router, publicProcedure, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
    CreateTopicUseCase,
    DeleteTopicUseCase,
    FindTopicByIdUseCase,
    FindTopicsBySubjectUseCase,
    FindTopicsUseCase,
    UpdateTopicUseCase,
} from '@edu-platform/core';

export const topicRouter = router({
    find: publicProcedure.query(async ({ ctx }) => {
        const useCase = new FindTopicsUseCase(ctx.topicRepository);
        return useCase.execute();
    }),

    findById: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const useCase = new FindTopicByIdUseCase(ctx.topicRepository);
            return useCase.execute(input);
        }),

    findBySubject: publicProcedure
        .input(z.object({ subjectId: z.number() }))
        .query(async ({ input, ctx }) => {
            const useCase = new FindTopicsBySubjectUseCase(ctx.topicRepository);
            return useCase.execute(input.subjectId);
        }),

    create: protectedProcedure
        .input(
            z.object({
                name: z.string().min(1, 'Nome é obrigatório'),
                subjectIds: z.array(z.number()).min(1, 'Selecione ao menos uma matéria'),
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
                subjectIds: z.array(z.number()).optional(),
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
