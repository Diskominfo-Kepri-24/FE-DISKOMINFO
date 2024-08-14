"use client"
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import { IoBookSharp } from "react-icons/io5";
import { FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

interface Program {
    id: string;
    slug: string;
    title: string;
    image: string;
    description: string;
    deskripsi_sertifikat: string;
    jadwal: string;
    link_pendaftaran: string;
    tipe_mentoring: string;
    tipe_modul: string;
    tipe_pembelajaran: string;
    tipe_program: string;
    deskripsi_mentor: string;
    foto_mentor: string;
    link_linkedin: string;
    nama_mentor: string;
    mentors: string;
    skills: string;
    jam_program_dimulai?: string;
    
  }
export default function EventDetail ()
 {
    const [dataProgram, setDataProgram] = useState<Program | null>(null);
    const params = useParams();
    const slug = params.slug as string;
    console.log(dataProgram);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/program/${slug}`);
            
            setDataProgram(response.data.program);
      
          } catch (err) {
            console.error('Error fetching data:', err);
           
          }
        };
    
        fetchData();
      }, [slug]);

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
                {dataProgram ? ( 
                    <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
                    <div>
                        <h1 className="max-w-lg text-xl md:text-2xl font-bold text-gray-800 break-words">
                            {dataProgram.title}
                        </h1>
                        <p className="max-w-lg text-sm font-normal text-gray-400 break-words">
                            {dataProgram.description}
                        </p>
                    </div>
                        <div className="flex justify-center md:justify-end">
                            <div className="w-full max-w-xs md:max-w-sm">
                            <img
                                src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${dataProgram.image}`}
                                alt={dataProgram.title}
                                className="object-cover w-full h-80 object-cover rounded-2xl"
                            />
                            </div>
                        </div>
                    </div>
                    </>
                ) : (
                    <p className="text-gray-500 text-sm">Loading...</p>
                )}


                    <div className="grid grid-cols-1 md:grid-cols-5 mt-16 gap-5">
                        <div className="md:col-span-4">
                             {/* SKILL */}
                            <div>
                                <h1 className="text-center font-semibold text-lg text-gray-800">Apa Yang Kamu Kuasai</h1>
                                    <div>
                                        <section className="text-gray-700">
                                        <div className="container px-5 py-16 mx-auto">
                                            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                                <div className="w-full lg:grid lg:grid-cols-2 lg:gap-4 px-4 py-2">
                                                {dataProgram? (
                                                    dataProgram.skills && dataProgram.skills.length > 0 ? (

                                                        dataProgram.skills.map((skillProgram, index) => (
                                                        <details key={index} className="group mb-4 bg-gray-200 p-5 rounded-md">
                                                            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold px-2 py-2">
                                                                <div className="flex items-center">
                                                                <IoBookSharp className="text-white bg-blue-500 rounded-full px-2 w-12 h-9" />
                                                                <span className="mx-3 text-sm text-slate-900">{skillProgram.title}</span>
                                                                </div>
                                                                <span className="transition group-open:rotate-180">
                                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                                    <path d="M6 9l6 6 6-6"></path>
                                                                </svg>
                                                                </span>
                                                            </summary>
                                                            <p className="group-open:animate-fadeIn mt-3 px-2 text-justify text-sm text-slate-900">
                                                            {skillProgram.description}
                                                            </p>
                                                        </details>
                                                        ))
                                                    
                                                    ) : (
                                                        <p className="text-gray-500 text-sm">No skills available</p>
                                                    )
                                                ) : (
                                                    <p className="text-gray-500 text-sm">Loading...</p>
                                                )}
                                                </div>
                                            </div>
                                        </div>
                                        </section>
                                    </div>
                            </div>
                           {/* ONLINE BOOTCAMP */}
                            <div>
                                {dataProgram ? (
                                    <>
                                     <h1 className="text-lg text-center font-semibold text-blue-500">Jadwal Bootcamp</h1>
                                <h1 className="text-3xl text-center mt-3 font-semibold text-gray-800"> <span className="capitalize">{dataProgram.tipe_program} </span> Bootcamp </h1>
                                

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
                                        <div className="flex items-center mb-4 px-2 xl:w-[60%] justify-center   lg:w-[70%] md:w-full  py-1 rounded-full bg-slate-900">
                                        <FiCalendar className="text-white" />
                                        <span className="ml-2 text-sm font-normal text-white">
                                            Tanggal Mulai <span className="ml-1 font-semibold">{dataProgram.jadwal.split(' ')[0]} Jam : {dataProgram.jam_program_dimulai}</span>
                                        </span>
                                        </div>
                                        <p className="mb-4 text-gray-600 text-sm max-w-lg break-words">
                                        {dataProgram.description}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-10">
                                        <div className="flex items-center">
                                            <div>
                                            <span className="text-gray-700 font-semibold">Live Session</span>
                                            <p className="text-sm text-gray-500">{dataProgram.tipe_pembelajaran}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                            <span className="text-gray-700 font-semibold">Mentoring Session</span>
                                            <p className="text-sm text-gray-500">{dataProgram.tipe_mentoring}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                            <span className="text-gray-700 font-semibold">Self Learning</span>
                                            <p className="text-sm text-gray-500">{dataProgram.tipe_pembelajaran}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                            <span className="text-gray-700 font-semibold">Dedicated AI Mentor</span>
                                            <p className="text-sm text-gray-500">{dataProgram.tipe_modul}</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                    </>
                                   
                                ) : (
                                    <p className="text-gray-500 text-sm">Loading...</p>
                                )}
                                
                            </div>
                            {/* MENTOR */}
                            <div className="my-24">
                                <h1 className="text-lg text-center font-semibold text-blue-500">Mentor</h1>
                                <h1 className="text-3xl text-center mt-3 font-semibold text-gray-800">Para Mentor Berpengalaman</h1>
                             
                                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10 ">

                                    {dataProgram ? (
                                        dataProgram.skills && dataProgram.skills.length > 0 ? (
                                            dataProgram.mentors.map((mentorProgram, index) => (
                                        <li key={mentorProgram.id} className="col-span-1 flex flex-col  rounded-lg bg-slate-50 text-center shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg">
                                        <div className="rounded-t-lg h-20 overflow-hidden bg-blue-300">
                                        
                                        </div>
                                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                        <img
                                            className="object-cover object-center h-32"
                                            src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${mentorProgram.foto_mentor}`}
                                            alt='Woman looking front'
                                        />
                                        </div>
                                        <div className="text-center mt-2">
                                        <h2 className="font-semibold text-gray-800">{mentorProgram.nama_mentor}</h2>
                                        <p className="text-gray-500 text-sm">{mentorProgram.deskripsi_mentor}</p>
                                        
                                        </div>
                                        <div className="p-4   mt-2">
                                        <a href={mentorProgram.link_linkedin} target="_blank" className="w-full inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full text-center justify-center hover:bg-blue-600">
                                            <FaLinkedin className="mr-2 text-xl" />
                                            <span className="text-sm">Lihat LinkedIn</span>
                                        </a>
                                        </div>
                                        </li>

                                        ))) : (
                                            <p className="text-gray-500 text-sm">No Mentor available</p>
                                        )
                                    ): (
                                        <p className="text-gray-500 text-sm">Loading...</p>
                                    )}

                                    
                                </ul>
                            </div>
                            {/* SERTIFIKAT */}
                            <div className="my-24 border-2 border-gray-300 p-5 rounded-sm">
                                <h1 className="text-lg text-center font-semibold text-blue-500">Sertifikasi</h1>
                                <h1 className="text-3xl text-center mt-3 font-semibold text-gray-800">Sertifikasi Diskominfo Kepri</h1>
                              

                                <img src="https://rakamin.id/images/certificateeaf-fa1ec0ba-8cca-45b3-ad0b-47a10bac10e7.png" alt="" className="mt-5 mx-auto" />
                                <p className="text-center mt-10   break-words text-sm p-5 text-gray-500">{dataProgram?.deskripsi_sertifikat}</p>
                                
                                
                                
                            </div>
                        </div>
                        <div className="relative">
                            <div className="max-w-md mx-auto md:col-span-1 md:sticky md:top-32  md:z-50">
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="bg-gray-50 p-4">
                                    {/* Perlu di pasang periksa dataProgram? agar tidak ada pesan error */}
                                {dataProgram ? ( 
                                        <>
                                            <p className="text-gray-700 text-md font-semibold mb-2">{dataProgram.title}</p>
                                            <p className="text-gray-500 text-xs font-normal mb-2">Live Session : {dataProgram.jam_program_dimulai}</p>
                                            <p className="text-gray-500 text-xs font-normal mb-2">Self Learning : {dataProgram.tipe_pembelajaran}</p>
                                            <p className="text-gray-500 text-xs mb-2 font-bold">Tipe Program : {dataProgram.tipe_program}</p>
                                            <hr className="h-px bg-gray-200 border-0" />
                                            <a href={`${dataProgram.link_pendaftaran}`} target="_blank" className="bg-blue-500 text-sm font-semibold text-white w-full text-center py-2 rounded-full inline-block mt-4 transform transition duration-300 hover:bg-blue-600 hover:scale-105">
                                                Daftar Sekarang
                                            </a>
                                        </>
                                    ) : (
                                        <p className="text-gray-500 text-sm">Loading...</p>
                                    )}
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