import { prisma } from '../prisma/client';
import type { Topic } from '@edu-platform/core';

export class TopicRepository {
  async getBySubject(subjectId: number): Promise<Topic[]> {
    return prisma.topic.findMany({
      where: {
        topicSubjects: { some: { subjectId } },
      },
      include: {
        contents: true,                        // ← importante do original .NET
        topicSubjects: { include: { subject: true } },
      },
      orderBy: { name: 'asc' },
    });
  }
}