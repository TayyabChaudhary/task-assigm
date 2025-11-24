import React, { InputHTMLAttributes } from 'react';

interface FormDateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormDateInput: React.FC<FormDateInputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      <label className="block text-gray-700 text-sm font-medium">
        {label}
      </label>
      <input
        type="date"
        className={`
          w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg
          text-gray-900 cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white
          transition-all duration-300
          [&::-webkit-calendar-picker-indicator]:cursor-pointer
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormDateInput;
