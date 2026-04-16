import type { DeleteResponseDto } from '../../dtos';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class DeleteAccessibilityCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    if (!id) {
      throw new Error('Categoria inválida');
    }

    await this.accessibilityRepository.deleteCategory(id);
    return { success: true };
  }
}
