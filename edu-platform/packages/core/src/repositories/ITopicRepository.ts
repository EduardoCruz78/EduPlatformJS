// packages/core/src/repositories/ITopicRepository.ts
export interface ITopicRepository {
  getAll(): Promise<any[]>;
  findById(id: number): Promise<any | null>;
  findByName(name: string): Promise<any | null>;
  getBySubject(subjectId: number): Promise<any[]>;
  countBySubjectId(subjectId: number): Promise<number>;
  countBySeriesId(seriesId: number): Promise<number>;
  create(data: any): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<void>;
}