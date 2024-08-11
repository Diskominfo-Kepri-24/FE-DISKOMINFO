"use client";
import axios from "axios";
import ImageCard from "./ImageCard";
import Pagination from "../../../components/Pagination";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react";

interface Gallery {
  id: string;
  title: string;
  image: string;
}

export default function Gallery() {
  const [dataGallery, setDataGallery] = useState<Gallery[]>([]);
  const [filteredDataGallery, setFilteredDataGallery] = useState<Gallery[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDataGallery = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/gallery');
        setDataGallery(response.data.images);
        setFilteredDataGallery(response.data.images);
      } catch (error) {
        console.error('Error fetching gallery list', error);
      }
    };
    fetchDataGallery();
  }, []);

  useEffect(() => {
    const filtered = dataGallery.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDataGallery(filtered);
    setCurrentPage(1);
  }, [searchQuery, dataGallery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDataGallery.slice(indexOfFirstItem, indexOfLastItem);

  return (
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
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Gallery</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Search Bar */}
      <div className="container mx-auto text-end px-10 pb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by Judul..."
          className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Cards */}
      <div className="container mx-auto px-10 pb-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none md:grid-cols-3 lg:grid-cols-4">
          {currentItems.map((item, index) => (
            <ImageCard key={index} imageUrl={item.image} title={item.title} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={filteredDataGallery.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
