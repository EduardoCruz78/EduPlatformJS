// packages/core/src/repositories/IVestibularRepository.ts
export interface IVestibularRepository {
  getAvailable(): Promise<any[]>;
  findById(id: number): Promise<any | null>;
  create(data: any): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<void>;
  findByNameAndYear(name: string, year: number): Promise<any | null>;
}