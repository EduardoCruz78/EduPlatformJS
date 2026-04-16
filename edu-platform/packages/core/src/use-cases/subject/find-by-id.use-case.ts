import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class FindSubjectByIdUseCase {
  constructor(private readonly subjectRepository: ISubjectRepository) {}

  async execute(id: number): Promise<Subject | null> {
    return this.subjectRepository.findById(id);
  }
}
