import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CheckItemProps {
  text: string;
}

const CheckItem: React.FC<CheckItemProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-3 group">
      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
      <p className="text-gray-600 text-sm sm:text-sm">{text}</p>
    </div>
  );
};

export default CheckItem;
