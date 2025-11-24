import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import NavLink from './NavLink';
import SearchButton from './SearchButton';
import MenuButton from './MenuButton';
import BookingButton from './BookingButton';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import MobileNavItem from './MobileNavItem';

const navItems = [
  { label: 'Home', path: '/', hasDropdown: true },
  { label: 'Pages', hasDropdown: true },
  { label: 'Rooms & Suites', hasDropdown: true },
  { label: 'Services', hasDropdown: true },
  { label: 'Blog', hasDropdown: true },
  { label: 'Contact', path: '/contact' },
];

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

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (label: string, hasDropdown?: boolean) => {
    setHoveredItem(label);
    if (hasDropdown) {
      setActiveMenu(label);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <nav className="bg-[--navbar-bg-color] relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  label={item.label}
                  path={item.path}
                  hasDropdown={item.hasDropdown}
                  isActive={item.path === location.pathname}
                  onMouseEnter={() => handleMouseEnter(item.label, item.hasDropdown)}
                  isHovered={hoveredItem === item.label}
                />
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <SearchButton />
              <div className="hidden lg:block">
                <MenuButton onClick={toggleMobileMenu} />
              </div>
              <BookingButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <SearchButton />
              <MenuButton onClick={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Mega Menu */}
      <div className="relative hidden lg:block">
        {navItems.map((item) => (
          item.hasDropdown && (
            <MegaMenu
              key={item.label}
              isOpen={activeMenu === item.label}
              title={item.label}
            />
          )
        ))}
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <MobileNavItem
              key={index}
              label={item.label}
              path={item.path}
              hasDropdown={item.hasDropdown}
              items={item.hasDropdown ? megaMenuContent[item.label] : undefined}
              onItemClick={closeMobileMenu}
            />
          ))}
          
          {/* Mobile Booking Button */}
          <div className="pt-4">
            <BookingButton />
          </div>
        </nav>
      </MobileDrawer>
    </div>
  );
};

export default Navbar;
