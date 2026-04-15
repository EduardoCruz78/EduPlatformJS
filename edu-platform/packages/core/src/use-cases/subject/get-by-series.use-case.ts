// packages/core/src/use-cases/subject/get-by-series.use-case.ts

import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class GetSubjectsBySeriesUseCase {
  constructor(private readonly subjectRepository: ISubjectRepository) {}

  async execute(seriesId: number): Promise<Subject[]> {
    return this.subjectRepository.getBySeries(seriesId);
  }
}