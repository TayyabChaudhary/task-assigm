import React from 'react';

interface MegaMenuProps {
  isOpen: boolean;
  title: string;
}

const megaMenuContent: Record<string, { title: string; items: string[] }[]> = {
  Home: [
    { title: 'Home Layouts', items: ['Home 1', 'Home 2', 'Home 3', 'Home 4'] },
    { title: 'Features', items: ['Slider', 'Video Banner', 'Parallax', 'Animation'] },
  ],
  Pages: [
    { title: 'About', items: ['About Us', 'Our Team', 'Testimonials', 'FAQ'] },
    { title: 'Services', items: ['All Services', 'Service Details', 'Pricing', 'Gallery'] },
  ],
  'Rooms & Suites': [
    { title: 'Room Types', items: ['Deluxe Room', 'Premium Suite', 'Family Room', 'Presidential Suite'] },
    { title: 'Amenities', items: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
  ],
  Services: [
    { title: 'Facilities', items: ['Swimming Pool', 'Fitness Center', 'Spa & Wellness', 'Conference Room'] },
    { title: 'Activities', items: ['City Tours', 'Airport Transfer', 'Room Service', 'Concierge'] },
  ],
  Blog: [
    { title: 'Blog Layouts', items: ['Blog Grid', 'Blog List', 'Blog Masonry', 'Single Post'] },
    { title: 'Categories', items: ['Travel Tips', 'Local Guides', 'Hotel News', 'Events'] },
  ],
};

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, title }) => {
  const content = megaMenuContent[title];

  if (!content) return null;

  return (
    <div
      className={`
        absolute top-0 left-0 w-full
        bg-white shadow-2xl
        transition-all duration-500 ease-in-out
        ${isOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }
      `}
      style={{
        transitionProperty: 'opacity, transform, visibility',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className={`grid ${content.length === 2 ? 'grid-cols-2' : content.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-8`}>
          {content.map((section, idx) => (
            <div 
              key={idx} 
              className={`
                space-y-4 transition-all duration-500 ease-out
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx}
                    className="text-sm text-gray-600 hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2 transform flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
