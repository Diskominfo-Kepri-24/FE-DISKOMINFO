import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { useSession } from "next-auth/react";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";
import { DataMagang } from "@/types/dataMagang";

const ChartOne: React.FC = () => {
  const { data: session } = useSession();
  const currentYear = new Date().getFullYear().toString(); // Ambil tahun saat ini
  const [selectedYear, setSelectedYear] = useState<string>(currentYear); // State untuk tahun yang dipilih
  const [monthlyData, setMonthlyData] = useState<{ [key: string]: number[] }>({
    pending: Array(12).fill(0),
    diterima: Array(12).fill(0),
    ditolak: Array(12).fill(0),
  });

  useEffect(() => {
    if (session && session.accessToken) {
      const fetchPackages = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/v1/user-magang', {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });

          const dataMagang = response.data.users as DataMagang[];
          const pending = Array(12).fill(0);
          const diterima = Array(12).fill(0);
          const ditolak = Array(12).fill(0);

          // Reset monthlyData jika tidak ada data yang sesuai dengan tahun yang dipilih
          let isDataAvailableForYear = false;

          dataMagang.forEach((magang) => {
            const createdAt = new Date(magang.created_at);
            const month = createdAt.getMonth(); // 0 = Jan, 1 = Feb, ...
            const year = createdAt.getFullYear().toString();
            
            if (year === selectedYear) {
              isDataAvailableForYear = true;
              if (magang.status === "pending") {
                pending[month]++;
              } else if (magang.status === "terima") {
                diterima[month]++;
              } else if (magang.status === "tolak") {
                ditolak[month]++;
              }
            }
          });

          // Jika tidak ada data untuk tahun yang dipilih, set data menjadi array kosong
          if (!isDataAvailableForYear) {
            setMonthlyData({
              pending: Array(12).fill(0),
              diterima: Array(12).fill(0),
              ditolak: Array(12).fill(0),
            });
          } else {
            setMonthlyData({
              pending,
              diterima,
              ditolak,
            });
          }
        } catch (error) {
          console.error('Failed to fetch packages:', error);
        }
      };

      fetchPackages();
    }
  }, [session, selectedYear]);

  const series = [
    {
      name: "Pengajuan Pending",
      data: monthlyData.pending,
    },
    {
      name: "Pengajuan Diterima",
      data: monthlyData.diterima,
    },
    {
      name: "Pengajuan Ditolak",
      data: monthlyData.ditolak,
    },
  ];

  const options: ApexOptions = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#5750F1", "#0ABEF9", "#F15B50"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
      marker: {
        show: !1,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  const years = ["2024", "2025", "2026"]; // Daftar tahun yang tersedia

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Grafik Pengajuan Magang
          </h4>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="font-medium uppercase text-dark dark:text-dark-6">
            Berdasarkan:
          </p>
          <DefaultSelectOption options={years} onChange={setSelectedYear} />

        </div>
      </div>
      <div>
        <div className="-ml-4 -mr-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={310}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 text-center xsm:flex-row xsm:gap-0">
        <div className="border-stroke dark:border-dark-3 xsm:w-1/2 xsm:border-r">
          <p className="font-medium">Pengajuan Pending</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {monthlyData.pending.reduce((a, b) => a + b, 0)}
          </h4>
        </div>
        <div className=" border-stroke dark:border-dark-3 xsm:w-1/2 xsm:border-r">
          <p className="font-medium">Pengajuan Diterima</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {monthlyData.diterima.reduce((a, b) => a + b, 0)}
          </h4>
        </div>
        <div className="xsm:w-1/2">
          <p className="font-medium">Pengajuan Ditolak</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {monthlyData.ditolak.reduce((a, b) => a + b, 0)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
