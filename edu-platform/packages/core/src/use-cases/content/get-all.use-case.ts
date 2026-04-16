import type { Content } from '../../entities';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class GetAllContentsUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(): Promise<Content[]> {
    return this.contentRepository.findAll();
  }
}
