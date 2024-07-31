import React from 'react';

const WelcomeCard: React.FC<{ role: string }> = ({ role }) => {
  const getWelcomeMessage = () => {
    switch (role) {
      case 'admin':
        return 'Selamat datang di Dashboard Magang Admin';
      case 'mahasiswa':
        return 'Selamat datang di Dashboard Magang Mahasiswa';
      case 'siswa':
        return 'Selamat datang di Dashboard Magang Siswa';
      default:
        return 'Selamat datang di Dashboard';
    }
  };

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
     
        <h4 className="text-heading-6 font-bold text-dark dark:text-white">
          {getWelcomeMessage()}
        </h4>
     
    </div>
  );
};

export default WelcomeCard;
