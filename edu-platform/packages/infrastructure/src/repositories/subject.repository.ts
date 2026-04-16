// packages/infrastructure/src/repositories/subject.repository.ts

import { prisma } from '../prisma/client';
import type {
  CreateSubjectInput,
  ISubjectRepository,
  Subject,
  UpdateSubjectInput,
} from '@edu-platform/core';

export class SubjectRepository implements ISubjectRepository {
  async findAll(): Promise<Subject[]> {
    return prisma.subject.findMany({
      include: { series: true },
      orderBy: { name: 'asc' },
    });
  }

  async findBySeries(seriesId: number): Promise<Subject[]> {
    return prisma.subject.findMany({
      where: { seriesId },
      include: { series: true },
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: number): Promise<Subject | null> {
    return prisma.subject.findUnique({
      where: { id },
      include: { series: true },
    });
  }

  async findByName(name: string): Promise<Subject | null> {
    return prisma.subject.findFirst({
      where: { name },
      include: { series: true },
    });
  }

  async create(data: CreateSubjectInput): Promise<Subject> {
    return prisma.subject.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        imageUrl: data.imageUrl ?? null,
        order: data.order ?? 0,
        seriesId: data.seriesId ?? null,
      },
      include: { series: true },
    });
  }

  async update(id: number, data: Omit<UpdateSubjectInput, 'id'>): Promise<Subject> {
    return prisma.subject.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description === undefined ? undefined : data.description,
        imageUrl: data.imageUrl === undefined ? undefined : data.imageUrl,
        order: data.order === undefined ? undefined : data.order,
        seriesId: data.seriesId === undefined ? undefined : data.seriesId,
      },
      include: { series: true },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.subject.delete({
      where: { id },
    });
  }
}
