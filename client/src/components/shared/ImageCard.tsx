import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface ImageCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

const ImageCard: React.FC<ImageCardProps> = ({ 
  imageSrc, 
  alt, 
  title, 
  description,
  Icon = UtensilsCrossed 
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
      <img 
        src={imageSrc} 
        alt={alt}
        className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay Card */}
      <div className="
        absolute bottom-4 right-4 left-4 sm:bottom-6 sm:right-6 sm:left-auto
        bg-gray-900 text-white p-6 rounded-xl
        transform transition-all duration-500
        group-hover:-translate-y-2 group-hover:shadow-2xl
        max-w-xs
      ">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-8 h-8" />
          <h4 className="text-xl font-bold">{title}</h4>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
