import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import { useSession } from 'next-auth/react';


interface Program {
  id : string
  slug: string,
  title: string,
  description: string,
  jadwal: string,
  tipe_program: string
  link_pendaftaran: string
  image: string
  category: string
  jam_program_dimulai: string
  deskripsi_sertifikat: string
  tipe_pembelajaran: string
  tipe_mentoring: string
  tipe_modul: string
}
interface Mentor {
  id : string
  nama_mentor: string,
  deskripsi_mentor: string,
  foto_mentor: string,
  link_linkedin: string,
  title : string,
  programs : string,
  
}
interface Skill {
  id : string
  title: string,
  description: string,
  program : string,

}
const TableEvents = () => {

  const [program, setProgram] = useState<Program[]>([]);
  const [mentor, setMentor] = useState<Mentor[]>([]);
  const [skill, setSkill] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  // console.log(program)
  // console.log(mentor);
  // console.log(skill)
  const { data: session } = useSession();
  useEffect(() => {
    const fetchDataProgram = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/program`);
        setProgram(response.data.program.data);
      } catch (error) {
        console.error(`Error fetching program list`, error);
      }
    }
    fetchDataProgram();
  }, []);

  useEffect(() => {
    const fetchDataMentor = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/mentor`,{
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          }
        });
        setMentor(response.data.mentor);
      } catch (error) {
        console.error(`Error fetching mentor`, error);
      }
    }
    fetchDataMentor();
  }, [session]);

  useEffect(() => {
    const fetchDataSkill = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/skill`,{
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          }
        });
        // console.log(response.data.skills);
        setSkill(response.data.skills);
      } catch (error) {
        console.error(`Error fetching skill `, error);
      }
    }
    fetchDataSkill();
  }, [session]);

  const router = useRouter();
  const handleCreateProgram = () => {
    router.push("/dashboard/admin/events/program/create");
  };
  const handleCreateSkill = () => {
    router.push("/dashboard/admin/events/skill/create");
  };
  const handleCreateMentor = () => {
    router.push("/dashboard/admin/events/mentor/create");
  };


  const handleUpdateProgram = (slug: string) => {
    router.push(`/dashboard/admin/events/program/update/${slug}`);
  };
  const handleUpdateSkill = (id :string) => {
    router.push(`/dashboard/admin/events/skill/update/${id}`);
  };
  const handleUpdateMentor = (id: string) => {
    router.push(`/dashboard/admin/events/mentor/update/${id}`);
  };

 

  const handleDeleteProgram = async (slug: string) => {
    if (session?.accessToken) {
      setLoading(slug);
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_LINK_API}/program/${slug}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Program berhasil dihapus!', {
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
        toast.error('Gagal menghapus program!', {
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
  const handleDeleteMentor = async (id: string) => {
    if (session?.accessToken) {
      setLoading(id);
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_LINK_API}/mentor/${id}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Mentor berhasil dihapus!', {
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
        toast.error('Gagal menghapus mentor!', {
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
  const handleDeleteSkill = async (id: string) => {
    if (session?.accessToken) {
      setLoading(id);
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_LINK_API}/skill/${id}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Skill berhasil dihapus!', {
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
        toast.error('Gagal menghapus skill!', {
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

  return (
    <div>
      <button
        onClick={handleCreateProgram}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Program
      </button>
      <button
        onClick={handleCreateMentor}
        className="mb-4 bg-blue-500 mx-3 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Mentor
      </button>
      <button
        onClick={handleCreateSkill}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Skill
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
                Title 
                </th>
                <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                  Slug
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Jadwal
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                jam_program_dimulai
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                tipe_modul
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                tipe_mentoring
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                tipe_pembelajaran
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                deskripsi_sertifikat
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                tipe_program
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                link_pendaftaran
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                description 
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                category 
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                image  
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Aksi  
                </th>
              </tr>
            </thead>
            <tbody>
              {program.map((programItem, index) => (
                <tr key={programItem.id}>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{programItem.title}</h5>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{programItem.slug}</p>
                  </td>

 

                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{programItem.jadwal.split(' ')[0]}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{programItem.jam_program_dimulai}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{programItem.tipe_modul}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{programItem.tipe_mentoring}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{programItem.tipe_pembelajaran}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white break-words max-w-md">{programItem.deskripsi_sertifikat}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{programItem.tipe_program}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white break-words max-w-md">{programItem.link_pendaftaran}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white break-words max-w-md">{programItem.description}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{programItem.category}</p>
                  </td>
                
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${programItem.image}`}
                      alt={programItem.title}
                      className="w-32 h-auto"
                    />
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 text-center dark:border-dark-3 ${
                      index === program.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                     <div className="flex items-center justify-end space-x-3.5">
                      <button
                        onClick={() => handleUpdateProgram(programItem.slug)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteProgram(programItem.slug)}
                        disabled={loading === programItem.slug} // Disable button while deleting
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      >
                        {loading === programItem.slug ? 'Lodading...' : 'Delete'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-[10px] border mt-4 border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                <th className=" px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  No
                </th>
                <th className=" px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Program 
                </th>
                <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                  Title
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                description
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Aksi  
                </th>
              </tr>
            </thead>
            <tbody>
              {skill.map((skillItem, index) => (
                <tr key={skillItem.id}>
              
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === skill.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === skill.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{skillItem.program.title}</h5>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === skill.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{skillItem.title}</h5>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === skill.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{skillItem.description}</h5>
                  </td>
                  
                  <td
                    className={`border-[#eee] px-4 py-4 text-center dark:border-dark-3 ${
                      index === skill.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                     <div className="flex items-center justify-end space-x-3.5">
                      <button
                        onClick={() => handleUpdateSkill(skillItem.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteSkill(skillItem.id)}
                        disabled={loading === skillItem.id} // Disable button while deleting
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      >
                        {loading === skillItem.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-[10px] border mt-4 border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                <th className=" px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  No
                </th>
                <th className=" px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Program 
                </th>
                <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                Nama Mentor 
                </th>
                <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                Deskripsi Mentor
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Link Linkedin
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Foto Mentor 
                </th>
                <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Aksi  
                </th>
              </tr>
            </thead>
            <tbody>
              {mentor.map((mentorItem, index) => (
                <tr key={mentorItem.id}>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === mentor.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                      index === mentor.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <h5 className="text-dark dark:text-white">{mentorItem.programs[0].title}</h5>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === mentor.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{mentorItem.nama_mentor}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === mentor.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{mentorItem.deskripsi_mentor}</p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === mentor.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <p className="text-dark dark:text-white">{mentorItem.link_linkedin}</p>
                  </td>
                 
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                      index === mentor.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${mentorItem.foto_mentor}`}
                      alt={mentorItem.nama_mentor}
                      className="w-32 h-auto"
                    />
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 text-center dark:border-dark-3 ${
                      index === mentor.length - 1 ? "border-b-0" : "border-b"
                    }`}
                  >
                     <div className="flex items-center justify-end space-x-3.5">
                      <button
                        onClick={() => handleUpdateMentor(mentorItem.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteMentor(mentorItem.id)}
                        disabled={loading === mentorItem.id} 
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      >
                        {loading === mentorItem.id ? 'Deleting...' : 'Delete'}
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

export default TableEvents;
