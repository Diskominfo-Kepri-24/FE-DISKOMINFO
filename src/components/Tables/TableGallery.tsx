"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '../../../components/Pagination'; 

interface Gallery {
  id: string;
  title: string;
  image: string;
}

const TableGallery = () => {
  const [dataGallery, setDataGallery] = useState<Gallery[]>([]);
  const [filteredDataGallery, setFilteredDataGallery] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchDataGallery = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/gallery');
        const allItems = response.data.images;
        setDataGallery(allItems);
        setFilteredDataGallery(allItems);
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
    setCurrentPage(1); // Reset to first page when search query changes
  }, [searchQuery, dataGallery]);

  const handleCreate = () => {
    router.push("/dashboard/admin/gallery/create");
  };

  const handleUpdate = (id: string) => {
    router.push(`/dashboard/admin/gallery/update/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (session?.accessToken) {
      setLoading(id); // Set loading state for the specific id
      try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/gallery/${id}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Gallery berhasil dihapus!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Refresh data after deletion
        const response = await axios.get('http://127.0.0.1:8000/api/v1/gallery');
        setDataGallery(response.data.images);
      } catch (error) {
        toast.error('Gagal menghapus gallery!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setLoading(null); // Reset loading state
      }
    } else {
      toast.error('Session tidak ditemukan!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

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
    <div>
      <ToastContainer />
      <div className="flex justify-between mb-4">
          <button
            onClick={handleCreate}
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Gallery
          </button>
          <input
              type="text"
              placeholder="Search by judul..."
              value={searchQuery}
              onChange={handleSearchChange}
              className=" rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
      </div>
      <div className="rounded-[10px] border mt-4 border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">No</th>
                <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">Judul</th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">Gambar</th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td
                    className={`border-[#eee] max-w-xs px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === currentItems.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === currentItems.length - 1 ? "border-b-0" : "border-b"}`}>
                    <h5 className="text-dark dark:text-white">{item.title}</h5>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === currentItems.length - 1 ? "border-b-0" : "border-b"}`}>
                    <img
                      src={`http://127.0.0.1:8000/${item.image}`}
                      alt={`Gambar Gallery ${item.title}`}
                      className="w-full h-50 object-fit"
                    />
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === currentItems.length - 1 ? "border-b-0" : "border-b"}`}>
                    <div className="flex items-center justify-end space-x-3.5">
                      <button
                        onClick={() => handleUpdate(item.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className={`bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ${loading === item.id ? "cursor-not-allowed" : ""}`}
                        disabled={loading === item.id}
                      >
                        {loading === item.id ? "Loading..." : "Hapus"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={filteredDataGallery.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TableGallery;
