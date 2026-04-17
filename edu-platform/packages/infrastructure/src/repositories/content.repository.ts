// packages/infrastructure/src/repositories/content.repository.ts

import { prisma } from '../prisma/client';
import { ContentMapper } from '../mappers/content.mapper';
import type {
  Content,
  CreateContentInput,
  IContentRepository,
  UpdateContentInput,
} from '@edu-platform/core';

export class ContentRepository implements IContentRepository {
  async find(): Promise<Content[]> {
    const data = await prisma.content.findMany({
      orderBy: [{ topicId: 'asc' }, { order: 'asc' }, { title: 'asc' }],
    });

    return ContentMapper.toDomainList(data);
  }

  async findByTopic(topicId: number): Promise<Content[]> {
    const data = await prisma.content.findMany({
      where: { topicId },
      orderBy: { order: 'asc' },
    });

    return ContentMapper.toDomainList(data);
  }

  async findById(id: number): Promise<Content | null> {
    const data = await prisma.content.findUnique({
      where: { id },
    });

    if (!data) {
      return null;
    }

    return ContentMapper.toDomain(data);
  }

  async countByTopicId(topicId: number): Promise<number> {
    return prisma.content.count({
      where: { topicId },
    });
  }

  async create(data: CreateContentInput): Promise<Content> {
    const created = await prisma.content.create({
      data: {
        title: data.title,
        description: data.description ?? null,
        topicId: data.topicId,
        type: data.type,
        link: data.link,
        thumbnailUrl: data.thumbnailUrl,
        videoUrl: data.videoUrl ?? null,
        pdfUrl: data.pdfUrl ?? null,
        transcript: data.transcript ?? null,
        captionsUrl: data.captionsUrl ?? null,
        librasUrl: data.librasUrl ?? null,
        audioDescriptionUrl: data.audioDescriptionUrl ?? null,
        order: data.order ?? 0,
      },
    });

    return ContentMapper.toDomain(created);
  }

  async update(id: number, data: Omit<UpdateContentInput, 'id'>): Promise<Content> {
    const updated = await prisma.content.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description === undefined ? undefined : data.description,
        topicId: data.topicId,
        type: data.type,
        link: data.link,
        videoUrl: data.videoUrl === undefined ? undefined : data.videoUrl,
        pdfUrl: data.pdfUrl === undefined ? undefined : data.pdfUrl,
        transcript: data.transcript === undefined ? undefined : data.transcript,
        captionsUrl: data.captionsUrl === undefined ? undefined : data.captionsUrl,
        librasUrl: data.librasUrl === undefined ? undefined : data.librasUrl,
        audioDescriptionUrl:
          data.audioDescriptionUrl === undefined ? undefined : data.audioDescriptionUrl,
        thumbnailUrl: data.thumbnailUrl ?? undefined,
        order: data.order === undefined ? undefined : data.order,
      },
    });

    return ContentMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await prisma.content.delete({ where: { id } });
  }
}
