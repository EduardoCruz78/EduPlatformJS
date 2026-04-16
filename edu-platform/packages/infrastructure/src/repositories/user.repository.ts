// packages/infrastructure/src/repositories/user.repository.ts

import { prisma } from '../prisma/client';
import { UserMapper } from '../mappers/user.mapper';
import type { CreateUserInput, IUserRepository, User } from '@edu-platform/core';

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    const data = await prisma.user.findUnique({
      where: { id },
    });

    if (!data) {
      return null;
    }

    return UserMapper.toDomain(data);
  }

  async findByProviderId(providerId: string): Promise<User | null> {
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
      data,
    });

    return UserMapper.toDomain(created);
  }

  async findOrCreate(data: CreateUserInput): Promise<User> {
    const user = await this.findByProviderId(data.providerId);

    if (user) {
      return user;
    }

    return this.create(data);
  }
}
