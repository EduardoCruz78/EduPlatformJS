import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class DeleteVestibularUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    const vestibular = await this.vestibularRepository.findById(id);

    if (!vestibular) {
      throw AppError.notFound('Vestibular nao encontrado.');
    }

    await this.vestibularRepository.delete(id);

    return { success: true };
  }
}

