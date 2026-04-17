// packages/infrastructure/src/repositories/checklist.repository.ts

import { prisma } from '../prisma/client';
import { ChecklistMapper } from '../mappers/checklist.mapper';
import type {
  Checklist,
  CreateChecklistInput,
  IChecklistRepository,
} from '@edu-platform/core';

export class ChecklistRepository implements IChecklistRepository {
  async create(data: CreateChecklistInput): Promise<Checklist> {
    const created = await prisma.checklist.create({ data });

    return ChecklistMapper.toDomain(created);
  }

  async findByUserId(userId: string): Promise<Checklist[]> {
    const data = await prisma.checklist.findMany({
      where: { userId },
      include: {
        content: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return ChecklistMapper.toDomainList(data);
  }

  async findById(id: number): Promise<Checklist | null> {
    const data = await prisma.checklist.findUnique({
      where: { id },
      include: {
        content: true,
      },
    });

    if (!data) {
      return null;
    }

    return ChecklistMapper.toDomain(data);
  }

  async findByIdAndUserId(id: number, userId: string): Promise<Checklist | null> {
    const data = await prisma.checklist.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        content: true,
      },
    });

    if (!data) {
      return null;
    }

    return ChecklistMapper.toDomain(data);
  }

  async findByContentId(contentId: number): Promise<Checklist[]> {
    const data = await prisma.checklist.findMany({
      where: { contentId },
      include: {
        content: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return ChecklistMapper.toDomainList(data);
  }

  async findByUserIdAndContentId(
    userId: string,
    contentId: number
  ): Promise<Checklist | null> {
    const data = await prisma.checklist.findUnique({
      where: {
        userId_contentId: {
          userId,
          contentId,
        },
      },
      include: {
        content: true,
      },
    });

    if (!data) {
      return null;
    }

    return ChecklistMapper.toDomain(data);
  }

  async delete(id: number): Promise<void> {
    await prisma.checklist.delete({ where: { id } });
  }

  async deleteByContentId(contentId: number): Promise<void> {
    await prisma.checklist.deleteMany({ where: { contentId } });
  }
}
