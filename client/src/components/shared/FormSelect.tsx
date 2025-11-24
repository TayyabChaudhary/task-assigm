import React, { SelectHTMLAttributes } from 'react';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ label, options, error, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      <label className="block text-gray-700 text-sm font-medium">
        {label}
      </label>
      <select
        className={`
          w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg
          text-gray-900 appearance-none cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white
          transition-all duration-300
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormSelect;
