import test from 'node:test';
import assert from 'node:assert/strict';

import { CreateChecklistUseCase } from './create-checklist.use-case.ts';
import { DeleteChecklistUseCase } from './delete-checklist.use-case.ts';
import { FindChecklistByIdUseCase } from './find-by-id.use-case.ts';
import { FindChecklistsByUserIdUseCase } from './find-by-user-id.use-case.ts';
import { FindChecklistsByContentIdUseCase } from './find-by-content-id.use-case.ts';
import type { CreateChecklistInput } from '../../dtos/index.ts';
import type { Checklist } from '../../entities/index.ts';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository.ts';

function createChecklistRepositoryMock(existingById: Checklist | null = null) {
  const calls: {
    create: CreateChecklistInput[];
    delete: number[];
    findByUserId: string[];
    findByContentId: number[];
  } = {
    create: [],
    delete: [],
    findByUserId: [],
    findByContentId: [],
  };

  const createdAt = new Date('2025-01-01T00:00:00Z');

  const repository: IChecklistRepository = {
    async findByUserId(userId: string) {
      calls.findByUserId.push(userId);
      return [];
    },
    async findById() {
      return existingById;
    },
    async findByContentId(contentId: number) {
      calls.findByContentId.push(contentId);
      return [];
    },
    async create(data: CreateChecklistInput) {
      calls.create.push(data);
      return {
        id: 1,
        userId: data.userId,
        contentId: data.contentId,
        createdAt,
      } satisfies Checklist;
    },
    async delete(id: number) {
      calls.delete.push(id);
    },
    async deleteByContentId() {},
  };

  return { repository, calls };
}

test('CreateChecklistUseCase forwards the final payload to the repository', async () => {
  const { repository, calls } = createChecklistRepositoryMock();
  const useCase = new CreateChecklistUseCase(repository);

  const result = await useCase.execute({
    userId: 'user-1',
    contentId: 8,
  });

  assert.deepEqual(calls.create[0], {
    userId: 'user-1',
    contentId: 8,
  });
  assert.equal(result.contentId, 8);
});

test('FindChecklistsByUserIdUseCase delegates to the repository with the authenticated user id', async () => {
  const { repository, calls } = createChecklistRepositoryMock();
  const useCase = new FindChecklistsByUserIdUseCase(repository);

  await useCase.execute('user-99');

  assert.deepEqual(calls.findByUserId, ['user-99']);
});

test('FindChecklistsByContentIdUseCase delegates to the repository with the content id', async () => {
  const { repository, calls } = createChecklistRepositoryMock();
  const useCase = new FindChecklistsByContentIdUseCase(repository);

  await useCase.execute(55);

  assert.deepEqual(calls.findByContentId, [55]);
});

test('FindChecklistByIdUseCase returns the checklist from the repository', async () => {
  const checklist: Checklist = {
    id: 10,
    userId: 'user-10',
    contentId: 2,
    createdAt: new Date('2025-01-01T00:00:00Z'),
  };
  const { repository } = createChecklistRepositoryMock(checklist);
  const useCase = new FindChecklistByIdUseCase(repository);

  const result = await useCase.execute(10);

  assert.equal(result?.id, 10);
});

test('DeleteChecklistUseCase rejects deleting a non-existent checklist', async () => {
  const { repository, calls } = createChecklistRepositoryMock();
  const useCase = new DeleteChecklistUseCase(repository);

  await assert.rejects(() => useCase.execute(3), /n.+o encontrada/i);
  assert.deepEqual(calls.delete, []);
});
