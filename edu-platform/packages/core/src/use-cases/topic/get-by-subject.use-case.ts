// packages/core/src/use-cases/topic/get-by-subject.use-case.ts

import type { Topic } from '../../entities';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class GetTopicsBySubjectUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(subjectId: number): Promise<Topic[]> {
    return this.topicRepository.getBySubject(subjectId);
  }
}