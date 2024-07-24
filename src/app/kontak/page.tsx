import { FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
export default function Kontak () {

    return (
        <>
        <div className="bg-slate-50">
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
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Kontak Kami</span>
                    </div>
                    </li>
                </ol>
                </nav>
            </div>

            <div className="container mx-auto px-10 mb-12 py-12 bg-white rounded-2xl shadow-lg">
                <h1 className="text-center font-bold text-2xl text-gray-700">Kontak Kami</h1>
                <p className="text-center text-gray-500 text-sm mt-2">Silakan hubungi kami melalui informasi kontak yang tersedia di halaman ini.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                    <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-blue-500 text-2xl" />
                        <div>
                        <h3 className="font-bold text-gray-700">Kontak</h3>
                        <p className='text-sm text-gray-500'>Alamat Email: <a href="kominfo@kepriprov.go.id" className="text-blue-500">kominfo@kepriprov.go.id</a><br />Telepon: <a href="0771-4575023" className='text-blue-500'>0771-4575023</a>  </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaClock className="text-blue-500 text-2xl" />
                        <div>
                        <h3 className="font-bold text-gray-700">Jam Layanan</h3>
                        <p className='text-sm text-gray-500'>Senin s/d Kamis (08:00-16:00), Jumat (08:00-15:00)<br />Sabtu s/d Minggu (Libur)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                        <div>
                        <h3 className="font-bold text-gray-700">Alamat Instansi</h3>
                        <p className='text-sm text-gray-500'>Pusat Pemerintahan Provinsi Kepulauan Riau<br />Istana Kota Piring Gedung Sultan Mahmud Riayat Syah, Dompak,<br />Bukit Bestari, 29124 Tanjungpinang - Kepulauan Riau - Indonesia</p>
                        </div>
                    </div>
                    </div>
                    <div>
                    <iframe
                        className="w-full h-80 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63828.89157304007!2d104.40510237531363!3d0.918446285272658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d90d34974d79fb%3A0xaa3e6af4ffd3ce19!2sRiau%20Islands%20Province%20Communication%20and%20Information%20Office!5e0!3m2!1sen!2sid!4v1721288008146!5m2!1sen!2sid"
                    
                        loading="lazy"
                    ></iframe>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}