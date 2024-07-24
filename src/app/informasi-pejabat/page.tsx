import { FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import ShareButton from '../ShareButton';
export default function Profile () {

    return (
        <>
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
                    <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Informasi Pejabat</span>
                    </div>
                    </li>
                </ol>
                </nav>
            </div>
            <div className='px-20 pb-10'>
                <h1 className='font-bold text-3xl text-gray-700 mb-3'>Informasi Pejabat</h1>
                <div className=' flex flex-col justify-center md:flex-row md:justify-between'>
                    <h1 className='font-normal text-3xl mb-5 text-gray-700'>Dinas Komunikasi dan Informatika Kepri</h1>
                    <ShareButton/>
                    
                </div>
            </div>

                <div className="flex items-center justify-center min-h-screen bg-white py-12">
                    <div className="flex flex-col">
                        <div className="flex flex-col mt-4">
                            <div className="container max-w-7xl px-4">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                        <div className="flex flex-col">
                                    
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                            </a>

                                    
                                            <div className="text-center mt-6">
                                            
                                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                HASAN, S.Sos
                                                </h1>

                                            
                                                <div className="text-gray-700 font-light mb-2">
                                                Kepala Dinas Komunikasi dan Informatika Provinsi Kepulauan Riau
                                                </div>

                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    JAMES SIMON PATTIKAWA, SE
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sekretaris Dinas Komunikasi dan Informatika Provinsi Kepulauan Riau
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    DWI ANGGRAINI, SE
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Kepala Bidang Statistik dan Persandian
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    TRIO ANDANA, SH
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Kepala Bidang Komunikasi dan Kehumasan
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    DIDI MADJDI, SE
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Kepala Bidang Pengelolaan dan Layanan Informasi Publik
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    Anoymous
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Kepala Bidang Layanan E-Government dan Teknologi Informasi dan Komunikasi
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    DEWI MASITHOH, S.S., M.Ec. Dev
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Kepala Sub Bagian Umum dan Kepegawaian
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    WENDRAWAN PONTJO PUTRO, S.Sos
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Kepala Sub Bagian Keuangan
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    ASNAL AHMEDI, ST
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Kepala Sub Perencanaan dan Evaluasi
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    DERI NOVERLIAN, S.Kom, M.H
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Infrastruktur dan Teknologi Informasi Komunikasi
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    ANA ROSIANA, S.IP, MM
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Pengelola Data dan Sistem Informasi
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    DONNY FIRMANSYAH, ST
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Keamanan Informasi E-Government dan Persandian
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    APRI SAUT H SIAHAAN, ST
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Tata Kelola dan Pengembangan Ekosistem E-Government
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    SURYANI, S.Pi, M.M
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Pengelolaan Media Komunikasi Publik
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    VETROSIA INDRIA PUTRA, S.Hum
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Pengelolaan Opini Publik
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    LILI HENDRAYANI, S.Sos
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Pengelola Data Statistik
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    UMMIL KHALISH, S.S
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Pengelolaan Informasi Publik
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    BASORUDDIN, S.H.I
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Kehumasan dan Hubungan Media
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    AKHMAD KURNIAWAN PRAMBUDI, S.Kom
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Pengembangan Aplikasi
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                   Anonymous
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Layanan Informasi Publik
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-2/4 md:w-[30%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4">
                                            <div className="flex flex-col">
                                        
                                                <a href="#" className="mx-auto">
                                                    <img className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"/>
                                                </a>

                                        
                                                <div className="text-center mt-6">
                                                
                                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    SUKAESIH, S.Kom, M.M
                                                    </h1>

                                                
                                                    <div className="text-gray-700 font-light mb-2">
                                                    Sub Koordinator Sumber Daya Komunikasi Publik
                                                    </div>

                                            
                                                </div>
                                            </div>
                                    </div>
            
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        </div>
    </>
    )
}