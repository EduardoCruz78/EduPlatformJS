import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class DeleteAccessibilityThemeMaterialUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    if (!id) {
      throw AppError.validation('Material invalido.');
    }

    await this.accessibilityRepository.deleteThemeMaterial(id);
    return { success: true };
  }
}
