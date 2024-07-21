import Image from "next/image";


export default function Home() {
  return (
    <>
    
    {/* HERO SECTION */}
    <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover">
    <div className="container mx-auto flex flex-col items-center">
        <div className="pt-16">
            <Image src="/logo.png" alt="logo" width={120} height={120} />
        </div>
        <div className="text-center pt-10 md:pt-16 pb-10">
            <h1 className="text-lg text-white font-semibold">Selamat Datang Di Portal Website Dinas Komunikasi dan Informatika</h1>
        </div>
        <div className="text-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="">
                    Berita
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="">
                    Magang
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="">
                    Buku Tamu
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="">
                    Pelatihan
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="">
                    Gallery
                </a>
                <a className="group flex h-min items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-3 px-6 bg-blue-500 border-b-blue-700 text-white border-b-4 hover:border-0 hover:text-gray-100 active:bg-blue-800 active:text-gray-300 text-sm sm:text-md dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900" href="">
                    Agenda
                </a>
            </div>
        </div>
        <div className="md:pt-20 lg:pt-32 mt-10">
            <button className="bg-blue-500 animate-bounce text-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </div>
    </div>
    </div>

{/* BERITA */}
  <section className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Berita Terbaru</h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Temukan Berita Terbaru Dari OPD Provinsi Kepulauan Riau</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
              <article className="flex flex-col md:items-center lg:items-start gap-4 md:flex-row lg:flex-col lg:gap-6">
                  <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-full lg:w-full">
                      <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                  </a>
                  <div> 
                      <h2 className="text-xl font-bold text-gray-800">
                          <a href="#" className="transition duration-100 hover:text-blue-500 active:text-blue-600">The Pines and the Mountains</a>
                      </h2>
                      
                      <span className="text-sm text-gray-400 mr-5">April 2, 2022</span>
                      <a  href="" className="text-sm text-gray-700 px-4 rounded-xl text-center bg-slate-50 hover:bg-slate-100">Marketing</a>

                  </div>
              </article>
              <div className="grid gap-8">
                  <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                      <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-24 lg:w-24">
                          <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                      </a>
                      <div className="flex flex-col gap-2">
                          <h2 className="text-md font-bold text-gray-800">
                              <a href="#" className="transition duration-100 hover:text-blue-500 active:text-blue-600">Kunker Hari Kedua Ansar ke Lingga Diakhiri di Penaah, Serahkan Bantuan Rp1,12 Miliar</a>
                          </h2>
                          <div className="flex gap-4 ">
                            <span className="text-sm text-gray-400">April 2, 2022</span>
                            <a  href="" className="text-sm text-gray-700 px-4 rounded-xl text-center  bg-slate-50 hover:bg-slate-100">Marketing</a>
                          </div>
                      </div>
                  </article>
                  <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                      <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-24 lg:w-24">
                          <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                      </a>
                      <div className="flex flex-col gap-2">
                          <h2 className="text-md font-bold text-gray-800">
                              <a href="#" className="transition duration-100 hover:text-blue-500 active:text-blue-600">Kunker Hari Kedua Ansar ke Lingga Diakhiri di Penaah, Serahkan Bantuan Rp1,12 Miliar</a>
                          </h2>
                          <div className="flex gap-4 ">
                            <span className="text-sm text-gray-400">April 2, 2022</span>
                            <a  href="" className="text-sm text-gray-700 px-4 rounded-xl text-center bg-slate-50 hover:bg-slate-100">Marketing</a>
                          </div>
                      </div>
                  </article>
                  <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                      <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-24 lg:w-24">
                          <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                      </a>
                      <div className="flex flex-col gap-2">
                          <h2 className="text-md font-bold text-gray-800">
                              <a href="#" className="transition duration-100 hover:text-blue-500 active:text-blue-600">Kunker Hari Kedua Ansar ke Lingga Diakhiri di Penaah, Serahkan Bantuan Rp1,12 Miliar</a>
                          </h2>
                          <div className="flex gap-4 ">
                            <span className="text-sm text-gray-400">April 2, 2022</span>
                            <a  href="" className="text-sm text-gray-700 px-4 rounded-xl text-center bg-slate-50  hover:bg-slate-100">Marketing</a>
                          </div>
                      </div>
                  </article>

              </div>
          </div>
      </div>
      <div className="pt-32 pb-10 px-20 text-center">
              <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="relative">Lihat Semua Berita</span>
        </a>

      </div>

  </section>
 
 {/* PROGRAM */}
 <div className="container mx-auto px-10 py-12">
    <div className="flex items-center flex-col md:flex-row">
        <h1 className="font-semibold text-3xl text-gray-800 pb-10 md:pb-0">Program Unggulan</h1>
        <div className="flex-grow mx-4">
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
        </div>
        <a href="#_" className="relative inline-flex items-center px-8 py-2 overflow-hidden text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50">
            <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-3 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative text-md">Lihat Semua Program</span>
        </a>
    </div>


<div data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }' className="relative">
  <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
          <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">First slide</span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
          <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Second slide</span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
          <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Third slide</span>
        </div>
      </div>
    </div>
  </div>

  <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10">
    <span className="text-2xl" aria-hidden="true">
      <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
    <span className="sr-only">Previous</span>
  </button>
  <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10">
    <span className="sr-only">Next</span>
    <span className="text-2xl" aria-hidden="true">
      <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
  </button>

  <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
  </div>
</div>

</div>

   
{/* LOKASI */}
  <div className="py-12 px-10">
    <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Lokasi</h1>
    <div className="flex justify-center">
        <div className="w-full max-w-4xl h-[600px]">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63828.89157304007!2d104.40510237531363!3d0.918446285272658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d90d34974d79fb%3A0xaa3e6af4ffd3ce19!2sRiau%20Islands%20Province%20Communication%20and%20Information%20Office!5e0!3m2!1sen!2sid!4v1721288008146!5m2!1sen!2sid" 
                width="800" 
                height="600" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl shadow-2xl"
            ></iframe>
        </div>
    </div>
</div>





    </>
  )
}
