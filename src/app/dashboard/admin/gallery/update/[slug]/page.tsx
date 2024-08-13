"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';

const UpdateGallery = () => {
  const router = useRouter();
  const params = useParams();
  const idParams = params.slug as string | undefined; // Using `slug` for idParams

  const [title, setTitle] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchGallery = async () => {
      if (idParams) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/gallery/${idParams}`);
          const { title, gambar } = response.data.gallery;
          // console.log(response);
          // console.log(idParams);

          setTitle(title);
        } catch (error) {
          console.error('Error fetching gallery:', error);
          toast.error('Gagal memuat data galeri.');
        }
      }
    };
    fetchGallery();
  }, [idParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!session) {
      toast.error('Anda harus login terlebih dahulu.');
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    if (gambar) {
      formData.append('image', gambar);
    }

    try {
      if (!idParams) {
        toast.error('ID tidak tersedia.');
        setIsLoading(false);
        return;
      }

      await axios.post(`${process.env.NEXT_PUBLIC_LINK_API}/gallery/${idParams}`, formData, {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Galeri berhasil diperbarui!');
      setTimeout(() => {
        router.push('/dashboard/admin/gallery');
      }, 3000);
    } catch (error) {
      console.error('Error updating gallery:', error);
      toast.error('Gagal memperbarui galeri. Silakan coba lagi.');
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
            Update Gallery
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
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
            {isLoading ? 'Loading...' : 'Update'}
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default UpdateGallery;
