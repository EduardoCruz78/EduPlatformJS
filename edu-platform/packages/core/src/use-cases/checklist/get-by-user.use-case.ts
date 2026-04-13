import type { Checklist } from '../../entities';
import { IChecklistRepository } from '../../repositories';

export class GetChecklistByUserUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(userId: string): Promise<Checklist[]> {
    return this.checklistRepository.findByUserId(userId);
  }
}