import {
  AddAccessibilityTopicToCategoryUseCase,
  CreateAccessibilityCategoryUseCase,
  CreateAccessibilityThemeMaterialUseCase,
  CreateAccessibilityThemeUseCase,
  DeleteAccessibilityCategoryUseCase,
  DeleteAccessibilityThemeMaterialUseCase,
  DeleteAccessibilityThemeUseCase,
  FindAccessibilityThemesByCategoryUseCase,
  FindAccessibilityTopicsByCategoryUseCase,
  GetAccessibilityCategoriesUseCase,
  RemoveAccessibilityTopicFromCategoryUseCase,
} from '@edu-platform/core';
import { z } from 'zod';
import { adminProcedure, publicProcedure, router } from '@/server/trpc';
import {
  optionalTrimmedString,
  positiveIntSchema,
  requiredUrlString,
  requiredTrimmedString,
} from '@/server/validation';

export const accessibilityRouter = router({
  getCategories: publicProcedure.query(async ({ ctx }) => {
    const useCase = new GetAccessibilityCategoriesUseCase(
      ctx.accessibilityRepository
    );
    return useCase.execute();
  }),

  findThemesByCategory: publicProcedure
    .input(z.object({ categoryId: positiveIntSchema }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindAccessibilityThemesByCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input.categoryId);
    }),

  findTopicsByCategory: publicProcedure
    .input(z.object({ categoryId: positiveIntSchema }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindAccessibilityTopicsByCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input.categoryId);
    }),

  createCategory: adminProcedure
    .input(
      z.object({
        name: requiredTrimmedString('Nome', 160),
        description: optionalTrimmedString(1000),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateAccessibilityCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  deleteCategory: adminProcedure
    .input(positiveIntSchema)
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteAccessibilityCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  createTheme: adminProcedure
    .input(
      z.object({
        accessibilityCategoryId: positiveIntSchema,
        accessibilityNeedId: positiveIntSchema.nullable().optional(),
        title: requiredTrimmedString('Título', 160),
        content: optionalTrimmedString(4000),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateAccessibilityThemeUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  createThemeMaterial: adminProcedure
    .input(
      z.object({
        accessibilityThemeId: positiveIntSchema,
        title: requiredTrimmedString('Título', 160),
        summary: requiredTrimmedString('Resumo', 500),
        content: requiredTrimmedString('Conteúdo', 4000),
        type: z.enum(['VIDEO', 'PDF', 'ARTICLE']),
        link: requiredUrlString('Link'),
        order: z.number().int().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateAccessibilityThemeMaterialUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  deleteTheme: adminProcedure
    .input(positiveIntSchema)
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteAccessibilityThemeUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  deleteThemeMaterial: adminProcedure
    .input(positiveIntSchema)
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteAccessibilityThemeMaterialUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  addTopicToCategory: adminProcedure
    .input(
      z.object({
        accessibilityCategoryId: positiveIntSchema,
        topicId: positiveIntSchema,
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new AddAccessibilityTopicToCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),

  removeTopicFromCategory: adminProcedure
    .input(
      z.object({
        accessibilityCategoryId: positiveIntSchema,
        topicId: positiveIntSchema,
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new RemoveAccessibilityTopicFromCategoryUseCase(
        ctx.accessibilityRepository
      );
      return useCase.execute(input);
    }),
});
