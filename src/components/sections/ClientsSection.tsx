import React from 'react';
import ClientLogo from '../shared/ClientLogo';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ClientsSection: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

    const logos = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        delay: i * 100
    }));

    return (
        <section 
            ref={elementRef as React.RefObject<HTMLElement>}
            className="py-16 md:py-20 bg-gray-50"
        >
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div 
                        className={`
                            inline-block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <p className="text-primary uppercase tracking-wider text-sm font-medium mb-3">
                            OUR CLIENTS
                        </p>
                    </div>
                    <h2 
                        className={`
                            text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900
                            transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                        `}
                        style={{ transitionDelay: '100ms' }}
                    >
                        We Have More Then 150+
                        <br />
                        Global Clients
                    </h2>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {logos.map((logo) => (
                        <ClientLogo
                            key={logo.id}
                            delay={logo.delay}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
