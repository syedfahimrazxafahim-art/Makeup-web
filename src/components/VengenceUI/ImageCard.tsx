import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Sparkles } from 'lucide-react';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  categoryLabel?: string;
  aspect?: 'portrait' | 'standard' | 'tall';
  onClick?: () => void;
  className?: string;
  priority?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  categoryLabel,
  aspect = 'portrait',
  onClick,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Aspect ratio classes preserving composition and face details
  const aspectClasses = {
    standard: 'aspect-[4/3] md:aspect-[16/11]',
    portrait: 'aspect-[3/4]',
    tall: 'aspect-[9/13] md:aspect-[3/4]',
  };

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-sm bg-[#FFFFFF] border border-[#B88C3A]/20 hover:border-[#B88C3A]/70 shadow-[0_4px_16px_rgba(42,33,29,0.05)] hover:shadow-[0_12px_32px_rgba(184,140,58,0.16)] transition-all duration-500 cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className={`relative w-full ${aspectClasses[aspect]} overflow-hidden`}>
        {/* Placeholder / blur background until loaded */}
        {!isLoaded && !imageError && (
          <div className="absolute inset-0 bg-[#F4EFE6] animate-pulse flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#B88C3A]/50" />
          </div>
        )}

        {imageError ? (
          <div className="absolute inset-0 bg-[#F9F5EE] flex flex-col items-center justify-center p-6 text-center text-[#7A6B63]">
            <Sparkles className="w-8 h-8 text-[#B88C3A] mb-2" />
            <span className="text-xs uppercase tracking-wider font-medium text-[#2A211D]">
              {title}
            </span>
            <span className="text-[11px] text-[#A09289] mt-1">Charkova Irina Artistry</span>
          </div>
        ) : (
          <motion.img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Ambient bottom scrim - measured contrast preserving makeup visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A211D]/85 via-[#2A211D]/25 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

        {/* Floating preview icon affordance on hover */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#B88C3A]/40 shadow-sm flex items-center justify-center text-[#7A531E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Eye className="w-4 h-4 text-[#B88C3A]" />
        </div>

        {/* Card info overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex flex-col justify-end transform transition-transform duration-300 pointer-events-none">
          {categoryLabel && (
            <span className="text-[10px] uppercase tracking-widest text-[#E8C488] font-medium mb-1 drop-shadow-sm">
              {categoryLabel}
            </span>
          )}
          <h3 className="font-serif text-lg md:text-xl text-[#FFFFFF] font-normal tracking-wide drop-shadow-md">
            {title}
          </h3>
          <span className="text-[11px] text-[#EFE8DC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 flex items-center gap-1">
            <span>View look details</span>
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </div>
  );
};
