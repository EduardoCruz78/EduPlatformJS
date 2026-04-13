// packages/core/src/repositories/IUserRepository.ts
export interface IUserRepository {
  findById(id: string): Promise<any | null>;
  findByProviderId(providerId: string): Promise<any | null>;
  create(data: any): Promise<any>;
  findOrCreate(data: any): Promise<any>;
}