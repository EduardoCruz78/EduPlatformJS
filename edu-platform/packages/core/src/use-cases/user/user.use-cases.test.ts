import assert from 'node:assert/strict';
import test from 'node:test';

import { AppError } from '../../errors/app-error.ts';
import type { CreateUserInput } from '../../dtos/index.ts';
import type { FindUserRoleAuditLogsInput } from '../../dtos/index.ts';
import type { User, UserRoleAuditLog } from '../../entities/index.ts';
import type { IUserRepository } from '../../repositories/IUserRepository.ts';
import { FindUserRoleAuditLogsUseCase } from './find-user-role-audit-logs.use-case.ts';
import { FindUsersUseCase } from './find-users.use-case.ts';
import { UpdateUserRoleUseCase } from './update-user-role.use-case.ts';

type UserRepositoryMockOptions = {
  users?: User[];
  usersById?: Record<string, User | null>;
  roleAuditLogs?: UserRoleAuditLog[];
  adminCount?: number;
};

function createUserRepositoryMock(options: UserRepositoryMockOptions = {}) {
  const users = options.users ?? [];
  const usersById = options.usersById ?? {};
  const roleAuditLogs = options.roleAuditLogs ?? [];

  const calls: {
    find: number;
    findRoleAuditLogs: FindUserRoleAuditLogsInput[];
    findById: string[];
    countByRole: User['role'][];
    updateRole: Array<{ id: string; role: User['role'] }>;
    updateRoleWithAudit: Array<{
      actorUserId: string;
      targetUserId: string;
      previousRole: User['role'];
      newRole: User['role'];
    }>;
  } = {
    find: 0,
    findRoleAuditLogs: [],
    findById: [],
    countByRole: [],
    updateRole: [],
    updateRoleWithAudit: [],
  };

  const repository: IUserRepository = {
    async find() {
      calls.find += 1;
      return users;
    },
    async findRoleAuditLogs(input = {}) {
      calls.findRoleAuditLogs.push(input);
      return roleAuditLogs;
    },
    async findById(id: string) {
      calls.findById.push(id);
      return usersById[id] ?? null;
    },
    async findByEmail() {
      return null;
    },
    async findByProviderId() {
      return null;
    },
    async create(data: CreateUserInput) {
      return {
        id: 'created-user-id',
        providerId: data.providerId,
        name: data.name,
        email: data.email,
        role: data.role ?? 'USER',
      };
    },
    async findOrCreate(data: CreateUserInput) {
      return {
        id: 'created-user-id',
        providerId: data.providerId,
        name: data.name,
        email: data.email,
        role: data.role ?? 'USER',
      };
    },
    async countByRole(role: User['role']) {
      calls.countByRole.push(role);
      return options.adminCount ?? 0;
    },
    async updateRole(id: string, role: User['role']) {
      calls.updateRole.push({ id, role });
      const current = usersById[id];

      if (!current) {
        throw new Error('Unexpected missing user');
      }

      return {
        ...current,
        role,
      };
    },
    async updateRoleWithAudit(data) {
      calls.updateRoleWithAudit.push(data);
      const current = usersById[data.targetUserId];

      if (!current) {
        throw new Error('Unexpected missing user');
      }

      return {
        ...current,
        role: data.newRole,
      };
    },
  };

  return { repository, calls };
}

test('FindUsersUseCase returns users from the repository', async () => {
  const admin: User = {
    id: '4f4ab874-6f22-44fe-8c4a-89a120c45e1a',
    providerId: 'provider-admin',
    name: 'Admin',
    email: 'admin@example.com',
    role: 'ADMIN',
  };
  const { repository, calls } = createUserRepositoryMock({ users: [admin] });
  const useCase = new FindUsersUseCase(repository);

  const result = await useCase.execute();

  assert.equal(calls.find, 1);
  assert.deepEqual(result, [admin]);
});

