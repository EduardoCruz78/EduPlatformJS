// packages/infrastructure/src/repositories/content.repository.ts

import { prisma } from '../prisma/client';
import type { Content } from '@edu-platform/core';

export class ContentRepository {
  async getByTopic(topicId: number): Promise<Content[]> {
    return prisma.content.findMany({
      where: { topicId },
      orderBy: { order: 'asc' },
    });
  }

  async findById(id: number): Promise<Content | null> {
    return prisma.content.findUnique({
      where: { id },
      include: { topic: true },
    });
  }

  //
  async countByTopicId(topicId: number): Promise<number> {
    return prisma.content.count({
      where: { topicId },
    });
  }

  async create(data: {
    title: string;
    description?: string | null;
    type: string;
    link: string;
    thumbnailUrl: string;
    videoUrl?: string | null;
    pdfUrl?: string | null;
    order?: number;
    topicId: number;
  }): Promise<Content> {
    return prisma.content.create({
      data: {
        title: data.title,
        description: data.description ?? null,
        type: data.type,
        link: data.link,
        thumbnailUrl: data.thumbnailUrl,
        videoUrl: data.videoUrl ?? null,
        pdfUrl: data.pdfUrl ?? null,
        order: data.order ?? 0,
        topicId: data.topicId,
      },
      include: { topic: true },
    });
  }

  async update(
      id: number,
      data: {
        title?: string;
        description?: string | null;
        type?: string;
        link?: string;
        thumbnailUrl?: string;
        videoUrl?: string | null;
        pdfUrl?: string | null;
        order?: number;
        topicId?: number;
      }
  ): Promise<Content> {
    return prisma.content.update({
      where: { id },
      data: {
        ...data,
        description: data.description ?? undefined,
        videoUrl: data.videoUrl ?? undefined,
        pdfUrl: data.pdfUrl ?? undefined,
        order: data.order ?? undefined,
      },
      include: { topic: true },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.content.delete({
      where: { id },
    });
  }
}