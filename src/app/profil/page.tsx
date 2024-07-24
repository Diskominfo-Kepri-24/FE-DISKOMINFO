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
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Visi Misi</span>
                    </div>
                    </li>
                </ol>
                </nav>
            </div>
            <div className='px-20 pb-10'>
                <h1 className='font-bold text-3xl text-gray-700 mb-3'>Visi Misi</h1>
                <div className=' flex flex-col justify-center md:flex-row md:justify-between'>
                    <h1 className='font-normal text-3xl mb-5 text-gray-700'>Dinas Komunikasi dan Informatika Kepri</h1>
                    <ShareButton/>
                    
                </div>
            </div>
            <div className="bg-white">
                <div className='px-20 pt-12 pb-32'>
                <h1 className=" font-bold text-3xl text-gray-700">Visi </h1>
                <p className=" text-gray-500 text-md mt-5">“Terwujudnya Kepulauan Riau Yang Makmur, Berdaya Saing Dan Berbudaya”</p>
                <h1 className=" font-bold text-3xl mt-10 text-gray-700">Misi</h1>
                <ul className=' list-decimal text-gray-500 mt-5 ml-5'>
                    <li className='mb-1 text-justify'>Percepatan peningkatan pertumbuhan ekonomi berbasis maritim, berwawasan lingkungan dan keunggulan wilayah untuk peningkatan kemakmuran masyarakat.</li>
                    <li className='mb-1 text-justify'>Mewujudkan kualitas sumber daya manusia yang berkualitas, sehat dan berdaya saing dengan berbasiskan iman dan taqwa.</li>
                    <li className='mb-1 text-justify'>Melaksanakan tata kelola pemerintahan yang bersih, terbuka dan berorientasi pelayanan.</li>
                    <li className='mb-1 text-justify'>Mengembangkan dan melestarikan budaya Melayu dan Nasional dalam mendukung pembangunan berkelanjutan.</li>
                    <li className='mb-1 text-justify'>Mempercepat pembangunan infrastruktur antar pulau guna pengintegrasian dan percepatan pembangunan kawasan pesisir.</li>
                </ul>
                </div>
                
            </div>

        </div>
    </>
    )
}