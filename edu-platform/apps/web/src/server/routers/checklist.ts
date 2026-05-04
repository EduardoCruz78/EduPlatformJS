import { AppError } from '@edu-platform/core';
import { router, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
  CreateChecklistUseCase,
  DeleteChecklistUseCase,
  FindChecklistsByUserIdUseCase,
} from '@edu-platform/core';
import { positiveIntSchema } from '@/server/validation';

export const checklistRouter = router({
  findByUserId: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id;

    if (!userId) {
      throw AppError.unauthorized('Autenticação obrigatoria.');
    }

    const useCase = new FindChecklistsByUserIdUseCase(ctx.checklistRepository);
    return useCase.execute(userId);
  }),

  create: protectedProcedure
    .input(
      z.object({
        contentId: positiveIntSchema,
      })
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.user?.id;

      if (!userId) {
        throw AppError.unauthorized('Autenticação obrigatoria.');
      }

      const useCase = new CreateChecklistUseCase(ctx.checklistRepository);

      return useCase.execute({
        userId,
        contentId: input.contentId,
      });
    }),

  delete: protectedProcedure.input(positiveIntSchema).mutation(async ({ input, ctx }) => {
    const userId = ctx.user?.id;

    if (!userId) {
      throw AppError.unauthorized('Autenticação obrigatoria.');
    }

    const useCase = new DeleteChecklistUseCase(ctx.checklistRepository);
    return useCase.execute(input, userId);
  }),
});
