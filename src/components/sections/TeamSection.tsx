import React from 'react';
import TeamCard from '../shared/TeamCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const TeamSection: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

    const teamMembers = [
        {
            name: 'Michael Dean',
            role: 'Chef Master',
            image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop',
            delay: 200
        },
        {
            name: 'Arnold Taylor',
            role: 'Room Cleaner',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
            delay: 400
        },
        {
            name: 'Michael Dean',
            role: 'Assistant Chef',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
            delay: 600
        },
        {
            name: 'Michael Dean',
            role: 'Supervisor',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
            delay: 800
        }
    ];

    return (
        <section 
            ref={elementRef as React.RefObject<HTMLElement>}
            className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
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
                            FIXYLAND STAFF
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
                        Expert Staff Persons
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            delay={member.delay}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
