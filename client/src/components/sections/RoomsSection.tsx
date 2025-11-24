import React from 'react';
import RoomCard from '../shared/RoomCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const RoomsSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const rooms = [
    {
      id: 1,
      title: 'Deluxe Rooms',
      price: 800,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      guests: 2,
      beds: 2,
      baths: 1,
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      delay: 200
    },
    {
      id: 2,
      title: 'Junior Rooms',
      price: 400,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
      guests: 2,
      beds: 2,
      baths: 1,
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      delay: 400
    },
    {
      id: 3,
      title: 'Family Rooms',
      price: 600,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      guests: 2,
      beds: 2,
      baths: 1,
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      delay: 600
    }
  ];

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-primary"
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
            <div className="inline-block px-2 py-1 bg-white rounded backdrop-blur-sm mb-4">
              <span className="text-primary text-xs font-medium tracking-wider uppercase">
                OUR BEST ROOMS
              </span>
            </div>
          </div>
          <h2 
            className={`
              text-3xl md:text-4xl lg:text-5xl font-bold text-white
              transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '100ms' }}
          >
            Luxury Rooms and Resort
          </h2>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              title={room.title}
              price={room.price}
              image={room.image}
              guests={room.guests}
              beds={room.beds}
              baths={room.baths}
              description={room.description}
              delay={room.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
