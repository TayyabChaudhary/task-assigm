import React from 'react';

interface ClientLogoProps {
    delay: number;
    isVisible: boolean;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ delay, isVisible }) => {
    return (
        <div
            className={`
                flex items-center justify-center p-6
                transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="w-24 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400 hover:text-gray-600 transition-colors duration-500">
                    {/* Palm tree and beach icon */}
                    <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.2"/>
                    <path d="M30 70 Q35 60, 40 65 L40 85 L35 85 Z" fill="currentColor"/>
                    <ellipse cx="40" cy="60" rx="8" ry="12" fill="currentColor"/>
                    <ellipse cx="45" cy="55" rx="10" ry="8" fill="currentColor" transform="rotate(30 45 55)"/>
                    <ellipse cx="35" cy="55" rx="10" ry="8" fill="currentColor" transform="rotate(-30 35 55)"/>
                </svg>
            </div>
        </div>
    );
};

export default ClientLogo;
