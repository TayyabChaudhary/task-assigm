import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BookingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/booking"
      className="px-4 sm:px-6 py-2 sm:py-3 flex justify-center bg-[--yellow-light-100] text-gray-900 font-semibold rounded-md transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm overflow-hidden relative group whitespace-nowrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-500
          transition-transform duration-300 ease-out
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}
        `}
      />
      <span className="relative z-10">Book Your Stay</span>
      <ArrowRight 
        className={`
          w-3 h-3 sm:w-4 sm:h-4 relative z-10
          transition-transform duration-300
          ${isHovered ? 'translate-x-1' : ''}
        `} 
      />
    </Link>
  );
};

export default BookingButton;
