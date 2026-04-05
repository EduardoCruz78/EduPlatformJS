// packages/infrastructure/src/repositories/content.repository.ts
import { prisma } from '../prisma/client.js';
import type { Content } from '@edu-platform/core';

export class ContentRepository {
  async findByTopic(topicId: number): Promise<Content[]> {
    return await prisma.content.findMany({
      where: { topicId },
    });
  }

  async findById(id: number): Promise<Content | null> {
    return await prisma.content.findUnique({ where: { id } });
  }
}