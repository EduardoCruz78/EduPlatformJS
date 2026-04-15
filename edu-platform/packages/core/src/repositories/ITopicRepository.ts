// packages/core/src/repositories/ITopicRepository.ts

import type { CreateTopicInput, UpdateTopicInput } from '../dtos';
import type { Topic } from '../entities';

export interface ITopicRepository {
  getAll(): Promise<Topic[]>;
  findById(id: number): Promise<Topic | null>;
  findByName(name: string): Promise<Topic | null>;
  getBySubject(subjectId: number): Promise<Topic[]>;
  countBySubjectId(subjectId: number): Promise<number>;
  countBySeriesId(seriesId: number): Promise<number>;
  create(data: CreateTopicInput): Promise<Topic>;
  update(id: number, data: Omit<UpdateTopicInput, 'id'>): Promise<Topic>;
  delete(id: number): Promise<void>;
}