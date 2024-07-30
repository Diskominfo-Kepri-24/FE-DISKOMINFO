'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import "jsvectormap/dist/jsvectormap.min.css"; // Periksa jalur ini
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

const inter = Inter({ subsets: ['latin'] });
const disableNavbar = ['/login', '/register', '/buku-tamu', '/magang', '/magang/register', '/magang/login', '/magang/register/otp', '/dashboard/mahasiswa', '/dashboard/siswa', '/dashboard/admin', '/auth/login'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname() || ''; // Memberikan nilai default jika pathname adalah null

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body className={`bg-slate-50 ${inter.className}`} suppressHydrationWarning={true}>
        <SessionProvider>
          {
            !disableNavbar.includes(pathname) && !loading && <Navbar />
          }

          {loading ? <Loader /> : children}

          {
            !disableNavbar.includes(pathname) && !loading && <Footer />
          }
        </SessionProvider>
      </body>
    </html>
  );
}
