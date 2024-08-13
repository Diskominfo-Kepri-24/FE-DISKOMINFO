"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAgenda = () => {
  const { data: session } = useSession();
  const [slug, setSlug] = useState('');
  const [judul, setJudul] = useState('');
  const [status, setStatus] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalSelesai, setTanggalSelesai] = useState('');
  const [tipeAcara, setTipeAcara] = useState('');
  const [isiAgenda, setIsiAgenda] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [tglEventMulai, setTglEventMulai] = useState('');
  const [tglEventAkhir, setTglEventAkhir] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Function to format date from 'datetime-local' to 'YYYY-MM-DD HH:MM:SS'
  const formatDateTime = (dateTimeLocal: string) => {
    const [date, time] = dateTimeLocal.split('T');
    return `${date} ${time}:00`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    if (!session) {
      toast.error('Anda harus login terlebih dahulu.');
      setIsLoading(false);
      return;
    }

    // Format dates
    const formattedTglEventMulai = formatDateTime(tglEventMulai);
    const formattedTglEventAkhir = formatDateTime(tglEventAkhir);

    // Buat form data untuk meng-upload file
    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('slug', slug);
    formData.append('status', status);
    formData.append('tanggal_mulai', tanggalMulai);
    formData.append('tanggal_selesai', tanggalSelesai);
    formData.append('tipe_acara', tipeAcara);
    formData.append('isi_agenda', isiAgenda);
    if (gambar) formData.append('gambar', gambar);
    formData.append('tgl_event_mulai', formattedTglEventMulai);
    formData.append('tgl_event_akhir', formattedTglEventAkhir);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_LINK_API}/agenda`, 
        formData,
        { headers: { 
          'Authorization':  `Bearer ${session.accessToken}`,
          'Content-Type': 'multipart/form-data'
        }}
      );
      console.log(response.data);
      toast.success('Agenda berhasil dibuat!');
      setTimeout(() => {
        router.push('/dashboard/admin/agenda');
      }, 3000);
 
    } catch (error) {
      console.error('Error creating agenda:', error);
      toast.error('Terjadi kesalahan saat membuat agenda.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Create Agenda
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
          {/* Fields */}
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
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            >
              <option value="">Pilih Status</option>
              <option value="Belum Selesai">Belum Selesai</option>
              <option value="Sudah Selesai">Sudah Selesai</option>
            </select>
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Tanggal Mulai
            </label>
            <input
              type="date"
              value={tanggalMulai}
              onChange={(e) => setTanggalMulai(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Tanggal Selesai
            </label>
            <input
              type="date"
              value={tanggalSelesai}
              onChange={(e) => setTanggalSelesai(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              tgl_event_mulai
            </label>
            <input
              type="datetime-local"
              value={tglEventMulai}
              onChange={(e) => setTglEventMulai(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              tgl_event_akhir
            </label>
            <input
              type="datetime-local"
              value={tglEventAkhir}
              onChange={(e) => setTglEventAkhir(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Tipe Acara
            </label>
            <select
              value={tipeAcara}
              onChange={(e) => setTipeAcara(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            >
              <option value="">Pilih Tipe Acara</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Isi Agenda
            </label>
            <textarea
              value={isiAgenda}
              onChange={(e) => setIsiAgenda(e.target.value)}
              rows={4}
              placeholder="Isi Agenda"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Gambar
            </label>
            <input
              type="file"
              onChange={(e) => e.target.files && setGambar(e.target.files[0])}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary py-3 text-center text-white transition hover:bg-primary-dark disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Kirim Agenda'}
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default CreateAgenda;
