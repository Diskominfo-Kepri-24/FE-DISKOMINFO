import { DataMagang } from "@/types/dataMagang";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TablePengajuanMagang = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [dataMagang, setDataMagang] = useState<DataMagang[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);

  useEffect(() => {
    if (session && session.accessToken) {
      const fetchPackages = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/v1/user-magang', {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });
          // Filter hanya yang statusnya pending
          const pendingMagang = response.data.users.filter((user: DataMagang) => user.status === "pending");
          setDataMagang(pendingMagang);
        } catch (error) {
          console.error('Failed to fetch packages:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPackages();
    }
  }, [session]);

  const handleLihatDokumen = (id: string) => {
    router.push(`/dashboard/admin/magang/dokumen/${id}`);
  };

  const handleTerima = async (id: string) => {
    setLoadingAction(id);
    try {
      await axios.put(`http://127.0.0.1:8000/api/v1/user-magang/terima/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      // Update data setelah terima
      setDataMagang(dataMagang.filter(item => item.id !== id));
      toast.success('Pengajuan berhasil diterima!');
    } catch (error) {
      console.error('Failed to accept:', error);
      toast.error('Gagal menerima pengajuan.');
    } finally {
      setLoadingAction(null);
    }
  };

  const handleTolak = async (id: string) => {
    setLoadingAction(id);
    try {
      await axios.put(`http://127.0.0.1:8000/api/v1/user-magang/tolak/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      // Update data setelah tolak
      setDataMagang(dataMagang.filter(item => item.id !== id));
      toast.success('Pengajuan berhasil ditolak!');
    } catch (error) {
      console.error('Failed to reject:', error);
      toast.error('Gagal menolak pengajuan.');
    } finally {
      setLoadingAction(null);
    }
  };

  const confirmAction = (id: string, action: 'terima' | 'tolak') => {
    toast.info(
      <div>
        <p>Apakah Anda yakin ingin {action} pengajuan ini?</p>
        <div className="flex justify-end gap-2">
          <button 
            onClick={() => {
              if (action === 'terima') {
                handleTerima(id);
              } else {
                handleTolak(id);
              }
              toast.dismiss();
            }}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Ya
          </button>
          <button 
            onClick={() => toast.dismiss()} 
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Tidak
          </button>
        </div>
      </div>,
      { autoClose: false, closeOnClick: false }
    );
  };

  return (
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
              <th className="px-4 py-4 font-medium text-dark dark:text-white">
                Lihat Dokumen
              </th>
              <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Tanggal Pengajuan
              </th>
              <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Verifikasi
              </th>
              <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Status
              </th>
              <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {dataMagang.map((item, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === dataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  {index + 1}
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === dataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.nama}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <button
                  onClick={() => handleLihatDokumen(item.id)}
                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Lihat Dokumen
                  </button>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === dataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">
                    {item.created_at.split('T')[0]}
                  </h5>
                </td>

                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === dataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.verifikasi}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === dataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.status}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                    index === dataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-end space-x-3.5">
                    <button 
                    onClick={() => confirmAction(item.id, 'terima')}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                      {loadingAction === item.id ? 'Loading...' : 'Terima'}
                    </button>
                    <button 
                     onClick={() => confirmAction(item.id, 'tolak')}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      {loadingAction === item.id ? 'Loading...' : 'Tolak'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TablePengajuanMagang;
