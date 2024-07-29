'use client'; // Pastikan ini adalah file klien

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoginForm from '../../../../components/LoginForm';

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      if (session.user.role === 'admin') {
        router.push('/dashboard/admin');
      } else if (session.user.role === 'mahasiswa') {
        router.push('/dashboard/mahasiswa');
      }
    }
  }, [status, session, router]);

  if (status === 'loading') {
    return <p>Loading...</p>; // Tampilkan loading saat menunggu session
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
