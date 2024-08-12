import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Pastikan untuk mengimpor toast dari 'react-toastify'
import { useSession } from 'next-auth/react';
export type DataAgenda = {
  id: string;
  judul: string;
  slug: string;
  status: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  tipe_acara: string;
  isi_agenda: string;
  foto: string;
  tgl_event_mulai: string;
  tgl_event_akhir: string;
  tanggal_event_mulai: string;
  tanggal_event_akhir: string;
};

const TableAgenda = () => {
  const router = useRouter();
  const [agendaData, setAgendaData] = useState<DataAgenda[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session } = useSession(); // Mengambil session dari next-auth
  const [deleting, setDeleting] = useState<string | null>(null); // Tambahkan state untuk menangani status penghapusan
  const [error, setError] = useState<string | null>(null);

  const handleCreate = () => {
    router.push("/dashboard/admin/agenda/create");
  };

  const handleUpdate = (slug: string) => {
    router.push(`/dashboard/admin/agenda/update/${slug}`);
  };

  const fetchAgendaData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/agenda');
      setAgendaData(response.data.agenda);
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgendaData();
  }, []);

  const handleDelete = async (slug: string) => {
    if (session?.accessToken) {
      setDeleting(slug); 
      try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/agenda/${slug}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Agenda berhasil dihapus!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setAgendaData(agendaData.filter(item => item.slug !== slug)); // Update UI without reloading
      } catch (error) {
        toast.error('Gagal menghapus agenda!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setDeleting(null); // Reset loading state
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <button
        onClick={handleCreate}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Agenda
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
                  Judul
                </th>
                <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                  Slug
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Status
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Tanggal Mulai Events
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Tanggal Selesai Events
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Tipe Acara
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                  Isi Agenda
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
              {agendaData.map((agendaItem, index) => (
                <tr key={agendaItem.id}>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{agendaItem.judul}</h5>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{agendaItem.slug}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{agendaItem.status}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{agendaItem.tanggal_event_mulai}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{agendaItem.tanggal_event_akhir}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{agendaItem.tipe_acara}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 break-words max-w-lg dark:border-dark-3 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white break-words line-clamp-6">{agendaItem.isi_agenda}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <img
                      src={`http://127.0.0.1:8000/${agendaItem.foto}`}
                      alt={agendaItem.judul}
                      className="w-32 h-auto"
                    />
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 text-center dark:border-dark-3 ${
                      index === agendaData.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                     <div className="flex items-center justify-end space-x-3.5">
                      <button
                        onClick={() => handleUpdate(agendaItem.slug)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(agendaItem.slug)}
                        disabled={deleting === agendaItem.slug} // Disable button while deleting
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      >
                        {deleting === agendaItem.slug ? 'Deleting...' : 'Delete'}
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

export default TableAgenda;
