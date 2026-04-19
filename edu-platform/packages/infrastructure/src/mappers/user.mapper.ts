import type { User } from '@edu-platform/core';

type PrismaUser = {
  id: string;
  providerId: string | null;
  name: string;
  email: string;
  role: User['role'];
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export class UserMapper {
  static toDomain(data: PrismaUser): User {
    return {
      id: data.id,
      providerId: data.providerId,
      name: data.name,
      email: data.email,
      role: data.role,
      image: data.image,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }

  static toDomainList(data: PrismaUser[]): User[] {
    return data.map((item) => this.toDomain(item));
  }
}
