import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
export default function Unggulan () {

    return (
        <>
        <div className="bg-slate-50 pt-20">
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
                    <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Program Unggulan</span>
                    </div>
                    </li>
                </ol>
                </nav>
            </div>
                {/* TITLE SEARCH  */}
            <div className="container mx-auto px-5 sm:px-10 pt-5 pb-12">
            <h1 className='text-2xl font-semibold text-gray-700'>Program Unggulan</h1>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <h1 className="text-sm font-normal text-gray-700">Dapatkan informasi mengenai program-program dari Dinas Komunikasi dan Informatika Kepri </h1>
                    <form className="mt-4 md:mt-0 flex items-center space-x-2">
                    <input 
                        type="text" 
                        placeholder="Search artikel" 
                        className="bg-gray-50 w-full md:w-auto px-3 py-1 rounded-full focus:outline-none border border-gray-300 focus:ring-0" 
                        name="topic"
                    />
                    <button 
                        type="submit" 
                        className="px-3 py-1 rounded-full bg-blue-500 hover:bg-blue-700 text-white font-medium transition ease-in-out duration-150"
                    >
                        Search
                    </button>
                    </form>
                </div>
            </div>


            {/* CONTENT CARD */}
            <div className="container mx-auto px-10 pb-12">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none md:grid-cols-3 lg:grid-cols-4">
                    <article>
                        <a href="/event/1" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full h-32 overflow-hidden rounded-2xl">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                                Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h3>
                            <p className="hidden group-hover:block mt-2  text-ellipsis transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit
                            </p>
                            <div className="mt-4">
                                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                                    Selengkapnya
                                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full h-32 overflow-hidden rounded-2xl">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                                Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h3>
                            <p className="hidden group-hover:block mt-2  text-ellipsis transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit
                            </p>
                            <div className="mt-4">
                                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                                    Selengkapnya
                                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full h-32 overflow-hidden rounded-2xl">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                                Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h3>
                            <p className="hidden group-hover:block mt-2  text-ellipsis transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit
                            </p>
                            <div className="mt-4">
                                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                                    Selengkapnya
                                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full h-32 overflow-hidden rounded-2xl">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                                Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h3>
                            <p className="hidden group-hover:block mt-2  text-ellipsis transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit
                            </p>
                            <div className="mt-4">
                                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                                    Selengkapnya
                                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full h-32 overflow-hidden rounded-2xl">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                                Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h3>
                            <p className="hidden group-hover:block mt-2  text-ellipsis transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit
                            </p>
                            <div className="mt-4">
                                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                                    Selengkapnya
                                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full h-32 overflow-hidden rounded-2xl">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                                Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h3>
                            <p className="hidden group-hover:block mt-2  text-ellipsis transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit
                            </p>
                            <div className="mt-4">
                                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                                    Selengkapnya
                                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full h-32 overflow-hidden rounded-2xl">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                                Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h3>
                            <p className="hidden group-hover:block mt-2  text-ellipsis transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit
                            </p>
                            <div className="mt-4">
                                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                                    Selengkapnya
                                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#" className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full h-32 overflow-hidden rounded-2xl">
                                <Image src="/program/program-1.avif" alt="Logo" layout="responsive" width={100} height={48} className="object-cover w-full h-full rounded-t-2xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                                Pelatihan Web Development Untuk Pemula Selama 30 Hari
                            </h3>
                            <p className="hidden group-hover:block mt-2  text-ellipsis transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vero debitis commodi similique reiciendis fugit
                            </p>
                            <div className="mt-4">
                                <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                                    Selengkapnya
                                    <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>




                        
                    </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col items-center px-4 py-3 sm:px-6">
    <div className="flex flex-1 justify-center mb-4">
        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                1
            </a>
            <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
                2
            </a>
            <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
                3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
            </span>
            <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
                8
            </a>
            <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
                9
            </a>
            <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
                10
            </a>
            <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
                <span className="sr-only">Next</span>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </a>
        </nav>
    </div>
    <div className="text-center">
        <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
        </p>
    </div>
            </div>

        </div>
    </>
    )
}