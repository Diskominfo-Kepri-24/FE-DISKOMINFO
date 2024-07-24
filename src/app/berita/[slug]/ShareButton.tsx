"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ShareButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const router = useRouter();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied: " + currentUrl);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="relative inline-block ">
      <button
        onClick={toggleOptions}
        className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.646 5.354a.5.5 0 00-.707 0L9 11.293 7.354 9.646a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" clipRule="evenodd" />
        </svg>
        Bagikan Berita Ini
      </button>
      {showOptions && (
        <div 
          className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
        >
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.992 3.657 9.128 8.438 9.877v-6.99H7.898v-2.887h2.54V9.651c0-2.513 1.492-3.89 3.777-3.89 1.097 0 2.243.194 2.243.194v2.464H15.66c-1.392 0-1.824.865-1.824 1.75v2.113h3.088l-.493 2.887h-2.595v6.99C18.343 21.128 22 16.992 22 12z" />
            </svg>
            Facebook
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.93 4.93 0 002.165-2.725 9.861 9.861 0 01-3.125 1.197 4.917 4.917 0 00-8.374 4.482C7.691 8.095 4.066 6.13 1.64 3.161a4.816 4.816 0 00-.666 2.475 4.917 4.917 0 002.188 4.095 4.897 4.897 0 01-2.224-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.996 4.996 0 01-2.212.084c.624 1.944 2.441 3.361 4.594 3.403a9.867 9.867 0 01-6.102 2.105c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.214-.005-.428-.015-.64A9.935 9.935 0 0024 4.557z" />
            </svg>
            Twitter
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.997 3.655 9.128 8.438 9.877v-6.994h-2.54v-2.887h2.54V9.651c0-2.513 1.492-3.89 3.777-3.89 1.097 0 2.243.194 2.243.194v2.464h-1.583c-1.392 0-1.824.865-1.824 1.75v2.113h3.088l-.493 2.887h-2.595v6.994C18.343 21.128 22 16.992 22 12 22 6.478 17.523 2 12 2z" />
            </svg>
            Telegram
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm3.672 13.646c-.14.326-.55.624-1.026.726-.296.064-.677.114-1.048.135-.658.034-1.308-.021-1.928-.164-.515-.113-.964-.26-1.319-.416-.471-.206-.951-.494-1.4-.81a11.4 11.4 0 01-2.008-1.914 13.19 13.19 0 01-1.41-1.88c-.39-.56-.692-1.09-.905-1.56-.222-.493-.37-.924-.442-1.24-.146-.655-.016-1.186.377-1.498.173-.136.36-.197.58-.197.07 0 .146.005.223.014.227.029.427.14.616.326.091.086.157.197.216.324.056.12.094.256.136.39.03.093.063.187.098.276.066.165.14.35.231.547.164.351.36.724.589 1.108.207.348.434.682.68.999.48.609.995 1.139 1.56 1.58.49.383 1.017.717 1.592.947.256.1.49.157.706.177.14.013.272.011.39-.005a.906.906 0 00.46-.2.392.392 0 00.109-.306c-.003-.076-.01-.145-.021-.203-.024-.127-.072-.232-.134-.31-.077-.093-.157-.194-.252-.294-.165-.173-.307-.362-.47-.55-.141-.167-.274-.333-.403-.5-.145-.185-.279-.35-.4-.496-.161-.204-.307-.377-.427-.521-.182-.221-.306-.364-.352-.452a.748.748 0 01.21-.916c.137-.107.311-.174.507-.183.238-.011.517.029.819.122.392.116.744.318 1.058.596.455.407.859.888 1.233 1.412.14.199.258.412.36.632.053.116.106.235.162.352.063.127.128.257.2.385.138.247.276.507.4.779.118.26.226.528.318.799.04.119.07.238.098.358.02.086.038.173.059.26.065.257.133.52.18.799.065.407.076.761.058.962z" />
            </svg>
            Whatsapp
          </a>
          <div className="px-4 py-2 flex items-center">
            <input 
              type="text" 
              value={currentUrl} 
              readOnly 
              className="border border-gray-300 rounded px-2 py-1 text-sm flex-1 truncate"
            />
            <button 
              onClick={copyLink}
              className="bg-blue-500 text-white px-2 py-1 rounded text-sm ml-2"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
