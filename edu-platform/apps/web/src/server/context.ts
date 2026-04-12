import { auth } from "@/lib/auth";

export async function createContext() {
  const session = await auth();

  return {
    session,
    userId: session?.user?.id,
  };
}