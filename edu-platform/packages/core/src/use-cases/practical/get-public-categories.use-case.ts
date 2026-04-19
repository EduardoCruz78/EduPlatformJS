import type { PracticalCategory } from '../../entities';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';

export class GetPublicPracticalCategoriesUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(): Promise<PracticalCategory[]> {
    return this.practicalRepository.findPublicCategories();
  }
}
