// packages/core/src/repositories/IContentRepository.ts

import type { CreateContentInput, UpdateContentInput } from '../dtos';
import type { Content } from '../entities';

export interface IContentRepository {
  find(): Promise<Content[]>;
  findById(id: number): Promise<Content | null>;
  findByTopic(topicId: number): Promise<Content[]>;
  countByTopicId(topicId: number): Promise<number>;
  create(data: CreateContentInput): Promise<Content>;
  update(id: number, data: Omit<UpdateContentInput, 'id'>): Promise<Content>;
  delete(id: number): Promise<void>;
}
