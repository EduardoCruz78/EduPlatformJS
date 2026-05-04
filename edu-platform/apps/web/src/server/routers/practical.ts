import {
  CreatePracticalCategoryUseCase,
  CreatePracticalGuideLinkUseCase,
  CreatePracticalGuideUseCase,
  DeletePracticalCategoryUseCase,
  DeletePracticalGuideLinkUseCase,
  DeletePracticalGuideUseCase,
  FindPracticalCategoryBySlugUseCase,
  FindPracticalGuideBySlugUseCase,
  GetPracticalCategoriesUseCase,
  GetPublicPracticalCategoriesUseCase,
  UpdatePracticalCategoryUseCase,
  UpdatePracticalGuideLinkUseCase,
  UpdatePracticalGuideUseCase,
} from '@edu-platform/core';
import { z } from 'zod';

import { adminProcedure, publicProcedure, router } from '@/server/trpc';
import {
  nonNegativeIntSchema,
  optionalSlugString,
  optionalTrimmedString,
  optionalUrlString,
  positiveIntSchema,
  requiredTrimmedString,
  slugSchema,
} from '@/server/validation';

export const practicalRouter = router({
  findPublicCategories: publicProcedure.query(async ({ ctx }) => {
    const useCase = new GetPublicPracticalCategoriesUseCase(ctx.practicalRepository);
    return useCase.execute();
  }),

  findCategoryBySlug: publicProcedure
    .input(z.object({ slug: slugSchema }))
    .query(async ({ ctx, input }) => {
      const useCase = new FindPracticalCategoryBySlugUseCase(ctx.practicalRepository);
      return useCase.execute(input.slug);
    }),

  findGuideBySlug: publicProcedure
    .input(z.object({ slug: slugSchema }))
    .query(async ({ ctx, input }) => {
      const useCase = new FindPracticalGuideBySlugUseCase(ctx.practicalRepository);
      return useCase.execute(input.slug);
    }),

  findCategories: adminProcedure.query(async ({ ctx }) => {
    const useCase = new GetPracticalCategoriesUseCase(ctx.practicalRepository);
    return useCase.execute();
  }),

  createCategory: adminProcedure
    .input(
      z.object({
        name: requiredTrimmedString('Nome', 160),
        description: optionalTrimmedString(1000),
        slug: optionalSlugString(),
        icon: optionalTrimmedString(24),
        order: nonNegativeIntSchema.optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const useCase = new CreatePracticalCategoryUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),

  updateCategory: adminProcedure
    .input(
      z.object({
        id: positiveIntSchema,
        name: optionalTrimmedString(160),
        description: optionalTrimmedString(1000),
        slug: optionalSlugString(),
        icon: optionalTrimmedString(24),
        order: nonNegativeIntSchema.optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const useCase = new UpdatePracticalCategoryUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),

  deleteCategory: adminProcedure
    .input(positiveIntSchema)
    .mutation(async ({ ctx, input }) => {
      const useCase = new DeletePracticalCategoryUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),

  createGuide: adminProcedure
    .input(
      z.object({
        practicalCategoryId: positiveIntSchema,
        title: requiredTrimmedString('Título', 160),
        summary: requiredTrimmedString('Resumo', 320),
        content: requiredTrimmedString('Conteúdo', 12000),
        slug: optionalSlugString(),
        order: nonNegativeIntSchema.optional(),
        isPublished: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const useCase = new CreatePracticalGuideUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),

  updateGuide: adminProcedure
    .input(
      z.object({
        id: positiveIntSchema,
        practicalCategoryId: positiveIntSchema.optional(),
        title: optionalTrimmedString(160),
        summary: optionalTrimmedString(320),
        content: optionalTrimmedString(12000),
        slug: optionalSlugString(),
        order: nonNegativeIntSchema.optional(),
        isPublished: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const useCase = new UpdatePracticalGuideUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),

  deleteGuide: adminProcedure
    .input(positiveIntSchema)
    .mutation(async ({ ctx, input }) => {
      const useCase = new DeletePracticalGuideUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),

  createGuideLink: adminProcedure
    .input(
      z.object({
        practicalGuideId: positiveIntSchema,
        label: requiredTrimmedString('Rotulo', 160),
        url: optionalUrlString()
          .refine((value) => Boolean(value), 'URL e obrigatoria')
          .transform((value) => value!),
        order: nonNegativeIntSchema.optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const useCase = new CreatePracticalGuideLinkUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),

  updateGuideLink: adminProcedure
    .input(
      z.object({
        id: positiveIntSchema,
        practicalGuideId: positiveIntSchema.optional(),
        label: optionalTrimmedString(160),
        url: optionalUrlString(),
        order: nonNegativeIntSchema.optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const useCase = new UpdatePracticalGuideLinkUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),

  deleteGuideLink: adminProcedure
    .input(positiveIntSchema)
    .mutation(async ({ ctx, input }) => {
      const useCase = new DeletePracticalGuideLinkUseCase(ctx.practicalRepository);
      return useCase.execute(input);
    }),
});
