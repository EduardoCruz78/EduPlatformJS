import test from 'node:test';
import assert from 'node:assert/strict';

import { CreateSeriesUseCase } from './create-series.use-case.ts';
import { UpdateSeriesUseCase } from './update-series.use-case.ts';
import { DeleteSeriesUseCase } from './delete-series.use-case.ts';
import { AppError } from '../../errors/app-error.ts';
import type {
  CreateSeriesInput,
  UpdateSeriesInput,
  CreateTopicInput,
} from '../../dtos/index.ts';
import type { Series, Topic } from '../../entities/index.ts';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository.ts';
import type { ITopicRepository } from '../../repositories/ITopicRepository.ts';

function createSeriesRepositoryMock(options?: {
  existingByName?: Series | null;
  existingById?: Series | null;
}) {
  const calls: {
    findByName: string[];
    update: Array<{ id: number; data: Omit<UpdateSeriesInput, 'id'> }>;
    create: CreateSeriesInput[];
    delete: number[];
  } = {
    findByName: [],
    update: [],
    create: [],
    delete: [],
  };

  const repository: ISeriesRepository = {
    async find() {
      return [];
    },
    async findById() {
      return options?.existingById ?? null;
    },
    async findByName(name: string) {
      calls.findByName.push(name);
      return options?.existingByName ?? null;
    },
    async create(data: CreateSeriesInput) {
      calls.create.push(data);
      return {
        id: 1,
        name: data.name,
      } satisfies Series;
    },
    async update(id: number, data: Omit<UpdateSeriesInput, 'id'>) {
      calls.update.push({ id, data });
      return {
        id,
        name: data.name ?? options?.existingById?.name ?? 'Serie',
      } satisfies Series;
    },
    async delete(id: number) {
      calls.delete.push(id);
    },
  };

  return { repository, calls };
}

function createTopicRepositoryMock(topicCount: number) {
  const repository: ITopicRepository = {
    async find() {
      return [];
    },
    async findById() {
      return null;
    },
    async findByName() {
      return null;
    },
    async findBySubject() {
      return [];
    },
    async countBySeriesId() {
      return topicCount;
    },
    async create(data: CreateTopicInput) {
      return {
        id: 1,
        name: data.name,
      } satisfies Topic;
    },
    async update() {
      return {
        id: 1,
        name: 'Topico',
      } satisfies Topic;
    },
    async delete() {},
  };

  return repository;
}

test('CreateSeriesUseCase trims the name before creating', async () => {
  const { repository, calls } = createSeriesRepositoryMock();
  const useCase = new CreateSeriesUseCase(repository);

  const result = await useCase.execute({ name: '  Ensino Medio  ' });

  assert.equal(calls.findByName[0], 'Ensino Medio');
  assert.deepEqual(calls.create[0], { name: 'Ensino Medio' });
  assert.equal(result.name, 'Ensino Medio');
});

test('CreateSeriesUseCase rejects duplicate names', async () => {
  const { repository } = createSeriesRepositoryMock({
    existingByName: { id: 7, name: 'Ensino Medio' },
  });
  const useCase = new CreateSeriesUseCase(repository);

  await assert.rejects(
    () => useCase.execute({ name: 'Ensino Medio' }),
    /J.+ existe/
  );
});

test('UpdateSeriesUseCase preserves the current name when a blank name is provided', async () => {
  const { repository, calls } = createSeriesRepositoryMock({
    existingById: { id: 9, name: 'Original' },
  });
  const useCase = new UpdateSeriesUseCase(repository);

  const result = await useCase.execute({
    id: 9,
    name: '   ',
  });

  assert.deepEqual(calls.update[0], {
    id: 9,
    data: { name: 'Original' },
  });
  assert.equal(result.name, 'Original');
});

test('DeleteSeriesUseCase rejects deleting a series that still has topics', async () => {
  const { repository, calls } = createSeriesRepositoryMock({
    existingById: { id: 4, name: 'Fundamental' },
  });
  const topicRepository = createTopicRepositoryMock(2);
  const useCase = new DeleteSeriesUseCase(repository, topicRepository);

  await assert.rejects(
    () => useCase.execute(4),
    (error: unknown) =>
      error instanceof AppError &&
      error.code === 'CONFLICT' &&
      /topicos/i.test(error.message)
  );
  assert.deepEqual(calls.delete, []);
});

test('DeleteSeriesUseCase deletes the series when there are no related topics', async () => {
  const { repository, calls } = createSeriesRepositoryMock({
    existingById: { id: 4, name: 'Fundamental' },
  });
  const topicRepository = createTopicRepositoryMock(0);
  const useCase = new DeleteSeriesUseCase(repository, topicRepository);

  const result = await useCase.execute(4);

  assert.deepEqual(calls.delete, [4]);
  assert.deepEqual(result, { success: true });
});
