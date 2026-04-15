// packages/core/src/use-cases/checklist/get-by-id.use-case.ts

import type { Checklist } from '../../entities';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class GetChecklistByIdUseCase {
    constructor(private readonly checklistRepository: IChecklistRepository) {}

    async execute(id: number): Promise<Checklist | null> {
        return this.checklistRepository.findById(id);
    }
}