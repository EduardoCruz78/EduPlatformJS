import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class DeleteAccessibilityThemeUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    if (!id) {
      throw AppError.validation('Tema invalido.');
    }

    await this.accessibilityRepository.deleteTheme(id);
    return { success: true };
  }
}

