import { auth } from "@/lib/auth";
import { makeRepositories } from "@edu-platform/infrastructure";

export async function createContext() {
  const session = await auth();
  const repositories = makeRepositories();

  return {
    session,
    user: session?.user
        ? {
          ...session.user,
          id: session.user.id as string, // 🔥 garante tipagem
        }
        : null,
    ...repositories,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
