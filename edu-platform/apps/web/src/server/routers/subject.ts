// apps/web/src/server/routers/subject.ts

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
} from '@/server/validation';
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

  findById: publicProcedure.input(positiveIntSchema).query(async ({ input, ctx }) => {
    const useCase = new FindSubjectByIdUseCase(ctx.subjectRepository);
    return useCase.execute(input);
  }),

  findBySeries: publicProcedure
    .input(z.object({ seriesId: positiveIntSchema }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindSubjectsBySeriesUseCase(ctx.subjectRepository);
      return useCase.execute(input.seriesId);
    }),

  create: adminProcedure
    .input(
      z.object({
        name: requiredTrimmedString('Nome', 120),
        description: optionalTrimmedString(1000),
        imageUrl: optionalUrlString(),
        order: positiveIntSchema.optional(),
        seriesId: positiveIntSchema.nullable().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateSubjectUseCase(ctx.subjectRepository);
      return useCase.execute(input);
    }),

  update: adminProcedure
    .input(
      z.object({
        id: positiveIntSchema,
        name: optionalTrimmedString(120),
        description: optionalTrimmedString(1000),
        imageUrl: optionalUrlString(),
        order: positiveIntSchema.optional(),
        seriesId: positiveIntSchema.nullable().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new UpdateSubjectUseCase(ctx.subjectRepository);
      return useCase.execute(input);
    }),

  delete: adminProcedure.input(positiveIntSchema).mutation(async ({ input, ctx }) => {
    const useCase = new DeleteSubjectUseCase(
      ctx.subjectRepository,
      ctx.topicRepository
    );
    return useCase.execute(input);
  }),
});
