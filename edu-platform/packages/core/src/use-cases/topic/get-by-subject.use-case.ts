// packages/core/src/use-cases/topic/get-by-subject.use-case.ts
import type { TopicRepository } from '@edu-platform/infrastructure';
import type { Topic } from '../../entities';

export class GetTopicsBySubjectUseCase {
  constructor(private readonly topicRepository: TopicRepository) {}

  async execute(subjectId: number): Promise<Topic[]> {
    return this.topicRepository.findBySubject(subjectId);
  }
}