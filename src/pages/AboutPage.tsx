import React, { useState } from 'react';
import { Calendar, Phone, Edit3, Heart, Award, Shield, MapPin, Sparkles } from 'lucide-react';
import { ASSETS, BUSINESS_INFO } from '../data/assets';
import { PageId } from '../components/Header';
import { MagneticButton } from '../components/VengenceUI/MagneticButton';
import { TextReveal } from '../components/VengenceUI/TextReveal';
import { RoyalDivider, TiaraIcon } from '../components/RoyalMotif';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [showBioNotes, setShowBioNotes] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2A211D] pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb / Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8C6225] font-semibold mb-3">
            <TiaraIcon className="w-4 h-4 text-[#B88C3A]" />
            <span>The Artist Behind the Artistry</span>
          </div>
          <TextReveal as="h1" className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#2A211D] tracking-tight">
            Charkova Irina
          </TextReveal>
          <RoyalDivider variant="crown" className="my-4" />
          <p className="text-sm sm:text-base text-[#61554E] mt-3 font-normal leading-relaxed">
            Professional Makeup Artist based in New York, dedicated to couture bridal aesthetics,
            soft-glam royal elegance, and enhancing your distinctive natural radiance.
          </p>
        </div>

        {/* Editorial Two-Column Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Real Artist Photograph with Metallic Gold Border */}
          <div className="lg:col-span-5 relative">
            <div className="royal-card p-2 rounded-sm overflow-hidden">
              <img
                src={ASSETS.artistAtWork}
                alt="Charkova Irina Professional Makeup Artist at Work"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover object-center aspect-[3/4] rounded-sm"
              />
              <div className="p-3 text-center bg-white">
                <span className="text-[10px] uppercase tracking-widest text-[#8C6225] font-semibold block">
                  Studio Session
                </span>
                <span className="font-serif text-base text-[#2A211D]">
                  Charkova Irina · New York, USA
                </span>
              </div>
            </div>

            {/* Quick Contact badge below photo */}
            <div className="mt-4 p-4 royal-card rounded-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8C7A70] block">
                  Direct Line
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-semibold text-xs text-[#8C6225] hover:underline"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#52453E]">
                <MapPin className="w-3.5 h-3.5 text-[#B88C3A]" />
                <span>New York</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold block mb-2">
                Artistry Identity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A211D] font-normal leading-snug">
                Where Skin Health Meets High-Fashion Precision
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#52453E] font-normal leading-relaxed">
              <p>
                In an era dominated by heavy synthetic filters and mask-like full coverage, Charkova
                Irina champions a modern, skin-conscious approach: radiant, luminous skin that breathes
                freely in person and appears effortless under high-definition camera lenses.
              </p>
              <p>
                Every face possesses its own architectural balance—the angle of the cheekbone, the
                depth of the eye socket, the natural curl of the lash, and the warm undertones of the
                complexion. Irina’s method starts with bespoke skincare prep, ensuring that makeup
                adheres smoothly and maintains its fresh, just-applied luster for twelve hours or more.
              </p>
              <p>
                Specializing in bridal, red carpet galas, and photography productions, she caters to
                clients who seek to feel like the most refined, confident, and magnetic version of
                themselves.
              </p>
            </div>

            {/* Transparent bio placeholder notice per prompt instruction */}
            <div className="p-5 royal-card rounded-sm space-y-2 bg-[#FBF8F3]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6225]">
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Artist Profile & Background</span>
                </div>
                <button
                  onClick={() => setShowBioNotes(!showBioNotes)}
                  className="text-[11px] text-[#8C7A70] hover:text-[#8C6225] underline cursor-pointer"
                >
                  {showBioNotes ? 'Hide Details' : 'View Bio Note'}
                </button>
              </div>

              <p className="text-xs text-[#61554E] leading-relaxed">
                <strong className="text-[#2A211D]">[ADD PROFESSIONAL BIO & YEARS OF EXPERIENCE]</strong>
                — In accordance with strict professional verification standards, details regarding
                specific career history, certifications, or formal academy backgrounds are kept open for
                direct client confirmation rather than assumed.
              </p>

              {showBioNotes && (
                <div className="pt-2 text-xs text-[#52453E] border-t border-[#B88C3A]/20 space-y-1">
                  <p>• <strong>Location:</strong> Active throughout New York City (Manhattan, Brooklyn, Queens) & on-location travel upon arrangement.</p>
                  <p>• <strong>Focus:</strong> Couture Bridal, High-Impact Evening Glam, Fashion & Lookbook Productions.</p>
                  <p>• <strong>Direct Contact:</strong> Consultations arranged directly via phone at {BUSINESS_INFO.phone}.</p>
                </div>
              )}
            </div>

            {/* Core Philosophies */}
            <div className="pt-4 border-t border-[#B88C3A]/20">
              <h3 className="font-serif text-2xl text-[#2A211D] mb-4">
                The Four Pillars of Irina's Artistry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 royal-card rounded-sm">
                  <div className="flex items-center gap-2 text-[#8C6225] mb-1.5">
                    <Heart className="w-4 h-4 text-[#B88C3A]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#2A211D]">
                      1. Enhance, Never Mask
                    </span>
                  </div>
                  <p className="text-xs text-[#61554E] leading-relaxed">
                    Preserving skin vitality and facial authenticity through light-reflective textures.
                  </p>
                </div>

                <div className="p-4 royal-card rounded-sm">
                  <div className="flex items-center gap-2 text-[#8C6225] mb-1.5">
                    <Shield className="w-4 h-4 text-[#B88C3A]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#2A211D]">
                      2. Enduring Longevity
                    </span>
                  </div>
                  <p className="text-xs text-[#61554E] leading-relaxed">
                    Utilizing tear-resistant seals formulated to endure emotion and long receptions.
                  </p>
                </div>

                <div className="p-4 royal-card rounded-sm">
                  <div className="flex items-center gap-2 text-[#8C6225] mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#B88C3A]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#2A211D]">
                      3. Lighting Harmony
                    </span>
                  </div>
                  <p className="text-xs text-[#61554E] leading-relaxed">
                    Tested under daylight and tungsten lights so looks transition seamlessly from day to night.
                  </p>
                </div>

                <div className="p-4 royal-card rounded-sm">
                  <div className="flex items-center gap-2 text-[#8C6225] mb-1.5">
                    <Award className="w-4 h-4 text-[#B88C3A]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#2A211D]">
                      4. Pro-Grade Hygiene
                    </span>
                  </div>
                  <p className="text-xs text-[#61554E] leading-relaxed">
                    Hospital-grade sanitization of brushes, stainless palettes, and single-use applicators.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <MagneticButton
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
                onClick={() => onNavigate('booking')}
                className="w-full sm:w-auto"
              >
                Book with Irina
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                size="md"
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto"
              >
                View Makeup Portfolio
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Location Banner */}
        <div className="p-8 md:p-10 rounded-sm royal-card text-center max-w-3xl mx-auto bg-[#F5EFE6]">
          <MapPin className="w-6 h-6 text-[#B88C3A] mx-auto mb-2" />
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2A211D] font-normal mb-2">
            New York Studio & On-Location Artistry
          </h3>
          <p className="text-xs sm:text-sm text-[#61554E] max-w-lg mx-auto leading-relaxed">
            Available for private appointments in New York or on-site at your hotel suite, bridal venue, or studio.
          </p>
          <div className="mt-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C6225] font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call to inquire on travel & availability: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
