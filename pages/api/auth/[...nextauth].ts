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
          console.log(user);
          if (user) {
            return {
              
              id: user.user_id as string, 
              accessToken: user.access_token as string, 
              userId: user.user_id as any,
              email: user.email as string,
              name: user.nama as string,
              role: user.role as string,
            };
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
        token.accessToken = user.accessToken as string;
        token.userId = user.userId as any;
        token.email = user.email as string;
        token.name = user.name as string;
        token.role = user.role as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string;
        session.user = {
          userId: token.userId as any,
          email: token.email as string,
          name: token.name as string,
          role: token.role as string,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
