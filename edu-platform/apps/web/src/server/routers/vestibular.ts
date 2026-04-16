// apps/web/src/server/routers/vestibular.ts

import { router, publicProcedure, protectedProcedure } from '@/server/trpc';
import { z } from 'zod';
import {
    CreateVestibularUseCase,
    DeleteVestibularUseCase,
    GetAvailableVestibularsUseCase,
    GetVestibularByIdUseCase,
    UpdateVestibularUseCase,
} from '@edu-platform/core';

export const vestibularRouter = router({
    findAll: publicProcedure.query(async ({ ctx }) => {
        const useCase = new GetAvailableVestibularsUseCase(
            ctx.vestibularRepository
        );
        return useCase.execute();
    }),

    findById: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const useCase = new GetVestibularByIdUseCase(ctx.vestibularRepository);
            return useCase.execute(input);
        }),

    create: protectedProcedure
        .input(
            z.object({
                name: z.string().min(1, 'Nome é obrigatório'),
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

    delete: protectedProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const useCase = new DeleteVestibularUseCase(ctx.vestibularRepository);
            return useCase.execute(input);
        }),
});
