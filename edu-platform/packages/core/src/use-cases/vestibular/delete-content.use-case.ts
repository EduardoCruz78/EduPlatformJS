import type { DeleteResponseDto } from '../../dtos';
import type { DeleteVestibularContentInput } from '../../dtos/admin.dto';
import { AppError } from '../../errors/app-error.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class DeleteVestibularContentUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: DeleteVestibularContentInput): Promise<DeleteResponseDto> {
    if (!input.vestibularId || !input.contentId) {
      throw AppError.validation('Conteudo invalido.');
    }

    await this.vestibularRepository.deleteContent(input);
    return { success: true };
  }
}

