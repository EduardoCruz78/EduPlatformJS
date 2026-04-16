import { router, publicProcedure, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
  AddAccessibilityTopicToCategoryUseCase,
  CreateAccessibilityCategoryUseCase,
  CreateAccessibilityThemeUseCase,
  DeleteAccessibilityCategoryUseCase,
  DeleteAccessibilityThemeUseCase,
  FindAccessibilityThemesByCategoryUseCase,
  FindAccessibilityTopicsByCategoryUseCase,
  GetAccessibilityCategoriesUseCase,
  RemoveAccessibilityTopicFromCategoryUseCase,
} from '@edu-platform/core';

export const accessibilityRouter = router({
  getCategories: publicProcedure.query(async ({ ctx }) => {
    const useCase = new GetAccessibilityCategoriesUseCase(
      ctx.accessibilityRepository
    );
    return useCase.execute();
  }),

  findThemesByCategory: publicProcedure
    .input(z.object({ categoryId: z.number() }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindAccessibilityThemesByCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input.categoryId);
    }),

  findTopicsByCategory: publicProcedure
    .input(z.object({ categoryId: z.number() }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindAccessibilityTopicsByCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input.categoryId);
    }),

  createCategory: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1, 'Nome é obrigatório'),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateAccessibilityCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  deleteCategory: protectedProcedure
    .input(z.number())
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteAccessibilityCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  createTheme: protectedProcedure
    .input(
      z.object({
        accessibilityCategoryId: z.number(),
        accessibilityNeedId: z.number().nullable().optional(),
        title: z.string().min(1, 'Título é obrigatório'),
        content: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateAccessibilityThemeUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  deleteTheme: protectedProcedure
    .input(z.number())
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteAccessibilityThemeUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  addTopicToCategory: protectedProcedure
    .input(
      z.object({
        accessibilityCategoryId: z.number(),
        topicId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new AddAccessibilityTopicToCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  removeTopicFromCategory: protectedProcedure
    .input(
      z.object({
        accessibilityCategoryId: z.number(),
        topicId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new RemoveAccessibilityTopicFromCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),
});
