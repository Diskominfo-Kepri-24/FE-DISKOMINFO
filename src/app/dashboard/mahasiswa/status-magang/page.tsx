'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

const StatusMagang = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Tampilkan loading saat menunggu status sesi
    if (!session || session.user.role !== 'mahasiswa') {
      router.push('/auth/login'); // Redirect ke login jika akses ditolak
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    ); // Tampilkan loading saat menunggu status sesi
  }

  if (!session || session.user.role !== 'mahasiswa') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Access Denied</p>
      </div>
    ); // Tampilkan pesan jika akses ditolak
  }

  return (
    <DefaultLayout>
      <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <h1 className='text-white font-semi text-2xl text-center'>Status Pendaftaran Magang anda masih : </h1>
          <br />
          <h1 className='font-bold text-2xl text-center text-yellow-200'>Menunggu</h1>
        </div>
    </DefaultLayout>
  );
};

export default StatusMagang;
