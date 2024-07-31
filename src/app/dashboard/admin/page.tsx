'use client'; // Pastikan ini adalah file klien

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      return; // Tampilkan loading saat menunggu status sesi
    }
    if (!session || session.user.role !== 'admin') {
      router.push('/auth/login'); // Redirect ke login jika akses ditolak
    }
  }, [session, status, router]);


  if (status === 'loading') {
    return <p>Loading...</p>; // Tampilkan loading saat menunggu status sesi
  }

  if (!session || session.user.role !== 'admin') {
    return <p>Access Denied</p>; // Tampilkan pesan jika akses ditolak
  }

  return (
    <DefaultLayout>
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome, {session.user.name}</p>
      </div>
    </DefaultLayout>
  );
};

export default AdminDashboard;
