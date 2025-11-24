import React from 'react';
import VideoPlayButton from '../shared/VideoPlayButton';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const VideoSection: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.3 });

    return (
        <section 
            ref={elementRef as React.RefObject<HTMLElement>}
            className="relative py-24 md:py-32 bg-primary overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Badge */}
                    <div 
                        className={`
                            inline-block px-6 py-2 bg-white/20 rounded-full backdrop-blur-sm
                            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <span className="text-white text-sm font-medium tracking-wider uppercase">
                            AMAZING EXPERIENCE
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 
                        className={`
                            text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl
                            transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                        `}
                        style={{ transitionDelay: '200ms' }}
                    >
                        Relax And Enjoy With Our Hotel & Resort
                    </h2>

                    {/* Play Button */}
                    <div 
                        className={`
                            pt-8 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}
                        `}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <VideoPlayButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
