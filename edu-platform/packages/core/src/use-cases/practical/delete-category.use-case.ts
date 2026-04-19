import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';

export class DeletePracticalCategoryUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(id: number): Promise<{ success: true }> {
    const existingCategory = await this.practicalRepository.findCategoryById(id);

    if (!existingCategory) {
      throw AppError.notFound('Categoria de vida pratica nao encontrada.');
    }

    await this.practicalRepository.deleteCategory(id);

    return { success: true };
  }
}
