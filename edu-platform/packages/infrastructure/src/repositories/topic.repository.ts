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

  async countBySubjectId(subjectId: number): Promise<number> {
    return prisma.topic.count({
      where: {
        topicSubjects: {
          some: {
            subjectId,
          },
        },
      },
    });
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

  async create(data: {
    name: string;
    subjectIds: number[];

    // Aceitos para compatibilidade com os chamadores atuais,
    // mas ignorados porque o schema atual não tem esses campos.
    description?: string;
    seriesId?: number;
    imageUrl?: string | null;
    order?: number;
  }): Promise<Topic> {
    const { subjectIds, name } = data;

    return prisma.topic.create({
      data: {
        name,
        topicSubjects: {
          create: [...new Set(subjectIds)].map((id) => ({ subjectId: id })),
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
        subjectIds?: number[];

        // Mantidos por compatibilidade, mas não persistidos no schema atual.
        description?: string;
        seriesId?: number;
        imageUrl?: string | null;
        order?: number;
      }
  ): Promise<Topic> {
    const { subjectIds, name } = data;

    if (subjectIds) {
      await prisma.topicSubject.deleteMany({ where: { topicId: id } });

      if (subjectIds.length > 0) {
        await prisma.topicSubject.createMany({
          data: [...new Set(subjectIds)].map((subjectId) => ({
            topicId: id,
            subjectId,
          })),
        });
      }
    }

    if (name !== undefined) {
      await prisma.topic.update({
        where: { id },
        data: { name },
      });
    }

    return prisma.topic.findUniqueOrThrow({
      where: { id },
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