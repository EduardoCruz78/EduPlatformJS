import {
  CreateVestibularContentUseCase,
  CreateVestibularSubjectUseCase,
  CreateVestibularTopicUseCase,
  CreateVestibularUseCase,
  DeleteVestibularContentUseCase,
  DeleteVestibularSubjectUseCase,
  DeleteVestibularTopicUseCase,
  DeleteVestibularUseCase,
  FindVestibularByIdUseCase,
  FindVestibularContentsUseCase,
  FindVestibularSubjectsUseCase,
  FindVestibularTopicsUseCase,
  FindVestibularsUseCase,
  ShareVestibularContentUseCase,
  UpdateVestibularUseCase,
} from '@edu-platform/core';
import { z } from 'zod';
import { adminProcedure, publicProcedure, router } from '@/server/trpc';
import {
  optionalTrimmedString,
  optionalUrlString,
  positiveIntSchema,
  requiredTrimmedString,
} from '@/server/validation';

export const vestibularRouter = router({
  find: publicProcedure.query(async ({ ctx }) => {
    const useCase = new FindVestibularsUseCase(ctx.vestibularRepository);
    return useCase.execute();
  }),

  findById: publicProcedure.input(positiveIntSchema).query(async ({ input, ctx }) => {
    const useCase = new FindVestibularByIdUseCase(ctx.vestibularRepository);
    return useCase.execute(input);
  }),

  findSubjects: publicProcedure
    .input(z.object({ vestibularId: positiveIntSchema }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindVestibularSubjectsUseCase(ctx.vestibularRepository);
      return useCase.execute(input.vestibularId);
    }),

  findTopics: publicProcedure
    .input(z.object({ vestibularId: positiveIntSchema, subjectId: positiveIntSchema.optional() }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindVestibularTopicsUseCase(ctx.vestibularRepository);
      return useCase.execute(input.vestibularId, input.subjectId);
    }),

  findContents: publicProcedure
    .input(z.object({ vestibularId: positiveIntSchema, vestibularTopicId: positiveIntSchema.optional() }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindVestibularContentsUseCase(ctx.vestibularRepository);
      return useCase.execute(input.vestibularId, input.vestibularTopicId);
    }),

  create: adminProcedure
    .input(
      z.object({
        name: requiredTrimmedString('Nome', 160),
        description: optionalTrimmedString(2000),
        year: z
          .number()
          .int()
          .min(1990, 'Ano deve ser 1990 ou posterior')
          .max(2100, 'Ano deve ser 2100 ou anterior'),
        imageUrl: optionalUrlString(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateVestibularUseCase(ctx.vestibularRepository);
      return useCase.execute({
        name: input.name,
        description: input.description ?? '',
        year: input.year,
        imageUrl: input.imageUrl,
      });
    }),

  createSubject: adminProcedure
    .input(
      z.object({
        vestibularId: positiveIntSchema,
        name: requiredTrimmedString('Nome', 120),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateVestibularSubjectUseCase(
        ctx.vestibularRepository,
        ctx.subjectRepository
      );
      return useCase.execute(input);
    }),

  deleteSubject: adminProcedure
    .input(
      z.object({
        vestibularId: positiveIntSchema,
        subjectId: positiveIntSchema,
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteVestibularSubjectUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  createTopic: adminProcedure
    .input(
      z.object({
        vestibularId: positiveIntSchema,
        subjectId: positiveIntSchema,
        originalTopicId: positiveIntSchema.optional(),
        name: requiredTrimmedString('Nome', 160),
        notes: optionalTrimmedString(2000),
        tags: optionalTrimmedString(500),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateVestibularTopicUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  deleteTopic: adminProcedure
    .input(
      z.object({
        vestibularId: positiveIntSchema,
        topicId: positiveIntSchema,
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteVestibularTopicUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  createContent: adminProcedure
    .input(
      z.object({
        vestibularId: positiveIntSchema,
        vestibularTopicId: positiveIntSchema,
        title: requiredTrimmedString('Título', 160),
        type: z.enum(['VIDEO', 'PDF', 'ARTICLE']).optional().nullable(),
        link: optionalUrlString(),
        pdfUrl: optionalUrlString(),
        transcript: optionalTrimmedString(8000),
        captionsUrl: optionalUrlString(),
        librasUrl: optionalUrlString(),
        audioDescriptionUrl: optionalUrlString(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateVestibularContentUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  shareContent: adminProcedure
    .input(
      z.object({
        vestibularId: positiveIntSchema,
        vestibularTopicId: positiveIntSchema,
        contentId: positiveIntSchema,
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new ShareVestibularContentUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  deleteContent: adminProcedure
    .input(
      z.object({
        vestibularId: positiveIntSchema,
        contentId: positiveIntSchema,
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteVestibularContentUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  update: adminProcedure
    .input(
      z.object({
        id: positiveIntSchema,
        name: optionalTrimmedString(160),
        description: optionalTrimmedString(2000),
        year: z.number().int().min(1990).max(2100).optional(),
        imageUrl: optionalUrlString(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new UpdateVestibularUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  delete: adminProcedure.input(positiveIntSchema).mutation(async ({ input, ctx }) => {
    const useCase = new DeleteVestibularUseCase(ctx.vestibularRepository);
    return useCase.execute(input);
  }),
});
