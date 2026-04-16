import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class FindSubjectsBySeriesUseCase {
  constructor(private readonly subjectRepository: ISubjectRepository) {}

  async execute(seriesId: number): Promise<Subject[]> {
    return this.subjectRepository.findBySeries(seriesId);
  }
}
