// packages/core/src/use-cases/subject/delete-subject.use-case.ts

import type { DeleteResponseDto } from '../../dtos';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class DeleteSubjectUseCase {
  constructor(
      private readonly subjectRepository: ISubjectRepository,
      private readonly topicRepository: ITopicRepository
  ) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    const subject = await this.subjectRepository.findById(id);

    if (!subject) {
      throw new Error('Matéria não encontrada');
    }

    const topics = await this.topicRepository.getBySubject(id);

    if (topics.length > 0) {
      throw new Error('Não é possível deletar uma matéria que possui tópicos associados');
    }

    await this.subjectRepository.delete(id);

    return { success: true };
  }
}