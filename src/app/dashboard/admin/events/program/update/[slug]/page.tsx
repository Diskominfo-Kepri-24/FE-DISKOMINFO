"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProgram = () => {
  const { data: session } = useSession();
  const params = useParams();
  const slug = params.slug as string;
  const [slugProgram, setSlugProgram] = useState('');
  const [judul, setJudul] = useState('');
  const [jadwal, setJadwal] = useState('');
  const [jamProgramDimulai, setJamProgramDimulai] = useState('');
  const [tipeModul, setTipeModul] = useState('');
  const [tipeMentoring, setTipeMentoring] = useState('');
  const [tipePembelajaran, setTipePembelajaran] = useState('');
  const [deskripsiSertifikat, setDeskripsiSertifikat] = useState('');
  const [tipeProgram, setTipeProgram] = useState('');
  const [linkPendaftaran, setLinkPendaftaran] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
//   console.log(jadwal);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/program/${slug}`);
        // console.log(response);
        const program = response.data.program;
  
        setSlugProgram(program.slug);
        setJudul(program.title);
        setJadwal(program.jadwal.split(' ')[0]);
        setJamProgramDimulai(program.jam_program_dimulai);
        setTipeModul(program.tipe_modul);
        setTipeMentoring(program.tipe_mentoring);
        setTipePembelajaran(program.tipe_pembelajaran);
        setDeskripsiSertifikat(program.deskripsi_sertifikat);
        setTipeProgram(program.tipe_program);
        setLinkPendaftaran(program.link_pendaftaran);
        setDescription(program.description);
        setCategory(program.category);
      } catch (err) {
        console.error('Error fetching data:', err);
        toast.error('Gagal mendapatkan data program.');
      }
    };

    fetchData();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!session) {
      toast.error('Anda harus login terlebih dahulu.');
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('slug', slugProgram);
      formData.append('title', judul);
      formData.append('jadwal', jadwal);
      formData.append('jam_program_dimulai', jamProgramDimulai);
      formData.append('tipe_modul', tipeModul);
      formData.append('tipe_mentoring', tipeMentoring);
      formData.append('tipe_pembelajaran', tipePembelajaran);
      formData.append('deskripsi_sertifikat', deskripsiSertifikat);
      formData.append('tipe_program', tipeProgram);
      formData.append('link_pendaftaran', linkPendaftaran);
      formData.append('description', description);
      formData.append('category', category);
      if (gambar) {
        formData.append('image', gambar);
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_LINK_API}/program/${slug}`, formData, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      toast.success('Program berhasil diperbaharui!');
      setTimeout(() => {
        router.push('/dashboard/admin/events');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Terjadi kesalahan saat mengirim program.');
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
            Update Program
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Slug
            </label>
            <input
              type="text"
              value={slugProgram}
              onChange={(e) => setSlugProgram(e.target.value)}
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
              Jadwal
            </label>
            <input
              type="date"
              value={jadwal}
              onChange={(e) => setJadwal(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Jam Program Dimulai
            </label>
            <input
              type="text"
              value={jamProgramDimulai}
              onChange={(e) => setJamProgramDimulai(e.target.value)}
              placeholder="10:00 - 12:00"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Tipe Modul
            </label>
            <input
              type="text"
              value={tipeModul}
              onChange={(e) => setTipeModul(e.target.value)}
              placeholder="24 Jam Bisa di Akses Modul"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Tipe Mentoring
            </label>
            <input
              type="text"
              value={tipeMentoring}
              onChange={(e) => setTipeMentoring(e.target.value)}
              placeholder="Senin - Sabtu: Flexible Time"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Tipe Pembelajaran
            </label>
            <input
              type="text"
              value={tipePembelajaran}
              onChange={(e) => setTipePembelajaran(e.target.value)}
              placeholder="E-Learning atau Campuran"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Deskripsi Sertifikat
            </label>
            <input
              type="text"
              value={deskripsiSertifikat}
              onChange={(e) => setDeskripsiSertifikat(e.target.value)}
              placeholder="Contoh: Sertifikat Kelulusan"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Tipe Program
            </label>
            <select
              value={tipeProgram}
              onChange={(e) => setTipeProgram(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            >
              <option value="" disabled>
                Pilih tipe program
              </option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Link Pendaftaran
            </label>
            <input
              type="text"
              value={linkPendaftaran}
              onChange={(e) => setLinkPendaftaran(e.target.value)}
              placeholder="Contoh: https://example.com"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Deskripsi Program
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi Program"
              className="w-full h-32 rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Kategori
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Contoh: Sertifikat"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Gambar Program (Opsional)
            </label>
            <input
              type="file"
              onChange={(e) => setGambar(e.target.files?.[0] || null)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white transition hover:bg-opacity-90 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Memproses...' : 'Update Program'}
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default UpdateProgram;
