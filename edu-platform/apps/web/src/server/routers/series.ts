import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import { CreateSeriesUseCase } from "@edu-platform/core";
import { UpdateSeriesUseCase } from "@edu-platform/core";
import { DeleteSeriesUseCase } from "@edu-platform/core";
import { GetAllSeriesUseCase } from "@edu-platform/core";
import { seriesRepository, topicRepository } from "@edu-platform/infrastructure";

export const seriesRouter = router({
  // ✅ QUERIES
  getAll: publicProcedure.query(async () => {
    const useCase = new GetAllSeriesUseCase(seriesRepository);
    return useCase.execute();
  }),

  getById: publicProcedure.input(z.number()).query(async ({ input }) => {
    return seriesRepository.findById(input);
  }),

  // ✅ MUTATIONS
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        description: z.string().min(1, "Descrição é obrigatória"),
        imageUrl: z.string().optional(),
        order: z.number().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const useCase = new CreateSeriesUseCase(seriesRepository);
      return useCase.execute(input);
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        order: z.number().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const useCase = new UpdateSeriesUseCase(seriesRepository);
      return useCase.execute({ id, ...data });
    }),

  delete: publicProcedure
    .input(z.number())
    .mutation(async ({ input }) => {
      const useCase = new DeleteSeriesUseCase(seriesRepository, topicRepository);
      return useCase.execute(input);
    }),
});