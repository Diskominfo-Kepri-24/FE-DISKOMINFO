"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Program {
  id: string;
  title: string;
}

const CreateSkill = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [program, setProgram] = useState<Program[]>([]);
  const [title, setTitle] = useState("");
  const [idProgram, setIdProgram] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataProgram = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/program`);
        setProgram(response.data.program.data);
      } catch (error) {
        console.error("Error fetching program list", error);
        toast.error("Gagal memuat daftar program.");
      }
    };

    fetchDataProgram();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!session) {
      toast.error("Anda harus login terlebih dahulu.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LINK_API}/skill/program/${idProgram}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Skill berhasil dibuat.");
      setTimeout(() => {
        router.push('/dashboard/admin/events');
      }, 3000);
    } catch (error) {
      console.error("Error submitting skill data", error);
      toast.error("Gagal mengirim data. Silakan coba lagi.");
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
            Create Skill
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
          {/* Pilih Program */}
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Pilih Program
            </label>
            <select
              required
              value={idProgram}
              onChange={(e) => setIdProgram(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            >
              <option value="" disabled>
                Pilih program
              </option>
              {program.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Title
            </label>
            <input
              type="text"
              value={title}
              required
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Description
            </label>
            <textarea
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary py-3 text-center text-white transition hover:bg-primary-dark disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Kirim Skill'}
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default CreateSkill;
