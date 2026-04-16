import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class FindSubjectsUseCase {
  constructor(private readonly subjectRepository: ISubjectRepository) {}

  async execute(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }
}
