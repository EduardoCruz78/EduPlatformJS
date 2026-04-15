// packages/core/src/use-cases/topic/update-topic.use-case.ts

import type { UpdateTopicInput } from '../../dtos';
import type { Topic } from '../../entities';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class UpdateTopicUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(input: UpdateTopicInput): Promise<Topic> {
    const topic = await this.topicRepository.findById(input.id);

    if (!topic) {
      throw new Error('Tópico não encontrado');
    }

    if (input.name !== undefined && !input.name.trim()) {
      throw new Error('Nome não pode estar vazio');
    }

    const currentSubjectIds =
        topic.topicSubjects?.map((t) => t.subjectId) ?? [];

    const description =
        input.description === undefined
            ? topic.description ?? null
            : input.description === null
                ? null
                : input.description.trim() || null;

    const imageUrl =
        input.imageUrl === undefined
            ? topic.imageUrl ?? null
            : input.imageUrl;

    const order =
        input.order === undefined ? topic.order ?? 0 : input.order;

    return this.topicRepository.update(input.id, {
      name:
          input.name === undefined
              ? topic.name
              : input.name.trim() || topic.name,
      subjectIds: input.subjectIds ?? currentSubjectIds,
      description,
      imageUrl,
      order,
      seriesId: input.seriesId ?? null,
    });
  }
}