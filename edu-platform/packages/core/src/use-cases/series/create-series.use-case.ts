// packages/core/src/use-cases/series/create-series.use-case.ts

import type { CreateSeriesInput } from '../../dtos';
import type { Series } from '../../entities';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository';

export class CreateSeriesUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

  async execute(input: CreateSeriesInput): Promise<Series> {
    const name = input.name.trim();

    if (!name) {
      throw new Error('Nome obrigatório');
    }

    const exists = await this.seriesRepository.findByName(name);

    if (exists) {
      throw new Error('Já existe');
    }

    return this.seriesRepository.create({ name });
  }
}