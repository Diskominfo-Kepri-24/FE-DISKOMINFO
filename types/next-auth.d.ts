// types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    accessToken: string;
    userId: string;
    email: string;
    name: string;
    role: string;
  }

  interface Session {
    accessToken: string;
    user: {
      userId: string;
      email: string;
      name: string;
      role: string;
    };
  }
}
