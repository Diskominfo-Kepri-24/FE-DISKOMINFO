'use client'; // Pastikan ini adalah file klien

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import WelcomeCard from '../../../../components/WelcomeCard';
import ChartOne from '@/components/Charts/ChartOne';

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session.user.accessToken);
  useEffect(() => {
    if (status === 'loading') {
      return; // Tampilkan loading saat menunggu status sesi
    }
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
      <WelcomeCard role={session.user.role}/>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
       
        
      </div>
    </DefaultLayout>
  );
};

export default AdminDashboard;
