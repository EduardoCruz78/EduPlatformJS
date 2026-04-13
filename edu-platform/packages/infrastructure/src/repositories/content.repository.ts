import { prisma } from '../prisma/client';
import type { Content, IContentRepository } from '@edu-platform/core';

export class ContentRepository implements IContentRepository {
  async getByTopic(topicId: number): Promise<Content[]> {
    return prisma.content.findMany({
      where: { topicId },
      orderBy: { order: 'asc' },
    });
  }

  async findById(id: number): Promise<Content | null> {
    return prisma.content.findUnique({
      where: { id },
      include: { topic: true },
    });
  }

  async countByTopicId(topicId: number): Promise<number> {
    return prisma.content.count({
      where: { topicId },
    });
  }

  async create(data: any): Promise<Content> {
    return prisma.content.create({
      data,
      include: { topic: true },
    });
  }

  async update(id: number, data: any): Promise<Content> {
    return prisma.content.update({
      where: { id },
      data,
      include: { topic: true },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.content.delete({ where: { id } });
  }
}