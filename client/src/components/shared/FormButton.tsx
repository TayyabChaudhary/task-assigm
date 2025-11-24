import React, { ButtonHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  icon?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({ 
  children, 
  isLoading = false, 
  icon = true,
  className = '', 
  ...props 
}) => {
  return (
    <button
      className={`
        group relative px-8 py-4 bg-primary text-white font-semibold rounded
        overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:shadow-lg hover:shadow-primary/30
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      disabled={isLoading}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      
      <span className="relative flex items-center justify-center gap-2">
        {isLoading ? (
          <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {children}
            {icon && (
              <ArrowRight 
                size={18} 
                className="transition-transform duration-500 group-hover:translate-x-1" 
              />
            )}
          </>
        )}
      </span>
    </button>
  );
};

export default FormButton;
