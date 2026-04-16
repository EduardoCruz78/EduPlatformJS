import type { DeleteResponseDto } from '../../dtos';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class DeleteAccessibilityThemeUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    if (!id) {
      throw new Error('Tema inválido');
    }

    await this.accessibilityRepository.deleteTheme(id);
    return { success: true };
  }
}
