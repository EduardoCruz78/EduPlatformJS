import type { DeleteResponseDto } from '../../dtos';
import type { DeleteVestibularContentInput } from '../../dtos/admin.dto';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class DeleteVestibularContentUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: DeleteVestibularContentInput): Promise<DeleteResponseDto> {
    if (!input.vestibularId || !input.contentId) {
      throw new Error('Conteúdo inválido');
    }

    await this.vestibularRepository.deleteContent(input);
    return { success: true };
  }
}
