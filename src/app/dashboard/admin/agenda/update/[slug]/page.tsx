"use client";
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateAgenda = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [judul, setJudul] = useState('');
  const [slugAgenda, setSlugAgenda] = useState('');
  const [status, setStatus] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalSelesai, setTanggalSelesai] = useState('');
  const [tipeAcara, setTipeAcara] = useState('');
  const [isiAgenda, setIsiAgenda] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [tglEventMulai, setTglEventMulai] = useState('');
  const [tglEventAkhir, setTglEventAkhir] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // New state for handling submit

  useEffect(() => {
    if (slug) {
      // Fetch existing data for the agenda
      axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/agenda/${slug}`)
        .then(response => {
          const agenda = response.data.agenda;
          setJudul(agenda.judul);
          setSlugAgenda(agenda.slug);
          setStatus(agenda.status);
          setTanggalMulai(agenda.tanggal_mulai.split(' ')[0]); // hanya tanggal
          setTanggalSelesai(agenda.tanggal_selesai.split(' ')[0]); // hanya tanggal
          setTipeAcara(agenda.tipe_acara);
          setIsiAgenda(agenda.isi_agenda);
          setTglEventMulai(agenda.tgl_event_mulai.replace(' ', 'T'));
          setTglEventAkhir(agenda.tgl_event_akhir.replace(' ', 'T'));
          // Handle image URL if available
        })
        .catch(err => {
          setError('Failed to fetch data');
          console.error('Error fetching data:', err);
        })
        .finally(() => setLoading(false));
    }
  }, [slug]);


  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Mengganti karakter non-alphanumeric dengan "-"
      .replace(/^-+|-+$/g, ''); // Menghapus "-" di awal dan akhir
  };

  useEffect(() => {
    if (judul) {
      setSlugAgenda(generateSlug(judul));
    }
  }, [judul]);


  const formatDateTime = (dateTimeLocal: string) => {
    const [date, time] = dateTimeLocal.split('T');
    return `${date} ${time}`;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    if (!session) {
      toast.error('Anda harus login terlebih dahulu.');
      setLoading(false);
      return;
    }
    e.preventDefault();
    setIsSubmitting(true); // Set submitting to true
    try {
      // Format dates
      const formattedTglEventMulai = formatDateTime(tglEventMulai);
      const formattedTglEventAkhir = formatDateTime(tglEventAkhir);

      const formData = new FormData();
      formData.append('judul', judul);
      formData.append('slug', slugAgenda);
      formData.append('status', status);
      formData.append('tanggal_mulai', tanggalMulai); // hanya tanggal
      formData.append('tanggal_selesai', tanggalSelesai); // hanya tanggal
      formData.append('tipe_acara', tipeAcara);
      formData.append('isi_agenda', isiAgenda);
      if (gambar) formData.append('gambar', gambar);
      formData.append('tgl_event_mulai', formattedTglEventMulai); // format datetime-local
      formData.append('tgl_event_akhir', formattedTglEventAkhir); // format datetime-local

      await axios.post(`${process.env.NEXT_PUBLIC_LINK_API}/agenda/${slug}`, formData, {
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Agenda berhasil diperbarui!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        router.push('/dashboard/admin/agenda');
      }, 3000);

    } catch (err) {
      toast.error('Gagal memperbarui agenda!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error('Error updating agenda:', err);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  } 
  if (error) return <p>{error}</p>;

  return (
    <DefaultLayout>
      <ToastContainer />
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Update Agenda
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
          
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
              Slug
            </label>
            <input
              type="text"
              value={slugAgenda}
              onChange={(e) => setSlugAgenda(e.target.value)}
              placeholder="Slug"
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
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setGambar(e.target.files[0]);
                }
              }}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Tanggal Event Mulai
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
              Tanggal Event Akhir
            </label>
            <input
              type="datetime-local"
              value={tglEventAkhir}
              onChange={(e) => setTglEventAkhir(e.target.value)}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark"
              disabled={isSubmitting} // Disable button when submitting
            >
              {isSubmitting ? 'Mengirim...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default UpdateAgenda;
