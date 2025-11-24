import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavLinkProps {
  label: string;
  path?: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isHovered?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  label, 
  path, 
  hasDropdown, 
  isActive,
  onMouseEnter,
  onMouseLeave,
  isHovered
}) => {
  const content = (
    <span className="flex items-center gap-1">
      {label}
      {hasDropdown && (
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ${
            isHovered ? 'rotate-180' : ''
          }`} 
        />
      )}
    </span>
  );

  const classes = `
    text-white font-medium text-sm 
    hover:text-yellow-300 transition-all duration-300
    flex items-center gap-1 cursor-pointer
    relative
    ${isActive ? 'text-yellow-300' : ''}
  `;

  const underline = (
    <span 
      className={`
        absolute bottom-0 left-0 h-0.5 bg-yellow-300
        transition-all duration-300 ease-out
        ${isHovered ? 'w-full' : 'w-0'}
      `}
    />
  );

  if (path && !hasDropdown) {
    return (
      <Link 
        to={path} 
        className={classes}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
        {underline}
      </Link>
    );
  }

  return (
    <div
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
      {underline}
    </div>
  );
};

export default NavLink;
