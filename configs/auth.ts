import type { AuthOptions, User, TokenSet } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        login: { label: 'login', type: 'text', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
       async authorize(credentials) {
        if (!credentials?.login || !credentials.password) return null;
        const { login, password } = credentials;
        if(login === 'admin' && password === 'admin') {
          const user = {
            id: '1',
            name: 'admin'
          };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
