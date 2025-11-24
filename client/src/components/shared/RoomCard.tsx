import React from 'react';
import { Users, Bed, Bath, ArrowRight } from 'lucide-react';

interface RoomCardProps {
  title: string;
  price: number;
  image: string;
  guests: number;
  beds: number;
  baths: number;
  description: string;
  delay: number;
  isVisible: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  price,
  image,
  guests,
  beds,
  baths,
  description,
  delay,
  isVisible
}) => {
  return (
    <div
      className={`
        group bg-white rounded-2xl overflow-hidden
        transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
        
        {/* Price Badge */}
        <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-xs text-white rounded-md font-medium">
          ${price} / Night
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Amenities */}
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-primary" />
            <span className="text-sm">{guests} Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed size={18} className="text-primary" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={18} className="text-primary" />
            <span className="text-sm">{baths} Bath</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>

        {/* Read More Button */}
        <div className="pt-2">
          <button className="group/btn flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative">Read More</span>
            <ArrowRight 
              size={18} 
              className="relative transition-transform duration-300 group-hover/btn:translate-x-1" 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
