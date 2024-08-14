"use client"
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from './CustomArrow';
import Agenda from "./Agenda";
import { GrArticle } from "react-icons/gr";
import { MdOutlineEventNote } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { FaRegIdCard } from "react-icons/fa";
import { BsFillMortarboardFill } from "react-icons/bs";
import { BiFolderPlus } from "react-icons/bi";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from "next/link";

interface Berita {
  id: string;
  slug: string;
  gambar: string;
  tanggal: string;
  kategori: string;
  judul: string;
}
interface Program {
  id: string;
  slug: string;
  title: string;
  image: string;
 
}
export default function Home() {


  const [dataProgram, setDataProgram] = useState<Program[]>([]);
  const [dataBerita, setDataBerita] = useState<Berita[]>([]);
  // console.log(dataProgram);
  const fetchDataBerita = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/berita`);
      setDataBerita(response.data.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchDataProgram = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/program`);
      // console.log(response.data.program.data);
      setDataProgram(response.data.program.data);
     
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataBerita();
    fetchDataProgram();
  }, []);

  const beritaTerkini = dataBerita.length > 0 ? dataBerita[0] : null;
  const beritaTerbaru = dataBerita.length > 1 ? dataBerita.slice(1, 4) : [];
  const ProgramTerbaru = dataProgram.length > 0 ? dataProgram.slice(0, 4) : [];
  // console.log(dataBerita);
  // console.log(beritaTerkini);
  // console.log(beritaTerbaru);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    
    {/* HERO SECTION */}
    <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover pt-10">
    <div className="container mx-auto flex flex-col items-center">
        <div className="pt-16">
            <Image src="/logo.png" alt="logo" width={120} height={120} />
        </div>
        <div className="text-center pt-10 md:pt-16 pb-7">
            <h1 className="text-lg text-white font-semibold">Selamat Datang Di Portal Website Dinas Komunikasi dan Informatika</h1>
        </div>
        <div className="text-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="/berita">
                <GrArticle className="text-xl mr-2" />  Berita
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="/magang">
                <BsFillMortarboardFill className="text-xl mr-2" />
                Magang
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="/buku-tamu">
                <FaRegIdCard className="text-xl mr-2"/>Buku Tamu
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="/event">
                <MdOutlineEventNote className="text-xl mr-2" />
                Event
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="/gallery">
                <GrGallery className="text-xl mr-2" />Gallery
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="/agenda">
                <BiFolderPlus className="text-xl mr-2" />
                Agenda
                </a>
            </div>
        </div>
        <div className="md:pt-20 lg:pt-32 pt-5 sm:pt-24">
            <button className="bg-blue-500 animate-bounce text-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </div>
    </div>
    </div>

{/* BERITA */}
  <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
              <h2 className="text-center mb-2 md:mb-6 lg:text-3xl font-semibold text-3xl text-gray-800 ">Berita Terbaru</h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Temukan Berita Terbaru Dari OPD Provinsi Kepulauan Riau</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          {beritaTerkini &&(
            <article className="flex flex-col md:items-center lg:items-start gap-4 md:flex-row lg:flex-col lg:gap-6">
                  <a href={`/berita/${beritaTerkini.slug}`} className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-full lg:w-full">
                      <img src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${beritaTerkini.gambar}`} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                  </a>
                  <div> 
                      <h2 className="text-xl font-bold text-gray-800">
                          <a  href={`/berita/${beritaTerkini.slug}`}  className="transition duration-100 hover:text-blue-500 active:text-blue-600">{beritaTerkini.judul}</a>
                      </h2>
                      
                      <span className="text-sm  mr-5"><time dateTime={beritaTerkini.tanggal} className="text-gray-500">
                      {new Date(beritaTerkini.tanggal).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time></span>
                      <span   className="text-sm text-gray-700 px-4 rounded-xl text-center bg-slate-50 hover:bg-slate-100"> {beritaTerkini.kategori}</span>

                  </div>
              </article>
          )}
              
              <div className="grid gap-8">
                {beritaTerbaru.map((item)=>
                <article key={item.id} className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a  href={`/berita/${item.slug}`}className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-24 lg:w-24">
                    <img src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${item.gambar}`} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
                <div className="flex flex-col gap-2">
                    <h2 className="text-md font-bold text-gray-800">
                        <a href={`/berita/${item.slug}`} className="transition duration-100 hover:text-blue-500 active:text-blue-600">{item.judul}</a>
                    </h2>
                    <div className="flex gap-4 ">
                      <span className="text-sm text-gray-400"><time dateTime={item.tanggal} className="text-gray-500">
                      {new Date(item.tanggal).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time></span>
                    <span   className="text-sm text-gray-700 px-4 rounded-xl text-center bg-slate-50 hover:bg-slate-100"> {item.kategori}</span>
                    </div>
                </div>
            </article>
                
                )}
                  
               

              </div>
          </div>
      </div>
      <div className="pt-32 lg:pt-40 pb-10 px-20 text-center">
              <a href="/berita" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="relative">Lihat Semua Berita</span>
        </a>

      </div>

  </div>
 
 {/* PROGRAM */}
 <div className="container mx-auto px-10 py-12">
    <div className="flex items-center flex-col md:flex-row">
        <h1 className="font-semibold text-3xl text-gray-800 pb-10 md:pb-0">Program Unggulan</h1>
        <div className="flex-grow mx-4">
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
        </div>
        <a href="/event" className="relative inline-flex items-center px-8 py-2 overflow-hidden text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50">
            <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-3 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative text-md">Lihat Semua Program</span>
        </a>
    </div>

    <section className="py-6 sm:py-8 lg:py-1">
      <div className="container mx-auto px-4">
        {/* Carousel untuk layar besar */}
        <div className="hidden sm:block">
          <Carousel
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {/* Konten Carousel */}
            {ProgramTerbaru.map((itemProgramTerbaru)=>
            <div key={itemProgramTerbaru.id} className="p-4">
            <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
              <div className="w-full h-32 overflow-hidden rounded-2xl">
                <img src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${itemProgramTerbaru.image}`} alt={itemProgramTerbaru.title}   className="object-cover w-full h-full rounded-t-2xl" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
              {itemProgramTerbaru.title}
              </h3>
              <div className="mt-4">
                <Link href={`/event/${itemProgramTerbaru.slug}`}>
                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                  Selengkapnya
                  <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                </Link>
                
              </div>
            </a>
          </div>
            )}
            
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          
          </Carousel>
        </div>

        {/* Konten untuk layar kecil */}
        <div className="block sm:hidden">
          <div className="flex flex-col items-center">
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="p-4">
              <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-full h-32 overflow-hidden rounded-2xl">
                  <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible hover:cursor-pointer transition-all duration-300">
                  Pelatihan Web Development Untuk Pemula Selama 30 Hari
                </h3>
                <div className="mt-4">
                  <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                    Selengkapnya
                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>




</div>

{/* AGENDA */}
<div className="container mx-auto px-4 pb-12">
      <h1 className="text-center font-semibold text-3xl text-gray-800 mb-4">Event /Agenda</h1>
      <Agenda />
    </div>

    </>
  )
}
