import React from "react";

export default function Magang() {
  return (
    <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover">
      <div className="flex flex-col md:flex-row text-center items-center md:text-start md:items-start p-4 md:p-8">
        <img src="/logo.png" alt="Logo" className="w-24 mb-4 md:mb-0 text-center" />
        <div className="flex flex-col md:ml-4 mt-4 md:mt-0">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            Halo, Selamat Datang di Website Pelayanan Magang
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-blue-300">
            Dinas Komunikasi dan Informatika Kepulauan Riau
          </h3>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center mt-12 md:mt-24 px-4 md:px-20">
        <div className="text-center md:text-start">
          <h1 className="text-white font-semibold text-xl md:text-2xl mb-4">
            Penerimaan Magang Dinas Komunikasi dan Informatika KEPRI
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <h1 className="text-white font-semibold text-lg mb-4 md:mb-0 md:mr-3">
              Klik Disini Untuk Lanjut Ke Halaman Pendaftaran
            </h1>
            <a
              href="/magang/register"
              className="bg-blue-500 py-2 px-4 rounded-full text-xs font-semibold text-white transition-transform transform hover:scale-105"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
