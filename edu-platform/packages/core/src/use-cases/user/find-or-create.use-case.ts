// packages/core/src/use-cases/user/find-or-create.use-case.ts
import type { CreateUserInput } from '../../dtos';
import {IUserRepository} from "../../repositories";

export class FindOrCreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: CreateUserInput) {
    return this.userRepository.findOrCreate(data);
  }
}