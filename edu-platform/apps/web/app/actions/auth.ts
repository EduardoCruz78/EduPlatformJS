// apps/web/app/actions/auth.ts
"use server";

import { signIn } from "@/lib/auth";
import { FindOrCreateUserUseCase } from "@edu-platform/core";
import { UserRepository } from "@edu-platform/infrastructure";

const userRepository = new UserRepository();
const findOrCreateUserUseCase = new FindOrCreateUserUseCase(userRepository);

export async function loginWithGoogle() {
  return await signIn("google", { redirectTo: "/dashboard" });
}

// ✅ CORRIGIDO: Adicionar providerId (obrigatório)
export async function handleAuthCallback(profile: any) {
  return await findOrCreateUserUseCase.execute({
    email: profile.email,
    name: profile.name,
    providerId: profile.id || profile.sub, // Google fornece 'id' ou 'sub'
  });
}