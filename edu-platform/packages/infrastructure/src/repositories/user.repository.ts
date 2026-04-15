// packages/infrastructure/src/repositories/user.repository.ts

import { prisma } from '../prisma/client';
import type { CreateUserInput, IUserRepository, User } from '@edu-platform/core';

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async findByProviderId(providerId: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { providerId },
    });
  }

  async create(data: CreateUserInput): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  async findOrCreate(data: CreateUserInput): Promise<User> {
    const user = await this.findByProviderId(data.providerId);

    if (user) {
      return user;
    }

    return this.create(data);
  }
}