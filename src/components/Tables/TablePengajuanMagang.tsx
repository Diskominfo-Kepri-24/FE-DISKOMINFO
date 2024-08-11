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
  const [filteredDataMagang, setFilteredDataMagang] = useState<DataMagang[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");

  useEffect(() => {
    if (session && session.accessToken) {
      const fetchPackages = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/v1/user-magang', {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });
          const pendingMagang = response.data.users.filter((user: DataMagang) => user.status === "pending");
          setDataMagang(pendingMagang);
          setFilteredDataMagang(pendingMagang);
        } catch (error) {
          console.error('Failed to fetch packages:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPackages();
    }
  }, [session]);

  useEffect(() => {
    let filtered = dataMagang;

    // Filter berdasarkan bulan jika ada yang dipilih
    if (selectedMonth) {
      filtered = filtered.filter(item => {
        const month = new Date(item.created_at).getMonth() + 1; // +1 because getMonth() returns 0-11
        return month === parseInt(selectedMonth);
      });
    }

    // Filter berdasarkan periode jika ada yang dipilih
    if (selectedPeriod) {
      filtered = filtered.filter(item => {
        const month = new Date(item.created_at).getMonth() + 1; // +1 because getMonth() returns 0-11
        if (selectedPeriod === "Januari - Juni") {
          return month >= 1 && month <= 6;
        } else if (selectedPeriod === "Juli - Desember") {
          return month >= 7 && month <= 12;
        }
        return true;
      });
    }

    setFilteredDataMagang(filtered);
  }, [selectedMonth, selectedPeriod, dataMagang]);

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
      <div className="flex justify-end mb-4 space-x-4">
        <select 
          value={selectedMonth} 
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-gray-800 text-black dark:text-white"
        >
          <option value="">Semua Bulan</option>
          <option value="1">Januari</option>
          <option value="2">Februari</option>
          <option value="3">Maret</option>
          <option value="4">April</option>
          <option value="5">Mei</option>
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">Agustus</option>
          <option value="9">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>

        <select 
          value={selectedPeriod} 
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-gray-800 text-black dark:text-white"
        >
          <option value="">Semua Periode</option>
          <option value="Januari - Juni">Januari - Juni</option>
          <option value="Juli - Desember">Juli - Desember</option>
        </select>
      </div>

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
            {filteredDataMagang.map((item, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === filteredDataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  {index + 1}
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === filteredDataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.nama}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === filteredDataMagang.length - 1 ? "border-b-0" : "border-b"
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
                    index === filteredDataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">
                    {item.created_at.split('T')[0]}
                  </h5>
                </td>

                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === filteredDataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.verifikasi}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === filteredDataMagang.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.status}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                    index === filteredDataMagang.length - 1 ? "border-b-0" : "border-b"
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
