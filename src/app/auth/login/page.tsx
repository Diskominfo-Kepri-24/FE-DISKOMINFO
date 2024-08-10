'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoginForm from '../../../../components/LoginForm'; // Sesuaikan path jika berbeda

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      if (session.user.role === 'admin') {
        router.push('/dashboard/admin');
      } else if (session.user.role === 'mahasiswa') {
        router.push('/dashboard/mahasiswa');
      } else if (session.user.role === 'siswa') {
        router.push('/dashboard/siswa');
      }
    }
  }, [status, session, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    ); 
  }

  return (
    <div className="h-screen bg-no-repeat bg-cover bg-hero-pattern">
      <div className="flex flex-col md:flex-row text-center items-center md:text-start md:items-start p-4">
        <img src="/logo.png" alt="Logo" className="w-[100px] mb-4 text-center" />
        <div className="flex flex-col ml-4 mt-4">
          <h2 className="text-xl font-bold text-white">
            Selamat Datang di Website Login Magang
          </h2>
          <h3 className="text-lg font-bold text-blue-300">
            Dinas Komunikasi dan Informatika Kepulauan Riau
          </h3>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto shadow-lg rounded-lg bg-white bg-opacity-30 backdrop-blur-md">
          <div className="p-6">
            <h2 className="text-center text-2xl font-bold mb-4 text-white">
              Login
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
