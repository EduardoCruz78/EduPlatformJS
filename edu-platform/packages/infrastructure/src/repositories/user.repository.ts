// packages/infrastructure/src/repositories/user.repository.ts

import { prisma } from '../prisma/client';
import { UserMapper } from '../mappers/user.mapper';
import { UserRoleAuditMapper } from '../mappers/user-role-audit.mapper';
import type { Prisma, UserRoleAuditLog as PrismaUserRoleAuditLogModel } from '@prisma/client';
import type {
  CreateUserInput,
  FindUserRoleAuditLogsInput,
  IUserRepository,
  UpdateUserRoleWithAuditInput,
  User,
  UserRoleAuditLog,
} from '@edu-platform/core';

type PrismaUserRoleAuditLogRecord = Prisma.UserRoleAuditLogGetPayload<{
  include: { actor: true; target: true };
}>;

type UserRoleAuditDelegate = {
  findMany(args: Prisma.UserRoleAuditLogFindManyArgs): Promise<PrismaUserRoleAuditLogRecord[]>;
  create(args: Prisma.UserRoleAuditLogCreateArgs): Promise<PrismaUserRoleAuditLogModel>;
};

type UserRoleAuditTransactionClient = {
  user: typeof prisma.user;
  userRoleAuditLog: UserRoleAuditDelegate;
};

function getUserRoleAuditDelegate(): UserRoleAuditDelegate {
  return (prisma as unknown as { userRoleAuditLog: UserRoleAuditDelegate }).userRoleAuditLog;
}

function getUserRoleAuditTransactionClient(transaction: unknown): UserRoleAuditTransactionClient {
  return transaction as UserRoleAuditTransactionClient;
}

export class UserRepository implements IUserRepository {
  async find(): Promise<User[]> {
    const data = await prisma.user.findMany({
      orderBy: [{ role: 'desc' }, { createdAt: 'asc' }],
    });

    return UserMapper.toDomainList(data);
  }

  async findRoleAuditLogs(
    input: FindUserRoleAuditLogsInput = {}
  ): Promise<UserRoleAuditLog[]> {
    const data = await getUserRoleAuditDelegate().findMany({
      take: input.limit ?? 10,
      orderBy: { createdAt: 'desc' },
      where: {
        actorUserId: input.actorUserId,
        targetUserId: input.targetUserId,
      },
      include: {
        actor: true,
        target: true,
      },
    });

    return UserRoleAuditMapper.toDomainList(data);
  }

  async findById(id: string): Promise<User | null> {
    const data = await prisma.user.findUnique({
      where: { id },
    });

    if (!data) {
      return null;
    }

    return UserMapper.toDomain(data);
  }

  async findByEmail(email: string): Promise<User | null> {
    const data = await prisma.user.findUnique({
      where: { email },
    });

    if (!data) {
      return null;
    }

    return UserMapper.toDomain(data);
  }

  async findByProviderId(providerId?: string | null): Promise<User | null> {
    if (!providerId) {
      return null;
    }

    const data = await prisma.user.findUnique({
      where: { providerId },
    });

    if (!data) {
      return null;
    }

    return UserMapper.toDomain(data);
  }

  async create(data: CreateUserInput): Promise<User> {
    const created = await prisma.user.create({
      data: {
        providerId: data.providerId ?? null,
        name: data.name,
        email: data.email,
        role: data.role ?? 'USER',
      },
    });

    return UserMapper.toDomain(created);
  }

  async findOrCreate(data: CreateUserInput): Promise<User> {
    const user =
      (await this.findByProviderId(data.providerId)) ?? (await this.findByEmail(data.email));

    if (user) {
      return user;
    }

    return this.create(data);
  }

  async countByRole(role: User['role']): Promise<number> {
    return prisma.user.count({
      where: { role },
    });
  }

  async updateRole(id: string, role: User['role']): Promise<User> {
    const updated = await prisma.user.update({
      where: { id },
      data: { role },
    });

    return UserMapper.toDomain(updated);
  }

  async updateRoleWithAudit(data: UpdateUserRoleWithAuditInput): Promise<User> {
    const updated = await prisma.$transaction(async (transaction) => {
      const tx = getUserRoleAuditTransactionClient(transaction);

      const user = await tx.user.update({
        where: { id: data.targetUserId },
        data: { role: data.newRole },
      });

      await tx.userRoleAuditLog.create({
        data: {
          actorUserId: data.actorUserId,
          targetUserId: data.targetUserId,
          previousRole: data.previousRole,
          newRole: data.newRole,
        },
      });

      return user;
    });

    return UserMapper.toDomain(updated);
  }
}
