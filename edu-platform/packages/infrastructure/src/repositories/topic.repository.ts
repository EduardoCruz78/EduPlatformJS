// packages/infrastructure/src/repositories/topic.repository.ts
import { prisma } from '../prisma/client';
import type { Topic } from '@edu-platform/core';

export class TopicRepository {
  async findBySubject(subjectId: number): Promise<Topic[]> {
    // Como é many-to-many via TopicSubject, precisamos usar include + where
    const topics = await prisma.topic.findMany({
      where: {
        topicSubjects: {
          some: { subjectId },
        },
      },
      include: {
        contents: true,
      },
    });
    return topics;
  }
}