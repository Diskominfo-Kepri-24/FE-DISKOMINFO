'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })
const disableNavbar= ['/login', '/register','/buku-tamu', '/magang', '/magang/register'];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`bg-slate-50 ${inter.className} `}>
        {
          !disableNavbar.includes(pathname) &&<Navbar/>
        }
        
        {
      children
      }
      
      {
          !disableNavbar.includes(pathname) &&<Footer/>
      }
      </body>
    </html>
  )
}