import { prisma } from '../prisma/client';
import type { Topic } from '@edu-platform/core';

export class TopicRepository {
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
    return prisma.topic.findUnique({ where: { id } });
  }

  async findByName(name: string) {
    return prisma.topic.findFirst({ where: { name } });
  }

  async create(data: any) {
    // Como tem relação N:M com subjects, o create é diferente
    const { subjectIds, ...topicData } = data;
    return prisma.topic.create({
      data: {
        ...topicData,
        topicSubjects: {
          create: subjectIds.map((id: number) => ({ subjectId: id }))
        }
      }
    });
  }

  async delete(id: number) {
    return prisma.topic.delete({ where: { id } });
  }

  async countBySeriesId(seriesId: number) {
    // No schema atual, Topic não tem seriesId direto, ele se liga a Subject
    // Se você adicionou seriesId no Topic, descomente a linha abaixo
    // return prisma.topic.count({ where: { seriesId } });
    return 0; // Placeholder para não quebrar a compilação
  }

  async countBySubjectId(subjectId: number) {
    return prisma.topicSubject.count({ where: { subjectId } });
  }
}