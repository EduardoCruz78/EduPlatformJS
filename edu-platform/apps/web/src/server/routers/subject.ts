import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";

import {
    CreateSubjectUseCase,
    UpdateSubjectUseCase,
    DeleteSubjectUseCase,
} from "@edu-platform/core";

import {
    subjectRepository,
    topicRepository,
} from "@edu-platform/infrastructure";

export const subjectRouter = router({
    getAll: publicProcedure.query(async () => {
        return subjectRepository.findAll();
    }),

    getById: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            return subjectRepository.findById(input.id);
        }),

    getBySeries: publicProcedure
        .input(z.object({ seriesId: z.number() }))
        .query(async ({ input }) => {
            return subjectRepository.getBySeries(input.seriesId);
        }),

    create: publicProcedure
        .input(
            z.object({
                name: z.string().min(1, "Nome é obrigatório"),
                seriesId: z.number().optional(),
            })
        )
        .mutation(async ({ input }) => {
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
        .mutation(async ({ input }) => {
            const { id, ...data } = input;

            const useCase = new UpdateSubjectUseCase(subjectRepository);
            return useCase.execute({ id, ...data });
        }),

    delete: publicProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async ({ input }) => {
            const useCase = new DeleteSubjectUseCase(
                subjectRepository,
                topicRepository
            );

            return useCase.execute(input.id);
        }),
});