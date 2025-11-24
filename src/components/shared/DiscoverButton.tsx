import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface DiscoverButtonProps {
  onClick?: () => void;
}

const DiscoverButton: React.FC<DiscoverButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        px-6 py-4 bg-primary text-white font-semibold 
        rounded-md transition-all duration-500 
        flex items-center gap-2 group
        transform hover:-translate-y-0.5
        relative overflow-hidden
      "
    >
      {/* Animated background overlay */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-[#1d8f6a] to-[#16a085]
          transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}
        `}
      />
      
      {/* Shimmer effect */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
          transition-transform duration-1000 ease-out
          ${isHovered ? 'translate-x-[200%]' : 'translate-x-[-200%]'}
        `}
      />

      <span className="relative z-10">Discover More</span>
      <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:scale-110" />
    </button>
  );
};

export default DiscoverButton;
