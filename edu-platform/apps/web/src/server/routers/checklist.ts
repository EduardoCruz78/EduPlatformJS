import { router, protectedProcedure, publicProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
  CreateChecklistUseCase,
  DeleteChecklistUseCase,
  FindChecklistByIdUseCase,
  FindChecklistsByContentIdUseCase,
  FindChecklistsByUserIdUseCase,
} from '@edu-platform/core';

export const checklistRouter = router({
  findByUserId: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user?.id;

    if (!userId) {
      throw new Error('Nao autenticado');
    }

    const useCase = new FindChecklistsByUserIdUseCase(ctx.checklistRepository);
    return useCase.execute(userId);
  }),

  findById: publicProcedure.input(z.number()).query(async ({ input, ctx }) => {
    const useCase = new FindChecklistByIdUseCase(ctx.checklistRepository);
    return useCase.execute(input);
  }),

  findByContentId: publicProcedure
    .input(z.number())
    .query(async ({ input, ctx }) => {
      const useCase = new FindChecklistsByContentIdUseCase(
        ctx.checklistRepository
      );
      return useCase.execute(input);
    }),

  create: protectedProcedure
    .input(
      z.object({
        contentId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.user?.id;

      if (!userId) {
        throw new Error('Nao autenticado');
      }

      const useCase = new CreateChecklistUseCase(ctx.checklistRepository);

      return useCase.execute({
        userId,
        contentId: input.contentId,
      });
    }),

  delete: protectedProcedure.input(z.number()).mutation(async ({ input, ctx }) => {
    const useCase = new DeleteChecklistUseCase(ctx.checklistRepository);
    return useCase.execute(input);
  }),
});
