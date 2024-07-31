import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_LINK_API}/login`, {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = res.data;

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as string
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this line is added
});
