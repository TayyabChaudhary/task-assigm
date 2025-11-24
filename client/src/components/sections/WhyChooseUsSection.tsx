import React from 'react';
import ProgressBar from '../shared/ProgressBar';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const WhyChooseUsSection: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

    const skills = [
        { label: 'Services', percentage: 95, delay: 200 },
        { label: 'Chef Master', percentage: 85, delay: 400 },
        { label: 'Design', percentage: 92, delay: 600 },
        { label: 'It Solution', percentage: 98, delay: 800 }
    ];

    return (
        <section ref={elementRef} className="py-16 md:py-24 bg-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className={`
                        space-y-6 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
                    `}>
                        <div className="space-y-3">
                            <p className="text-primary uppercase tracking-wider text-sm font-medium">
                                OUR SKILLS
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                Why Choose for us?
                            </h2>
                        </div>

                        <p className="text-gray-500 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                        </p>

                        <div className="space-y-6 pt-4">
                            {skills.map((skill) => (
                                <ProgressBar
                                    key={skill.label}
                                    label={skill.label}
                                    percentage={skill.percentage}
                                    delay={skill.delay}
                                    isVisible={isVisible}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className={`
                        relative h-[500px] md:h-[600px] transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
                    `}
                        style={{ transitionDelay: '200ms' }}>
                        {/* Decorative Dots */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 opacity-30">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                                {Array.from({ length: 25 }).map((_, i) => {
                                    const x = (i % 5) * 20 + 10;
                                    const y = Math.floor(i / 5) * 20 + 10;
                                    return (
                                        <circle
                                            key={i}
                                            cx={x}
                                            cy={y}
                                            r="2"
                                            fill="currentColor"
                                            className={`
                                                transition-all duration-500
                                                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                                            `}
                                            style={{ transitionDelay: `${400 + i * 30}ms` }}
                                        />
                                    );
                                })}
                            </svg>
                        </div>

                        {/* Main Large Image - Beach Scene */}
                        <div className={`
                            absolute top-0 right-0 w-[75%] h-[70%] rounded-3xl overflow-hidden shadow-2xl
                            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                        `}
                            style={{ transitionDelay: '400ms' }}>
                            <img
                                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=1000&fit=crop"
                                alt="Luxury beach resort with ocean view"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Smaller Overlapping Image - Resort/Restaurant */}
                        <div className={`
                            absolute bottom-0 left-0 w-[60%] h-[45%] rounded-3xl overflow-hidden shadow-2xl z-10
                            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                        `}
                            style={{ transitionDelay: '600ms' }}>
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=500&fit=crop"
                                alt="Outdoor restaurant dining area"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
