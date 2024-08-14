"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "next/navigation";

interface Program {
  id: string;
  title: string;
}

const UpdateMentor = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const idParams = params.id as string | undefined; 
  const [program, setProgram] = useState<Program[]>([]);
  const [namaMentor, setNamaMentor] = useState("");
  const [idProgram, setIdProgram] = useState("");
  const [linkedinMentor, setLinkedinMentor] = useState("");
  const [deskripsiMentor, setDeskripsiMentor] = useState("");
  const [fotoMentor, setFotoMentor] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataMentor = async () => {
      if (!idParams || !session) return;
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/mentor/${idParams}`, {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        });
        const dataMentor = response.data.mentor;

        setNamaMentor(dataMentor.nama_mentor);
        setIdProgram(dataMentor.programs[0]?.id || ""); // Set to id, not title
        setLinkedinMentor(dataMentor.link_linkedin);
        setDeskripsiMentor(dataMentor.deskripsi_mentor);
      } catch (error) {
        toast.error("Gagal mengambil data mentor. Silakan coba lagi.");
        console.error("Error fetching mentor data:", error);
      }
    };

    fetchDataMentor();
  }, [idParams, session]);

  useEffect(() => {
    const fetchDataProgram = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/program`);
        setProgram(response.data.program.data);
      } catch (error) {
        toast.error("Gagal mengambil daftar program. Silakan coba lagi.");
        console.error("Error fetching program list:", error);
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
    formData.append("nama_mentor", namaMentor);
    formData.append("program_ids", idProgram);
    formData.append("link_linkedin", linkedinMentor);
    formData.append("deskripsi_mentor", deskripsiMentor);
    if (fotoMentor) {
      formData.append("foto_mentor", fotoMentor);
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_LINK_API}/mentor/${idParams}`, formData, {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Mentor berhasil diperbarui.");
      setTimeout(() => {
        router.push('/dashboard/admin/events');
      }, 3000);
     
    } catch (error) {
      toast.error("Gagal mengirim data. Silakan coba lagi.");
      console.error("Error updating mentor data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">Update Mentor</h3>
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

          {/* Nama Mentor */}
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Nama Mentor
            </label>
            <input
              required
              type="text"
              value={namaMentor}
              onChange={(e) => setNamaMentor(e.target.value)}
              placeholder="Nama Mentor"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Deskripsi Mentor */}
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Deskripsi Mentor
            </label>
            <input
              required
              type="text"
              value={deskripsiMentor}
              onChange={(e) => setDeskripsiMentor(e.target.value)}
              placeholder="Deskripsi Mentor"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* LinkedIn Mentor */}
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              LinkedIn Mentor
            </label>
            <input
              required
              type="text"
              value={linkedinMentor}
              onChange={(e) => setLinkedinMentor(e.target.value)}
              placeholder="LinkedIn Mentor"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Foto Mentor */}
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Foto Mentor
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files && setFotoMentor(e.target.files[0])}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary py-3 text-center text-white transition hover:bg-primary-dark disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Ubah Mentor"}
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default UpdateMentor;
