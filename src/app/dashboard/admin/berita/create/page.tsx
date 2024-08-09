"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react'; // Pastikan ini diimpor

const CreateBerita = () => {
  const [slug, setSlug] = useState('');
  const [judul, setJudul] = useState('');
  const [isiBerita, setIsiBerita] = useState('');
  const [kategori, setKategori] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
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

    // Create form data
    const formData = new FormData();
    formData.append('slug', slug);
    formData.append('judul', judul);
    formData.append('isi_berita', isiBerita);
    formData.append('kategori', kategori);
    if (gambar) {
      formData.append('gambar', gambar);
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/v1/berita', formData, {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Berita berhasil ditambahkan!');

      setTimeout(() => {
        router.push('/dashboard/admin/berita');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error notification
      toast.error('Gagal menambahkan berita. Silakan coba lagi.');
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
            Create Berita
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Slug"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Judul
            </label>
            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Judul"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Isi Berita
            </label>
            <textarea
              value={isiBerita}
              onChange={(e) => setIsiBerita(e.target.value)}
              placeholder="Isi Berita"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Kategori
            </label>
            <input
              type="text"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              placeholder="Kategori"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Gambar
            </label>
            <input
              type="file"
              onChange={(e) => setGambar(e.target.files ? e.target.files[0] : null)}
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

export default CreateBerita;
