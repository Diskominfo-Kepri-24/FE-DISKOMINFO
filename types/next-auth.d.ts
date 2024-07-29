// types/next-auth.d.ts
import NextAuth from 'next-auth';
import { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User {
    role: string;  // Tambahkan properti role di sini
  }

  interface Session {
    user: User;
  }
}
