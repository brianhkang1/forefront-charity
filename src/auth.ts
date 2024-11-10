import NextAuth, { type DefaultSession } from 'next-auth';
import 'next-auth/jwt';
import Google from 'next-auth/providers/google';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    accessToken?: string;
  }
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (!!token.accessToken) {
        session.accessToken = token.accessToken;
      }

      return session;
    },
  },
});
