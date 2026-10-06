import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { ASSETS, BUSINESS_INFO } from '../data/assets';
import { MagneticButton } from './VengenceUI/MagneticButton';

export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'booking' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'booking', label: 'Booking' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b border-[#B88C3A]/35 shadow-md bg-[#161210] ${
        scrolled ? 'py-3' : 'py-3.5 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Provided Logo + Brand Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <img
            src={ASSETS.logo}
            alt="Charkova Irina Logo"
            referrerPolicy="no-referrer"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-normal tracking-wide text-[#FFFFFF] group-hover:text-[#D4AC57] transition-colors leading-tight">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#D4AC57] font-sans font-medium">
              New York
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-widest font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                currentPage === item.id
                  ? 'text-[#D4AC57] font-semibold'
                  : 'text-[#E8E2D9] hover:text-[#FFFFFF]'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AC57] rounded-full shadow-[0_0_8px_rgba(212,172,87,0.6)]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-xs text-[#E8C488] hover:text-[#FFFFFF] transition-colors whitespace-nowrap font-medium"
            title="Call Charkova Irina"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AC57]" />
            <span className="font-sans">{BUSINESS_INFO.phone}</span>
          </a>

          <MagneticButton
            variant="primary"
            size="sm"
            icon={<Calendar className="w-3.5 h-3.5" />}
            onClick={() => handleNavClick('booking')}
          >
            Book Now
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            aria-label="Call makeup artist"
            className="p-2 text-[#D4AC57] hover:bg-white/10 rounded-full"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 text-[#FFFFFF] hover:text-[#D4AC57] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161210] border-b border-[#B88C3A]/30 px-5 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-3 rounded text-sm uppercase tracking-wider font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#B88C3A]/20 text-[#D4AC57] font-semibold'
                    : 'text-[#E8E2D9] hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#B88C3A]/30 space-y-2.5">
            <MagneticButton
              variant="primary"
              size="sm"
              className="w-full justify-center"
              icon={<Calendar className="w-3.5 h-3.5" />}
              onClick={() => handleNavClick('booking')}
            >
              Book an Appointment
            </MagneticButton>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs text-[#E8C488] border border-[#B88C3A]/40 rounded-sm hover:text-[#FFFFFF] hover:border-[#D4AC57] transition-colors bg-[#1E1916]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AC57]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
