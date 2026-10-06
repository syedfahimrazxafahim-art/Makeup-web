import React from 'react';
import { Calendar, Check, Phone, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/assets';
import { PageId } from '../components/Header';
import { MagneticButton } from '../components/VengenceUI/MagneticButton';
import { TextReveal } from '../components/VengenceUI/TextReveal';
import { RoyalDivider, TiaraIcon } from '../components/RoyalMotif';

interface ServicesPageProps {
  onNavigate: (page: PageId, extraData?: any) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2A211D] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8C6225] font-semibold mb-3">
            <TiaraIcon className="w-4 h-4 text-[#B88C3A]" />
            <span>Curated Artistry Offerings</span>
          </div>
          <TextReveal as="h1" className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#2A211D] tracking-tight">
            Makeup Services & Experiences
          </TextReveal>
          <RoyalDivider variant="crown" className="my-4" />
          <p className="text-sm sm:text-base text-[#61554E] mt-3 font-normal leading-relaxed">
            Every service is tailored to enhance your facial architecture and event setting.
            Available for private studio appointments and on-location throughout New York.
          </p>

          {/* Pricing Policy Disclaimer */}
          <div className="mt-6 p-4 rounded-sm royal-card max-w-xl mx-auto text-xs text-[#61554E] bg-[#FBF8F3]">
            <p className="flex items-center justify-center gap-1.5 text-[#8C6225] font-semibold mb-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Investment & Custom Proposals</span>
            </p>
            <p>
              <strong className="text-[#2A211D]">[ADD PRICING DETAILS AS DESIRED]</strong> — Quotes are
              tailored to your date, party size, and travel location within New York.
              Contact Irina directly for bespoke packages.
            </p>
          </div>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="royal-card rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#F5EFE6]">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#FFFFFF] font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm">
                      {service.durationEstimate}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2A211D] font-normal group-hover:text-[#8C6225] transition-colors mb-2">
                    {service.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#52453E] leading-relaxed mb-4">
                    {service.fullDesc}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] block mb-1">
                      Ideal For
                    </span>
                    <span className="text-xs text-[#61554E]">{service.idealFor}</span>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#B88C3A]/15">
                    <span className="text-[11px] uppercase tracking-wider text-[#8C6225] block font-semibold">
                      What's Included:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52453E]">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#B88C3A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex flex-col sm:flex-row items-center gap-3">
                <MagneticButton
                  variant="primary"
                  size="sm"
                  className="w-full sm:flex-1 justify-center"
                  icon={<Calendar className="w-3.5 h-3.5" />}
                  onClick={() => onNavigate('booking', { selectedService: service.name })}
                >
                  Book This Service
                </MagneticButton>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-sm bg-white hover:bg-[#F9F5EE] text-xs text-[#8C6225] border border-[#B88C3A]/30 hover:border-[#B88C3A] font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Standard Checklist */}
        <div className="p-8 md:p-12 rounded-sm royal-card bg-[#F5EFE6]">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <TiaraIcon className="w-5 h-5 text-[#B88C3A] mx-auto" />
            <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold block">
              Every Booking Standard
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#2A211D] font-normal">
              What Comes Standard With Every Appointment
            </h3>
            <p className="text-xs sm:text-sm text-[#61554E] leading-relaxed">
              Whether reserving a solo bridal look or group event glam, Irina maintains the highest luxury artistry protocol.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
              <div className="p-4 bg-white rounded-sm border border-[#B88C3A]/20">
                <h4 className="font-medium text-xs text-[#2A211D] mb-1">Skin Diagnostics</h4>
                <p className="text-[11px] text-[#61554E]">
                  Evaluation of hydration and undertones for base formulation.
                </p>
              </div>
              <div className="p-4 bg-white rounded-sm border border-[#B88C3A]/20">
                <h4 className="font-medium text-xs text-[#2A211D] mb-1">Custom Lashes</h4>
                <p className="text-[11px] text-[#61554E]">
                  Hand-placed individual lash clusters fitted to your eye line.
                </p>
              </div>
              <div className="p-4 bg-white rounded-sm border border-[#B88C3A]/20">
                <h4 className="font-medium text-xs text-[#2A211D] mb-1">All-Day Lock</h4>
                <p className="text-[11px] text-[#61554E]">
                  Dual-phase setting process that locks color and dimension.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <MagneticButton
                variant="primary"
                size="md"
                onClick={() => onNavigate('booking')}
              >
                Schedule Your Appointment
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
