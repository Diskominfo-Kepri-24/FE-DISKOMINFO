'use client'; // Pastikan ini adalah file klien

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

const MahasiswaDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      return; // Tampilkan loading saat menunggu status sesi
    }
    if (!session || session.user.role !== 'mahasiswa') {
      router.push('/auth/login'); // Redirect ke login jika akses ditolak
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>; // Tampilkan loading saat menunggu status sesi
  }

  if (!session || session.user.role !== 'mahasiswa') {
    return <p>Access Denied</p>; // Tampilkan pesan jika akses ditolak
  }

  return (
    <DefaultLayout>
      <div>
        <h1>Mahasiswa Dashboard</h1>
        <p>Welcome, {session.user.name}</p>
      </div>
    </DefaultLayout>
  );
};

export default MahasiswaDashboard;
