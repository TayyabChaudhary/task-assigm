import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MobileNavItemProps {
  label: string;
  path?: string;
  hasDropdown?: boolean;
  items?: { title: string; items: string[] }[];
  onItemClick?: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ 
  label, 
  path, 
  hasDropdown, 
  items,
  onItemClick 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!hasDropdown && path) {
    return (
      <Link
        to={path}
        onClick={onItemClick}
        className="block py-3 px-4 text-white hover:text-yellow-300 transition-all duration-700 rounded-md relative overflow-hidden group"
      >
        <span className="relative z-10 block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:scale-105 origin-left">{label}</span>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-r from-yellow-300 to-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg shadow-yellow-300/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-400/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 ease-out" />
      </Link>
    );
  }

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 px-4 text-white hover:bg-white/5 mb-2 transition-all duration-700 rounded-md relative overflow-hidden group"
      >
        <span className="font-medium relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:scale-105 origin-left">{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-all duration-700 relative z-10 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'rotate-180 text-yellow-300' : ''
          }`}
        />
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-r from-yellow-300 to-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg shadow-yellow-300/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-400/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 ease-out" />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="pl-4 pr-4 pb-3 space-y-2">
          {items?.map((section, idx) => (
            <div 
              key={idx} 
              className={`mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <h4 className="text-xs font-bold text-gray-400 uppercase mb-2 pl-2">
                {section.title}
              </h4>
              {section.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick?.();
                  }}
                  className="block py-2 px-3 text-sm text-gray-300 hover:text-yellow-300 hover:bg-white/5 rounded transition-all duration-600 relative overflow-hidden group"
                  style={{ transitionDelay: `${itemIdx * 50}ms` }}
                >
                  <span className="relative z-10 flex items-center gap-2 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:scale-105 origin-left">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 group-hover:w-3 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm shadow-yellow-300/50" />
                    {item}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-800 ease-out" />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavItem;
