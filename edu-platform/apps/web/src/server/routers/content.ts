// apps/web/src/server/routers/content.ts

import { router, publicProcedure, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
    CreateContentUseCase,
    DeleteContentUseCase,
    GetContentByIdUseCase,
    GetContentsByTopicUseCase,
    UpdateContentUseCase,
} from '@edu-platform/core';

const contentTypeSchema = z.enum(['VIDEO', 'PDF', 'ARTICLE']);

export const contentRouter = router({
    getById: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const useCase = new GetContentByIdUseCase(ctx.contentRepository);
            return useCase.execute(input);
        }),

    getByTopic: publicProcedure
        .input(z.object({ topicId: z.number() }))
        .query(async ({ input, ctx }) => {
            const useCase = new GetContentsByTopicUseCase(ctx.contentRepository);
            return useCase.execute({ topicId: input.topicId });
        }),

    create: protectedProcedure
        .input(
            z.object({
                title: z.string().min(1, 'Título é obrigatório'),
                description: z.string().optional(),
                topicId: z.number().min(1, 'Tópico é obrigatório'),
                type: contentTypeSchema,
                link: z.string().min(1, 'Link é obrigatório'),
                thumbnailUrl: z.string().min(1, 'Thumbnail é obrigatória'),
                videoUrl: z.string().optional(),
                pdfUrl: z.string().optional(),
                order: z.number().optional(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new CreateContentUseCase(ctx.contentRepository);
            return useCase.execute(input);
        }),

    update: protectedProcedure
        .input(
            z.object({
                id: z.number(),
                title: z.string().optional(),
                description: z.string().optional(),
                type: contentTypeSchema.optional(),
                videoUrl: z.string().optional(),
                pdfUrl: z.string().optional(),
                thumbnailUrl: z.string().optional(),
                order: z.number().optional(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new UpdateContentUseCase(ctx.contentRepository);
            return useCase.execute(input);
        }),

    delete: protectedProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const useCase = new DeleteContentUseCase(
                ctx.contentRepository,
                ctx.checklistRepository
            );
            return useCase.execute(input);
        }),
});