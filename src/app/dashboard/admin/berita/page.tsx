'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import TableBerita from '@/components/Tables/TableBerita';

const Berita = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; 
    if (!session || session.user.role !== 'admin') {
      router.push('/auth/login'); 
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    ); 
  }

  if (!session || session.user.role !== 'admin') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Access Denied</p>
      </div>
    ); 
  }

  return (
    <DefaultLayout>
        
        <TableBerita/>
    </DefaultLayout>
  );
};

export default Berita;
