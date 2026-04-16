import type { Checklist } from '@edu-platform/core';
import { ContentMapper } from './content.mapper';
import { UserMapper } from './user.mapper';

type PrismaContent = {
  id: number;
  title: string;
  description: string | null;
  type: string;
  link: string;
  thumbnailUrl: string;
  videoUrl: string | null;
  pdfUrl: string | null;
  order: number;
  topicId: number;
};

type PrismaUser = {
  id: string;
  providerId: string;
  name: string;
  email: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type PrismaChecklist = {
  id: number;
  userId: string;
  contentId: number;
  createdAt: Date;
  content?: PrismaContent | null;
  user?: PrismaUser | null;
};

export class ChecklistMapper {
  static toDomain(data: PrismaChecklist): Checklist {
    return {
      id: data.id,
      userId: data.userId,
      contentId: data.contentId,
      createdAt: data.createdAt,
      content: data.content ? ContentMapper.toDomain(data.content) : null,
      user: data.user ? UserMapper.toDomain(data.user) : null,
    };
  }

  static toDomainList(data: PrismaChecklist[]): Checklist[] {
    return data.map((item) => this.toDomain(item));
  }
}
