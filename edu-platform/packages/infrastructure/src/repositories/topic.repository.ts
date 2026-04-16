// packages/infrastructure/src/repositories/topic.repository.ts

import { prisma } from '../prisma/client';
import { TopicMapper } from '../mappers/topic.mapper';
import type {
  CreateTopicInput,
  ITopicRepository,
  Topic,
  UpdateTopicInput,
} from '@edu-platform/core';

export class TopicRepository implements ITopicRepository {
  async findAll(): Promise<Topic[]> {
    const data = await prisma.topic.findMany({
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
      orderBy: { name: 'asc' },
    });

    return TopicMapper.toDomainList(data);
  }

  async findBySubject(subjectId: number): Promise<Topic[]> {
    const data = await prisma.topic.findMany({
      where: {
        topicSubjects: { some: { subjectId } },
      },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
      orderBy: { name: 'asc' },
    });

    return TopicMapper.toDomainList(data);
  }

  async findById(id: number): Promise<Topic | null> {
    const data = await prisma.topic.findUnique({
      where: { id },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
    });

    if (!data) {
      return null;
    }

    return TopicMapper.toDomain(data);
  }

  async findByName(name: string): Promise<Topic | null> {
    const data = await prisma.topic.findFirst({
      where: { name },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
    });

    if (!data) {
      return null;
    }

    return TopicMapper.toDomain(data);
  }

  async countBySeriesId(seriesId: number): Promise<number> {
    return prisma.topic.count({
      where: {
        topicSubjects: {
          some: {
            subject: {
              seriesId,
            },
          },
        },
      },
    });
  }

  async create(data: CreateTopicInput): Promise<Topic> {
    const created = await prisma.topic.create({
      data: {
        name: data.name,
        topicSubjects: {
          create: [...new Set(data.subjectIds)].map((subjectId) => ({ subjectId })),
        },
      },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
    });

    return TopicMapper.toDomain(created);
  }

  async update(id: number, data: Omit<UpdateTopicInput, 'id'>): Promise<Topic> {
    if (data.subjectIds) {
      await prisma.topicSubject.deleteMany({ where: { topicId: id } });

      if (data.subjectIds.length > 0) {
        await prisma.topicSubject.createMany({
          data: [...new Set(data.subjectIds)].map((subjectId) => ({
            topicId: id,
            subjectId,
          })),
        });
      }
    }

    if (data.name !== undefined) {
      await prisma.topic.update({
        where: { id },
        data: { name: data.name },
      });
    }

    const updated = await prisma.topic.findUniqueOrThrow({
      where: { id },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
    });

    return TopicMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await prisma.topic.delete({ where: { id } });
  }
}
