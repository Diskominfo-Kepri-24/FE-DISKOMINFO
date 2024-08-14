"use client"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Pagination from '../../../components/Pagination';

interface Program {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
}

export default function Unggulan() {
  const [dataProgram, setDataProgram] = useState<Program[]>([]);
  const [filteredDataProgram, setFilteredDataProgram] = useState<Program[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Set items per page to 8
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDataProgram = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/program`);
        setDataProgram(response.data.program.data);
        setFilteredDataProgram(response.data.program.data);
      } catch (error) {
        console.error('Error fetching program data', error);
      }
    };
    fetchDataProgram();
  }, []);

  useEffect(() => {
    const filtered = dataProgram.filter(programItem =>
      programItem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDataProgram(filtered);
    setCurrentPage(1);
  }, [searchQuery, dataProgram]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDataProgram.slice(indexOfFirstItem, indexOfLastItem);

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
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Program Unggulan</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* TITLE SEARCH */}
        <div className="container mx-auto px-5 sm:px-10 pt-5 pb-12">
          <h1 className="text-2xl font-semibold text-gray-700">Program Unggulan</h1>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-sm font-normal text-gray-700">Dapatkan informasi mengenai program-program dari Dinas Komunikasi dan Informatika Kepri</h1>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search artikel"
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-gray-50 w-full md:w-auto px-3 py-1 rounded-full focus:outline-none border border-gray-300 focus:ring-0"
                name="topic"
              />
            </div>
          </div>
        </div>

        {/* CONTENT CARD */}
        <div className="container mx-auto px-10 pb-12">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none md:grid-cols-3 lg:grid-cols-4">
            {currentItems.map((programItem) => (
              <article key={programItem.id}>
                <a href={`/event/${programItem.slug}`} className="block bg-white w-full max-w-md rounded-2xl shadow-lg p-6 mx-auto border border-transparent hover:border-blue-500 transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                  <div className="w-full h-32 overflow-hidden rounded-2xl">
                    <img src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${programItem.image}`} alt={programItem.title} className="object-cover w-full h-full rounded-t-2xl" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-800 ">
                    {programItem.title}
                  </h3>
                  <p className="hidden group-hover:block mt-2 truncate line-clamp-2 transition-all duration-300">
                    {programItem.description}
                  </p>
                  <div className="mt-4">
                    <Link href={`/event/${programItem.slug}`}>
                      <span className="py-1 px-3 flex font-medium items-center w-36 rounded-xl hover:bg-blue-100 text-sm text-blue-600 hover:text-blue-800">
                        Selengkapnya
                        <svg className="w-3 h-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={filteredDataProgram.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
