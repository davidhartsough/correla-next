import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
// import type { Adapter } from "next-auth/adapters";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/db";

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
