'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

import TablePembimbing from '@/components/Tables/TablePembimbing';

const Pembimbing = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Tampilkan loading saat menunggu status sesi
    if (!session || session.user.role !== 'admin') {
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

  if (!session || session.user.role !== 'admin') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Access Denied</p>
      </div>
    ); // Tampilkan pesan jika akses ditolak
  }

  return (
    <DefaultLayout>
        <TablePembimbing/>
    </DefaultLayout>
  );
};

export default Pembimbing;
