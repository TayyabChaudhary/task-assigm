import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 flex-shrink-0">
        <Icon className="w-full h-full text-gray-700" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg sm:text-base font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default FeatureCard;
