"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Modal from "react-modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function RegisterMagang() {
  const [jenjang, setJenjang] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [nomorInduk, setNomorInduk] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [nomorIndukError, setNomorIndukError] = useState<string>('');
  const [nama, setNama] = useState<string>('');
  const [noHp, setNoHp] = useState<string>('');
  const [jurusan, setJurusan] = useState<string>('');
  const [instansi, setInstansi] = useState<string>('');
  const [mulaiMagang, setMulaiMagang] = useState<string>('');
  const [akhirMagang, setAkhirMagang] = useState<string>('');
  const [alasanMagang, setAlasanMagang] = useState<string>('');
  const [suratMagang, setSuratMagang] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.endsWith('@gmail.com')) {
      setEmailError('Email harus menggunakan @gmail.com');
    } else {
      setEmailError('');
    }
  };

  const handleNomorIndukChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^\d+$/.test(value)) {
      setNomorIndukError('Nomor Induk harus berupa angka');
    } else {
      setNomorIndukError('');
    }
    setNomorInduk(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('email', email);
    formData.append('no_induk', nomorInduk);
    formData.append('no_hp', noHp);
    formData.append('jurusan', jurusan);
    formData.append('jenjang', jenjang);
    formData.append('instansi', instansi);
    formData.append('surat_magang', suratMagang as Blob);
    formData.append('mulai_magang', mulaiMagang);
    formData.append('akhir_magang', akhirMagang);
    formData.append('alasan_magang', alasanMagang);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/magang', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Pendaftaran berhasil!');
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      toast.error('Pendaftaran gagal. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };
  return (
    <>
      <div className='bg-blue-500 py-12'>
        <h1 className='text-center text-lg pt-10 font-semibold text-white mb-10'>Pendaftaran Magang Dinas Komunikasi dan Informatika</h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-col bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg max-w-6xl w-full p-8 overflow-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <h2 className="text-xl font-bold text-white text-center mb-4 md:mb-0">Pengisian Data Diri</h2>
                <Link href="/" className="text-white px-3 py-2 bg-blue-700 rounded-full">Go back Home</Link>
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Nama</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Email</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">No Hp</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="text"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Jurusan</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="text"
                      value={jurusan}
                      onChange={(e) => setJurusan(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">No Induk Mahasiswa/Siswa</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="text"
                      value={nomorInduk}
                      onChange={handleNomorIndukChange}
                      required
                    />
                    {nomorIndukError && <p className="text-red-500 text-xs italic">{nomorIndukError}</p>}
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Jenjang</label>
                    <select
                      value={jenjang}
                      onChange={(e) => setJenjang(e.target.value)}
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      required
                    >
                      <option value="">Pilih Jenjang</option>
                      <option value="siswa">SMK/SMA Sederajat</option>
                      <option value="mahasiswa">S1/D3/D4 Sederajat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Instansi</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="text"
                      value={instansi}
                      onChange={(e) => setInstansi(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Pengisian Data Magang</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Mulai Magang</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="date"
                      value={mulaiMagang}
                      onChange={(e) => setMulaiMagang(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Akhir Magang</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="date"
                      value={akhirMagang}
                      onChange={(e) => setAkhirMagang(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Surat Pengantar Magang</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 w-full"
                      type="file"
                      onChange={(e) => setSuratMagang(e.target.files?.[0] || null)}
                      required
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <label className="block text-white text-sm text-center font-bold mb-2">Alasan Magang</label>
                    <textarea
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 mx-auto py-4 px-6 w-full h-40"
                      value={alasanMagang}
                      onChange={(e) => setAlasanMagang(e.target.value)}
                      required
                    />
                  </div>
                </div>


              </div>
              <div className="flex justify-center">
                <button
                  className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                    isLoading ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Daftar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Terima Kasih</h2>
          <p className=' text-red text-md'>SILAHKAN VERIFIKASI  EMAIL ANDA MELALUI EMAIL YANG DI KIRIM, DALAM KURUN 1 JAM !</p>
          <p className=' text-red text-md'>Jika sudah lewat 1 jam, harap register lagi!</p>
          <p>Dan Terima kasih atas pendaftaran nya. Silahkan tunggu informasi selanjutnya di email yang telah anda berikan</p>
          <button
            onClick={handleCloseModal}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </Modal>

      <ToastContainer />
    </>
  );
}
