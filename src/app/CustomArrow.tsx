// CustomArrows.tsx
import React from 'react';

interface ArrowProps {
  onClick?: () => void;
}

export const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-100 text-blue-500 hover:text-white p-2 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300 z-10"
    aria-label="Previous Slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

export const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-100 text-blue-500 hover:text-white p-2 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300 z-10"
    aria-label="Next Slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);
