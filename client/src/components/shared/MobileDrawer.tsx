import React from 'react';
import { X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-[--navbar-bg-color] z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'}
        `}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 max-w-[85vw]
          bg-[--navbar-bg-color] z-50 shadow-2xl
          transition-transform duration-500 ease-out
          overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-white">
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
            <span className="text-xl font-bold text-white">Fixyland</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
