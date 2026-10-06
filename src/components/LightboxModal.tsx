import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Sparkles, Phone, Calendar } from 'lucide-react';
import { PortfolioItem } from '../data/portfolioData';
import { BUSINESS_INFO } from '../data/assets';
import { MagneticButton } from './VengenceUI/MagneticButton';

interface LightboxModalProps {
  item: PortfolioItem | null;
  allItems: PortfolioItem[];
  onClose: () => void;
  onNavigate: (item: PortfolioItem) => void;
  onBookLook: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  allItems,
  onClose,
  onNavigate,
  onBookLook,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, allItems]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
    setIsZoomed(false);
    onNavigate(allItems[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allItems.length;
    setIsZoomed(false);
    onNavigate(allItems[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Top action bar */}
      <div className="absolute top-4 inset-x-4 md:inset-x-8 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">
            {item.categoryLabel}
          </span>
          <span className="text-white/30" aria-hidden="true">·</span>
          <span className="text-xs text-[#a8a29e]">
            {currentIndex + 1} of {allItems.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            className="p-2 text-white/70 hover:text-[#c5a059] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            aria-label="Close viewer"
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main content layout */}
      <div className="relative w-full max-w-6xl h-full flex flex-col lg:flex-row items-center justify-center gap-6 pt-14 pb-4">
        {/* Navigation arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous look"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 text-white/90 hover:text-[#D4AC57] bg-black/60 hover:bg-black/80 rounded-full border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation arrow Right */}
        <button
          onClick={handleNext}
          aria-label="Next look"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 text-white/90 hover:text-[#D4AC57] bg-black/60 hover:bg-black/80 rounded-full border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image viewport container */}
        <div className="relative flex-1 w-full h-[60vh] sm:h-[65vh] lg:h-[82vh] flex items-center justify-center overflow-hidden">
          <div
            className={`relative max-w-full max-h-full transition-transform duration-300 ease-out flex items-center justify-center ${
              isZoomed ? 'scale-135 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="max-h-[58vh] sm:max-h-[64vh] lg:max-h-[80vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-[#B88C3A]/30 select-none"
            />
          </div>
        </div>

        {/* Detail sidebar on large screens / bottom tray on mobile */}
        <div className="w-full lg:w-96 bg-[#FFFFFF] border border-[#B88C3A]/30 shadow-2xl rounded-sm p-5 md:p-6 flex flex-col justify-between shrink-0 max-h-[32vh] lg:max-h-[82vh] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#B88C3A]" />
              <span className="text-[11px] uppercase tracking-widest text-[#8C6225] font-semibold">
                Charkova Irina Artistry
              </span>
            </div>

            <h2 className="font-serif text-2xl lg:text-3xl text-[#2A211D] font-normal tracking-wide">
              {item.title}
            </h2>

            <p className="text-xs text-[#52453E] mt-2.5 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-4 pt-4 border-t border-[#B88C3A]/20">
              <h3 className="text-[11px] uppercase tracking-widest text-[#7A6B63] mb-2 font-semibold">
                Artistry Focus & Technique
              </h3>
              <ul className="space-y-1.5 text-xs text-[#423934]">
                {item.lookDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B88C3A]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#B88C3A]/20 space-y-2.5">
            <MagneticButton
              variant="primary"
              size="sm"
              className="w-full justify-center"
              icon={<Calendar className="w-3.5 h-3.5" />}
              onClick={() => {
                onClose();
                onBookLook(item);
              }}
            >
              Inquire for This Look
            </MagneticButton>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center w-full gap-2 px-3 py-2 text-xs text-[#7A531E] border border-[#B88C3A]/40 hover:border-[#B88C3A] rounded-sm transition-colors bg-[#FAF7F2]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Direct: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
