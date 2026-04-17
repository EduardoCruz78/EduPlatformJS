import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class DeleteSeriesUseCase {
  constructor(
    private readonly seriesRepository: ISeriesRepository,
    private readonly topicRepository: ITopicRepository
  ) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    const series = await this.seriesRepository.findById(id);

    if (!series) {
      throw AppError.notFound('Serie nao encontrada.');
    }

    const count = await this.topicRepository.countBySeriesId(id);

    if (count > 0) {
      throw AppError.conflict('Nao e possivel excluir uma serie com topicos vinculados.');
    }

    await this.seriesRepository.delete(id);

    return { success: true };
  }
}

