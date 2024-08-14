"use client"
import Pagination from '../../../components/Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Berita {
  id: string;
  slug: string;
  gambar: string;
  tanggal: string;
  kategori: string;
  judul: string;
  last_updated: string;
}

export default function Berita() {
  const [dataBerita, setDataBerita] = useState<Berita[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 8;
    // console.log(dataBerita);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/berita`);
      // console.log(response.data.data.data);
      setDataBerita(response.data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredBerita = dataBerita.filter((berita) =>
    berita.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedBerita = filteredBerita.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="bg-slate-50 pt-20">
        {/* BREADCRUMB */}
        <div className="container mx-auto px-10 pt-12">
          {/* ... (breadcrumb code) */}
        </div>

        {/* TITLE SEARCH  */}
        <div className="container mx-auto px-5 sm:px-10 pt-5 pb-12">
          <h1 className="text-2xl font-semibold text-gray-700">
            Publikasi Artikel / Berita Terbaru
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-sm font-normal text-gray-700">
              Dapatkan informasi mengenai berita terbaru dari Dinas Komunikasi dan Informatika Kepri
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 md:mt-0 flex items-center space-x-2"
            >
              <input
                type="text"
                placeholder="Search artikel"
                className="bg-gray-50 w-full md:w-auto px-3 py-1 rounded-full focus:outline-none border border-gray-300 focus:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            {paginatedBerita.map((berita) => (
              <article
                key={berita.id}
                className="flex max-w-xl flex-col items-start justify-between bg-white p-6 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105"
              >
                <a
                  href={`/berita/${berita.slug}`}
                  className="block w-full transform transition-transform duration-300 cursor-pointer"
                >
                  <div className="w-full h-32 overflow-hidden rounded-2xl mb-4">
                    {/* <img
                      src={`http://127.0.0.1:8000/${berita.gambar}`}
                      alt={berita.judul}
                      className="object-cover w-full h-full rounded-2xl"
                    /> */}
                    <img
                      src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${berita.gambar}`}
                      alt={berita.judul}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={berita.tanggal} className="text-gray-500">
                      {new Date(berita.tanggal).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {berita.kategori}
                    </span>
                   
                  </div>
                  <p className='text-xs'>{berita.last_updated}</p>
                  <h3 className="mt-4 text-lg font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 hover:whitespace-normal hover:overflow-visible">
                    {berita.judul}
                  </h3>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={filteredBerita.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
