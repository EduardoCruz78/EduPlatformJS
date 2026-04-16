// apps/web/src/server/routers/content.ts

import { router, publicProcedure, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
  CreateContentUseCase,
  DeleteContentUseCase,
  FindContentByIdUseCase,
  FindContentsByTopicUseCase,
  FindContentsUseCase,
  UpdateContentUseCase,
} from '@edu-platform/core';

const contentTypeSchema = z.enum(['VIDEO', 'PDF', 'ARTICLE']);

export const contentRouter = router({
  find: publicProcedure.query(async ({ ctx }) => {
    const useCase = new FindContentsUseCase(ctx.contentRepository);
    return useCase.execute();
  }),

  findById: publicProcedure.input(z.number()).query(async ({ input, ctx }) => {
    const useCase = new FindContentByIdUseCase(ctx.contentRepository);
    return useCase.execute(input);
  }),

  findByTopic: publicProcedure
    .input(z.object({ topicId: z.number() }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindContentsByTopicUseCase(ctx.contentRepository);
      return useCase.execute({ topicId: input.topicId });
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1, 'Titulo e obrigatorio'),
        description: z.string().optional(),
        topicId: z.number().min(1, 'Topico e obrigatorio'),
        type: contentTypeSchema,
        link: z.string().min(1, 'Link e obrigatorio'),
        thumbnailUrl: z.string().min(1, 'Thumbnail e obrigatoria'),
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
        topicId: z.number().optional(),
        type: contentTypeSchema.optional(),
        link: z.string().optional(),
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

  delete: protectedProcedure.input(z.number()).mutation(async ({ input, ctx }) => {
    const useCase = new DeleteContentUseCase(
      ctx.contentRepository,
      ctx.checklistRepository
    );
    return useCase.execute(input);
  }),
});
