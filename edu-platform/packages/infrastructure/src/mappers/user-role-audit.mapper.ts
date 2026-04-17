import type { UserRoleAuditLog } from '@edu-platform/core';

import { UserMapper } from './user.mapper';

type PrismaUserRoleAuditLog = {
  id: number;
  actorUserId: string;
  targetUserId: string;
  previousRole: UserRoleAuditLog['previousRole'];
  newRole: UserRoleAuditLog['newRole'];
  createdAt: Date;
  actor?: Parameters<typeof UserMapper.toDomain>[0] | null;
  target?: Parameters<typeof UserMapper.toDomain>[0] | null;
};

export class UserRoleAuditMapper {
  static toDomain(data: PrismaUserRoleAuditLog): UserRoleAuditLog {
    return {
      id: data.id,
      actorUserId: data.actorUserId,
      targetUserId: data.targetUserId,
      previousRole: data.previousRole,
      newRole: data.newRole,
      createdAt: data.createdAt,
      actor: data.actor ? UserMapper.toDomain(data.actor) : null,
      target: data.target ? UserMapper.toDomain(data.target) : null,
    };
  }

  static toDomainList(data: PrismaUserRoleAuditLog[]): UserRoleAuditLog[] {
    return data.map((item) => this.toDomain(item));
  }
}
