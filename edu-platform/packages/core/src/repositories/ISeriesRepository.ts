// packages/core/src/repositories/ISeriesRepository.ts
export interface ISeriesRepository {
  getAll(): Promise<any[]>;
  findById(id: number): Promise<any | null>;
  findByName(name: string): Promise<any | null>;
  create(data: any): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<void>;
}