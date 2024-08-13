"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

const CreatePembimbing = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [noHp, setNoHp] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!session) {
      toast.error('Anda harus login terlebih dahulu.');
      setIsLoading(false);
      return;
    }

    const formData = {
      nama,
      email,
      no_hp: noHp,
      password,
    };

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_LINK_API}/register/pembimbing`, formData);
      toast.success('Registrasi Pembimbing berhasil ditambahkan!');

      setTimeout(() => {
        router.push('/dashboard/admin/pembimbing');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Gagal menambahkan pembimbing. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Create Pembimbing
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Nama
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              NoHp
            </label>
            <input
              type="text"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              placeholder="No HP"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
         
          <button 
            type="submit" 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Create'}
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default CreatePembimbing;
