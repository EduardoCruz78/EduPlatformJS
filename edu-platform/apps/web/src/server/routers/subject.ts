import { router, publicProcedure, protectedProcedure } from "@/server/trpc";
import { z } from "zod";
import {
    CreateSubjectUseCase,
    UpdateSubjectUseCase,
    DeleteSubjectUseCase,
    GetSubjectsBySeriesUseCase,
} from "@edu-platform/core";

export const subjectRouter = router({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.subjectRepository.findAll();
    }),

    getById: publicProcedure
        .input(z.number())
        .query(({ input, ctx }) => {
            return ctx.subjectRepository.findById(input);
        }),

    getBySeries: publicProcedure
        .input(z.object({ seriesId: z.number() }))
        .query(async ({ input, ctx }) => {
            const useCase = new GetSubjectsBySeriesUseCase(ctx.subjectRepository);
            return useCase.execute(input.seriesId);
        }),

    create: protectedProcedure
        .input(
            z.object({
                name: z.string().min(1, "Nome é obrigatório"),
                description: z.string().optional(),
                imageUrl: z.string().optional(),
                order: z.number().optional(),
                seriesId: z.number().optional(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new CreateSubjectUseCase(ctx.subjectRepository);
            return useCase.execute(input);
        }),

    update: protectedProcedure
        .input(
            z.object({
                id: z.number(),
                name: z.string().optional(),
                description: z.string().optional(),
                imageUrl: z.string().optional(),
                order: z.number().optional(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const useCase = new UpdateSubjectUseCase(ctx.subjectRepository);
            return useCase.execute(input);
        }),

    delete: protectedProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const useCase = new DeleteSubjectUseCase(
                ctx.subjectRepository,
                ctx.topicRepository
            );
            return useCase.execute(input);
        }),
});