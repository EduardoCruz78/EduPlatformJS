// apps/web/app/actions/auth.ts
"use server";

import { signIn } from "@/lib/auth";
import { FindOrCreateUserUseCase } from "@edu-platform/core/use-cases";
import { UserRepository } from "@edu-platform/infrastructure";

const userRepository = new UserRepository();
const findOrCreateUser = new FindOrCreateUserUseCase(userRepository);

export async function loginWithGoogle() {
  return await signIn("google", { redirectTo: "/dashboard" });
}