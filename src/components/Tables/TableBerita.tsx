import { Package } from "@/types/package";
import { useRouter } from 'next/navigation';

const packageData: Package[] = [
  {
    name: "Free package",
    price: 0.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Selesai",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Selesai",
  },
  {
    name: "Business Package",
    price: 99.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Belum",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13, 2023`,
    status: "Pending",
  },
];

const TableBerita = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/dashboard/admin/berita/create");
  };

  const handleUpdate = (slug: string) => {
    router.push(`/dashboard/admin/berita/update/judul-1`);
  };

  return (
    <div>
      <button
        onClick={handleCreate}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Berita
      </button>
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
            {packageData.map((packageItem, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  {index + 1}
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">Slug Dummy {index + 1}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">Judul Berita Dummy {index + 1}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">Isi Berita Dummy {index + 1}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">Kategori Dummy {index + 1}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <img src={`https://via.placeholder.com/50`} alt={`Gambar Dummy ${index + 1}`} className="w-10 h-10 object-cover" />
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-end space-x-3.5">
                    <button onClick={handleUpdate} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Hapus
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

export default TableBerita;
