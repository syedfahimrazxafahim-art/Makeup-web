import React from 'react';
import { Phone, Calendar, ArrowUpRight, MapPin } from 'lucide-react';
import { ASSETS, BUSINESS_INFO } from '../data/assets';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FBF9F5] text-[#423934] border-t border-[#B88C3A]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#B88C3A]/20">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.logo}
                alt="Charkova Irina Logo"
                referrerPolicy="no-referrer"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div>
                <span className="font-serif text-xl sm:text-2xl text-[#2A211D] font-medium tracking-wide block">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold">
                  {BUSINESS_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#61554E] leading-relaxed max-w-md pt-2">
              High-end makeup artistry based in New York. Dedicated to elevating natural beauty,
              creating timeless bridal radiance, and delivering camera-ready red carpet and
              editorial glam with bespoke royal craftsmanship.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#52453E] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#B88C3A]" />
              <span>{BUSINESS_INFO.location} · Studio & On-Location Artistry</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#2A211D] font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {(['home', 'about', 'services', 'portfolio', 'booking', 'contact'] as PageId[]).map(
                (p) => (
                  <li key={p}>
                    <button
                      onClick={() => handleNav(p)}
                      className="capitalize text-[#61554E] hover:text-[#8C6225] font-medium transition-colors cursor-pointer text-left"
                    >
                      {p === 'portfolio' ? 'Portfolio / Gallery' : p}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Direct Verified Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#2A211D] font-semibold mb-3">
              Direct Contact & Social
            </h4>
            <p className="text-xs text-[#61554E]">
              For immediate inquiries, bridal trial appointments, or photoshoot dates:
            </p>

            <div className="space-y-3 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-3 p-3 rounded-sm bg-white border border-[#B88C3A]/25 hover:border-[#B88C3A] shadow-sm transition-all text-xs group"
              >
                <div className="w-8 h-8 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7A70] block">
                    Phone Inquiries
                  </span>
                  <span className="font-semibold text-[#2A211D] group-hover:text-[#8C6225] transition-colors">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-sm bg-white border border-[#B88C3A]/25 hover:border-[#B88C3A] shadow-sm transition-all text-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C7A70] block">
                      Facebook Page
                    </span>
                    <span className="font-semibold text-[#2A211D] group-hover:text-[#8C6225] transition-colors">
                      facebook.com/Charkovairinamuah
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C7A70] group-hover:text-[#8C6225] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <button
              onClick={() => handleNav('booking')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-[#B88C3A] hover:bg-[#A5782B] text-white font-semibold text-xs uppercase tracking-widest shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Request Appointment</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A70] gap-4">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved. New York, USA.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#8C6225] transition-colors cursor-pointer"
            >
              Booking & Inquiries
            </button>
            <span aria-hidden="true">·</span>
            <span className="text-[#8C7A70]">Luxury Royal Beauty Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
