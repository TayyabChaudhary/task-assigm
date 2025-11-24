import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
    delay: number;
    isVisible: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, delay, isVisible }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`
                relative group cursor-pointer
                transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card Container */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className={`
                            w-full h-full object-cover
                            transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isHovered ? 'scale-110' : 'scale-100'}
                        `}
                    />
                    
                    {/* Plus Icon Button */}
                    <div 
                        className={`
                            absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary
                            flex items-center justify-center shadow-lg
                            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isHovered ? 'scale-110 rotate-90 bg-emerald-600' : 'scale-100 rotate-0'}
                        `}
                    >
                        <Plus 
                            className="text-white"
                            size={20}
                        />
                    </div>
                </div>

                {/* Info Section - Below Image */}
                <div className="p-5 text-center bg-white">
                    <h3 
                        className={`
                            text-gray-900 text-lg font-semibold mb-1
                            transition-all duration-500
                            ${isHovered ? 'text-primary' : 'text-gray-900'}
                        `}
                    >
                        {name}
                    </h3>
                    <div className="flex items-center justify-center gap-2">
                        <div 
                            className={`
                                h-px bg-gray-300
                                transition-all duration-500
                                ${isHovered ? 'w-6 bg-primary' : 'w-4'}
                            `}
                        />
                        <p className="text-gray-500 text-sm">
                            {role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
