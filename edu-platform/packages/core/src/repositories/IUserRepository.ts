// packages/core/src/repositories/IUserRepository.ts

import type { CreateUserInput } from '../dtos';
import type { User } from '../entities';

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByProviderId(providerId: string): Promise<User | null>;
  create(data: CreateUserInput): Promise<User>;
  findOrCreate(data: CreateUserInput): Promise<User>;
}