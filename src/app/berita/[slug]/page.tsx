"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShareButton from "../../ShareButton";

type DetailBeritaProps = { params: { slug: string[] } };

interface BeritaDetail {
    id: string;
    slug: string;
    gambar: string;
    tanggal: string;
    kategori: string;
    judul: string;
    isi_berita: string; 
}

export default function BeritaDetail(props: DetailBeritaProps) {
    const { slug } = props.params;
    const [beritaDetail, setBeritaDetail] = useState<BeritaDetail | null>(null);

    const getFullImageUrl = (path: string) => {
        return `${process.env.NEXT_PUBLIC_LINK_API_IMAGE}/${path}`;
    };
    
    const formatTanggal = (tanggal: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(tanggal);
        return date.toLocaleDateString('en-US', options);
    };
    // console.log(beritaDetail);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/berita/${slug}`);
                // console.log(response.data.data);
                setBeritaDetail(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [slug]);

    if (!beritaDetail) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="bg-slate-50 pt-[75px]">
                <div className="relative bg-[url('https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-72">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative container mx-auto px-10 pt-5">
                        {/* BREAD CRUMB */}
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <a href="/" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                        </svg>
                                        <a href="/berita" className="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Berita</a>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                        </svg>
                                        <span className="ms-1 text-sm font-medium text-white md:ms-2 dark:text-gray-400">Baca Berita</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        {/* CONTENT */}
                        <div className="mt-10 max-w-screen-md">
                            <h1 className="text-xl md:text-3xl font-bold text-white break-words">
                                {beritaDetail.judul}
                            </h1>
                        </div>

                        <div className="flex flex-col mt-5 md:flex-row md:mt-5 items-center justify-between">
                            <p className="text-sm text-gray-300 mb-5 md:mb-0">{formatTanggal(beritaDetail.tanggal)}</p>
                            <ShareButton />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-12 lg:px-48 py-12">
                    <div className="bg-white rounded-2xl shadow-xl">
                        <main className="relative mx-auto px-10 md:px-10 md:max-w-screen-md">
                            <article className="text-gray-800 py-10">
                                <img src={getFullImageUrl(beritaDetail.gambar)} alt="gambar-1" className="w-full rounded-lg mb-5" />
                                <h2 id="section-one" className="mb-4 text-3xl font-bold">{beritaDetail.judul}</h2>
                            <p className="mb-10 text-gray-600">{beritaDetail.isi_berita}</p>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}


