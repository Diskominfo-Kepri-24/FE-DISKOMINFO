// components/Pagination.tsx

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-center mb-4">
        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold 
                ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'text-gray-900'} 
                ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </nav>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
          <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of{' '}
          <span className="font-medium">{totalItems}</span> results
        </p>
      </div>
    </div>
  );
}
