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
          const res = await axios.post('http://127.0.0.1:8000/api/v1/login', {
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
        token.role = user.role as string; // Casting untuk memastikan tipe yang benar
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as string; // Casting untuk memastikan tipe yang benar
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
});
