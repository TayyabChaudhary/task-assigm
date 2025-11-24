import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoPlayButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Play video"
        >
            {/* Pulsing Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div 
                    className={`
                        absolute w-20 h-20 rounded-full bg-white/30
                        transition-all duration-1000 ease-out
                        ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}
                    `}
                />
                <div 
                    className={`
                        absolute w-20 h-20 rounded-full bg-white/20
                        transition-all duration-1000 ease-out delay-200
                        ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}
                    `}
                />
            </div>

            {/* Main Button */}
            <div 
                className={`
                    relative w-20 h-20 rounded-full bg-white
                    flex items-center justify-center
                    shadow-2xl
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isHovered ? 'scale-110' : 'scale-100'}
                `}
            >
                <Play 
                    className={`
                        text-primary fill-primary ml-1
                        transition-transform duration-500
                        ${isHovered ? 'scale-110' : 'scale-100'}
                    `}
                    size={32}
                />
            </div>
        </button>
    );
};

export default VideoPlayButton;
