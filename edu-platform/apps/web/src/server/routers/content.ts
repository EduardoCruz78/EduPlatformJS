// apps/web/src/server/routers/content.ts

import {
  router,
  publicProcedure,
  adminProcedure,
} from '@/server/trpc';
import { z } from 'zod';
import {
  optionalTrimmedString,
  optionalUrlString,
  positiveIntSchema,
  requiredTrimmedString,
  requiredUrlString,
} from '@/server/validation';
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

  findById: publicProcedure.input(positiveIntSchema).query(async ({ input, ctx }) => {
    const useCase = new FindContentByIdUseCase(ctx.contentRepository);
    return useCase.execute(input);
  }),

  findByTopic: publicProcedure
    .input(z.object({ topicId: positiveIntSchema }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindContentsByTopicUseCase(ctx.contentRepository);
      return useCase.execute({ topicId: input.topicId });
    }),

  create: adminProcedure
    .input(
      z.object({
        title: requiredTrimmedString('Título', 160),
        description: optionalTrimmedString(2000),
        topicId: positiveIntSchema,
        type: contentTypeSchema,
        link: requiredUrlString('Link'),
        thumbnailUrl: requiredUrlString('Thumbnail'),
        videoUrl: optionalUrlString(),
        pdfUrl: optionalUrlString(),
        transcript: optionalTrimmedString(8000),
        captionsUrl: optionalUrlString(),
        librasUrl: optionalUrlString(),
        audioDescriptionUrl: optionalUrlString(),
        order: positiveIntSchema.optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateContentUseCase(ctx.contentRepository);
      return useCase.execute(input);
    }),

  update: adminProcedure
    .input(
      z.object({
        id: positiveIntSchema,
        title: optionalTrimmedString(160),
        description: optionalTrimmedString(2000),
        topicId: positiveIntSchema.optional(),
        type: contentTypeSchema.optional(),
        link: optionalUrlString(),
        videoUrl: optionalUrlString(),
        pdfUrl: optionalUrlString(),
        thumbnailUrl: optionalUrlString(),
        transcript: optionalTrimmedString(8000),
        captionsUrl: optionalUrlString(),
        librasUrl: optionalUrlString(),
        audioDescriptionUrl: optionalUrlString(),
        order: positiveIntSchema.optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new UpdateContentUseCase(ctx.contentRepository);
      return useCase.execute(input);
    }),

  delete: adminProcedure.input(positiveIntSchema).mutation(async ({ input, ctx }) => {
    const useCase = new DeleteContentUseCase(
      ctx.contentRepository,
      ctx.checklistRepository
    );
    return useCase.execute(input);
  }),
});
