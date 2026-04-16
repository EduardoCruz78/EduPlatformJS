import type { Checklist } from '../../entities';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class FindChecklistsByUserIdUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(userId: string): Promise<Checklist[]> {
    return this.checklistRepository.findByUserId(userId);
  }
}
