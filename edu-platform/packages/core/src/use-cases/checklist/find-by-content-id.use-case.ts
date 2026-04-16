import type { Checklist } from '../../entities';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class FindChecklistsByContentIdUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(contentId: number): Promise<Checklist[]> {
    return this.checklistRepository.findByContentId(contentId);
  }
}
