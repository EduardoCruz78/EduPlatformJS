import type { PracticalGuide } from '../../entities';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';

export class FindPracticalGuideBySlugUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(slug: string): Promise<PracticalGuide | null> {
    return this.practicalRepository.findPublicGuideBySlug(slug);
  }
}
