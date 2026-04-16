import type { FindContentsByTopicInput } from '../../dtos';
import type { Content } from '../../entities';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class FindContentsByTopicUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(input: FindContentsByTopicInput): Promise<Content[]> {
    return this.contentRepository.findByTopic(input.topicId);
  }
}
