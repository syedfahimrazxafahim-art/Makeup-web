import React from 'react';

/**
 * Royal Divider with subtle central diamond or tiara accent
 */
export const RoyalDivider: React.FC<{ className?: string; variant?: 'diamond' | 'crown' | 'floral' }> = ({
  className = '',
  variant = 'diamond',
}) => {
  return (
    <div className={`flex items-center justify-center my-8 max-w-xs mx-auto ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B88C3A]/40 to-[#B88C3A]" />
      <div className="px-3 text-[#B88C3A]">
        {variant === 'crown' ? (
          /* Delicate Crown / Tiara Motif */
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z" opacity="0.85" />
          </svg>
        ) : variant === 'floral' ? (
          /* Subtle Floral / Botanical Motif */
          <svg className="w-5 h-5 fill-none stroke-current stroke-1" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path d="M12 4c1.5 2.5 1.5 5 0 6-1.5-1-1.5-3.5 0-6zM12 20c-1.5-2.5-1.5-5 0-6 1.5 1 1.5 3.5 0 6zM4 12c2.5-1.5 5-1.5 6 0-1 1.5-3.5 1.5-6 0zM20 12c-2.5 1.5-5 1.5-6 0 1-1.5 3.5-1.5 6 0z" />
          </svg>
        ) : (
          /* Elegant Geometric Diamond Accent */
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#B88C3A]/60" />
            <span className="w-2 h-2 rotate-45 border border-[#B88C3A] bg-[#B88C3A]/20" />
            <span className="w-1 h-1 rounded-full bg-[#B88C3A]/60" />
          </div>
        )}
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B88C3A]/40 to-[#B88C3A]" />
    </div>
  );
};

/**
 * Small Tiara / Crown Icon for Headings and Badges
 */
export const TiaraIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-[#B88C3A]' }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z" />
  </svg>
);
