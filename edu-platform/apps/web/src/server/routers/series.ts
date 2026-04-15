// apps/web/src/server/routers/series.ts

import { router, publicProcedure, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
    CreateSeriesUseCase,
    DeleteSeriesUseCase,
    GetAllSeriesUseCase,
    GetSeriesByIdUseCase,
    UpdateSeriesUseCase,
} from '@edu-platform/core';

export const seriesRouter = router({
    getAll: publicProcedure.query(async ({ ctx }) => {
        const useCase = new GetAllSeriesUseCase(ctx.seriesRepository);
        return useCase.execute();
    }),

    getById: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const useCase = new GetSeriesByIdUseCase(ctx.seriesRepository);
            return useCase.execute(input);
        }),

    create: protectedProcedure
        .input(
            z.object({
                name: z.string().min(1, 'Nome é obrigatório'),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new CreateSeriesUseCase(ctx.seriesRepository);
            return useCase.execute(input);
        }),

    update: protectedProcedure
        .input(
            z.object({
                id: z.number(),
                name: z.string().optional(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new UpdateSeriesUseCase(ctx.seriesRepository);
            return useCase.execute(input);
        }),

    delete: protectedProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const useCase = new DeleteSeriesUseCase(
                ctx.seriesRepository,
                ctx.topicRepository
            );
            return useCase.execute(input);
        }),
});