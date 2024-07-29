"use client"
import React, { useState } from 'react';

export default function RegisterMagang() {
  const [jenjang, setJenjang] = useState('');
  
  // Options for each dropdown
  const sekolahOptions = {
    'smk': ['SMKN 1 Tanjungpinang', 'SMKN 2 Tanjungpinang', 'SMKN 3 Tanjungpinang', 'SMA 1 Tanjungpinang', 'SMA 2 Tanjungpinang'],
    's1': ['Universitas Maritim Raja Ali Haji', 'STISIPOL', 'STIE', 'STTI']
  };

  return (
    <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover flex flex-col">
      <h1 className='text-center text-lg pt-10 font-semibold text-white'>Pendaftaran Magang Dinas Komunikasi dan Informatika</h1>
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col lg:flex-row bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden max-w-6xl w-full h-auto lg:h-5/6">
          <div 
            className="hidden lg:block lg:w-1/3 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}
          ></div>
          <div className="w-full p-8 lg:w-2/3 overflow-auto">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">Nama</label>
                  <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">Nomor Induk Siswa / Mahasiswa</label>
                  <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">Email</label>
                  <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">No Hp</label>
                  <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">Jurusan</label>
                  <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">Jenjang</label>
                  <select
                    value={jenjang}
                    onChange={(e) => setJenjang(e.target.value)}
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  >
                    <option value="">Pilih Jenjang</option>
                    <option value="smk">SMK/SMA Sederajat</option>
                    <option value="s1">S1/D3/D4 Sederajat</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">Pilih Instansi</label>
                  <select
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    disabled={!jenjang}
                  >
                    <option value="">Pilih Universitas/Sekolah</option>
                    {jenjang === 'smk' &&
                      sekolahOptions['smk'].map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))
                    }
                    {jenjang === 's1' &&
                      sekolahOptions['s1'].map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">Password</label>
                  <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2">Confirm Password </label>
                  <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">Sign Up</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="/magang/login" className="text-xs text-white uppercase">Sign In</a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
