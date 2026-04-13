// packages/core/src/repositories/ISubjectRepository.ts
export interface ISubjectRepository {
  findAll(): Promise<any[]>;
  findById(id: number): Promise<any | null>;
  getBySeries(seriesId: number): Promise<any[]>;
  create(data: any): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<void>;
  findByName(name: string): Promise<any | null>;
}