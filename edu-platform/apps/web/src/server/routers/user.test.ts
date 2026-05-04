import { TRPCError } from '@trpc/server';
import { describe, expect, it } from 'vitest';

import type { Context } from '@/server/context';
import { appRouter } from './index';

type TestUser = {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
};

const adminUser = {
  id: '60efa40c-1d41-4621-8799-6d63f696a27f',
  name: 'Admin',
  email: 'admin@example.com',
  role: 'ADMIN' as const,
} satisfies TestUser;

const regularUser = {
  id: '719293ea-a30e-4d65-a5a1-c4a572a214a4',
  name: 'Aluno',
  email: 'aluno@example.com',
  role: 'USER' as const,
} satisfies TestUser;

function createUserContext(user: Context['user']) {
  const calls = {
    updateRoleWithAudit: [] as Array<{
      actorUserId: string;
      targetUserId: string;
      previousRole: 'USER' | 'ADMIN';
      newRole: 'USER' | 'ADMIN';
    }>,
  };

  const users = new Map<string, TestUser>([
    [adminUser.id, adminUser],
    [regularUser.id, regularUser],
  ]);

  const context = {
    session: user ? { user, expires: '2030-01-01T00:00:00.000Z' } : null,
    user,
    userRepository: {
      async find() {
        return [...users.values()];
      },
      async findRoleAuditLogs() {
        return [];
      },
      async findById(id: string) {
        return users.get(id) ?? null;
      },
      async findByEmail() {
        return null;
      },
      async findByProviderId() {
        return null;
      },
      async create() {
        return regularUser;
      },
      async findOrCreate() {
        return regularUser;
      },
      async countByRole(role: 'USER' | 'ADMIN') {
        return [...users.values()].filter((item) => item.role === role).length;
      },
      async updateRole() {
        return regularUser;
      },
      async updateRoleWithAudit(data: {
        actorUserId: string;
        targetUserId: string;
        previousRole: 'USER' | 'ADMIN';
        newRole: 'USER' | 'ADMIN';
      }) {
        calls.updateRoleWithAudit.push(data);
        return { ...regularUser, role: data.newRole };
      },
    },
  } as unknown as Context;

  return { context, calls };
}

describe('userRouter', () => {
  it('blocks non-admin users at the tRPC boundary', async () => {
    const { context } = createUserContext(regularUser);
    const caller = appRouter.createCaller(context);

    await expect(caller.user.find()).rejects.toBeInstanceOf(TRPCError);
  });

  it('passes the authenticated admin as audit actor when changing roles', async () => {
    const { context, calls } = createUserContext(adminUser);
    const caller = appRouter.createCaller(context);

    const result = await caller.user.updateRole({
      userId: regularUser.id,
      role: 'ADMIN',
    });

    expect(result).toMatchObject({ id: regularUser.id, role: 'ADMIN' });
    expect(calls.updateRoleWithAudit).toEqual([
      {
        actorUserId: adminUser.id,
        targetUserId: regularUser.id,
        previousRole: 'USER',
        newRole: 'ADMIN',
      },
    ]);
  });

  it('rejects malformed target user ids before invoking role changes', async () => {
    const { context, calls } = createUserContext(adminUser);
    const caller = appRouter.createCaller(context);

    await expect(
      caller.user.updateRole({ userId: 'not-a-uuid', role: 'ADMIN' })
    ).rejects.toThrow();
    expect(calls.updateRoleWithAudit).toEqual([]);
  });
});
