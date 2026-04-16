import type { Checklist } from '../../entities';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class FindChecklistByIdUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(id: number): Promise<Checklist | null> {
    return this.checklistRepository.findById(id);
  }
}
