import React, { useState } from 'react';
import { Menu } from 'lucide-react';

interface MenuButtonProps {
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-gray-600 transition-all duration-300 flex items-center justify-center overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-primary to-yellow-400
          transition-transform duration-300 ease-out
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}
        `}
      />
      <Menu className={`w-5 h-5 text-white relative z-10 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
    </button>
  );
};

export default MenuButton;
