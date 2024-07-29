'use client'; // Pastikan ini adalah file klien

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });
const disableNavbar = ['/login', '/register', '/buku-tamu', '/magang', '/magang/register', '/magang/login', '/magang/register/otp', '/dashboard/mahasiswa', '/dashboard/admin'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || ''; // Memberikan nilai default jika pathname adalah null

  return (
    <html lang="en">
      <body className={`bg-slate-50 ${inter.className}`}>
        <SessionProvider>
          {
            !disableNavbar.includes(pathname) && <Navbar />
          }
          
          {children}
          
          {
            !disableNavbar.includes(pathname) && <Footer />
          }
        </SessionProvider>
      </body>
    </html>
  );
}
