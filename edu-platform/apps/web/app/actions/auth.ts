'use server';

import { signIn } from '@/lib/auth';
import { FindOrCreateUserUseCase } from '@edu-platform/core';
import { UserRepository } from '@edu-platform/infrastructure';

const userRepository = new UserRepository();
const findOrCreateUserUseCase = new FindOrCreateUserUseCase(userRepository);

type AuthProfile = {
  email?: string | null;
  name?: string | null;
  id?: string | null;
  sub?: string | null;
};

export async function loginWithGoogle() {
  return signIn('google', { redirectTo: '/dashboard' });
}

export async function handleAuthCallback(profile: AuthProfile) {
  return findOrCreateUserUseCase.execute({
    email: profile.email ?? '',
    name: profile.name ?? '',
    providerId: profile.id ?? profile.sub ?? '',
  });
}
