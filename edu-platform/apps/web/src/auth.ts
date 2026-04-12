// apps/web/src/auth.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/server/db";
import type { AdapterUser } from "@auth/core/adapters";

const adapter = PrismaAdapter(prisma);

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: {
    ...adapter,
    createUser: async (data: AdapterUser): Promise<AdapterUser> => {
      const user = await prisma.user.create({
        data: {
          name: data.name ?? "Usuário",
          email: data.email,
          image: data.image ?? null,
          emailVerified: data.emailVerified ?? null,
          providerId: data.email, // usa email como providerId
        },
      });
      return {
        ...user,
        emailVerified: user.emailVerified ?? null,
      } as AdapterUser;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});