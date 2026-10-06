import React from 'react';
import { Calendar, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Heart, Phone, MapPin } from 'lucide-react';
import { ASSETS, BUSINESS_INFO } from '../data/assets';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';
import { SERVICES_DATA } from '../data/servicesData';
import { DEMO_TESTIMONIALS } from '../data/testimonialsData';
import { PageId } from '../components/Header';
import { MagneticButton } from '../components/VengenceUI/MagneticButton';
import { TextReveal, FadeInBlock } from '../components/VengenceUI/TextReveal';
import { ImageCard } from '../components/VengenceUI/ImageCard';
import { RoyalDivider, TiaraIcon } from '../components/RoyalMotif';

interface HomePageProps {
  onNavigate: (page: PageId, extraData?: any) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenLightbox }) => {
  const featuredWorks = PORTFOLIO_ITEMS.slice(0, 6);
  const featuredServices = SERVICES_DATA.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2A211D]">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. LUXURY HERO SECTION
          - No blurry milky shade, no side vignettes, crisp edge-to-edge clarity
          - Floating circular center logo badge COMPLETELY REMOVED
          - Hero title takes direct center focus without obstruction
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#1A1412]">
        {/* Hero Background Image: Crisp, sharp, vibrant, zero milky side vignettes */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroBackground}
            alt="Charkova Irina Luxury Makeup Artistry"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Crisp, clean scrim ensuring vibrant image visibility and sharp contrast */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Subtitle / Positioning Tag with Tiara Icon (Directly above heading, no circular badge) */}
          <FadeInBlock delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#B88C3A]/50 text-xs uppercase tracking-[0.22em] text-[#E8C488] font-medium mb-5 shadow-sm">
              <TiaraIcon className="w-3.5 h-3.5 text-[#B88C3A]" />
              <span>{BUSINESS_INFO.title} · {BUSINESS_INFO.location}</span>
            </div>
          </FadeInBlock>

          {/* Main Hero Title - Moved up naturally into primary center focus */}
          <TextReveal as="h1" delay={0.2} className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FFFFFF] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-[1.08] max-w-3xl text-balance">
            Elevating Natural Beauty into Royal Artistry
          </TextReveal>

          {/* Supporting Copy */}
          <FadeInBlock delay={0.35} className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-[#F5EFE6] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] font-light leading-relaxed">
            Couture bridal perfection, high-impact red carpet glam, and soft-luminous editorial beauty tailored to your distinct facial harmony.
          </FadeInBlock>

          {/* Hero CTAs */}
          <FadeInBlock delay={0.5} className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <MagneticButton
              variant="primary"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto"
            >
              Book an Appointment
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto"
            >
              View Portfolio
            </MagneticButton>
          </FadeInBlock>

          {/* Royal Divider Motif */}
          <RoyalDivider variant="crown" className="mt-10 mb-0 opacity-80" />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. INTRODUCTION TO CHARKOVA IRINA
          Pure crisp white background, sharp edges, no blurry borders
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#B88C3A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Artist Frame with Crisp Metallic Gold Border */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-sm border border-[#B88C3A]/30 shadow-lg bg-white p-2">
                <img
                  src={ASSETS.artistAtWork}
                  alt="Charkova Irina at Work"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center aspect-[3/4] rounded-sm"
                />
                <div className="absolute inset-2 bg-gradient-to-t from-[#2A211D]/80 via-transparent to-transparent pointer-events-none rounded-sm" />
                <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none">
                  <span className="text-[10px] uppercase tracking-widest text-[#E8C488] font-semibold block">
                    Master Artistry
                  </span>
                  <span className="font-serif text-lg text-[#FFFFFF]">
                    Precision Craftsmanship in Every Stroke
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C6225] font-semibold">
                <TiaraIcon className="w-3.5 h-3.5" />
                <span>Meet Charkova Irina</span>
              </div>

              <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A211D] font-normal leading-tight">
                Artistry Focused on Skin Radiance & Graceful Individuality
              </TextReveal>

              <p className="text-sm sm:text-base text-[#52453E] font-normal leading-relaxed">
                Based in New York, Charkova Irina pairs high-fashion editorial technique with a soft,
                royal aesthetic. Her philosophy honors the unique architecture of each face, allowing
                fresh, dewy skin to glow under natural light and camera flashes without feeling masked.
              </p>

              <p className="text-sm sm:text-base text-[#61554E] font-normal leading-relaxed">
                From enduring tear-resistant bridal looks to gala red carpet glamour, each session
                begins with customized skin hydration, ensuring all-day comfort and effortless radiance.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <MagneticButton
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('about')}
                >
                  Read Artist Philosophy
                </MagneticButton>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#7A531E] hover:text-[#B88C3A] font-semibold py-2 px-3 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B88C3A]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. FEATURED SERVICES
          Clean, crisp solid off-white background with sharp borders
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-[#FBF9F5] border-b border-[#B88C3A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold block mb-2">
              Curated Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A211D] font-normal">
              Specialized Makeup Artistry
            </h2>
            <RoyalDivider variant="diamond" className="my-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="royal-card rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group"
              >
                <div className="aspect-[16/11] relative overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] uppercase tracking-wider text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-sm">
                    {service.durationEstimate}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#2A211D] font-medium group-hover:text-[#8C6225] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#61554E] mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#B88C3A]/15 flex items-center justify-between">
                    <span className="text-[11px] text-[#8C7A70]">New York</span>
                    <button
                      onClick={() => onNavigate('booking', { selectedService: service.name })}
                      className="text-xs uppercase tracking-wider text-[#8C6225] hover:text-[#2A211D] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book Look</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <MagneticButton
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => onNavigate('services')}
            >
              Explore All Services
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. FEATURED REAL MAKEUP WORK (PORTFOLIO PREVIEW)
          Pure crisp white background
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#B88C3A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold block mb-2">
              Authentic Artistry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A211D] font-normal">
              Portfolio Highlights
            </h2>
            <p className="text-xs sm:text-sm text-[#61554E] mt-2">
              Captured directly from real bridal ceremonies, galas, and photography sessions in New York.
            </p>
            <RoyalDivider variant="crown" className="my-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredWorks.map((item) => (
              <ImageCard
                key={item.id}
                src={item.imageUrl}
                alt={item.title}
                title={item.title}
                categoryLabel={item.categoryLabel}
                aspect={item.aspect}
                onClick={() => onOpenLightbox(item)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <MagneticButton
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => onNavigate('portfolio')}
            >
              View Full Gallery (18 Authentic Works)
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. WHY CHOOSE CHARKOVA IRINA
          Clean solid off-white background with sharp borders
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-[#FBF9F5] border-b border-[#B88C3A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold block mb-2">
              The Royal Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A211D] font-normal">
              Why Discerning Clients Choose Irina
            </h2>
            <RoyalDivider variant="diamond" className="my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="royal-card p-6 rounded-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225] mx-auto mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#2A211D] mb-1.5 font-medium">Skin-First Care</h3>
              <p className="text-xs text-[#61554E] leading-relaxed">
                Nourishing prep and luxury hydration so makeup blends seamlessly without heaviness.
              </p>
            </div>

            <div className="royal-card p-6 rounded-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225] mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#2A211D] mb-1.5 font-medium">Flash & HD Tested</h3>
              <p className="text-xs text-[#61554E] leading-relaxed">
                Zero flashback minerals, calibrated for both daylight and high-intensity studio photography.
              </p>
            </div>

            <div className="royal-card p-6 rounded-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225] mx-auto mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#2A211D] mb-1.5 font-medium">Bespoke Lashes</h3>
              <p className="text-xs text-[#61554E] leading-relaxed">
                Hand-placed flutter lash clusters customized to your eye shape and comfort.
              </p>
            </div>

            <div className="royal-card p-6 rounded-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225] mx-auto mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#2A211D] mb-1.5 font-medium">Pristine Hygiene</h3>
              <p className="text-xs text-[#61554E] leading-relaxed">
                Hospital-grade brush sanitization, single-use wands, and stainless palettes for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          6. TESTIMONIALS (PROTOTYPE DEMONSTRATION LABELED)
          Pure crisp white background
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#B88C3A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-widest text-[#8C7A70] block mb-1">
              Prototype Demo Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A211D] font-normal">
              Client Experiences
            </h2>
            <RoyalDivider variant="floral" className="my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="royal-card p-6 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#B88C3A] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#423934] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#B88C3A]/20">
                  <span className="font-semibold text-xs text-[#2A211D] block">
                    {t.clientType}
                  </span>
                  <span className="text-[11px] text-[#8C7A70]">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          7. BOOKING & CONTACT CALL TO ACTION
          Clean, solid off-white background with crisp sharp edges
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#FBF9F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <TiaraIcon className="w-6 h-6 text-[#B88C3A] mx-auto mb-2" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C6225] font-semibold block mb-2">
            Secure Your Date
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2A211D] font-normal leading-tight">
            Ready to Look & Feel Unforgettable?
          </h2>
          <p className="text-sm text-[#61554E] mt-3 max-w-lg mx-auto leading-relaxed">
            Dates fill quickly throughout the New York wedding and gala season. Submit an appointment inquiry or call directly to verify availability.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              variant="primary"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto"
            >
              Book an Appointment
            </MagneticButton>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-white border border-[#B88C3A]/40 hover:border-[#B88C3A] text-xs uppercase tracking-widest text-[#2A211D] hover:text-[#8C6225] font-semibold shadow-sm transition-all w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#B88C3A]" />
              <span>Call Direct: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#8C7A70]">
            <MapPin className="w-3.5 h-3.5 text-[#B88C3A]" />
            <span>Serving all New York City boroughs & surrounding destinations</span>
          </div>
        </div>
      </section>
    </div>
  );
};
