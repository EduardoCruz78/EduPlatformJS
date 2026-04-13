// packages/infrastructure/src/repositories/topic.repository.ts

import { prisma } from '../prisma/client';
import type { Topic } from '@edu-platform/core';

export class TopicRepository {
  async getAll(): Promise<Topic[]> {
    return prisma.topic.findMany({
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
      orderBy: { name: 'asc' },
    });
  }

  async getBySubject(subjectId: number): Promise<Topic[]> {
    return prisma.topic.findMany({
      where: {
        topicSubjects: { some: { subjectId } },
      },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: number): Promise<Topic | null> {
    return prisma.topic.findUnique({
      where: { id },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
    });
  }

  async findByName(name: string): Promise<Topic | null> {
    return prisma.topic.findFirst({
      where: { name },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
    });
  }

  // ✅ MÉTODO CORRIGIDO
  async countBySeriesId(seriesId: number): Promise<number> {
    return prisma.topic.count({
      where: {
        topicSubjects: {
          some: {
            subject: {
              seriesId: seriesId,
            },
          },
        },
      },
    });
  }

  async create(data: {
    name: string;
    description: string;
    subjectIds: number[];
    imageUrl?: string | null;
    order?: number;
  }): Promise<Topic> {
    const { subjectIds, ...topicData } = data;

    return prisma.topic.create({
      data: {
        ...topicData,
        topicSubjects: {
          create: subjectIds.map((id) => ({ subjectId: id })),
        },
      },
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
    });
  }

  async update(
      id: number,
      data: {
        name?: string;
        description?: string;
        imageUrl?: string | null;
        order?: number;
        subjectIds?: number[];
      }
  ): Promise<Topic> {
    const { subjectIds, ...topicData } = data;

    if (subjectIds) {
      await prisma.topicSubject.deleteMany({ where: { topicId: id } });

      await prisma.topicSubject.createMany({
        data: subjectIds.map((subjectId) => ({
          topicId: id,
          subjectId,
        })),
      });
    }

    return prisma.topic.update({
      where: { id },
      data: topicData,
      include: {
        contents: true,
        topicSubjects: { include: { subject: true } },
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.topic.delete({ where: { id } });
  }
}