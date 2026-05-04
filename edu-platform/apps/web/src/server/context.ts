import { auth } from "@/lib/auth";
import { container } from "@edu-platform/infrastructure";

export async function createContext() {
  const session = await auth();

  return {
    session,
    user: session?.user
        ? {
          ...session.user,
          id: session.user.id,
          role: session.user.role,
        }
        : null,
    ...container,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
