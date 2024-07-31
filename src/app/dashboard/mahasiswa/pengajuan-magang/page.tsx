'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import DatePickerOne from '@/components/FormElements/DatePicker/DatePickerOne';
import CheckboxTwo from '@/components/FormElements/Checkboxes/CheckboxTwo';

const PengajuanMagang = () => {
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
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-center text-dark dark:text-white">
                Form Daftar Magang
              </h3>
            </div>
            <div className="flex flex-col gap-6 p-6.5">
            <div>
              <DatePickerOne />
              </div>
            <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Alasan Milih Instansi Dinas Komunikasi dan Informatika Kepulauan Riau
                </label>
                <input
                  type="text"
                  placeholder="Silahan jelaskan kenapa kamu memiliki diskominfo sebagai tempat magang kamu"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Motivasi Magang
                </label>
                <textarea
                  rows={6}
                  placeholder="Silahkan jelaskan motivasi kamu untuk Daftar Magang"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
              <div className='flex justify-center'>
              <CheckboxTwo />
              </div>
              <div className='flex justify-center'>
              <button
                    className="flex items-center justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                    type="submit"
                  >
                    Daftar Magang
                  </button>
              </div>
            </div>
          </div>
    </DefaultLayout>
  );
};

export default PengajuanMagang;
