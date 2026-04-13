// packages/infrastructure/src/repositories/content.repository.ts

import { prisma } from '../prisma/client';
import type { Content } from '@edu-platform/core';

export class ContentRepository {
  async getAll(): Promise<Content[]> {
    return prisma.content.findMany({
      orderBy: { title: 'asc' },
    });
  }

  async getByTopic(topicId: number): Promise<Content[]> {
    return prisma.content.findMany({
      where: { topicId },
      orderBy: { title: 'asc' },
    });
  }

  async findById(id: number): Promise<Content | null> {
    return prisma.content.findUnique({ where: { id } });
  }

  async create(data: any) {
    return prisma.content.create({ data });
  }

  async update(id: number, data: any) {
    return prisma.content.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.content.delete({ where: { id } });
  }

  async countByTopicId(topicId: number) {
    return prisma.content.count({ where: { topicId } });
  }
}