import Image from "next/image";



export default function EventDetail ()
 {

    return(
        <>
        <div className="bg-slate-50 pt-[75px]">
            {/* BREADCRUMB */}
            <div className="container mx-auto px-10 pt-12">
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
                                <a href="/event" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Program Unggulan</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-700 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400">Detail Program</span>
                            </div>
                        </li>
                </ol>
                </nav>
            </div>


            <div className="bg-white mt-10 mb-20">   
                    {/* SECTION HEADER */}
                <div className="container mx-auto px-10 py-12 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800"> Pelatihan Web Development Untuk Pemula Selama 30 Hari</h1>
                                <p className="text-sm font-normal text-gray-400"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit</p>
                            </div>
                            <div className="flex max-w-sm justify-center mx-auto">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-2xl" />
                            </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
                        <div>
                            <div>
                                <h1>Apa Yang Kamu Kuasai</h1>
                            </div>
                            <div>
                                <h1>Jadwal Event</h1>
                            </div>
                            <div>
                                <h1>Tutor dan Mentor</h1>
                            </div>
                            <div>
                                <h1>Sertifikat</h1>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <h1>Card Daftar Events</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}