// apps/web/src/server/routers/series.ts

import {
  router,
  publicProcedure,
  adminProcedure,
} from '@/server/trpc';
import {
  positiveIntSchema,
  requiredTrimmedString,
  optionalTrimmedString,
} from '@/server/validation';
import { z } from 'zod';
import {
  CreateSeriesUseCase,
  DeleteSeriesUseCase,
  FindSeriesByIdUseCase,
  FindSeriesUseCase,
  UpdateSeriesUseCase,
} from '@edu-platform/core';

export const seriesRouter = router({
  find: publicProcedure.query(async ({ ctx }) => {
    const useCase = new FindSeriesUseCase(ctx.seriesRepository);
    return useCase.execute();
  }),

  findById: publicProcedure.input(positiveIntSchema).query(async ({ input, ctx }) => {
    const useCase = new FindSeriesByIdUseCase(ctx.seriesRepository);
    return useCase.execute(input);
  }),

  create: adminProcedure
    .input(
      z.object({
        name: requiredTrimmedString('Nome', 120),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateSeriesUseCase(ctx.seriesRepository);
      return useCase.execute(input);
    }),

  update: adminProcedure
    .input(
      z.object({
        id: positiveIntSchema,
        name: optionalTrimmedString(120),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new UpdateSeriesUseCase(ctx.seriesRepository);
      return useCase.execute(input);
    }),

  delete: adminProcedure.input(positiveIntSchema).mutation(async ({ input, ctx }) => {
    const useCase = new DeleteSeriesUseCase(
      ctx.seriesRepository,
      ctx.topicRepository
    );
    return useCase.execute(input);
  }),
});
