// packages/core/src/use-cases/content/get-by-topic.use-case.ts
import type { ContentRepository } from '@edu-platform/infrastructure';
import type { GetContentsByTopicInput } from '../../dtos';
import type { Content } from '../../entities';

export class GetContentsByTopicUseCase {
  constructor(private readonly contentRepository: ContentRepository) {}

  async execute(input: GetContentsByTopicInput): Promise<Content[]> {
    return this.contentRepository.getByTopic(input.topicId);
  }
}