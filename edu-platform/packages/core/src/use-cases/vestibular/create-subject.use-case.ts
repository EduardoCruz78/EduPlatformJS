import type { CreateVestibularSubjectInput } from '../../dtos';
import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class CreateVestibularSubjectUseCase {
  constructor(
    private readonly vestibularRepository: IVestibularRepository,
    private readonly subjectRepository: ISubjectRepository
  ) {}

  async execute(input: CreateVestibularSubjectInput): Promise<Subject> {
    if (!input.vestibularId) {
      throw new Error('Vestibular inválido');
    }

    const name = input.name.trim();

    if (!name) {
      throw new Error('Nome da matéria é obrigatório');
    }

    const linkedSubjects = await this.vestibularRepository.findSubjects(input.vestibularId);
    const alreadyLinked = linkedSubjects.find(
      (subject) => subject.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyLinked) {
      throw new Error('Matéria já vinculada a este vestibular');
    }

    const existingSubject = await this.subjectRepository.findByName(name);
    const subject =
      existingSubject ??
      (await this.subjectRepository.create({
        name,
        description: null,
        imageUrl: null,
        order: 0,
        seriesId: null,
      }));

    await this.vestibularRepository.attachSubject({
      vestibularId: input.vestibularId,
      subjectId: subject.id,
    });

    return subject;
  }
}
