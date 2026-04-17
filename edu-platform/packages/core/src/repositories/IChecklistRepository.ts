// packages/core/src/repositories/IChecklistRepository.ts

import type { CreateChecklistInput } from '../dtos';
import type { Checklist } from '../entities';

export interface IChecklistRepository {
  findByUserId(userId: string): Promise<Checklist[]>;
  findById(id: number): Promise<Checklist | null>;
  findByIdAndUserId(id: number, userId: string): Promise<Checklist | null>;
  findByContentId(contentId: number): Promise<Checklist[]>;
  findByUserIdAndContentId(userId: string, contentId: number): Promise<Checklist | null>;
  create(data: CreateChecklistInput): Promise<Checklist>;
  delete(id: number): Promise<void>;
  deleteByContentId(contentId: number): Promise<void>;
}
