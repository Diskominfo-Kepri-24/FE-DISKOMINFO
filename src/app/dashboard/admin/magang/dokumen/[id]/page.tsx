"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react'; 
import { useParams } from 'next/navigation'; 
import { Dokumen } from '@/types/dokumen';
import Link from 'next/link';

const DokumenMagang = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const params = useParams();
  const idParams = params.id as string | undefined; 
  const [dataDokumen, setDataDokumen] = useState<Dokumen | null>(null); // Updated to single object or null
  const [loading, setLoading] = useState(true); 
  const [showDocument, setShowDocument] = useState(false); 

  useEffect(() => {
    if (session && session.accessToken && idParams) {
      const fetchPackages = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/v1/user-magang/${idParams}`, {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });
          setDataDokumen(response.data.magang);
        } catch (error) {
          console.error('Failed to fetch packages:', error);
          toast.error('Gagal memuat data dokumen magang.');
        } finally {
          setLoading(false);
        }
      };

      fetchPackages();
    }
  }, [session, idParams]);

  return (
    <DefaultLayout>
      <ToastContainer />
      <div className=' flex justify-between'>
      <h1 className="font-bold text-dark text-xl dark:text-white ">
          Dokumen Magang
        </h1>
      <Link href={`/dashboard/admin/magang`} className='py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 rounded-full'>Kembali</Link>
      </div>
      
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card p-6 mt-5">
        
       
        {loading ? (
          <p>Loading...</p>
        ) : (
          dataDokumen && (
            <div className="space-y-2">
              <p><strong>Nama:</strong> {dataDokumen.nama}</p>
              <p  ><strong>Email:</strong> {dataDokumen.email}</p>
              <p ><strong>No HP:</strong> {dataDokumen.no_hp}</p>
              <p ><strong>No Induk:</strong> {dataDokumen.no_induk}</p>
              <p ><strong>Instansi:</strong> {dataDokumen.instansi}</p>
              <p ><strong>Jenjang:</strong> {dataDokumen.jenjang}</p>
              <p ><strong>Jurusan:</strong> {dataDokumen.jurusan}</p>
              <p ><strong>Mulai Magang:</strong> {dataDokumen.mulai_magang}</p>
              <p ><strong>Akhir Magang:</strong> {dataDokumen.akhir_magang}</p>
              <p ><strong>Alasan Magang:</strong> {dataDokumen.alasan_magang}</p>
              
              <button 
                onClick={() => setShowDocument(!showDocument)} 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                {showDocument ? "Tutup Surat Magang" : "Lihat Surat Magang"}
              </button>

              {showDocument && (
                <div className="mt-4">
                  <iframe
                    src={`http://127.0.0.1:8000/${dataDokumen.surat_magang}`}
                    title="Surat Magang"
                    className="w-full h-[100vh] border rounded-full"
                  />
                </div>
              )}

            </div>
          )
        )}
      </div>
    </DefaultLayout>
  );
};

export default DokumenMagang;