// packages/core/src/use-cases/content/get-contents-by-topic.use-case.ts

import type { GetContentsByTopicInput } from '../../dtos';
import type { Content } from '../../entities';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class GetContentsByTopicUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(input: GetContentsByTopicInput): Promise<Content[]> {
    return this.contentRepository.findByTopic(input.topicId);
  }
}
