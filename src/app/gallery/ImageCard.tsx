"use client";

import React from 'react';
import { FaEye } from 'react-icons/fa';

interface ImageCardProps {
  imageUrl: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title }) => {
  const openFullscreen = () => {
    const newTab = window.open(`http://127.0.0.1:8000/${imageUrl}`, '_blank');
    if (newTab) {
      newTab.focus();
    }
  };

  return (
    <article className="flex flex-col items-start justify-between bg-white p-4 sm:p-6 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105">
      <div
        className="w-full overflow-hidden rounded-2xl mb-4 relative group cursor-pointer"
        onClick={openFullscreen}
      >
        <img src={`http://127.0.0.1:8000/${imageUrl}`} alt={title} className="object-cover w-full h-full rounded-2xl" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaEye className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800 break-words w-full overflow-hidden text-ellipsis">
        {title}
      </h3>
    </article>
  );
};

export default ImageCard;
