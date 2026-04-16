import type { Topic } from '../../entities';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class FindTopicsBySubjectUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(subjectId: number): Promise<Topic[]> {
    return this.topicRepository.findBySubject(subjectId);
  }
}
