// packages/core/src/repositories/ISubjectRepository.ts

import type { CreateSubjectInput, UpdateSubjectInput } from '../dtos';
import type { Subject } from '../entities';

export interface ISubjectRepository {
  findAll(): Promise<Subject[]>;
  findById(id: number): Promise<Subject | null>;
  findByName(name: string): Promise<Subject | null>;
  getBySeries(seriesId: number): Promise<Subject[]>;
  create(data: CreateSubjectInput): Promise<Subject>;
  update(id: number, data: Omit<UpdateSubjectInput, 'id'>): Promise<Subject>;
  delete(id: number): Promise<void>;
}