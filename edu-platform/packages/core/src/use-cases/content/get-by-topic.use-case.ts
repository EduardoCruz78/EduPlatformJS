// packages/core/src/use-cases/content/get-by-topic.use-case.ts
import type { ContentRepository } from '@edu-platform/infrastructure';
import type { GetContentsByTopicInput } from '../../dtos';

export class GetContentsByTopicUseCase {
  constructor(private readonly contentRepository: ContentRepository) {}

  async execute(input: GetContentsByTopicInput) {
    return this.contentRepository.findByTopic(input.topicId);
  }
}