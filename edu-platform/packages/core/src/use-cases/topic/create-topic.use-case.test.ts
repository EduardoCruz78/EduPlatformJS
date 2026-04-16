import test from 'node:test';
import assert from 'node:assert/strict';

import { CreateTopicUseCase } from './create-topic.use-case.ts';
import type { CreateTopicInput, UpdateTopicInput } from '../../dtos/index.ts';
import type { Topic } from '../../entities/index.ts';
import type { ITopicRepository } from '../../repositories/ITopicRepository.ts';

function createTopicRepositoryMock() {
  const calls: {
    findByName: string[];
    create: CreateTopicInput[];
    update: Array<{ id: number; data: Omit<UpdateTopicInput, 'id'> }>;
  } = {
    findByName: [],
    create: [],
    update: [],
  };

  const repository: ITopicRepository = {
    async find() {
      return [];
    },
    async findById() {
      return null;
    },
    async findByName(name: string) {
      calls.findByName.push(name);
      return null;
    },
    async findBySubject() {
      return [];
    },
    async countBySeriesId() {
      return 0;
    },
    async create(data: CreateTopicInput) {
      calls.create.push(data);
      return {
        id: 1,
        name: data.name,
        topicSubjects: data.subjectIds.map((subjectId) => ({
          topicId: 1,
          subjectId,
        })),
      } satisfies Topic;
    },
    async update(id: number, data: Omit<UpdateTopicInput, 'id'>) {
      calls.update.push({ id, data });
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

test('CreateTopicUseCase trims the name and deduplicates subjectIds before create', async () => {
  const { repository, calls } = createTopicRepositoryMock();
  const useCase = new CreateTopicUseCase(repository);

  const result = await useCase.execute({
    name: '  Algebra  ',
    subjectIds: [3, 3, 1, 1],
  });

  assert.equal(calls.findByName[0], 'Algebra');
  assert.deepEqual(calls.create[0], {
    name: 'Algebra',
    subjectIds: [3, 1],
  });
  assert.equal(result.name, 'Algebra');
  assert.deepEqual(
    result.topicSubjects?.map((item) => item.subjectId),
    [3, 1]
  );
});
