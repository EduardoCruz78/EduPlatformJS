// packages/core/src/use-cases/subject/get-by-series.use-case.ts
import type { SubjectRepository } from '@edu-platform/infrastructure';
import type { Subject } from '../../entities';

export class GetSubjectsBySeriesUseCase {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  async execute(seriesId: number): Promise<Subject[]> {
    return this.subjectRepository.findBySeries(seriesId);
  }
}