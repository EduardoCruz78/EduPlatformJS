import type { UpdateTopicInput } from '../../dtos';
import type { Topic } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class UpdateTopicUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(input: UpdateTopicInput): Promise<Topic> {
    const topic = await this.topicRepository.findById(input.id);

    if (!topic) {
      throw AppError.notFound('Topico nao encontrado.');
    }

    if (input.name !== undefined && !input.name.trim()) {
      throw AppError.validation('Nome nao pode estar vazio.');
    }

    const currentSubjectIds = topic.topicSubjects?.map((t) => t.subjectId) ?? [];

    return this.topicRepository.update(input.id, {
      name: input.name === undefined ? topic.name : input.name.trim() || topic.name,
      subjectIds: input.subjectIds ?? currentSubjectIds,
    });
  }
}

