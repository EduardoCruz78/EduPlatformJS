import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
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
      throw AppError.notFound('Materia nao encontrada.');
    }

    const topics = await this.topicRepository.findBySubject(id);

    if (topics.length > 0) {
      throw AppError.conflict(
        'Nao e possivel deletar uma materia que possui topicos associados.'
      );
    }

    await this.subjectRepository.delete(id);

    return { success: true };
  }
}

