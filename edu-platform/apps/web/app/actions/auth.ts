'use server';

import { signIn } from '@/lib/auth';

export async function loginWithGoogle() {
  return signIn('google', { redirectTo: '/dashboard' });
}
