import { prisma } from '../prisma/client';
import type { Content } from '@edu-platform/core';

export class ContentRepository {
  async getByTopic(topicId: number): Promise<Content[]> {
    return prisma.content.findMany({
      where: { topicId },
      orderBy: { title: 'asc' },
    });
  }

  async findById(id: number): Promise<Content | null> {  // ← método extra do original
    return prisma.content.findUnique({ where: { id } });
  }
}