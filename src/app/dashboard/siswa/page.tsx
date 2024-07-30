'use client'; // Pastikan ini adalah file klien

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SiswaDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      return; // Tampilkan loading saat menunggu status sesi
    }
    if (!session || session.user.role !== 'siswa') {
      router.push('/auth/login'); // Redirect ke login jika akses ditolak
    }
  }, [session, status, router]);

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Nonaktifkan redirect otomatis
    router.push('/auth/login'); // Arahkan ke halaman login setelah logout
  };

  if (status === 'loading') {
    return <p>Loading...</p>; // Tampilkan loading saat menunggu status sesi
  }

  if (!session || session.user.role !== 'siswa') {
    return <p>Access Denied</p>; // Tampilkan pesan jika akses ditolak
  }

  return (
    <div>
      <h1>Siswa Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
      <button 
        onClick={handleLogout} 
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default SiswaDashboard;
