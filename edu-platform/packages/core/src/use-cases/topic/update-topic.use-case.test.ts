import test from 'node:test';
import assert from 'node:assert/strict';

import { UpdateTopicUseCase } from './update-topic.use-case.ts';
import type { CreateTopicInput, UpdateTopicInput } from '../../dtos/index.ts';
import type { Topic } from '../../entities/index.ts';
import type { ITopicRepository } from '../../repositories/ITopicRepository.ts';

function createTopicRepositoryMock(topic: Topic | null) {
  const calls: Array<{ id: number; data: Omit<UpdateTopicInput, 'id'> }> = [];

  const repository: ITopicRepository = {
    async find() {
      return [];
    },
    async findById() {
      return topic;
    },
    async findByName() {
      return null;
    },
    async findBySubject() {
      return [];
    },
    async countBySeriesId() {
      return 0;
    },
    async create(data: CreateTopicInput) {
      return {
        id: 1,
        name: data.name,
      };
    },
    async update(id: number, data: Omit<UpdateTopicInput, 'id'>) {
      calls.push({ id, data });
      return {
        id,
        name: data.name ?? 'Topico',
        topicSubjects: data.subjectIds?.map((subjectId) => ({
          topicId: id,
          subjectId,
        })),
      } satisfies Topic;
    },
    async delete() {},
  };

  return { repository, calls };
}

test('UpdateTopicUseCase preserves current subjectIds when input omits them and trims the name', async () => {
  const topic: Topic = {
    id: 10,
    name: 'Original',
    topicSubjects: [
      { topicId: 10, subjectId: 7 },
      { topicId: 10, subjectId: 9 },
    ],
  };
  const { repository, calls } = createTopicRepositoryMock(topic);
  const useCase = new UpdateTopicUseCase(repository);

  const result = await useCase.execute({
    id: 10,
    name: '  Atualizado  ',
  });

  assert.deepEqual(calls[0], {
    id: 10,
    data: {
      name: 'Atualizado',
      subjectIds: [7, 9],
    },
  });
  assert.equal(result.name, 'Atualizado');
});

test('UpdateTopicUseCase rejects blank names', async () => {
  const { repository } = createTopicRepositoryMock({
    id: 10,
    name: 'Original',
    topicSubjects: [],
  });
  const useCase = new UpdateTopicUseCase(repository);

  await assert.rejects(
    () =>
      useCase.execute({
        id: 10,
        name: '   ',
      }),
    /Nome n.+o pode estar vazio/
  );
});
