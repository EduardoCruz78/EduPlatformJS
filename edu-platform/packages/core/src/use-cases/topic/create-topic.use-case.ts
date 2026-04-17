import type { CreateTopicInput } from '../../dtos';
import type { Topic } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class CreateTopicUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(input: CreateTopicInput): Promise<Topic> {
    const name = input.name.trim();

    if (!name) {
      throw AppError.validation('Nome do topico e obrigatorio.');
    }

    if (!input.subjectIds?.length) {
      throw AppError.validation('Selecione ao menos uma materia.');
    }

    const existingTopic = await this.topicRepository.findByName(name);

    if (existingTopic) {
      throw AppError.conflict('Topico com este nome ja existe.');
    }

    return this.topicRepository.create({
      name,
      subjectIds: [...new Set(input.subjectIds)],
    });
  }
}

