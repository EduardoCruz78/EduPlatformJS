import test from 'node:test';
import assert from 'node:assert/strict';

import { CreateSubjectUseCase } from './create-subject.use-case.ts';
import { UpdateSubjectUseCase } from './update-subject.use-case.ts';
import { DeleteSubjectUseCase } from './delete-subject.use-case.ts';
import type {
  CreateSubjectInput,
  UpdateSubjectInput,
  CreateTopicInput,
} from '../../dtos/index.ts';
import type { Subject, Topic } from '../../entities/index.ts';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository.ts';
import type { ITopicRepository } from '../../repositories/ITopicRepository.ts';

function createSubjectRepositoryMock(options?: {
  existingByName?: Subject | null;
  existingById?: Subject | null;
}) {
  const calls: {
    findByName: string[];
    create: CreateSubjectInput[];
    update: Array<{ id: number; data: Omit<UpdateSubjectInput, 'id'> }>;
    delete: number[];
  } = {
    findByName: [],
    create: [],
    update: [],
    delete: [],
  };

  const repository: ISubjectRepository = {
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
    async findBySeries() {
      return [];
    },
    async create(data: CreateSubjectInput) {
      calls.create.push(data);
      return {
        id: 1,
        name: data.name,
        description: data.description ?? null,
        imageUrl: data.imageUrl ?? null,
        order: data.order ?? 0,
        seriesId: data.seriesId ?? null,
      } satisfies Subject;
    },
    async update(id: number, data: Omit<UpdateSubjectInput, 'id'>) {
      calls.update.push({ id, data });
      return {
        id,
        name: data.name ?? options?.existingById?.name ?? 'Materia',
        description: data.description ?? null,
        imageUrl: data.imageUrl ?? null,
        order: data.order ?? 0,
        seriesId: data.seriesId ?? null,
      } satisfies Subject;
    },
    async delete(id: number) {
      calls.delete.push(id);
    },
  };

  return { repository, calls };
}

function createTopicRepositoryMock(relatedTopics: Topic[]) {
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
      return relatedTopics;
    },
    async countBySeriesId() {
      return 0;
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

test('CreateSubjectUseCase trims and normalizes optional fields before creating', async () => {
  const { repository, calls } = createSubjectRepositoryMock();
  const useCase = new CreateSubjectUseCase(repository);

  const result = await useCase.execute({
    name: '  Matematica  ',
    description: '  Base numerica  ',
  });

  assert.equal(calls.findByName[0], 'Matematica');
  assert.deepEqual(calls.create[0], {
    name: 'Matematica',
    description: 'Base numerica',
    imageUrl: null,
    order: 0,
    seriesId: null,
  });
  assert.equal(result.name, 'Matematica');
});

test('CreateSubjectUseCase rejects duplicate subject names', async () => {
  const { repository } = createSubjectRepositoryMock({
    existingByName: { id: 2, name: 'Historia' },
  });
  const useCase = new CreateSubjectUseCase(repository);

  await assert.rejects(
    () => useCase.execute({ name: 'Historia' }),
    /j.+ existe/i
  );
});

test('UpdateSubjectUseCase preserves existing values and normalizes blank fields', async () => {
  const existingSubject: Subject = {
    id: 8,
    name: 'Fisica',
    description: 'Atual',
    imageUrl: 'cover.png',
    order: 3,
    seriesId: 1,
  };
  const { repository, calls } = createSubjectRepositoryMock({
    existingById: existingSubject,
  });
  const useCase = new UpdateSubjectUseCase(repository);

  await useCase.execute({
    id: 8,
    name: '   ',
    description: '   ',
    order: 5,
  });

  assert.deepEqual(calls.update[0], {
    id: 8,
    data: {
      name: 'Fisica',
      description: null,
      imageUrl: 'cover.png',
      order: 5,
      seriesId: 1,
    },
  });
});

test('DeleteSubjectUseCase rejects deleting a subject with related topics', async () => {
  const { repository, calls } = createSubjectRepositoryMock({
    existingById: { id: 11, name: 'Geografia' },
  });
  const topicRepository = createTopicRepositoryMock([
    { id: 10, name: 'Mapas' },
  ]);
  const useCase = new DeleteSubjectUseCase(repository, topicRepository);

  await assert.rejects(() => useCase.execute(11), /t.+picos associados/i);
  assert.deepEqual(calls.delete, []);
});
