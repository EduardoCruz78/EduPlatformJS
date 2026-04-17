import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class DeleteChecklistUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(id: number, userId: string): Promise<DeleteResponseDto> {
    if (!Number.isInteger(id) || id <= 0) {
      throw AppError.validation('Checklist invalida.');
    }

    if (!userId.trim()) {
      throw AppError.unauthorized('Autenticacao obrigatoria.');
    }

    const checklist = await this.checklistRepository.findByIdAndUserId(id, userId);

    if (!checklist) {
      throw AppError.notFound('Checklist nao encontrada.');
    }

    await this.checklistRepository.delete(id);

    return { success: true };
  }
}

