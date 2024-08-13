"use client"
import ShareButton from "@/app/ShareButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { useParams } from 'next/navigation'; 

export type DataAgenda = {
    id: string;
    judul: string;
    slug: string;
    status: string;
    tanggal_mulai: string;
    tanggal_selesai: string;
    tipe_acara: string;
    isi_agenda: string;
    foto: string;
    tgl_event_mulai: string;
    tgl_event_akhir: string;
    tanggal_event_mulai: string;
    tanggal_event_akhir: string;
};

export default function DetailAgenda() {
    const [agendaData, setAgendaData] = useState<DataAgenda | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams();
    const slugParams = params.slug as string | undefined;

    const fetchAgendaData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/v1/agenda/${slugParams}`);
          setAgendaData(response.data.agenda);
        } catch (err) {
          setError('Failed to fetch data');
          console.error('Error fetching data:', err);
        } finally {
          setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchAgendaData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!agendaData) return <div>No data available</div>;

    return (
        <div className="bg-slate-50 pt-20">
            {/* BREADCRUMB */}
            <div className="container mx-auto px-4 md:px-10 pt-12 pb-12">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-700 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <a href="/agenda" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Agenda</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-700 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400">Detail Agenda</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className='px-4 md:px-20 pb-10'>
                <h1 className='font-bold text-xl md:text-2xl text-gray-700 mb-3'>
                    {agendaData.judul}
                </h1>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex items-center font-bold text-sm md:text-md mb-5 text-gray-700'>
                        <FaCalendar className='mr-2' /> 
                        Tanggal: {agendaData.tanggal_event_mulai} / {agendaData.tanggal_event_akhir}
                    </div>
                    <ShareButton />
                </div>
            </div>

            <div className="bg-white">
                <div className="container mx-auto px-4 md:px-10 mb-12 py-8 grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="col-span-3">
                        <h1 className="font-bold text-lg text-gray-900">Isi Agenda:</h1>
                        <p className="mb-2 text-gray-900 text-sm md:max-w-lg break-words">
                            {agendaData.isi_agenda}
                        </p>
                        
                        <div>
                            <h1 className="font-bold text-gray-900 mt-8 mb-5">Poster Event:</h1>
                            <div className="w-full h-full relative">
                                <img 
                                    src={`http://127.0.0.1:8000/${agendaData.foto}`} 
                                    alt="Event Poster" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2"></div>
                </div>
            </div>
        </div>
    );
}
