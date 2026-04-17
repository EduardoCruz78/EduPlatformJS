import type { CreateSeriesInput } from '../../dtos';
import type { Series } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository';

export class CreateSeriesUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

  async execute(input: CreateSeriesInput): Promise<Series> {
    const name = input.name.trim();

    if (!name) {
      throw AppError.validation('Nome obrigatorio.');
    }

    const exists = await this.seriesRepository.findByName(name);

    if (exists) {
      throw AppError.conflict('Ja existe uma serie com este nome.');
    }

    return this.seriesRepository.create({ name });
  }
}

