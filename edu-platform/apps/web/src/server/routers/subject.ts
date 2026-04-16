// apps/web/src/server/routers/subject.ts

import { router, publicProcedure, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
    CreateSubjectUseCase,
    DeleteSubjectUseCase,
    FindSubjectByIdUseCase,
    FindSubjectsBySeriesUseCase,
    FindSubjectsUseCase,
    UpdateSubjectUseCase,
} from '@edu-platform/core';

export const subjectRouter = router({
    find: publicProcedure.query(async ({ ctx }) => {
        const useCase = new FindSubjectsUseCase(ctx.subjectRepository);
        return useCase.execute();
    }),

    findById: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const useCase = new FindSubjectByIdUseCase(ctx.subjectRepository);
            return useCase.execute(input);
        }),

    findBySeries: publicProcedure
        .input(z.object({ seriesId: z.number() }))
        .query(async ({ input, ctx }) => {
            const useCase = new FindSubjectsBySeriesUseCase(ctx.subjectRepository);
            return useCase.execute(input.seriesId);
        }),

    create: protectedProcedure
        .input(
            z.object({
                name: z.string().min(1, 'Nome é obrigatório'),
                description: z.string().optional(),
                imageUrl: z.string().optional(),
                order: z.number().optional(),
                seriesId: z.number().nullable().optional(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new CreateSubjectUseCase(ctx.subjectRepository);
            return useCase.execute(input);
        }),

    update: protectedProcedure
        .input(
            z.object({
                id: z.number(),
                name: z.string().optional(),
                description: z.string().optional(),
                imageUrl: z.string().optional(),
                order: z.number().optional(),
                seriesId: z.number().nullable().optional(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new UpdateSubjectUseCase(ctx.subjectRepository);
            return useCase.execute(input);
        }),

    delete: protectedProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const useCase = new DeleteSubjectUseCase(
                ctx.subjectRepository,
                ctx.topicRepository
            );
            return useCase.execute(input);
        }),
});
