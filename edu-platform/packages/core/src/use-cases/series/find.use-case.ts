import type { Series } from '../../entities';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository';

export class FindSeriesUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

  async execute(): Promise<Series[]> {
    return this.seriesRepository.find();
  }
}
