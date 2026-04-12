import type { SeriesRepository } from '@edu-platform/infrastructure';

export interface CreateSeriesInput {
  name: string;
  description: string;
  imageUrl?: string | null;
  order?: number;
}

export class CreateSeriesUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute(input: CreateSeriesInput) {
    if (!input.name?.trim()) {
      throw new Error("Nome da série é obrigatório");
    }

    const existingSeries = await this.seriesRepository.findByName(input.name);
    if (existingSeries) {
      throw new Error("Série com este nome já existe");
    }

    return this.seriesRepository.create({
      name: input.name.trim(),
      description: input.description.trim(),
      imageUrl: input.imageUrl || null,
      order: input.order || 0,
    });
  }
}