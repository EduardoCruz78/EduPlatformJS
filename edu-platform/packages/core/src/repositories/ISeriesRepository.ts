// packages/core/src/repositories/ISeriesRepository.ts

import type { CreateSeriesInput, UpdateSeriesInput } from '../dtos';
import type { Series } from '../entities';

export interface ISeriesRepository {
  find(): Promise<Series[]>;
  findById(id: number): Promise<Series | null>;
  findByName(name: string): Promise<Series | null>;
  create(data: CreateSeriesInput): Promise<Series>;
  update(id: number, data: Omit<UpdateSeriesInput, 'id'>): Promise<Series>;
  delete(id: number): Promise<void>;
}
