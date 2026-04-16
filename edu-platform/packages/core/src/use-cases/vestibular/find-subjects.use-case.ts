import type { Subject } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class FindVestibularSubjectsUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(vestibularId: number): Promise<Subject[]> {
    if (!vestibularId) {
      throw new Error('Vestibular inválido');
    }

    return this.vestibularRepository.findSubjects(vestibularId);
  }
}
