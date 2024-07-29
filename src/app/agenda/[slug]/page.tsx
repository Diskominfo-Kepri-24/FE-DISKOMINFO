import ShareButton from "@/app/ShareButton";
import { FaCalendar } from "react-icons/fa";

export default function DetailAgenda() {
  return (
    <div className="bg-slate-50 pt-20">
            {/* BREADCRUMB */}
            <div className="container mx-auto px-10 pt-12 pb-12">
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
            <div className='px-20 pb-10'>
                <h1 className='font-bold text-2xl text-gray-700 mb-3'>
                    Pekan Olahraga Pelajar Daerah (POPDA) IX Kepulauan Riau 2024
                </h1>
                <div className='flex flex-col justify-center md:flex-row md:justify-between'>
                    <div className='flex items-center font-bold text-md mb-5 text-gray-700'>
                        <FaCalendar className='mr-2' /> 
                        Tanggal : 23 Juli, 15:00 - 27 Juli, 20:00
                    </div>
                    <ShareButton />
                </div>
            </div>


            <div className="bg-white">
                    <div className="container mx-auto px-10 mb-12 py-8 grid grid-cols-1 md:grid-cols-5">
                        <div className="col-span-3">

                        <p className="mb-2 text-gray-900 text-sm">Perlombaan Pekan Olahraga Pelajar Daerah (POPDA) IX Kepulauan Riau 2024 diadakan di Kota Batam </p>
                        <p className="mb-2 text-gray-900 text-sm">Pekan Olahraga Pelajar Daerah (POPDA) IX akan dilaksanakan pada tanggal 23 - 27 Juli 2024 </p>
                        <p className="mb-2 text-gray-900 text-sm">Pekan Olahraga Pelajar Daerah (POPDA) IX akan terdiri dari 10 Cabang Olahraga yaitu Atletik, Bola Basket, Bola Voli, Bulutangkis, Pencak Silat, Renang, Sepak Bola, Sepak Takraw, Tenis Lapangan, Tenis Meja </p>
                        
                        <div>
                            <h1 className="font-bold text-gray-900 mt-8 mb-5">Poster Event :</h1>
                            <div className="w-full h-full relative">
                                <img 
                                    src="https://dispora.kepriprov.go.id/resources/media/a31f1e7d1bab948720ce9e589c6dc706.jpg" 
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
  )
}
