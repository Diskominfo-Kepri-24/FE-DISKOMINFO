"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

export type DataAgenda = {
  id: string;
  judul: string;
  slug: string;
  status: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  tipe_acara: string;
  isi_agenda: string;
  foto: string;
  tgl_event_mulai: string;
  tgl_event_akhir: string;
  tanggal_event_mulai: string;
  tanggal_event_akhir: string;
};

const Agenda = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString('id-ID', { month: 'long' });

  const [agendaData, setAgendaData] = useState<DataAgenda[]>([]);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAgendaData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/agenda');
      setAgendaData(response.data.agenda);
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgendaData();
  }, []);

  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const monthToNumber = (monthName: string) => {
    return months.indexOf(monthName) + 1;
  };

  const filteredAgendaData = agendaData.filter(agenda => {
    const eventStartDate = new Date(agenda.tgl_event_mulai);
    const eventEndDate = new Date(agenda.tgl_event_akhir);
    const selectedMonthNumber = monthToNumber(selectedMonth);

    return (
      (eventStartDate.getFullYear() === selectedYear && eventStartDate.getMonth() + 1 === selectedMonthNumber) ||
      (eventEndDate.getFullYear() === selectedYear && eventEndDate.getMonth() + 1 === selectedMonthNumber)
    );
  });

  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-md font-semibold text-gray-800">Jadwal Tahun {selectedYear}</h2>
        <select
          className="border rounded-lg p-2 mt-4 md:mt-0"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {[2026, 2025, 2024, 2023].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-between mb-6">
        {months.map((month) => (
          <button
            key={month}
            className={`font-semibold text-xs py-2 px-2 sm:py-4 sm:px-4 rounded-lg ${selectedMonth === month ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-100'}`}
            onClick={() => setSelectedMonth(month)}
          >
            {month}
          </button>
        ))}
      </div>
      <div>
        {filteredAgendaData.length > 0 ? (
          filteredAgendaData.map((agenda) => (
            <div key={agenda.id} className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 10-8 0v2m5 4h-4m6 4H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <a href={`/agenda/${agenda.slug}`}>
                  <h3 className="text-sm font-bold hover:text-blue-500 text-slate-700">{agenda.judul}</h3>
                </a>
                <p className="text-sm text-gray-400 mt-1">
                  {agenda.tanggal_event_mulai} - {agenda.tanggal_event_akhir} <span className="ml-2 bg-gray-100 text-xs text-gray-500 font-semibold py-1 px-2 rounded-lg">{agenda.status}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className='flex items-center justify-center h-64'>
            <p className="text-gray-500 text-center">Tidak ada jadwal event atau agenda pada bulan {selectedMonth} {selectedYear}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agenda;
