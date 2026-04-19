import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';

export class DeletePracticalGuideUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(id: number): Promise<{ success: true }> {
    const existingGuide = await this.practicalRepository.findGuideById(id);

    if (!existingGuide) {
      throw AppError.notFound('Guia de vida pratica nao encontrado.');
    }

    await this.practicalRepository.deleteGuide(id);

    return { success: true };
  }
}
