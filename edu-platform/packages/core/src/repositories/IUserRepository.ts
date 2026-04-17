// packages/core/src/repositories/IUserRepository.ts

import type {
  CreateUserInput,
  FindUserRoleAuditLogsInput,
  UpdateUserRoleWithAuditInput,
} from '../dtos';
import type { User, UserRoleAuditLog } from '../entities';

export interface IUserRepository {
  find(): Promise<User[]>;
  findRoleAuditLogs(input?: FindUserRoleAuditLogsInput): Promise<UserRoleAuditLog[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByProviderId(providerId: string): Promise<User | null>;
  create(data: CreateUserInput): Promise<User>;
  findOrCreate(data: CreateUserInput): Promise<User>;
  countByRole(role: User['role']): Promise<number>;
  updateRole(id: string, role: User['role']): Promise<User>;
  updateRoleWithAudit(data: UpdateUserRoleWithAuditInput): Promise<User>;
}
