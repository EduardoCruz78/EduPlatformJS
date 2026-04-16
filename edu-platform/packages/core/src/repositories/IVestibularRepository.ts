// packages/core/src/repositories/IVestibularRepository.ts

import type { CreateVestibularInput, UpdateVestibularInput } from '../dtos';
import type { Vestibular } from '../entities';

export interface IVestibularRepository {
  findAll(): Promise<Vestibular[]>;
  findById(id: number): Promise<Vestibular | null>;
  findByNameAndYear(name: string, year: number): Promise<Vestibular | null>;
  create(data: CreateVestibularInput): Promise<Vestibular>;
  update(id: number, data: Omit<UpdateVestibularInput, 'id'>): Promise<Vestibular>;
  delete(id: number): Promise<void>;
}
