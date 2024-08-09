import { Package } from "@/types/package";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";



const TablePengajuanMagang = () => {
  const { data: session } = useSession();
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // if (session) {
  //   console.log('Access Token:', session.accessToken);
  //   console.log('User ID:', session.user.userId);
  //   console.log('Email:', session.user.email);
  //   console.log('Nama:', session.user.name);
  //   console.log('Role:', session.user.role);
  // }
  // console.log(packages);
  useEffect(() => {
    if (session && session.accessToken) {
      const fetchPackages = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/v1/user-magang', {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });
          setPackages(response.data.users);
        } catch (error) {
          console.error('Failed to fetch packages:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPackages();
    }
  }, [session]);
  return (
    <div className="rounded-[10px] border mt-4 border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                No
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Nama
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                Lihat Dokumen
              </th>
              <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {packages.map((item, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === packages.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  {index + 1}
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === packages.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.nama}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === packages.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Lihat Dokumen
                  </button>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                    index === packages.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-end space-x-3.5">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                      Terima
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Tolak
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePengajuanMagang;
