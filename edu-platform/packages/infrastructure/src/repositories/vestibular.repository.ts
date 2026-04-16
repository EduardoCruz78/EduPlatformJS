// packages/infrastructure/src/repositories/vestibular.repository.ts

import { prisma } from '../prisma/client';
import { VestibularMapper } from '../mappers/vestibular.mapper';
import type {
  CreateVestibularInput,
  IVestibularRepository,
  Vestibular,
  UpdateVestibularInput,
} from '@edu-platform/core';

export class VestibularRepository implements IVestibularRepository {
  async find(): Promise<Vestibular[]> {
    const data = await prisma.vestibular.findMany({
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
      orderBy: { name: 'asc' },
    });

    return VestibularMapper.toDomainList(data);
  }

  async findById(id: number): Promise<Vestibular | null> {
    const data = await prisma.vestibular.findUnique({
      where: { id },
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
    });

    if (!data) {
      return null;
    }

    return VestibularMapper.toDomain(data);
  }

  async findByNameAndYear(name: string, year: number): Promise<Vestibular | null> {
    const data = await prisma.vestibular.findFirst({
      where: {
        name,
        year,
      },
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
    });

    if (!data) {
      return null;
    }

    return VestibularMapper.toDomain(data);
  }

  async create(data: CreateVestibularInput): Promise<Vestibular> {
    const created = await prisma.vestibular.create({
      data: {
        name: data.name,
        description: data.description,
        year: data.year,
        imageUrl: data.imageUrl ?? null,
      },
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
    });

    return VestibularMapper.toDomain(created);
  }

  async update(id: number, data: Omit<UpdateVestibularInput, 'id'>): Promise<Vestibular> {
    const updated = await prisma.vestibular.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        year: data.year,
        imageUrl: data.imageUrl,
      },
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
    });

    return VestibularMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await prisma.vestibular.delete({ where: { id } });
  }
}
