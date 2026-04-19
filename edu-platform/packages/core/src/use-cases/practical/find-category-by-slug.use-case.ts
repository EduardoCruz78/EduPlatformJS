import type { PracticalCategory } from '../../entities';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';

export class FindPracticalCategoryBySlugUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(slug: string): Promise<PracticalCategory | null> {
    return this.practicalRepository.findPublicCategoryBySlug(slug);
  }
}
