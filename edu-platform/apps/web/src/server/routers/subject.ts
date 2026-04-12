// apps/web/src/server/routers/subject.ts
import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import {
  CreateSubjectUseCase,
  UpdateSubjectUseCase,
  DeleteSubjectUseCase,
} from "@edu-platform/core";
import { subjectRepository, topicRepository } from "@edu-platform/infrastructure";

export const subjectRouter = router({
  getAll: publicProcedure.query(async () => {
    return subjectRepository.findAll();
  }),

  getById: publicProcedure
    .input(z.number())
    .query(async ({ input }: { input: number }) => {
      return subjectRepository.findById(input);
    }),

  // ✅ CORRIGIDO: Espera objeto com seriesId
  getBySeries: publicProcedure
    .input(z.object({ seriesId: z.number() }))
    .query(async ({ input }: { input: { seriesId: number } }) => {
      return subjectRepository.getBySeries(input.seriesId);
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        seriesId: z.number().optional(),
      })
    )
    .mutation(async ({ input }: { input: any }) => {
      const useCase = new CreateSubjectUseCase(subjectRepository);
      return useCase.execute(input);
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        seriesId: z.number().optional(),
      })
    )
    .mutation(async ({ input }: { input: any }) => {
      const { id, ...data } = input;
      const useCase = new UpdateSubjectUseCase(subjectRepository);
      return useCase.execute({ id, ...data });
    }),

  delete: publicProcedure
    .input(z.number())
    .mutation(async ({ input }: { input: number }) => {
      const useCase = new DeleteSubjectUseCase(
        subjectRepository,
        topicRepository
      );
      return useCase.execute(input);
    }),
});