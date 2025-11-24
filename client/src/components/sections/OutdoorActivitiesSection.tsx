import React, { useEffect, useState } from 'react';
import { Waves, Bike } from 'lucide-react';
import FeatureCard from '../shared/FeatureCard';
import CheckItem from '../shared/CheckItem';
import DiscoverButton from '../shared/DiscoverButton';
import ImageCard from '../shared/ImageCard';

const features = [
  { Icon: Waves, title: 'The Best Swiming Pool' },
  { Icon: Bike, title: 'The Best Stationary Bike' }
];

const checkItems = [
  'It is a long fact that a reader will be distracted by the readable',
  'Lorem Ipsum is simply dummy of the printing and industry',
  'There are many variations of Lorem Ipsum majority'
];

const imageCards = [
  {
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/banner/banner-img.jpg`,
    alt: 'Luxury Pool',
    title: 'Restaurants',
    description: 'Donec in quis the asd pellentesque velit. Donec id velit arcu posuere blane.'
  }
];

const OutdoorActivitiesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('outdoor-activities');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="outdoor-activities"
      className="py-16 sm:py-20 lg:py-32 bg-[--green-light-100]"
    >
      <div className="max-w-screen-xl mx-auto 2xl:px-10 px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          
          {/* Left Content */}
          <div className={`
            space-y-6 sm:space-y-8
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
          `}>
            
            {/* Badge */}
            <div 
              className="inline-block bg-white px-2 py-0.5 rounded-sm"
              style={{ transitionDelay: '100ms' }}
            >
              <span className="text-primary text-xs sm:text-xs font-medium uppercase tracking-wide">
                Luxury Hotel
              </span>
            </div>

            {/* Title */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-gray-900 leading-tighter"
              style={{ transitionDelay: '200ms' }}
            >
              We Provide Outdoor Activities To All Visitors
            </h2>

            {/* Description */}
            <p 
              className="text-gray-600 text-base sm:text-base font-normal leading-relaxed"
              style={{ transitionDelay: '300ms' }}
            >
              There are many variations of passages of Lorem Ipsum available, but the majority 
              have suffered alteration in some form, by injected humour, or randomised words 
              which don't look even.
            </p>

            {/* Features */}
            <div 
              className="grid sm:grid-cols-2 gap-6"
              style={{ transitionDelay: '400ms' }}
            >
              {features.map((feature, idx) => (
                <FeatureCard 
                  key={idx} 
                  Icon={feature.Icon} 
                  title={feature.title}
                />
              ))}
            </div>

            {/* Check Items */}
            <div 
              className="space-y-4"
              style={{ transitionDelay: '500ms' }}
            >
              {checkItems.map((item, idx) => (
                <CheckItem key={idx} text={item} />
              ))}
            </div>

            {/* Button */}
            <div style={{ transitionDelay: '600ms' }}>
              <DiscoverButton />
            </div>
          </div>

          {/* Right Images */}
          <div className={`
            space-y-6
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
          `}
          style={{ transitionDelay: '300ms' }}
          >
            {imageCards.map((card, idx) => (
              <ImageCard key={idx} {...card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OutdoorActivitiesSection;
