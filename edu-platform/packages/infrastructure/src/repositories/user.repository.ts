// packages/infrastructure/src/repositories/user.repository.ts
import { prisma } from '../prisma/client.js'          // adicione .js
import type { User, CreateUserInput } from '@edu-platform/core'

export class UserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    })
    return user
  }

  async findByProviderId(providerId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { providerId },
    })
    return user
  }

  async create(data: CreateUserInput): Promise<User> {
    return await prisma.user.create({
      data,
    })
  }

  async findOrCreate(data: CreateUserInput): Promise<User> {
    let user = await this.findByProviderId(data.providerId)

    if (!user) {
      user = await this.create(data)
    }

    return user
  }
}