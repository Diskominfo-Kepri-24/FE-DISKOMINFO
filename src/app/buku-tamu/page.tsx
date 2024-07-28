"use client"
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';

export default function BukuTamu() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 0);
    const timer2 = setTimeout(() => setShowSecond(true), 2000);
    const timer3 = setTimeout(() => setShowThird(true), 4000);
    const timer4 = setTimeout(() => setShowFour(true), 6000);
    const timer5 = setTimeout(() => setShowLink(true), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <div className="text-center max-w-full px-4">
        {showFirst && (
          <h1 className="font-bold text-sm md:text-2xl text-white mb-4 typing-demo break-words overflow-hidden">
            Jika Anda Memiliki Keperluan 
          </h1>
        )}
        {showSecond && (
          <h1 className="font-bold text-sm md:text-2xl text-white mb-4 typing-demo break-words overflow-hidden">
            Pada Dinas Komunikasi dan Informatika Provinsi Kepulauan Riau
          </h1>
        )}
        {showThird && (
          <h1 className="font-bold text-sm md:text-2xl text-white mb-4 typing-demo break-words overflow-hidden">
            Silahkan Datang Langsung ke Kantor Untuk informasi lebih lanjut,
          </h1>
        )}
        {showFour && (
          <h1 className="font-bold text-sm md:text-2xl text-white mb-10 typing-demo break-words overflow-hidden">
            Melalui Alamat yang telah kami berikan di Kontak Kami
          </h1>
        )}
        {showLink && (
          <a href="/kontak" className='bg-blue-500 px-4 py-2 rounded-full text-xs text-white font-semibold link-fade-in'>
            Kontak Kami
          </a>
        )}
      </div>
    </div>
  );
}
