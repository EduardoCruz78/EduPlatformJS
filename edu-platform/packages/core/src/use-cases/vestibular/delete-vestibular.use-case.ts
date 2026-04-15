// packages/core/src/use-cases/vestibular/delete-vestibular.use-case.ts

import type { DeleteResponseDto } from '../../dtos';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class DeleteVestibularUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    const vestibular = await this.vestibularRepository.findById(id);

    if (!vestibular) {
      throw new Error('Vestibular não encontrado');
    }

    await this.vestibularRepository.delete(id);

    return { success: true };
  }
}