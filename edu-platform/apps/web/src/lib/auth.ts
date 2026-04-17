import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@edu-platform/infrastructure";
import { authEnv, getAdminEmailAllowList } from "./env";
import type { UserRole } from "@edu-platform/core";

const adminEmailAllowList = getAdminEmailAllowList();

function shouldBootstrapAdmin(email?: string | null): boolean {
  if (!email) {
    return false;
  }

  return adminEmailAllowList.has(email.toLowerCase());
}

async function resolvePersistedUserRole(
  userId: string,
  email?: string | null
): Promise<UserRole> {
  const existingUser = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  if (!existingUser) {
    return shouldBootstrapAdmin(email) ? "ADMIN" : "USER";
  }

  if (existingUser.role === "ADMIN") {
    return "ADMIN";
  }

  if (!shouldBootstrapAdmin(email)) {
    return existingUser.role;
  }

  const adminCount = await prisma.user.count({
    where: { role: "ADMIN" },
  });

  if (adminCount > 0) {
    return existingUser.role;
  }

  await prisma.user.update({
    where: { id: userId },
    data: { role: "ADMIN" },
  });

  return "ADMIN";
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: authEnv.AUTH_SECRET,
  providers: [
    Google({
      clientId: authEnv.GOOGLE_CLIENT_ID,
      clientSecret: authEnv.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  events: {
    async signIn({ user }) {
      if (!user.id) {
        return;
      }

      await resolvePersistedUserRole(user.id, user.email);
    },
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = await resolvePersistedUserRole(user.id, user.email);
      }
      return session;
    },
  },
});
