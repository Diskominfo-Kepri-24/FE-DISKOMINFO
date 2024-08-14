"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Program {
  id: string;
  title: string;
}

const UpdateSkill = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const idParams = params.id as string | undefined; 
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

  useEffect(() => {
    const fetchDataSkill = async () => {
      if (!idParams || !session) return;
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/skill/${idParams}`, {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          }
        });
        const dataSkill = response.data.skill;

        setTitle(dataSkill.title);
        setDescription(dataSkill.description);
        setIdProgram(dataSkill.id_program || "");
      } catch (error) {
        toast.error("Gagal mengambil data skill. Silakan coba lagi.");
        console.error(`Error fetching skill `, error);
      }
    };
    fetchDataSkill();
  }, [idParams, session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!session) {
      toast.error("Anda harus login terlebih dahulu.");
      setIsLoading(false);
      return;
    }

    const formData = {
      title: title,
      description: description,
      id_program: idProgram
    };

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_LINK_API}/skill/${idParams}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Skill berhasil diperbaharui.");
      setTimeout(() => {
        router.push('/dashboard/admin/events');
      }, 3000);
    } catch (error) {
      console.error("Error updating skill data", error);
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
            Update Skill
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
            {isLoading ? 'Loading...' : 'Update Skill'}
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default UpdateSkill;
