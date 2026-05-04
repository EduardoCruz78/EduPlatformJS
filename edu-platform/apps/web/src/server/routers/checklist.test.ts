import { TRPCError } from '@trpc/server';
import { describe, expect, it } from 'vitest';

import type { Context } from '@/server/context';
import { appRouter } from './index';

const authenticatedUser = {
  id: '0b04d974-2a6a-44b5-8b29-a42ba058f52a',
  name: 'Aluno',
  email: 'aluno@example.com',
  role: 'USER' as const,
};

function createChecklistContext(user: Context['user'] = authenticatedUser) {
  const calls = {
    create: [] as Array<{ userId: string; contentId: number }>,
    delete: [] as number[],
  };

  const context = {
    session: user ? { user, expires: '2030-01-01T00:00:00.000Z' } : null,
    user,
    checklistRepository: {
      async findByUserId(userId: string) {
        return [{ id: 1, userId, contentId: 42, createdAt: new Date('2026-01-01') }];
      },
      async findById() {
        return null;
      },
      async findByIdAndUserId(id: number, userId: string) {
        return { id, userId, contentId: 42, createdAt: new Date('2026-01-01') };
      },
      async findByContentId() {
        return [];
      },
      async findByUserIdAndContentId() {
        return null;
      },
      async create(data: { userId: string; contentId: number }) {
        calls.create.push(data);
        return { id: 10, ...data, createdAt: new Date('2026-01-01') };
      },
      async delete(id: number) {
        calls.delete.push(id);
      },
      async deleteByContentId() {
        return undefined;
      },
    },
  } as unknown as Context;

  return { context, calls };
}

describe('checklistRouter', () => {
  it('blocks anonymous users before calling protected checklist procedures', async () => {
    const { context } = createChecklistContext(null);
    const caller = appRouter.createCaller(context);

    await expect(caller.checklist.findByUserId()).rejects.toBeInstanceOf(TRPCError);
  });

  it('creates checklist entries with the authenticated user id from context', async () => {
    const { context, calls } = createChecklistContext();
    const caller = appRouter.createCaller(context);

    const result = await caller.checklist.create({ contentId: 42 });

    expect(result).toMatchObject({ id: 10, userId: authenticatedUser.id, contentId: 42 });
    expect(calls.create).toEqual([{ userId: authenticatedUser.id, contentId: 42 }]);
  });

  it('validates mutation input and never reaches the repository for invalid ids', async () => {
    const { context, calls } = createChecklistContext();
    const caller = appRouter.createCaller(context);

    await expect(caller.checklist.create({ contentId: 0 })).rejects.toThrow();
    expect(calls.create).toEqual([]);
  });

  it('deletes only after validating ownership through the repository contract', async () => {
    const { context, calls } = createChecklistContext();
    const caller = appRouter.createCaller(context);

    const result = await caller.checklist.delete(10);

    expect(result).toEqual({ success: true });
    expect(calls.delete).toEqual([10]);
  });
});
