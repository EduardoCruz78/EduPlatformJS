// packages/core/src/repositories/IVestibularRepository.ts
export interface IVestibularRepository {
  getAvailable(): Promise<any[]>;
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<void>;
}