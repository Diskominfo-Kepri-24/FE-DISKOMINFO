"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Modal from "react-modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterMagang() {
  const [jenjang, setJenjang] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [nomorInduk, setNomorInduk] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [nomorIndukError, setNomorIndukError] = useState<string>('');
  const [nama, setNama] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [noHp, setNoHp] = useState<string>('');
  const [jurusan, setJurusan] = useState<string>('');
  const [instansi, setInstansi] = useState<string>('');
  const [mulaiMagang, setMulaiMagang] = useState<string>('');
  const [akhirMagang, setAkhirMagang] = useState<string>('');
  const [alasanMagang, setAlasanMagang] = useState<string>('');
  const [motivasiMagang, setMotivasiMagang] = useState<string>('');
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

    if (password !== confirmPassword) {
      toast.error('Password dan Confirm Password tidak sesuai');
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('no_induk', nomorInduk);
    formData.append('no_hp', noHp);
    formData.append('jurusan', jurusan);
    formData.append('jenjang', jenjang);
    formData.append('instansi', instansi);
    formData.append('surat_magang', suratMagang as Blob);
    formData.append('mulai_magang', mulaiMagang);
    formData.append('akhir_magang', akhirMagang);
    formData.append('alasan_magang', alasanMagang);
    formData.append('motivasi_magang', motivasiMagang);

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
                <h2 className="text-xl font-bold text-white text-center mb-4">Pengisian Data Diri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Nama</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Email</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Password</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Confirm Password</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">No Hp</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="text"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Jurusan</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="text"
                      value={jurusan}
                      onChange={(e) => setJurusan(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">No Induk Mahasiswa/Siswa</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
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
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      required
                    >
                      <option value="">Pilih Jenjang</option>
                      <option value="smk">SMK/SMA Sederajat</option>
                      <option value="s1">S1/D3/D4 Sederajat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Instansi</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="text"
                      value={instansi}
                      onChange={(e) => setInstansi(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white text-center mb-4">Pengisian Data Magang</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Mulai Magang</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="date"
                      value={mulaiMagang}
                      onChange={(e) => setMulaiMagang(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Akhir Magang</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="date"
                      value={akhirMagang}
                      onChange={(e) => setAkhirMagang(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Surat Pengantar Magang</label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      type="file"
                      onChange={(e) => setSuratMagang(e.target.files?.[0] || null)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Alasan Magang</label>
                    <textarea
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      value={alasanMagang}
                      onChange={(e) => setAlasanMagang(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">Motivasi Magang</label>
                    <textarea
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
                      value={motivasiMagang}
                      onChange={(e) => setMotivasiMagang(e.target.value)}
                      required
                    />
                  </div>
                  
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className={`bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
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
          <p>Terima kasih atas pendaftaran nya. Silahkan tunggu konfirmasi tentang kelanjutan magang di email yang telah anda berikan.</p>
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