test('FindUserRoleAuditLogsUseCase delegates filters to the repository', async () => {
  const auditLog: UserRoleAuditLog = {
    id: 1,
    actorUserId: '4f4ab874-6f22-44fe-8c4a-89a120c45e1a',
    targetUserId: '0e5ce3ff-e068-4941-a3af-e2873fb0b88e',
    previousRole: 'USER',
    newRole: 'ADMIN',
    createdAt: new Date('2026-04-17T10:00:00Z'),
  };
  const { repository, calls } = createUserRepositoryMock({
    roleAuditLogs: [auditLog],
  });
  const useCase = new FindUserRoleAuditLogsUseCase(repository);

  const result = await useCase.execute({
    limit: 5,
    actorUserId: auditLog.actorUserId,
    targetUserId: auditLog.targetUserId,
  });

  assert.deepEqual(calls.findRoleAuditLogs, [
    {
      limit: 5,
      actorUserId: auditLog.actorUserId,
      targetUserId: auditLog.targetUserId,
    },
  ]);
  assert.deepEqual(result, [auditLog]);
});

test('UpdateUserRoleUseCase blocks self-demotion from admin to user', async () => {
  const admin: User = {
    id: '4f4ab874-6f22-44fe-8c4a-89a120c45e1a',
    providerId: 'provider-admin',
    name: 'Admin',
    email: 'admin@example.com',
    role: 'ADMIN',
  };
  const { repository, calls } = createUserRepositoryMock({
    usersById: {
      [admin.id]: admin,
    },
    adminCount: 2,
  });
  const useCase = new UpdateUserRoleUseCase(repository);

  await assert.rejects(
    () =>
      useCase.execute({
        actorUserId: admin.id,
        targetUserId: admin.id,
        role: 'USER',
      }),
    (error: unknown) =>
      error instanceof AppError &&
      error.code === 'FORBIDDEN' &&
      /proprio acesso/i.test(error.message)
  );

  assert.deepEqual(calls.updateRole, []);
});

test('UpdateUserRoleUseCase blocks removing the last admin', async () => {
  const actor: User = {
    id: '4f4ab874-6f22-44fe-8c4a-89a120c45e1a',
    providerId: 'provider-admin',
    name: 'Admin',
    email: 'admin@example.com',
    role: 'ADMIN',
  };
  const target: User = {
    id: '0e5ce3ff-e068-4941-a3af-e2873fb0b88e',
    providerId: 'provider-target',
    name: 'Target Admin',
    email: 'target@example.com',
    role: 'ADMIN',
  };
  const { repository, calls } = createUserRepositoryMock({
    usersById: {
      [actor.id]: actor,
      [target.id]: target,
    },
    adminCount: 1,
  });
  const useCase = new UpdateUserRoleUseCase(repository);

  await assert.rejects(
    () =>
      useCase.execute({
        actorUserId: actor.id,
        targetUserId: target.id,
        role: 'USER',
      }),
    (error: unknown) =>
      error instanceof AppError &&
      error.code === 'FORBIDDEN' &&
      /ultimo administrador/i.test(error.message)
  );

  assert.deepEqual(calls.countByRole, ['ADMIN']);
  assert.deepEqual(calls.updateRole, []);
});

test('UpdateUserRoleUseCase updates the target role for a different user', async () => {
  const actor: User = {
    id: '4f4ab874-6f22-44fe-8c4a-89a120c45e1a',
    providerId: 'provider-admin',
    name: 'Admin',
    email: 'admin@example.com',
    role: 'ADMIN',
  };
  const target: User = {
    id: '0e5ce3ff-e068-4941-a3af-e2873fb0b88e',
    providerId: 'provider-target',
    name: 'Target User',
    email: 'target@example.com',
    role: 'USER',
  };
  const { repository, calls } = createUserRepositoryMock({
    usersById: {
      [actor.id]: actor,
      [target.id]: target,
    },
    adminCount: 1,
  });
  const useCase = new UpdateUserRoleUseCase(repository);

  const result = await useCase.execute({
    actorUserId: actor.id,
    targetUserId: target.id,
    role: 'ADMIN',
  });

  assert.deepEqual(calls.updateRoleWithAudit, [
    {
      actorUserId: actor.id,
      targetUserId: target.id,
      previousRole: 'USER',
      newRole: 'ADMIN',
    },
  ]);
  assert.deepEqual(calls.updateRole, []);
  assert.equal(result.role, 'ADMIN');
});
