"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Pembimbing {
  id: string;
  nama: string;
  email: string;
  no_hp: string;
}

const TablePembimbing = () => {
  const [dataPembimbing, setDataPembimbing] = useState<Pembimbing[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();
  const { data: session } = useSession();
  // console.log(dataPembimbing);
  useEffect(() => {
    if (session && session.accessToken) {
      const fetchDataPembimbing = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/pembimbing`, {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });
        
          setDataPembimbing(response.data.data);
        } catch (error) {
          console.error('Error fetching pembimbing list', error);
        }
      };
      fetchDataPembimbing();
  }
  }, [session]);

  const handleCreate = () => {
    router.push("/dashboard/admin/pembimbing/create");
  };

  // const handleUpdate = (id: string) => {
  //   router.push(`/dashboard/admin/pembimbing/update/${id}`);
  // };

  const handleDelete = async (id: string) => {
    if (session?.accessToken) {
      setLoading(id); 
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_LINK_API}/pembimbing/${id}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Pembimbing berhasil dihapus!', {
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
        toast.error('Gagal menghapus Pembimbing!', {
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

  return (
    <div>
      <ToastContainer />
      <button
        onClick={handleCreate}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Pembimbing
      </button>
      <div className="rounded-[10px] border mt-4 border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                <th className=" px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  No
                </th>
                <th className=" px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  Nama
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Email
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  noHp
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {dataPembimbing.map((item, index) => (
                <tr key={item.id}>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === dataPembimbing.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === dataPembimbing.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{item.nama}</h5>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === dataPembimbing.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{item.email}</h5>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === dataPembimbing.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{item.no_hp}</h5>
                  </td>

                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                      index === dataPembimbing.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <div className="flex items-center justify-end space-x-3.5"> 
                      <button
                        onClick={() => handleDelete(item.id)}
                        className={`bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ${
                          loading === item.id ? "cursor-not-allowed" : ""
                        }`}
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
    </div>
  );
};

export default TablePembimbing;
