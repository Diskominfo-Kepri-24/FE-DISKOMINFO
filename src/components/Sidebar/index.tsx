"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useSession } from "next-auth/react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  route: string;
  children?: { label: string; route: string }[];
}

interface MenuGroup {
  name: string;
  menuItems: MenuItem[];
}

interface MenuGroups {
  admin: MenuGroup[];
  mahasiswa: MenuGroup[];
  siswa: MenuGroup[];
}

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups: MenuGroups = {
  admin: [
    {
      name: "MAIN MENU",
      menuItems: [
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 15.0001C8 15.0001 9.6 17.0001 12 17.0001C14.4 17.0001 16 15.0001 16 15.0001M3 14.6001V12.1302C3 10.9815 3 10.4071 3.14805 9.87819C3.2792 9.40966 3.49473 8.96898 3.78405 8.5778C4.11067 8.1362 4.56404 7.78358 5.47078 7.07834L8.07078 5.05612C9.47608 3.96311 10.1787 3.4166 10.9546 3.20653C11.6392 3.02116 12.3608 3.02116 13.0454 3.20653C13.8213 3.4166 14.5239 3.96311 15.9292 5.05612L18.5292 7.07834C19.436 7.78358 19.8893 8.1362 20.2159 8.5778C20.5053 8.96898 20.7208 9.40966 20.8519 9.87819C21 10.4071 21 10.9815 21 12.1302V14.6001C21 16.8403 21 17.9604 20.564 18.816C20.1805 19.5687 19.5686 20.1806 18.816 20.5641C17.9603 21.0001 16.8402 21.0001 14.6 21.0001H9.4C7.15979 21.0001 6.03969 21.0001 5.18404 20.5641C4.43139 20.1806 3.81947 19.5687 3.43597 18.816C3 17.9604 3 16.8403 3 14.6001Z" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
          label: "Beranda",
          route: "/dashboard/admin",
        },
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 15C10.1183 15 9.28093 14.8098 8.52682 14.4682C8.00429 14.2315 7.74302 14.1131 7.59797 14.0722C7.4472 14.0297 7.35983 14.0143 7.20361 14.0026C7.05331 13.9914 6.94079 14 6.71575 14.0172C6.6237 14.0242 6.5425 14.0341 6.46558 14.048C5.23442 14.2709 4.27087 15.2344 4.04798 16.4656C4 16.7306 4 17.0485 4 17.6841V19.4C4 19.9601 4 20.2401 4.10899 20.454C4.20487 20.6422 4.35785 20.7951 4.54601 20.891C4.75992 21 5.03995 21 5.6 21H8.4M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
          label: "Pengajuan Magang",
          route: "/dashboard/admin/magang",
        },
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#b0b0b0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 8h2m-2 4h2m0 4H7m0-8v4h4V8H7zM5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path></g></svg>,
          label: "Berita",
          route: "/dashboard/admin/berita",
        },
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M15 8.5C15 8.77614 15.2239 9 15.5 9C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8C15.2239 8 15 8.22386 15 8.5Z" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.25 11C18.25 11.4142 18.5858 11.75 19 11.75C19.4142 11.75 19.75 11.4142 19.75 11H18.25ZM5 15L5.75 15.001V15H5ZM5.19236 17.8391C5.44042 18.1709 5.91043 18.2387 6.24215 17.9906C6.57387 17.7426 6.6417 17.2726 6.39364 16.9409L5.19236 17.8391ZM19.75 11C19.75 10.5858 19.4142 10.25 19 10.25C18.5858 10.25 18.25 10.5858 18.25 11H19.75ZM9 19V18.25H8.99953L9 19ZM6.39474 16.9423C6.1475 16.61 5.67766 16.541 5.34533 16.7883C5.013 17.0355 4.94402 17.5053 5.19126 17.8377L6.39474 16.9423ZM19.5037 11.5556C19.8106 11.2774 19.8339 10.8031 19.5556 10.4963C19.2774 10.1894 18.8031 10.1661 18.4963 10.4444L19.5037 11.5556ZM14.3 15.261L13.7962 14.7053L13.7912 14.71L14.3 15.261ZM13.5394 15.523L13.4778 16.2704L13.4778 16.2704L13.5394 15.523ZM12.832 15.14L13.4242 14.6798L13.4238 14.6793L12.832 15.14ZM10.823 12.559L11.4148 12.0983L11.4137 12.0969L10.823 12.559ZM10.0148 12.1754L9.99929 11.4255L10.0148 12.1754ZM9.223 12.592L8.61373 12.1546L8.61288 12.1558L9.223 12.592ZM5.18288 16.9538C4.94199 17.2908 5.01987 17.7592 5.35683 18.0001C5.6938 18.241 6.16224 18.1631 6.40313 17.8262L5.18288 16.9538ZM19.75 11V9H18.25V11H19.75ZM19.75 9C19.75 6.37665 17.6234 4.25 15 4.25V5.75C16.7949 5.75 18.25 7.20507 18.25 9H19.75ZM15 4.25H9V5.75H15V4.25ZM9 4.25C6.37665 4.25 4.25 6.37665 4.25 9H5.75C5.75 7.20507 7.20508 5.75 9 5.75V4.25ZM4.25 9V15H5.75V9H4.25ZM4.25 14.999C4.24863 16.0227 4.57929 17.0193 5.19236 17.8391L6.39364 16.9409C5.97491 16.3809 5.74907 15.7002 5.75 15.001L4.25 14.999ZM18.25 11V15H19.75V11H18.25ZM18.25 15C18.25 16.7949 16.7949 18.25 15 18.25V19.75C17.6234 19.75 19.75 17.6234 19.75 15H18.25ZM15 18.25H9V19.75H15V18.25ZM8.99953 18.25C7.9733 18.2507 7.00729 17.7657 6.39474 16.9423L5.19126 17.8377C6.08705 19.0417 7.49974 19.751 9.00048 19.75L8.99953 18.25ZM18.4963 10.4444L13.7963 14.7054L14.8037 15.8166L19.5037 11.5556L18.4963 10.4444ZM13.7912 14.71C13.7398 14.7575 13.6708 14.7812 13.601 14.7755L13.4778 16.2704C13.9661 16.3107 14.4489 16.1444 14.8088 15.812L13.7912 14.71ZM13.601 14.7755C13.5313 14.7697 13.4671 14.735 13.4242 14.6798L12.2398 15.6002C12.5405 15.9871 12.9895 16.2302 13.4778 16.2704L13.601 14.7755ZM13.4238 14.6793L11.4148 12.0983L10.2312 13.0197L12.2402 15.6007L13.4238 14.6793ZM11.4137 12.0969C11.0742 11.6629 10.5502 11.4142 9.99929 11.4255L10.0302 12.9252C10.1089 12.9236 10.1838 12.9591 10.2323 13.0211L11.4137 12.0969ZM9.99929 11.4255C9.4484 11.4369 8.93504 11.707 8.61373 12.1546L9.83228 13.0294C9.87818 12.9654 9.95152 12.9268 10.0302 12.9252L9.99929 11.4255ZM8.61288 12.1558L5.18288 16.9538L6.40313 17.8262L9.83313 13.0282L8.61288 12.1558Z" fill="#b0b0b0"></path> </g></svg>,
          label: "Gallery",
          route: "/dashboard/admin/gallery",
        },
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M7 3V5M17 3V5M3 9H21M13.5 13.0001L7 13M10 17.0001L7 17M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
          label: "Agenda",
          route: "/dashboard/admin/agenda",
        },
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 14H12.5M7 10H17M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V8.5M14 20L16.025 19.595C16.2015 19.5597 16.2898 19.542 16.3721 19.5097C16.4452 19.4811 16.5147 19.4439 16.579 19.399C16.6516 19.3484 16.7152 19.2848 16.8426 19.1574L21 15C21.5523 14.4477 21.5523 13.5523 21 13C20.4477 12.4477 19.5523 12.4477 19 13L14.8426 17.1574C14.7152 17.2848 14.6516 17.3484 14.601 17.421C14.5561 17.4853 14.5189 17.5548 14.4903 17.6279C14.458 17.7102 14.4403 17.7985 14.405 17.975L14 20Z" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
          label: "Event",
          route: "/dashboard/admin/events",
        },
      ],
    },
  ],
  mahasiswa: [
    {
      name: "MAHASISWA MENU",
      menuItems: [
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 15.0001C8 15.0001 9.6 17.0001 12 17.0001C14.4 17.0001 16 15.0001 16 15.0001M3 14.6001V12.1302C3 10.9815 3 10.4071 3.14805 9.87819C3.2792 9.40966 3.49473 8.96898 3.78405 8.5778C4.11067 8.1362 4.56404 7.78358 5.47078 7.07834L8.07078 5.05612C9.47608 3.96311 10.1787 3.4166 10.9546 3.20653C11.6392 3.02116 12.3608 3.02116 13.0454 3.20653C13.8213 3.4166 14.5239 3.96311 15.9292 5.05612L18.5292 7.07834C19.436 7.78358 19.8893 8.1362 20.2159 8.5778C20.5053 8.96898 20.7208 9.40966 20.8519 9.87819C21 10.4071 21 10.9815 21 12.1302V14.6001C21 16.8403 21 17.9604 20.564 18.816C20.1805 19.5687 19.5686 20.1806 18.816 20.5641C17.9603 21.0001 16.8402 21.0001 14.6 21.0001H9.4C7.15979 21.0001 6.03969 21.0001 5.18404 20.5641C4.43139 20.1806 3.81947 19.5687 3.43597 18.816C3 17.9604 3 16.8403 3 14.6001Z" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
          label: "Beranda",
          route: "/dashboard/mahasiswa",
        },
        {
          icon:  <svg fill="#b0b0b0" width="24"
          height="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.399 488.399"  xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M127.409,163.369H233.59c14.656,0,26.538-12.097,26.538-26.758c0-14.661-11.882-26.752-26.538-26.752H127.409 c-14.655,0-26.548,12.092-26.548,26.752C100.86,151.271,112.753,163.369,127.409,163.369z"></path> <path d="M127.409,280.066H350.37c14.666,0,26.549-12.098,26.549-26.758c0-14.662-11.883-26.753-26.549-26.753H127.409 c-14.655,0-26.548,12.092-26.548,26.753C100.86,267.969,112.753,280.066,127.409,280.066z"></path> <path d="M360.991,332.999H127.409c-14.655,0-26.548,11.81-26.548,26.469c0,14.661,11.893,26.476,26.548,26.476h233.583 c14.655,0,26.549-11.814,26.549-26.476C387.54,344.809,375.647,332.999,360.991,332.999z"></path> <path d="M355.329,0H86.11C53.259,0,26.753,26.627,26.753,59.467v369.275c0,32.846,26.506,59.657,59.357,59.657h316.18 c32.851,0,59.356-26.812,59.356-59.657V108.929L355.329,0z M402.29,445.709H86.11c-9.424,0-17.241-7.537-17.241-16.966V59.467 c0-9.428,7.817-17.351,17.241-17.351h248.597v47.802c0,21.016,17.029,38.115,38.04,38.33l46.783,0.478v300.017 C419.53,438.172,411.714,445.709,402.29,445.709z"></path> </g> </g> </g></svg>,
          label: "Kelengkapan Dokumen",
          route: "/dashboard/mahasiswa/kelengkapan-dokumen",
        },
        {
          icon:  <svg fill="#b0b0b0" width="24"
          height="24"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m289.7,76.1l55.3,47.8h-55.3v-47.8zm106.9,340.7c-11.3-5.68434e-14-20.5,9.1-20.5,20.4v23h-304.2v-408.4h176.9v92.4c0,11.3 9.2,20.4 20.5,20.4h106.9v122.4c0,11.3 9.2,20.4 20.5,20.4 11.3,0 20.5-9.1 20.5-20.4v-145.6c0-5.9-2.6-11.6-7.1-15.4l-127.4-110c-3.7-3.2-8.5-5-13.4-5h-217.8c-11.3,0-20.5,9.1-20.5,20.4v449.2c0,11.3 9.2,20.4 20.5,20.4h345.2c11.3,0 20.5-9.1 20.5-20.4v-43.4c-0.1-11.3-9.3-20.4-20.6-20.4z"></path> <path d="m305.7,198.9h-162c-11.3,0-20.5,9.1-20.5,20.4s9.2,20.4 20.5,20.4h162.1c11.3,0 20.5-9.1 20.5-20.4s-9.3-20.4-20.6-20.4z"></path> <path d="m305.7,299.4h-162c-11.3,0-20.5,9.1-20.5,20.4 0,11.3 9.2,20.4 20.5,20.4h162.1c11.3,0 20.5-9.1 20.5-20.4-0.1-11.2-9.3-20.4-20.6-20.4z"></path> <path d="m480.9,317.5c-1-11.2-11-19.5-22.2-18.5-46.2,4.1-90.1,54.6-112.7,85.3l-13.3-15.1c-7.5-8.5-20.4-9.3-28.9-1.8-8.5,7.5-9.3,20.4-1.8,28.8l30.7,34.8c12,11.9 25.2,9.7 32.7-2.7 13.4-22.1 60.7-85.4 96.9-88.6 11.3-1.1 19.6-11 18.6-22.2z"></path> </g> </g> </g></svg>,
          label: "Pengajuan Magang",
          route: "/dashboard/mahasiswa/pengajuan-magang",
        },
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 13L10 16L17 9" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> </g></svg>,
          label: "Status Magang",
          route: "/dashboard/mahasiswa/status-magang",
        },
      ],
    },
  ],
  siswa: [
    {
      name: "SISWA MENU",
      menuItems: [
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 15.0001C8 15.0001 9.6 17.0001 12 17.0001C14.4 17.0001 16 15.0001 16 15.0001M3 14.6001V12.1302C3 10.9815 3 10.4071 3.14805 9.87819C3.2792 9.40966 3.49473 8.96898 3.78405 8.5778C4.11067 8.1362 4.56404 7.78358 5.47078 7.07834L8.07078 5.05612C9.47608 3.96311 10.1787 3.4166 10.9546 3.20653C11.6392 3.02116 12.3608 3.02116 13.0454 3.20653C13.8213 3.4166 14.5239 3.96311 15.9292 5.05612L18.5292 7.07834C19.436 7.78358 19.8893 8.1362 20.2159 8.5778C20.5053 8.96898 20.7208 9.40966 20.8519 9.87819C21 10.4071 21 10.9815 21 12.1302V14.6001C21 16.8403 21 17.9604 20.564 18.816C20.1805 19.5687 19.5686 20.1806 18.816 20.5641C17.9603 21.0001 16.8402 21.0001 14.6 21.0001H9.4C7.15979 21.0001 6.03969 21.0001 5.18404 20.5641C4.43139 20.1806 3.81947 19.5687 3.43597 18.816C3 17.9604 3 16.8403 3 14.6001Z" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
          label: "Beranda",
          route: "/dashboard/siswa",
        },
        {
          icon:  <svg fill="#b0b0b0" width="24"
          height="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.399 488.399"  xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M127.409,163.369H233.59c14.656,0,26.538-12.097,26.538-26.758c0-14.661-11.882-26.752-26.538-26.752H127.409 c-14.655,0-26.548,12.092-26.548,26.752C100.86,151.271,112.753,163.369,127.409,163.369z"></path> <path d="M127.409,280.066H350.37c14.666,0,26.549-12.098,26.549-26.758c0-14.662-11.883-26.753-26.549-26.753H127.409 c-14.655,0-26.548,12.092-26.548,26.753C100.86,267.969,112.753,280.066,127.409,280.066z"></path> <path d="M360.991,332.999H127.409c-14.655,0-26.548,11.81-26.548,26.469c0,14.661,11.893,26.476,26.548,26.476h233.583 c14.655,0,26.549-11.814,26.549-26.476C387.54,344.809,375.647,332.999,360.991,332.999z"></path> <path d="M355.329,0H86.11C53.259,0,26.753,26.627,26.753,59.467v369.275c0,32.846,26.506,59.657,59.357,59.657h316.18 c32.851,0,59.356-26.812,59.356-59.657V108.929L355.329,0z M402.29,445.709H86.11c-9.424,0-17.241-7.537-17.241-16.966V59.467 c0-9.428,7.817-17.351,17.241-17.351h248.597v47.802c0,21.016,17.029,38.115,38.04,38.33l46.783,0.478v300.017 C419.53,438.172,411.714,445.709,402.29,445.709z"></path> </g> </g> </g></svg>,
          label: "Kelengkapan Dokumen",
          route: "/dashboard/siswa/kelengkapan-dokumen",
        },
        {
          icon:  <svg fill="#b0b0b0" width="24"
          height="24"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m289.7,76.1l55.3,47.8h-55.3v-47.8zm106.9,340.7c-11.3-5.68434e-14-20.5,9.1-20.5,20.4v23h-304.2v-408.4h176.9v92.4c0,11.3 9.2,20.4 20.5,20.4h106.9v122.4c0,11.3 9.2,20.4 20.5,20.4 11.3,0 20.5-9.1 20.5-20.4v-145.6c0-5.9-2.6-11.6-7.1-15.4l-127.4-110c-3.7-3.2-8.5-5-13.4-5h-217.8c-11.3,0-20.5,9.1-20.5,20.4v449.2c0,11.3 9.2,20.4 20.5,20.4h345.2c11.3,0 20.5-9.1 20.5-20.4v-43.4c-0.1-11.3-9.3-20.4-20.6-20.4z"></path> <path d="m305.7,198.9h-162c-11.3,0-20.5,9.1-20.5,20.4s9.2,20.4 20.5,20.4h162.1c11.3,0 20.5-9.1 20.5-20.4s-9.3-20.4-20.6-20.4z"></path> <path d="m305.7,299.4h-162c-11.3,0-20.5,9.1-20.5,20.4 0,11.3 9.2,20.4 20.5,20.4h162.1c11.3,0 20.5-9.1 20.5-20.4-0.1-11.2-9.3-20.4-20.6-20.4z"></path> <path d="m480.9,317.5c-1-11.2-11-19.5-22.2-18.5-46.2,4.1-90.1,54.6-112.7,85.3l-13.3-15.1c-7.5-8.5-20.4-9.3-28.9-1.8-8.5,7.5-9.3,20.4-1.8,28.8l30.7,34.8c12,11.9 25.2,9.7 32.7-2.7 13.4-22.1 60.7-85.4 96.9-88.6 11.3-1.1 19.6-11 18.6-22.2z"></path> </g> </g> </g></svg>,
          label: "Pengajuan Magang",
          route: "/dashboard/siswa/pengajuan-magang",
        },
        {
          icon:  <svg viewBox="0 0 24 24" width="24"
          height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 13L10 16L17 9" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> </g></svg>,
          label: "Status Magang",
          route: "/dashboard/siswa/status-magang",
        },
      ],
    },
  ],
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => { 
  const pathname = usePathname();
  const { data: session } = useSession();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  const [role, setRole] = useState<keyof MenuGroups>("siswa");

  useEffect(() => {
    if (session) {
      setRole(session.user.role as keyof MenuGroups);
    }
  }, [session]);

  const currentMenuGroups = menuGroups[role] || [];

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/dashboardLogo/logo-diskominfo-white.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={50}
              height={24}
              src={"/dashboardLogo/logo-diskominfo-dark.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {currentMenuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
