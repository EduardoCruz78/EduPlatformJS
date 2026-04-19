import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';

export class DeletePracticalGuideLinkUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(id: number): Promise<{ success: true }> {
    const existingLink = await this.practicalRepository.findGuideLinkById(id);

    if (!existingLink) {
      throw AppError.notFound('Link util nao encontrado.');
    }

    await this.practicalRepository.deleteGuideLink(id);

    return { success: true };
  }
}
