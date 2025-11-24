import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-md flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-8 sm:h-8 text-white">
          <path
            d="M20 5 L20 35 M10 15 L20 5 L30 15 M10 25 L30 25"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Fixyland</span>
    </Link>
  );
};

export default Logo;
