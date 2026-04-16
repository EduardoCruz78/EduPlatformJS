// apps/web/src/server/routers/vestibular.ts

import { router, publicProcedure, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
  CreateVestibularContentUseCase,
  CreateVestibularUseCase,
  CreateVestibularSubjectUseCase,
  CreateVestibularTopicUseCase,
  DeleteVestibularContentUseCase,
  DeleteVestibularUseCase,
  DeleteVestibularSubjectUseCase,
  DeleteVestibularTopicUseCase,
  FindVestibularByIdUseCase,
  FindVestibularContentsUseCase,
  FindVestibularSubjectsUseCase,
  FindVestibularTopicsUseCase,
  FindVestibularsUseCase,
  ShareVestibularContentUseCase,
  UpdateVestibularUseCase,
} from '@edu-platform/core';

export const vestibularRouter = router({
  find: publicProcedure.query(async ({ ctx }) => {
    const useCase = new FindVestibularsUseCase(ctx.vestibularRepository);
    return useCase.execute();
  }),

  findById: publicProcedure.input(z.number()).query(async ({ input, ctx }) => {
    const useCase = new FindVestibularByIdUseCase(ctx.vestibularRepository);
    return useCase.execute(input);
  }),

  findSubjects: publicProcedure
    .input(z.object({ vestibularId: z.number() }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindVestibularSubjectsUseCase(ctx.vestibularRepository);
      return useCase.execute(input.vestibularId);
    }),

  findTopics: publicProcedure
    .input(z.object({ vestibularId: z.number() }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindVestibularTopicsUseCase(ctx.vestibularRepository);
      return useCase.execute(input.vestibularId);
    }),

  findContents: publicProcedure
    .input(z.object({ vestibularId: z.number() }))
    .query(async ({ input, ctx }) => {
      const useCase = new FindVestibularContentsUseCase(ctx.vestibularRepository);
      return useCase.execute(input.vestibularId);
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1, 'Nome e obrigatorio'),
        description: z.string().optional(),
        year: z
          .number()
          .min(1990, 'Ano deve ser 1990 ou posterior')
          .max(2100, 'Ano deve ser 2100 ou anterior'),
        imageUrl: z.string().optional(),
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

  createSubject: protectedProcedure
    .input(
      z.object({
        vestibularId: z.number(),
        name: z.string().min(1, 'Nome é obrigatório'),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateVestibularSubjectUseCase(
        ctx.vestibularRepository,
        ctx.subjectRepository
      );
      return useCase.execute(input);
    }),

  deleteSubject: protectedProcedure
    .input(
      z.object({
        vestibularId: z.number(),
        subjectId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteVestibularSubjectUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  createTopic: protectedProcedure
    .input(
      z.object({
        vestibularId: z.number(),
        name: z.string().min(1, 'Nome é obrigatório'),
        notes: z.string().optional(),
        tags: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateVestibularTopicUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  deleteTopic: protectedProcedure
    .input(
      z.object({
        vestibularId: z.number(),
        topicId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteVestibularTopicUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  createContent: protectedProcedure
    .input(
      z.object({
        vestibularId: z.number(),
        title: z.string().min(1, 'Título é obrigatório'),
        type: z.enum(['VIDEO', 'PDF', 'ARTICLE']).optional().nullable(),
        link: z.string().optional(),
        pdfUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new CreateVestibularContentUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  shareContent: protectedProcedure
    .input(
      z.object({
        vestibularId: z.number(),
        contentId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new ShareVestibularContentUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  deleteContent: protectedProcedure
    .input(
      z.object({
        vestibularId: z.number(),
        contentId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new DeleteVestibularContentUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        year: z.number().optional(),
        imageUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const useCase = new UpdateVestibularUseCase(ctx.vestibularRepository);
      return useCase.execute(input);
    }),

  delete: protectedProcedure.input(z.number()).mutation(async ({ input, ctx }) => {
    const useCase = new DeleteVestibularUseCase(ctx.vestibularRepository);
    return useCase.execute(input);
  }),
});
