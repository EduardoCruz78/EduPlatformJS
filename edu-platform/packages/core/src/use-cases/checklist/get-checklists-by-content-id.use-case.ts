// packages/core/src/use-cases/checklist/get-checklists-by-content-id.use-case.ts

import type { Checklist } from '../../entities';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class GetChecklistsByContentIdUseCase {
    constructor(private readonly checklistRepository: IChecklistRepository) {}

    async execute(contentId: number): Promise<Checklist[]> {
        return this.checklistRepository.findByContentId(contentId);
    }
}