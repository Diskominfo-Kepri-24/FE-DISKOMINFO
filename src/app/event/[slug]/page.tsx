import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import { IoBookSharp } from "react-icons/io5";
import { FaLinkedin } from 'react-icons/fa';
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


            <div className="bg-white mt-10">   
                    {/* SECTION HEADER */}
                <div className="container mx-auto px-10 py-12 ">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                            Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h1>
                            <p className="text-sm font-normal text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <div className="w-full max-w-xs md:max-w-sm">
                            <Image
                                src="/program/program-1.avif"
                                alt="Logo"
                                layout="responsive"
                                width={100}
                                height={48}
                                className="object-cover w-full h-full rounded-2xl"
                            />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-5 mt-16 gap-5">
                        <div className="md:col-span-4">
                            <div>
                                <h1 className="text-center font-semibold text-lg text-gray-800">Apa Yang Kamu Kuasai</h1>
                                    <div>
                                        <section className="text-gray-700">
                                        <div className="container px-5 py-16 mx-auto">
                                            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                            <div className="w-full lg:w-1/2 px-4 py-2">
                                                <details className="group mb-4 bg-gray-200 p-5 rounded-md">
                                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold px-2 py-2">
                                                    <div className="flex items-center">
                                                    <IoBookSharp className="text-white bg-blue-500 rounded-full px-2 w-12 h-9" />
                                                    <span className="mx-3 text-sm text-slate-900">How Long is this site live?</span>
                                                    </div>
                                                    <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                    </span>
                                                </summary>
                                                <p className="group-open:animate-fadeIn mt-3 px-2 text-justify text-sm text-slate-900">
                                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.
                                                </p>
                                                </details>
                                                <details className="group mb-4 bg-gray-200 p-5 rounded-md">
                                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold px-2 py-2">
                                                    <div className="flex items-center">
                                                    <IoBookSharp className="text-white bg-blue-500 rounded-full px-2 w-12 h-9" />
                                                    <span className="mx-3 text-sm text-slate-900">Can I install/upload anything I want on there?</span>
                                                    </div>
                                                    <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                    </span>
                                                </summary>
                                                <p className="group-open:animate-fadeIn mt-3 px-2 text-justify text-sm text-slate-900">
                                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.
                                                </p>
                                                </details>
                                                <details className="group mb-4 bg-gray-200 p-5 rounded-md">
                                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold px-2 py-2">
                                                    <div className="flex items-center">
                                                    <IoBookSharp className="text-white bg-blue-500 rounded-full px-2 w-12 h-9" />
                                                    <span className="mx-3 text-sm text-slate-900">How can I migrate to another site?</span>
                                                    </div>
                                                    <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                    </span>
                                                </summary>
                                                <p className="group-open:animate-fadeIn mt-3 px-2 text-justify text-sm text-slate-900">
                                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.
                                                </p>
                                                </details>
                                            </div>
                                            <div className="w-full lg:w-1/2 px-4 py-2">
                                                <details className="group mb-4 bg-gray-200 p-5 rounded-md">
                                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold px-2 py-2">
                                                    <div className="flex items-center">
                                                    <IoBookSharp className="text-white bg-blue-500 rounded-full px-2 w-12 h-9" />
                                                    <span className="mx-3 text-sm text-slate-900">Can I change the domain you give me?</span>
                                                    </div>
                                                    <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                    </span>
                                                </summary>
                                                <p className="group-open:animate-fadeIn mt-3 px-2 text-justify text-sm text-slate-900">
                                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.
                                                </p>
                                                </details>
                                                <details className="group mb-4 bg-gray-200 p-5 rounded-md">
                                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold px-2 py-2">
                                                    <div className="flex items-center">
                                                    <IoBookSharp className="text-white bg-blue-500 rounded-full px-2 w-12 h-9" />
                                                    <span className="mx-3 text-sm text-slate-900">How many sites I can create at once?</span>
                                                    </div>
                                                    <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                    </span>
                                                </summary>
                                                <p className="group-open:animate-fadeIn mt-3 px-2 text-justify text-sm text-slate-900">
                                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.
                                                </p>
                                                </details>
                                                <details className="group mb-4 bg-gray-200 p-5 rounded-md">
                                                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold px-2 py-2">
                                                    <div className="flex items-center">
                                                    <IoBookSharp className="text-white bg-blue-500 rounded-full px-2 w-12 h-9" />
                                                    <span className="mx-3 text-sm text-slate-900">How can I communicate with you?</span>
                                                    </div>
                                                    <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                    </span>
                                                </summary>
                                                <p className="group-open:animate-fadeIn mt-3 px-2 text-justify text-sm text-slate-900">
                                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.
                                                </p>
                                                </details>
                                            </div>
                                            </div>
                                        </div>
                                        </section>
                                    </div>
                            </div>
                            <div>
                                <h1 className="text-lg text-center font-semibold text-blue-500">Jadwal Bootcamp</h1>
                                <h1 className="text-3xl text-center mt-3 font-semibold text-gray-800">Online Bootcamp . Batch 1</h1>
                                

                                <div className="max-w-4xl mx-auto bg-white rounded-xl mt-10 border border-gray-200 flex flex-col md:flex-row">
                                    <div className="flex-none h-64 w-full md:h-auto md:w-1/4">
                                        <div className="relative h-full w-full">
                                        <Image
                                            src="/program/jadwal-program.jpg"
                                            alt="Descriptive alt text"
                                            layout="fill"
                                            className="object-cover  md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none rounded-t-xl "
                                        />
                                        </div>
                                    </div>
                                    <div className="flex-1 p-6">
                                        <div className="flex items-center mb-4 px-2 xl:w-[40%] justify-center   lg:w-[50%] md:w-[70%]  py-1 rounded-full bg-slate-900">
                                        <FiCalendar className="text-white" />
                                        <span className="ml-2 text-sm font-normal text-white">
                                            Tanggal Mulai <span className="ml-1 font-semibold">09 Maret 2024</span>
                                        </span>
                                        </div>
                                        <p className="mb-4 text-gray-600 text-sm">
                                        Dapatkan hasil pembelajaran lebih optimal dengan sesi diskusi tatap muka yang lebih interaktif dan menyenangkan.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-10">
                                        <div className="flex items-center">
                                            <div>
                                            <span className="text-gray-700 font-semibold">Live Session</span>
                                            <p className="text-sm text-gray-500">Minggu: 10:00 - 12:00</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                            <span className="text-gray-700 font-semibold">Mentoring Session</span>
                                            <p className="text-sm text-gray-500">Senin - Sabtu: Flexible Time</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                            <span className="text-gray-700 font-semibold">Self Learning</span>
                                            <p className="text-sm text-gray-500">Senin - Sabtu: Flexible Time</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                            <span className="text-gray-700 font-semibold">Dedicated AI Mentor</span>
                                            <p className="text-sm text-gray-500">24/7 Access</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-24">
                                <h1 className="text-lg text-center font-semibold text-blue-500">Mentor</h1>
                                <h1 className="text-3xl text-center mt-3 font-semibold text-gray-800">Para Mentor Berpengalaman</h1>
                             
                                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10  ">
                                    <li className="col-span-1 flex flex-col  rounded-lg bg-slate-50 text-center shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg">
                                        <div className="rounded-t-lg h-20 overflow-hidden bg-blue-300">
                                        {/* Elemen ini telah diganti dengan warna biru muda */}
                                        </div>
                                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                        <img
                                            className="object-cover object-center h-32"
                                            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                            alt='Woman looking front'
                                        />
                                        </div>
                                        <div className="text-center mt-2">
                                        <h2 className="font-semibold text-gray-800">Sarah Smith</h2>
                                        <p className="text-gray-500 text-sm">Freelance Web Designer</p>
                                        <p className="text-gray-500 text-sm">Pengalaman 5 Tahun</p>
                                        </div>
                                        <div className="p-4   mt-2">
                                        <a href="https://linkedin.com" className="w-full inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full text-center justify-center hover:bg-blue-600">
                                            <FaLinkedin className="mr-2 text-xl" />
                                            <span className="text-sm">Lihat LinkedIn</span>
                                        </a>
                                        </div>
                                    </li>
                                    <li className="col-span-1 flex flex-col  rounded-lg bg-slate-50 text-center shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg">
                                        <div className="rounded-t-lg h-20 overflow-hidden bg-blue-300">
                                        {/* Elemen ini telah diganti dengan warna biru muda */}
                                        </div>
                                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                        <img
                                            className="object-cover object-center h-32"
                                            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                            alt='Woman looking front'
                                        />
                                        </div>
                                        <div className="text-center mt-2">
                                        <h2 className="font-semibold text-gray-800">Sarah Smith</h2>
                                        <p className="text-gray-500 text-sm">Freelance Web Designer</p>
                                        <p className="text-gray-500 text-sm">Pengalaman 5 Tahun</p>
                                        </div>
                                        <div className="p-4   mt-2">
                                        <a href="https://linkedin.com" className="w-full inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full text-center justify-center hover:bg-blue-600">
                                            <FaLinkedin className="mr-2 text-xl" />
                                            <span className="text-sm">Lihat LinkedIn</span>
                                        </a>
                                        </div>
                                    </li>
                                    <li className="col-span-1 flex flex-col  rounded-lg bg-slate-50 text-center shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg">
                                        <div className="rounded-t-lg h-20 overflow-hidden bg-blue-300">
                                        {/* Elemen ini telah diganti dengan warna biru muda */}
                                        </div>
                                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                        <img
                                            className="object-cover object-center h-32"
                                            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                                            alt='Woman looking front'
                                        />
                                        </div>
                                        <div className="text-center mt-2">
                                        <h2 className="font-semibold text-gray-800">Sarah Smith</h2>
                                        <p className="text-gray-500 text-sm">Freelance Web Designer</p>
                                        <p className="text-gray-500 text-sm">Pengalaman 5 Tahun</p>
                                        </div>
                                        <div className="p-4   mt-2">
                                        <a href="https://linkedin.com" className="w-full inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full text-center justify-center hover:bg-blue-600">
                                            <FaLinkedin className="mr-2 text-xl" />
                                            <span className="text-sm">Lihat LinkedIn</span>
                                        </a>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>

                            <div className="my-24 border-2 border-gray-300 p-5 rounded-sm">
                                <h1 className="text-lg text-center font-semibold text-blue-500">Sertifikasi</h1>
                                <h1 className="text-3xl text-center mt-3 font-semibold text-gray-800">Sertifikasi Diskominfo Kepri</h1>
                              

                                <img src="https://rakamin.id/images/certificateeaf-fa1ec0ba-8cca-45b3-ad0b-47a10bac10e7.png" alt="" className="mt-5 mx-auto" />
                                <p className="text-center mt-10  text-sm p-5 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusamus repellendus ratione itaque reiciendis omnis vel, ducimus modi, voluptas optio inventore sapiente dolore, illum pariatur! Cupiditate aperiam amet, expedita voluptate, illo ab hic reprehenderit numquam distinctio quisquam minus itaque quo porro rem corporis necessitatibus sint omnis, quos eaque natus dicta!</p>
                                
                                
                                
                            </div>
                        </div>
                        <div className="relative">
                            <div className="max-w-md mx-auto md:col-span-1 md:sticky md:top-32  md:z-50">
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="bg-gray-50 p-4">
                                    <p className="text-gray-700 text-md font-semibold mb-2">Pelatihan Web Development Untuk Pemula Selama 30 Hari</p>
                                    <p className="text-gray-500 text-xs font-normal mb-2">Live Session :</p>
                                    <p className="text-gray-500 text-xs font-normal mb-2">Minggu 10:00 - 12:00</p>
                                    <p className="text-gray-500 text-xs font-normal mb-2">Self Learning :</p>
                                    <p className="text-gray-500 text-xs font-normal mb-2">Flexible Time</p>
                                    <p className="text-gray-500 text-xs font-semibold mb-2">Online Bootcamp</p>
                                    <p className="text-gray-500 text-xs font-semibold mb-2">Offline Kantor Diskominfo Provinsi Kepri</p>
                                    <hr className="h-px bg-gray-200 border-0" />
                                    <a href="#" className="bg-blue-500 text-sm font-semibold text-white w-full text-center py-2 rounded-full inline-block mt-4 transform transition duration-300 hover:bg-blue-600 hover:scale-105">
                                    Daftar Sekarang
                                    </a>
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