import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
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
      throw AppError.notFound('Conteudo nao encontrado.');
    }

    await this.checklistRepository.deleteByContentId(id);
    await this.contentRepository.delete(id);

    return { success: true };
  }
}

