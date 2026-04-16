import { router, protectedProcedure, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import {
    CreateChecklistUseCase,
    DeleteChecklistUseCase,
    GetChecklistByIdUseCase,
    GetChecklistByUserUseCase,
    GetChecklistsByContentIdUseCase,
} from "@edu-platform/core";

export const checklistRouter = router({
    getByUser: protectedProcedure.query(async ({ ctx }) => {
        const userId = ctx.user?.id;

        if (!userId) {
            throw new Error("Não autenticado");
        }

        const useCase = new GetChecklistByUserUseCase(ctx.checklistRepository);
        return useCase.execute(userId);
    }),

    getById: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const useCase = new GetChecklistByIdUseCase(ctx.checklistRepository);
            return useCase.execute(input);
        }),

    getByContentId: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const useCase = new GetChecklistsByContentIdUseCase(
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
                throw new Error("Não autenticado");
            }

            const useCase = new CreateChecklistUseCase(ctx.checklistRepository);

            return useCase.execute({
                userId,
                contentId: input.contentId,
            });
        }),

    delete: protectedProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const useCase = new DeleteChecklistUseCase(ctx.checklistRepository);
            return useCase.execute(input);
        }),
});
