// packages/infrastructure/src/repositories/subject.repository.ts

import { prisma } from '../prisma/client';
import { SubjectMapper } from '../mappers/subject.mapper';
import type {
  CreateSubjectInput,
  ISubjectRepository,
  Subject,
  UpdateSubjectInput,
} from '@edu-platform/core';

export class SubjectRepository implements ISubjectRepository {
  async find(): Promise<Subject[]> {
    const data = await prisma.subject.findMany({
      include: { series: true },
      orderBy: { name: 'asc' },
    });

    return SubjectMapper.toDomainList(data);
  }

  async findBySeries(seriesId: number): Promise<Subject[]> {
    const data = await prisma.subject.findMany({
      where: { seriesId },
      include: { series: true },
      orderBy: { name: 'asc' },
    });

    return SubjectMapper.toDomainList(data);
  }

  async findById(id: number): Promise<Subject | null> {
    const data = await prisma.subject.findUnique({
      where: { id },
      include: { series: true },
    });

    if (!data) {
      return null;
    }

    return SubjectMapper.toDomain(data);
  }

  async findByName(name: string): Promise<Subject | null> {
    const data = await prisma.subject.findFirst({
      where: { name },
      include: { series: true },
    });

    if (!data) {
      return null;
    }

    return SubjectMapper.toDomain(data);
  }

  async create(data: CreateSubjectInput): Promise<Subject> {
    const created = await prisma.subject.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        imageUrl: data.imageUrl ?? null,
        order: data.order ?? 0,
        seriesId: data.seriesId ?? null,
      },
      include: { series: true },
    });

    return SubjectMapper.toDomain(created);
  }

  async update(id: number, data: Omit<UpdateSubjectInput, 'id'>): Promise<Subject> {
    const updated = await prisma.subject.update({
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

    return SubjectMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await prisma.subject.delete({
      where: { id },
    });
  }
}
