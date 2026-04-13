// packages/core/src/use-cases/checklist/GetChecklistByUserUseCase.ts

import {IChecklistRepository} from "../../repositories";

export class GetChecklistByUserUseCase {
  constructor(private checklistRepository: IChecklistRepository) {}

  async execute(userId: string) {
    return this.checklistRepository.findByUserId(userId);
  }
}