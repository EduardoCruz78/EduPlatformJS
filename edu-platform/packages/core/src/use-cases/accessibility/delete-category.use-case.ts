import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class DeleteAccessibilityCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    if (!id) {
      throw AppError.validation('Categoria invalida.');
    }

    await this.accessibilityRepository.deleteCategory(id);
    return { success: true };
  }
}

