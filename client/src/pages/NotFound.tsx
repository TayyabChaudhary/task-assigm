import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Footer from '../components/global/Footer';

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 150);
        return () => clearTimeout(timer);
    }, []);

    return (
       <>
          {/* Hero Banner */}
            <div
                className='w-full bg-center bg-cover relative bg-no-repeat h-80 overflow-hidden'
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner/banner-img.jpg)` }}
            >
                <div className={`
                    absolute inset-0 bg-black/50
                    transition-opacity duration-1000 ease-out
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}>
                    <div className='max-w-screen-xl mx-auto flex items-center h-full text-white px-4'>
                        <div className="space-y-4">
                            <h1 className={`
                                text-4xl md:text-5xl font-semibold
                                transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}
                            `}
                                style={{ transitionDelay: '200ms' }}>
                                404 Error
                            </h1>
                            <div className={`
                                text-sm md:text-base flex items-center gap-2
                                transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                                ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-12 -translate-x-4'}
                            `}
                                style={{ transitionDelay: '400ms' }}>
                                <span className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">Home</span>
                                <ChevronRight size={12} />
                                <span className="text-yellow-300">404 Error</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`
                    absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                    transition-opacity duration-1500 ease-out
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}
                    style={{ transitionDelay: '300ms' }} />
            </div>
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="max-w-4xl w-full text-center">
                {/* 404 Illustration */}
                <div 
                    className={`
                        mb-8 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}
                    `}
                >
                    <svg
                        className="w-full max-w-2xl mx-auto h-auto"
                        viewBox="0 0 1080 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Background watercolor shape */}
                        <ellipse
                            cx="540"
                            cy="200"
                            rx="450"
                            ry="150"
                            fill="#d4ebe5"
                            opacity="0.5"
                        />

                        {/* Mountains */}
                        <path
                            d="M300 180 L380 100 L450 160 L380 140 L300 180Z"
                            fill="none"
                            stroke="#6b7280"
                            strokeWidth="2"
                        />
                        <path
                            d="M450 160 L520 90 L600 150 L450 160Z"
                            fill="none"
                            stroke="#6b7280"
                            strokeWidth="2"
                        />

                        {/* Clouds */}
                        <path
                            d="M450 80 Q440 70, 450 60 Q460 55, 470 60 Q485 55, 490 65 Q495 55, 505 60 Q515 65, 510 75 Q515 85, 505 85 Q500 95, 490 90 Q475 95, 465 90 Q455 90, 450 80Z"
                            fill="none"
                            stroke="#6b7280"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M550 100 Q545 95, 550 88 Q557 85, 565 90 Q572 87, 578 92 Q585 90, 590 96 Q593 105, 585 108 Q580 112, 572 110 Q565 112, 558 108 Q552 108, 550 100Z"
                            fill="none"
                            stroke="#6b7280"
                            strokeWidth="1.5"
                        />

                        {/* Birds */}
                        <path d="M630 120 Q635 115, 640 120" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M645 118 Q650 113, 655 118" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M570 130 Q575 125, 580 130" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />

                        {/* Trees - Left */}
                        <ellipse cx="330" cy="240" rx="35" ry="45" fill="#5fa896" opacity="0.7" />
                        <ellipse cx="320" cy="250" rx="30" ry="40" fill="#4a9880" opacity="0.8" />
                        <rect x="325" y="250" width="8" height="40" fill="#6b7280" />
                        
                        <ellipse cx="380" cy="260" rx="40" ry="50" fill="#7ebfae" opacity="0.6" />
                        <ellipse cx="365" cy="270" rx="35" ry="45" fill="#5fa896" opacity="0.7" />
                        <rect x="375" y="270" width="8" height="45" fill="#6b7280" />

                        {/* Trees - Right */}
                        <ellipse cx="680" cy="240" rx="35" ry="45" fill="#5fa896" opacity="0.7" />
                        <ellipse cx="695" cy="250" rx="30" ry="40" fill="#4a9880" opacity="0.8" />
                        <rect x="685" y="250" width="8" height="40" fill="#6b7280" />
                        
                        <ellipse cx="720" cy="260" rx="40" ry="50" fill="#7ebfae" opacity="0.6" />
                        <ellipse cx="735" cy="270" rx="35" ry="45" fill="#5fa896" opacity="0.7" />
                        <rect x="728" y="270" width="8" height="45" fill="#6b7280" />

                        {/* Ground plants */}
                        <path d="M340 310 L345 295 L350 310" fill="#4a9880" />
                        <path d="M360 315 L365 300 L370 315" fill="#5fa896" />
                        <path d="M320 312 L325 298 L330 312" fill="#7ebfae" />
                        
                        <path d="M680 310 L685 295 L690 310" fill="#4a9880" />
                        <path d="M700 315 L705 300 L710 315" fill="#5fa896" />
                        <path d="M720 312 L725 298 L730 312" fill="#7ebfae" />

                        {/* Bushes */}
                        <ellipse cx="640" cy="315" rx="25" ry="15" fill="#4a9880" opacity="0.8" />
                        <ellipse cx="655" cy="318" rx="20" ry="12" fill="#5fa896" opacity="0.7" />
                        <ellipse cx="670" cy="320" rx="22" ry="14" fill="#4a9880" opacity="0.6" />

                        <ellipse cx="350" cy="318" rx="20" ry="12" fill="#5fa896" opacity="0.7" />
                        <ellipse cx="365" cy="320" rx="22" ry="14" fill="#4a9880" opacity="0.6" />

                        {/* Large 404 Text */}
                        <text
                            x="540"
                            y="250"
                            fontSize="180"
                            fontWeight="900"
                            fill="#1a1a1a"
                            textAnchor="middle"
                            fontFamily="system-ui, -apple-system, sans-serif"
                        >
                            404
                        </text>
                    </svg>
                </div>

                {/* Heading */}
                <h1 
                    className={`
                        text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4
                        transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                    style={{ transitionDelay: '200ms' }}
                >
                    Ohh! Page Not Found
                </h1>

                {/* Description */}
                <p 
                    className={`
                        text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-8
                        transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                    style={{ transitionDelay: '400ms' }}
                >
                    We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.
                </p>

                {/* Back to Home Button */}
                <div 
                    className={`
                        transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                    style={{ transitionDelay: '600ms' }}
                >
                    <button
                        onClick={() => navigate('/')}
                        className="
                            group inline-flex items-center gap-2 px-8 py-3
                            bg-primary text-white font-semibold rounded-lg
                            overflow-hidden relative
                            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                            hover:shadow-lg hover:shadow-primary/30
                        "
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative">Back To Home</span>
                        <ArrowRight 
                            size={18} 
                            className="relative transition-transform duration-300 group-hover:translate-x-1" 
                        />
                    </button>
                </div>
            </div>
        </main>
        <Footer />
       </>
    );
};

export default NotFound;
