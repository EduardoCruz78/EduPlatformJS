// packages/core/src/use-cases/content/delete-content.use-case.ts

import type { DeleteResponseDto } from '../../dtos';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class DeleteContentUseCase {
  constructor(
      private readonly contentRepository: IContentRepository,
      private readonly checklistRepository: IChecklistRepository
  ) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    const content = await this.contentRepository.findById(id);

    if (!content) {
      throw new Error('Conteúdo não encontrado');
    }

    await this.checklistRepository.deleteByContentId(id);
    await this.contentRepository.delete(id);

    return { success: true };
  }
}