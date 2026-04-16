import type { Content } from '../../entities';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class FindContentByIdUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(id: number): Promise<Content | null> {
    return this.contentRepository.findById(id);
  }
}
