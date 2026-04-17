// apps/web/src/server/routers/topic.ts

import {
  router,
  publicProcedure,
  adminProcedure,
} from '@/server/trpc';
import { z } from 'zod';
import {
  optionalTrimmedString,
  positiveIntSchema,
  requiredTrimmedString,
} from '@/server/validation';
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

  findById: publicProcedure.input(positiveIntSchema).query(async ({ input, ctx }) => {
    const useCase = new FindTopicByIdUseCase(ctx.topicRepository);
    return useCase.execute(input);
  }),

  findBySubject: publicProcedure
    .input(z.object({ subjectId: positiveIntSchema }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindTopicsBySubjectUseCase(ctx.topicRepository);
      return useCase.execute(input.subjectId);
    }),

  create: adminProcedure
    .input(
      z.object({
        name: requiredTrimmedString('Nome', 160),
        subjectIds: z
          .array(positiveIntSchema)
          .min(1, 'Selecione ao menos uma materia'),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateTopicUseCase(ctx.topicRepository);
      return useCase.execute(input);
    }),

  update: adminProcedure
    .input(
      z.object({
        id: positiveIntSchema,
        name: optionalTrimmedString(160),
        subjectIds: z.array(positiveIntSchema).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new UpdateTopicUseCase(ctx.topicRepository);
      return useCase.execute(input);
    }),

  delete: adminProcedure.input(positiveIntSchema).mutation(async ({ input, ctx }) => {
    const useCase = new DeleteTopicUseCase(
      ctx.topicRepository,
      ctx.contentRepository
    );
    return useCase.execute(input);
  }),
});
