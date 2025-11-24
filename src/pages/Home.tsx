import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import OutdoorActivitiesSection from '../components/sections/OutdoorActivitiesSection';
import StatsSection from '../components/sections/StatsSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import VideoSection from '../components/sections/VideoSection';
import TeamSection from '../components/sections/TeamSection';
import ClientsSection from '../components/sections/ClientsSection';
import Footer from '../components/global/Footer';

const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen">
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
                                About Us
                            </h1>
                            <div className={`
                                text-sm md:text-base flex items-center gap-2
                                transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                                ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-12 -translate-x-4'}
                            `}
                                style={{ transitionDelay: '400ms' }}>
                                <span className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">Home</span>
                                <ChevronRight size={12} />
                                <span className="text-yellow-300">About Us</span>
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
            <OutdoorActivitiesSection />
            <StatsSection />
            <WhyChooseUsSection />
            <VideoSection />
            <TeamSection />
            <ClientsSection />
            <Footer />
        </main>
    );
};

export default Home;
