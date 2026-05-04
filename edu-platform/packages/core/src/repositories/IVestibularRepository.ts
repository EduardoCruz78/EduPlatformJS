import type {
  AttachVestibularSubjectInput,
  CreateVestibularContentInput,
  CreateVestibularInput,
  CreateVestibularTopicInput,
  DeleteVestibularContentInput,
  DeleteVestibularSubjectInput,
  DeleteVestibularTopicInput,
  ShareVestibularContentInput,
  UpdateVestibularInput,
} from '../dtos';
import type {
  Subject,
  Vestibular,
  VestibularContent,
  VestibularTopic,
} from '../entities';

export interface IVestibularRepository {
  find(): Promise<Vestibular[]>;
  findById(id: number): Promise<Vestibular | null>;
  findByNameAndYear(name: string, year: number): Promise<Vestibular | null>;
  findSubjects(vestibularId: number): Promise<Subject[]>;
  attachSubject(data: AttachVestibularSubjectInput): Promise<void>;
  deleteSubject(data: DeleteVestibularSubjectInput): Promise<void>;
  findTopics(vestibularId: number, subjectId?: number): Promise<VestibularTopic[]>;
  createTopic(data: CreateVestibularTopicInput): Promise<VestibularTopic>;
  deleteTopic(data: DeleteVestibularTopicInput): Promise<void>;
  findContents(vestibularId: number, vestibularTopicId?: number): Promise<VestibularContent[]>;
  createContent(data: CreateVestibularContentInput): Promise<VestibularContent>;
  shareContent(data: ShareVestibularContentInput): Promise<VestibularContent>;
  deleteContent(data: DeleteVestibularContentInput): Promise<void>;
  create(data: CreateVestibularInput): Promise<Vestibular>;
  update(id: number, data: Omit<UpdateVestibularInput, 'id'>): Promise<Vestibular>;
  delete(id: number): Promise<void>;
}
