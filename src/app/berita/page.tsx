import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
export default function Berita () {
    const items = [


        { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
        { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
        { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
      ]
    return (
        <>
        <div className="bg-slate-50">
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
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Berita</a>
                    </div>
                    </li>
                    <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Kategori Berita</span>
                    </div>
                    </li>
                </ol>
                </nav>
            </div>
                {/* TITLE SEARCH  */}
            <div className="container mx-auto px-5 sm:px-10 pt-5 pb-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <h1 className="text-2xl font-semibold text-gray-700">Publikasi Artikel / Berita Terbaru</h1>
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none md:grid-cols-3 lg:grid-cols-4">
                    <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl">
                        
                        <img src="https://images.unsplash.com/photo-1638049846933-10f57e4216ca?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Round Image" className="w-full rounded-2xl mx-auto mb-4"/>
                        
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl">
                        
                        <img src="https://images.unsplash.com/photo-1638049846933-10f57e4216ca?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Round Image" className="w-full rounded-2xl mx-auto mb-4"/>
                        
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl">
                        
                        <img src="https://images.unsplash.com/photo-1638049846933-10f57e4216ca?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Round Image" className="w-full rounded-2xl mx-auto mb-4"/>
                        
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl">
                        
                        <img src="https://images.unsplash.com/photo-1638049846933-10f57e4216ca?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Round Image" className="w-full rounded-2xl mx-auto mb-4"/>
                        
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl">
                        
                        <img src="https://images.unsplash.com/photo-1638049846933-10f57e4216ca?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Round Image" className="w-full rounded-2xl mx-auto mb-4"/>
                        
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl">
                        
                        <img src="https://images.unsplash.com/photo-1638049846933-10f57e4216ca?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Round Image" className="w-full rounded-2xl mx-auto mb-4"/>
                        
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl">
                        
                        <img src="https://images.unsplash.com/photo-1638049846933-10f57e4216ca?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Round Image" className="w-full rounded-2xl mx-auto mb-4"/>
                        
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </div>
                    </article>
                    <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl">
                        
                        <img src="https://images.unsplash.com/photo-1638049846933-10f57e4216ca?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Round Image" className="w-full rounded-2xl mx-auto mb-4"/>
                        
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </div>
                    </article>

                    </div>
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