// packages/core/src/use-cases/checklist/delete-checklist.use-case.ts

import type { DeleteResponseDto } from '../../dtos';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class DeleteChecklistUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    const checklist = await this.checklistRepository.findById(id);

    if (!checklist) {
      throw new Error('Checklist não encontrada');
    }

    await this.checklistRepository.delete(id);

    return { success: true };
  }
}