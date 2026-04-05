// packages/core/src/use-cases/user/find-or-create.use-case.ts
import type { UserRepository } from '@edu-platform/infrastructure';
import type { CreateUserInput } from '../../dtos';

export class FindOrCreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUserInput) {
    return this.userRepository.findOrCreate(data);
  }
}