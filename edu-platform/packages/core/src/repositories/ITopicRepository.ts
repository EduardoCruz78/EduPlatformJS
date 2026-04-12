// packages/core/src/repositories/ITopicRepository.ts
export interface ITopicRepository {
  getAll(): Promise<any[]>;
  findById(id: string): Promise<any | null>;
  getBySubject(subjectId: number): Promise<any[]>;
  // ... outros métodos
}