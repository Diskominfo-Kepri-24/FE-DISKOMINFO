import React, { useState , useEffect} from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const profil = [
  { name: 'Visi Misi', description: 'Get a better understanding of your traffic', href: '/profil', icon: ChartPieIcon },
  // { name: 'Tugas dan Fungsi', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  // { name: 'Struktur Organisasi', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Informasi Pejabat', description: 'Connect with third-party tools', href: '/informasi-pejabat', icon: SquaresPlusIcon },
  // { name: 'Moto & Lambang', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const program = [
  { name: 'Buku Tamu', description: 'Speak directly to your customers', href: '/buku-tamu', icon: CursorArrowRaysIcon },
  { name: 'Magang', description: 'Get a better understanding of your traffic', href: '/magang', icon: ChartPieIcon },
  { name: 'Event', description: 'Your customers’ data will be safe and secure', href: '/event', icon: FingerPrintIcon },
]
const publikasi = [
  { name: 'Berita', description: 'Get a better understanding of your traffic', href: '/berita', icon: ChartPieIcon },
  { name: 'Gallery', description: 'Speak directly to your customers', href: '/gallery', icon: CursorArrowRaysIcon },
  { name: 'Agenda', description: 'Your customers’ data will be safe and secure', href: '/agenda', icon: FingerPrintIcon },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <header className={`fixed w-full z-20 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-white border-b-4 border-blue-400'}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <Image src={"/logo-diskominfo.svg"} alt='logo' width={250} height={50} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
        <a href="/" className="text-xs hover:bg-blue-50 px-4 py-2 rounded-md hover:text-blue-500 font-semibold leading-6 text-gray-500">
            Beranda
          </a>
          <Popover className="relative">
            <PopoverButton className="flex text-xs hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md focus:outline-none items-center gap-x-1 font-semibold leading-6 text-gray-500">
              Profil
              <ChevronDownIcon aria-hidden="true" className="h-4 w-4 flex-none text-gray-500" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-max max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {profil.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-blue-50"
                  >
                    
                    <div className="flex-auto">
                      
                      <a href={item.href} className="block font-semibold text-xs text-gray-500 ">
                        <ul className='list-disc list-inside'>
                          <li className='hover:text-blue-500'>  {item.name}</li>
                        </ul>
                    
                      </a>
                     
                    </div>
                  </div>
                ))}
              </div>
            
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-xs hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md  focus:outline-none font-semibold leading-6 text-gray-500">
              Program
              <ChevronDownIcon aria-hidden="true" className="h-4 w-4 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-max  max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {program.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-blue-50"
                  >
                    
                    <div className="flex-auto">
                      
                      <a href={item.href} className="block font-semibold text-xs text-gray-500 ">
                        <ul className='list-disc list-inside'>
                          <li className='hover:text-blue-500'>  {item.name}</li>
                        </ul>
                    
                      </a>
                     
                    </div>
                  </div>
                ))}
              </div>
            
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center text-xs gap-x-1  hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md  focus:outline-none font-semibold leading-6 text-gray-500">
              Publikasi
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-max max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {publikasi.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-blue-50"
                  >
                    
                    <div className="flex-auto">
                      
                      <a href={item.href} className="block font-semibold text-xs text-gray-500  ">
                        <ul className='list-disc list-inside'>
                          <li className='hover:text-blue-500'>  {item.name}</li>
                        </ul>
                    
                      </a>
                     
                    </div>
                  </div>
                ))}
              </div>
            
            </PopoverPanel>
          </Popover>


          <a href="/kontak" className="text-xs hover:bg-blue-50 px-4 py-2 rounded-md hover:text-blue-500 font-semibold leading-6 text-gray-500">
            Kontak Kami
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <Image src={"/logo-diskominfo.svg"} alt='logo' width={250} height={50} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                 <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-xs font-semibold leading-7 text-gray-500 hover:bg-blue-50  hover:text-blue-500"
                >
                  Beranda
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xs font-semibold leading-7 text-gray-500 hover:bg-blue-50  hover:text-blue-500">
                  Profil
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...profil].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-xs font-semibold leading-7 text-gray-500 hover:bg-blue-50 hover:text-blue-500"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xs font-semibold leading-7 text-gray-500 hover:bg-blue-50  hover:text-blue-500">
                  Program
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...program].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-xs font-semibold leading-7 text-gray-500 hover:bg-blue-50 hover:text-blue-500"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xs font-semibold leading-7 text-gray-500 hover:bg-blue-50  hover:text-blue-500">
                  Publikasi
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...publikasi].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-xs font-semibold leading-7 text-gray-500 hover:bg-blue-50 hover:text-blue-500"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
               
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-xs font-semibold leading-7 text-gray-500 hover:bg-blue-50  hover:text-blue-500"
                >
                  Kontak Kami
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    
  
    
      
    </>
  )
}
