import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '../../../components/Pagination';

interface Berita {
  slug: string,
  judul: string,
  isi_berita: string,
  kategori: string,
  gambar: string
}

const TableBerita = () => {
  const [dataBerita, setDataBerita] = useState<Berita[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchDataBerita = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/berita`);
        setDataBerita(response.data.data.data);
      } catch (error) {
        console.error(`Error fetching berita list`, error);
      }
    }
    fetchDataBerita();
  }, []);

  const handleCreate = () => {
    router.push("/dashboard/admin/berita/create");
  };

  const handleUpdate = (slug: string) => {
    router.push(`/dashboard/admin/berita/update/${slug}`);
  };

  const handleDelete = async (slug: string) => {
    if (session?.accessToken) {
      setLoading(slug);
      try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/berita/${slug}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Berita berhasil dihapus!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        toast.error('Gagal menghapus berita!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setLoading(null);
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Filter data based on search query
  const filteredDataBerita = dataBerita.filter(item =>
    item.judul.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDataBerita = filteredDataBerita.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-between mb-4">
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Berita
        </button>
        <input
          type="text"
          placeholder="Search by judul..."
          value={searchQuery}
          onChange={handleSearch}
          className=" rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="rounded-[10px] border mt-4 border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  No
                </th>
                <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  Slug
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                  Judul
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Isi Berita
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Kategori
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Gambar
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentDataBerita.map((item, index) => (
                <tr key={index}>
                  <td
                    className={`border-[#eee] max-w-xs px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === currentDataBerita.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 max-w-xs dark:border-dark-3 xl:pl-7.5 ${
                      index === currentDataBerita.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{item.slug}</h5>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 max-w-xs dark:border-dark-3 ${
                      index === currentDataBerita.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{item.judul}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 break-words max-w-lg dark:border-dark-3 ${
                      index === currentDataBerita.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white break-words line-clamp-6">{item.isi_berita}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === currentDataBerita.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{item.kategori}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === currentDataBerita.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <img
                      src={`http://127.0.0.1:8000/${item.gambar}`}
                      alt={`Gambar Berita ${item.judul}`}
                      className="w-full h-25 object-fit"
                    />
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                      index === currentDataBerita.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <div className="flex items-center justify-end space-x-3.5">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        onClick={() => handleUpdate(item.slug)}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(item.slug)}
                        className={`bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ${
                          loading === item.slug ? "cursor-not-allowed" : ""
                        }`}
                        disabled={loading === item.slug}
                      >
                        {loading === item.slug ? "Loading..." : "Hapus"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          totalItems={filteredDataBerita.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default TableBerita;
