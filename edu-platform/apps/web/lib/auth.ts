// apps/web/lib/auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@edu-platform/infrastructure";
import { FindOrCreateUserUseCase } from "@edu-platform/core/use-cases";
import { UserRepository } from "@edu-platform/infrastructure";

const userRepository = new UserRepository();
const findOrCreateUser = new FindOrCreateUserUseCase(userRepository);

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" && profile?.sub) {
        await findOrCreateUser.execute({
          providerId: profile.sub,
          name: user.name || profile.name || "",
          email: user.email || profile.email || "",
        });
      }
      return true;
    },

    async session({ session, user }) {
      if (session.user && user.id) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "database",
  },
});