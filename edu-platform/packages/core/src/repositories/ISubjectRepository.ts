// packages/core/src/repositories/ISubjectRepository.ts
export interface ISubjectRepository {
  findAll(): Promise<any[]>;
  findById(id: string): Promise<any | null>;
  getBySeries(seriesId: number): Promise<any[]>;
  create(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<void>;
}