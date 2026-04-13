// packages/core/src/use-cases/series/get-all.use-case.ts
import type { Series } from '../../entities';
import {ISeriesRepository} from "../../repositories";

export class GetAllSeriesUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

  async execute(): Promise<Series[]> {
    return this.seriesRepository.getAll();
  }
}