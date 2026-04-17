import assert from 'node:assert/strict';
import test from 'node:test';

import { AppError } from '../../errors/app-error.ts';
import type { CreateChecklistInput } from '../../dtos/index.ts';
import type { Checklist } from '../../entities/index.ts';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository.ts';
import { CreateChecklistUseCase } from './create-checklist.use-case.ts';
import { DeleteChecklistUseCase } from './delete-checklist.use-case.ts';
import { FindChecklistByIdUseCase } from './find-by-id.use-case.ts';
import { FindChecklistsByContentIdUseCase } from './find-by-content-id.use-case.ts';
import { FindChecklistsByUserIdUseCase } from './find-by-user-id.use-case.ts';

type ChecklistRepositoryMockOptions = {
  existingById?: Checklist | null;
  existingByIdAndUserId?: Checklist | null;
  existingByUserIdAndContentId?: Checklist | null;
};

function createChecklistRepositoryMock(
  options: ChecklistRepositoryMockOptions = {}
) {
  const calls: {
    create: CreateChecklistInput[];
    delete: number[];
    findById: number[];
    findByIdAndUserId: Array<{ id: number; userId: string }>;
    findByUserId: string[];
    findByContentId: number[];
    findByUserIdAndContentId: Array<{ userId: string; contentId: number }>;
  } = {
    create: [],
    delete: [],
    findById: [],
    findByIdAndUserId: [],
    findByUserId: [],
    findByContentId: [],
    findByUserIdAndContentId: [],
  };

  const createdAt = new Date('2025-01-01T00:00:00Z');

  const repository: IChecklistRepository = {
    async findByUserId(userId: string) {
      calls.findByUserId.push(userId);
      return [];
    },
    async findById(id: number) {
      calls.findById.push(id);
      return options.existingById ?? null;
    },
    async findByIdAndUserId(id: number, userId: string) {
      calls.findByIdAndUserId.push({ id, userId });
      return options.existingByIdAndUserId ?? null;
    },
    async findByContentId(contentId: number) {
      calls.findByContentId.push(contentId);
      return [];
    },
    async findByUserIdAndContentId(userId: string, contentId: number) {
      calls.findByUserIdAndContentId.push({ userId, contentId });
      return options.existingByUserIdAndContentId ?? null;
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

  assert.deepEqual(calls.findByUserIdAndContentId, [
    { userId: 'user-1', contentId: 8 },
  ]);
  assert.deepEqual(calls.create[0], {
    userId: 'user-1',
    contentId: 8,
  });
  assert.equal(result.contentId, 8);
});

test('CreateChecklistUseCase rejects duplicate checklist entries for the same user and content', async () => {
  const existingChecklist: Checklist = {
    id: 7,
    userId: 'user-1',
    contentId: 8,
    createdAt: new Date('2025-01-01T00:00:00Z'),
  };
  const { repository, calls } = createChecklistRepositoryMock({
    existingByUserIdAndContentId: existingChecklist,
  });
  const useCase = new CreateChecklistUseCase(repository);

  await assert.rejects(
    () => useCase.execute({ userId: 'user-1', contentId: 8 }),
    (error: unknown) =>
      error instanceof AppError &&
      error.code === 'CONFLICT' &&
      /checklist/i.test(error.message)
  );
  assert.deepEqual(calls.create, []);
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
  const { repository, calls } = createChecklistRepositoryMock({
    existingById: checklist,
  });
  const useCase = new FindChecklistByIdUseCase(repository);

  const result = await useCase.execute(10);

  assert.deepEqual(calls.findById, [10]);
  assert.equal(result?.id, 10);
});

test('DeleteChecklistUseCase rejects deleting a checklist that does not belong to the authenticated user', async () => {
  const { repository, calls } = createChecklistRepositoryMock();
  const useCase = new DeleteChecklistUseCase(repository);

  await assert.rejects(
    () => useCase.execute(3, 'user-1'),
    (error: unknown) =>
      error instanceof AppError &&
      error.code === 'NOT_FOUND' &&
      /checklist/i.test(error.message)
  );
  assert.deepEqual(calls.findByIdAndUserId, [{ id: 3, userId: 'user-1' }]);
  assert.deepEqual(calls.delete, []);
});

test('DeleteChecklistUseCase deletes the checklist only after validating ownership', async () => {
  const checklist: Checklist = {
    id: 3,
    userId: 'user-1',
    contentId: 11,
    createdAt: new Date('2025-01-01T00:00:00Z'),
  };
  const { repository, calls } = createChecklistRepositoryMock({
    existingByIdAndUserId: checklist,
  });
  const useCase = new DeleteChecklistUseCase(repository);

  const result = await useCase.execute(3, 'user-1');

  assert.deepEqual(calls.findByIdAndUserId, [{ id: 3, userId: 'user-1' }]);
  assert.deepEqual(calls.delete, [3]);
  assert.deepEqual(result, { success: true });
});
