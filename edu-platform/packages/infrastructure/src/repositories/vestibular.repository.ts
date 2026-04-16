import { prisma } from '../prisma/client';
import { VestibularMapper } from '../mappers/vestibular.mapper';
import { SubjectMapper } from '../mappers/subject.mapper';
import type {
  AttachVestibularSubjectInput,
  CreateVestibularContentInput,
  CreateVestibularInput,
  CreateVestibularTopicInput,
  DeleteVestibularContentInput,
  DeleteVestibularSubjectInput,
  DeleteVestibularTopicInput,
  IVestibularRepository,
  ShareVestibularContentInput,
  Subject,
  UpdateVestibularInput,
  Vestibular,
  VestibularContent,
  VestibularTopic,
} from '@edu-platform/core';

const vestibularInclude = {
  vestibularSubjects: { include: { subject: { include: { series: true } } } },
  vestibularContents: { include: { originalContent: true } },
  vestibularTopics: true,
} as const;

export class VestibularRepository implements IVestibularRepository {
  async find(): Promise<Vestibular[]> {
    const data = await prisma.vestibular.findMany({
      include: vestibularInclude,
      orderBy: { name: 'asc' },
    });

    return VestibularMapper.toDomainList(data);
  }

  async findById(id: number): Promise<Vestibular | null> {
    const data = await prisma.vestibular.findUnique({
      where: { id },
      include: vestibularInclude,
    });

    return data ? VestibularMapper.toDomain(data) : null;
  }

  async findByNameAndYear(name: string, year: number): Promise<Vestibular | null> {
    const data = await prisma.vestibular.findFirst({
      where: { name, year },
      include: vestibularInclude,
    });

    return data ? VestibularMapper.toDomain(data) : null;
  }

  async findSubjects(vestibularId: number): Promise<Subject[]> {
    const data = await prisma.vestibularSubject.findMany({
      where: { vestibularId },
      include: {
        subject: {
          include: {
            series: true,
          },
        },
      },
      orderBy: {
        subject: {
          name: 'asc',
        },
      },
    });

    return data.map((entry) => SubjectMapper.toDomain(entry.subject));
  }

  async attachSubject(data: AttachVestibularSubjectInput): Promise<void> {
    await prisma.vestibularSubject.create({
      data: {
        vestibularId: data.vestibularId,
        subjectId: data.subjectId,
      },
    });
  }

  async deleteSubject(data: DeleteVestibularSubjectInput): Promise<void> {
    await prisma.vestibularSubject.delete({
      where: {
        vestibularId_subjectId: {
          vestibularId: data.vestibularId,
          subjectId: data.subjectId,
        },
      },
    });
  }

  async findTopics(vestibularId: number): Promise<VestibularTopic[]> {
    const data = await prisma.vestibularTopic.findMany({
      where: { vestibularId },
      orderBy: { name: 'asc' },
    });

    return data.map((item) => VestibularMapper.toVestibularTopic(item));
  }

  async createTopic(data: CreateVestibularTopicInput): Promise<VestibularTopic> {
    const created = await prisma.vestibularTopic.create({
      data: {
        vestibularId: data.vestibularId,
        name: data.name,
        notes: data.notes ?? null,
        tags: data.tags ?? null,
      },
    });

    return VestibularMapper.toVestibularTopic(created);
  }

  async deleteTopic(data: DeleteVestibularTopicInput): Promise<void> {
    await prisma.vestibularTopic.deleteMany({
      where: {
        id: data.topicId,
        vestibularId: data.vestibularId,
      },
    });
  }

  async findContents(vestibularId: number): Promise<VestibularContent[]> {
    const data = await prisma.vestibularContent.findMany({
      where: { vestibularId },
      include: {
        originalContent: true,
      },
      orderBy: { title: 'asc' },
    });

    return data.map((item) => VestibularMapper.toVestibularContent(item));
  }

  async createContent(data: CreateVestibularContentInput): Promise<VestibularContent> {
    const created = await prisma.vestibularContent.create({
      data: {
        vestibularId: data.vestibularId,
        title: data.title,
        type: data.type ?? null,
        link: data.link ?? null,
        pdfUrl: data.pdfUrl ?? null,
        isShared: false,
      },
      include: {
        originalContent: true,
      },
    });

    return VestibularMapper.toVestibularContent(created);
  }

  async shareContent(data: ShareVestibularContentInput): Promise<VestibularContent> {
    const content = await prisma.content.findUnique({
      where: { id: data.contentId },
    });

    if (!content) {
      throw new Error('Conteúdo não encontrado');
    }

    const created = await prisma.vestibularContent.create({
      data: {
        vestibularId: data.vestibularId,
        title: content.title,
        type: content.type,
        link: content.link,
        pdfUrl: content.pdfUrl,
        isShared: true,
        originalContentId: content.id,
      },
      include: {
        originalContent: true,
      },
    });

    return VestibularMapper.toVestibularContent(created);
  }

  async deleteContent(data: DeleteVestibularContentInput): Promise<void> {
    await prisma.vestibularContent.deleteMany({
      where: {
        id: data.contentId,
        vestibularId: data.vestibularId,
      },
    });
  }

  async create(data: CreateVestibularInput): Promise<Vestibular> {
    const created = await prisma.vestibular.create({
      data: {
        name: data.name,
        description: data.description,
        year: data.year,
        imageUrl: data.imageUrl ?? null,
      },
      include: vestibularInclude,
    });

    return VestibularMapper.toDomain(created);
  }

  async update(id: number, data: Omit<UpdateVestibularInput, 'id'>): Promise<Vestibular> {
    const updated = await prisma.vestibular.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        year: data.year,
        imageUrl: data.imageUrl,
      },
      include: vestibularInclude,
    });

    return VestibularMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await prisma.vestibular.delete({ where: { id } });
  }
}
