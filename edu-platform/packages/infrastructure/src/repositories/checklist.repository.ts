// packages/infrastructure/src/repositories/checklist.repository.ts

import { prisma } from '../prisma/client';
import type {
  Checklist,
  CreateChecklistInput,
  IChecklistRepository,
} from '@edu-platform/core';

export class ChecklistRepository implements IChecklistRepository {
  async create(data: CreateChecklistInput): Promise<Checklist> {
    return prisma.checklist.create({ data });
  }

  async findByUserId(userId: string): Promise<Checklist[]> {
    return prisma.checklist.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: number): Promise<Checklist | null> {
    return prisma.checklist.findUnique({
      where: { id },
    });
  }

  async findByContentId(contentId: number): Promise<Checklist[]> {
    return prisma.checklist.findMany({
      where: { contentId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.checklist.delete({ where: { id } });
  }

  async deleteByContentId(contentId: number): Promise<void> {
    await prisma.checklist.deleteMany({ where: { contentId } });
  }
}