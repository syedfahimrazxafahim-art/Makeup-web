import React, { useState } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';
import { BUSINESS_INFO } from '../data/assets';
import { PageId } from '../components/Header';
import { ImageCard } from '../components/VengenceUI/ImageCard';
import { TextReveal } from '../components/VengenceUI/TextReveal';
import { MagneticButton } from '../components/VengenceUI/MagneticButton';
import { RoyalDivider, TiaraIcon } from '../components/RoyalMotif';

interface PortfolioPageProps {
  onNavigate: (page: PageId, extraData?: any) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

type FilterCategory = 'All' | 'Bridal' | 'Evening Glam' | 'Editorial' | 'Soft Glam';

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  const filterTabs: { id: FilterCategory; label: string; count: number }[] = [
    { id: 'All', label: 'All Works', count: PORTFOLIO_ITEMS.length },
    {
      id: 'Bridal',
      label: 'Bridal & Romance',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'Bridal').length,
    },
    {
      id: 'Evening Glam',
      label: 'Red Carpet & Glam',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'Evening Glam').length,
    },
    {
      id: 'Editorial',
      label: 'Editorial & Photoshoot',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'Editorial').length,
    },
    {
      id: 'Soft Glam',
      label: 'Soft Natural Glow',
      count: PORTFOLIO_ITEMS.filter((i) => i.category === 'Soft Glam').length,
    },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2A211D] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8C6225] font-semibold mb-3">
            <TiaraIcon className="w-4 h-4 text-[#B88C3A]" />
            <span>Real Client Gallery & Editorial Work</span>
          </div>
          <TextReveal as="h1" className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#2A211D] tracking-tight">
            The Makeup Artistry Portfolio
          </TextReveal>
          <RoyalDivider variant="crown" className="my-4" />
          <p className="text-sm sm:text-base text-[#61554E] mt-3 font-normal leading-relaxed">
            Every photograph below showcases real makeup applications executed by Charkova Irina
            for brides, gala attendees, photoshoot sets, and private clients in New York.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white border border-[#B88C3A]/30 rounded-sm shadow-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-[#A5782B] to-[#966B22] text-white shadow-md'
                    : 'text-[#61554E] hover:text-[#2A211D] hover:bg-[#FAF7F2]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 text-[10px] ${activeCategory === tab.id ? 'text-white/80' : 'text-[#8C7A70]'}`}>
                  ({tab.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              <ImageCard
                src={item.imageUrl}
                alt={item.title}
                title={item.title}
                categoryLabel={item.categoryLabel}
                aspect={item.aspect}
                onClick={() => onOpenLightbox(item)}
              />
              <div className="mt-2.5 flex items-center justify-between text-xs px-1">
                <span className="text-[#61554E] truncate pr-2 font-normal">{item.description.slice(0, 50)}...</span>
                <button
                  onClick={() => onNavigate('booking', { selectedLook: item.title })}
                  className="text-[11px] uppercase tracking-wider text-[#8C6225] font-semibold hover:underline shrink-0 cursor-pointer"
                >
                  Book Look
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-20 p-8 sm:p-12 rounded-sm royal-card bg-[#F5EFE6] text-center max-w-3xl mx-auto">
          <TiaraIcon className="w-6 h-6 text-[#B88C3A] mx-auto mb-2" />
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2A211D] font-normal mb-2">
            Inspired by a Specific Style?
          </h3>
          <p className="text-xs sm:text-sm text-[#61554E] max-w-lg mx-auto leading-relaxed mb-6">
            Share the look title during your appointment inquiry or bring reference photos to your
            bridal trial. Irina customizes the technique to your eye shape and undertone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              variant="primary"
              size="md"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto"
            >
              Inquire for an Appointment
            </MagneticButton>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-white border border-[#B88C3A]/30 hover:border-[#B88C3A] text-xs uppercase tracking-widest text-[#2A211D] hover:text-[#8C6225] font-semibold shadow-sm transition-all w-full sm:w-auto"
            >
              <Phone className="w-3.5 h-3.5 text-[#B88C3A]" />
              <span>Direct Phone: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
