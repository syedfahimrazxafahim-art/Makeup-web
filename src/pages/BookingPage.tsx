import React, { useState, useEffect } from 'react';
import { Calendar, Phone, CheckCircle2, Clock, MapPin, User, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/assets';
import { SERVICES_DATA } from '../data/servicesData';
import { PageId } from '../components/Header';
import { MagneticButton } from '../components/VengenceUI/MagneticButton';
import { TextReveal } from '../components/VengenceUI/TextReveal';
import { RoyalDivider, TiaraIcon } from '../components/RoyalMotif';

interface BookingPageProps {
  initialService?: string;
  initialLook?: string;
  onNavigate: (page: PageId) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  initialService,
  initialLook,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventDate: '',
    readyTime: '',
    eventType: 'Wedding / Bridal',
    service: initialService || 'Bridal Artistry & Preview',
    guestCount: '1 Person (Solo Client)',
    location: '',
    message: initialLook ? `Inquiring regarding portfolio style: ${initialLook}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialLook) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? prev.message : `Interested in style: ${initialLook}`,
      }));
    }
  }, [initialLook]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockRef = 'NYC-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(mockRef);
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      eventDate: '',
      readyTime: '',
      eventType: 'Wedding / Bridal',
      service: 'Bridal Artistry & Preview',
      guestCount: '1 Person (Solo Client)',
      location: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2A211D] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8C6225] font-semibold mb-3">
            <TiaraIcon className="w-4 h-4 text-[#B88C3A]" />
            <span>Appointment & Consultation Request</span>
          </div>
          <TextReveal as="h1" className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#2A211D] tracking-tight">
            Reserve Your Date
          </TextReveal>
          <RoyalDivider variant="crown" className="my-4" />
          <p className="text-sm sm:text-base text-[#61554E] mt-3 font-normal leading-relaxed">
            Fill out the consultation inquiry form below to check availability and request a custom
            quote for your upcoming date in New York.
          </p>

          {/* Prominent Direct Call Banner */}
          <div className="mt-6 p-4 rounded-sm royal-card bg-white border border-[#B88C3A]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] block">
                  Prefer Direct Phone Scheduling?
                </span>
                <span className="font-semibold text-sm text-[#2A211D]">
                  Speak directly with Irina or text date details
                </span>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#B88C3A] text-white font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#A5782B] transition-all whitespace-nowrap shadow-sm"
            >
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mb-8 p-3.5 rounded-sm bg-[#F5EFE6] border border-[#B88C3A]/25 flex items-start gap-2.5 text-xs text-[#61554E]">
          <AlertCircle className="w-4 h-4 text-[#B88C3A] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#2A211D]">Prototype Appointment System:</strong> Submitting this
            form simulates your appointment request in this prototype preview. For real immediate
            event bookings, call or text <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#8C6225] font-semibold underline">{BUSINESS_INFO.phone}</a>.
          </p>
        </div>

        {/* Submission Confirmation Card */}
        {submitted ? (
          <div className="royal-card bg-white p-8 sm:p-10 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225] mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold block mb-1">
              Inquiry Logged (Prototype Preview)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A211D] font-normal mb-2">
              Thank You, {formData.fullName || 'Client'}
            </h2>
            <p className="text-xs sm:text-sm text-[#61554E] max-w-lg mx-auto mb-6">
              Your inquiry has been formulated with Reference ID: <strong className="text-[#2A211D]">{referenceId}</strong>.
              In production, Irina reviews date availability and responds with package details and
              prep instructions.
            </p>

            {/* Summary Box */}
            <div className="bg-[#FAF7F2] border border-[#B88C3A]/20 rounded-sm p-5 max-w-md mx-auto text-left text-xs space-y-2 mb-8">
              <div className="flex justify-between py-1 border-b border-[#B88C3A]/15">
                <span className="text-[#8C7A70]">Selected Service:</span>
                <span className="text-[#2A211D] font-medium">{formData.service}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#B88C3A]/15">
                <span className="text-[#8C7A70]">Event Date:</span>
                <span className="text-[#2A211D] font-medium">{formData.eventDate || 'Pending Discussion'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#B88C3A]/15">
                <span className="text-[#8C7A70]">Event Type:</span>
                <span className="text-[#2A211D] font-medium">{formData.eventType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#B88C3A]/15">
                <span className="text-[#8C7A70]">Phone:</span>
                <span className="text-[#2A211D] font-medium">{formData.phone || 'Provided via Phone'}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8C7A70]">Location:</span>
                <span className="text-[#2A211D] font-medium">{formData.location || 'New York (TBD)'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B88C3A] text-white font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#A5782B] transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Charkova Irina Direct</span>
              </a>

              <MagneticButton
                variant="secondary"
                size="md"
                onClick={handleReset}
                className="w-full sm:w-auto"
              >
                Submit Another Request
              </MagneticButton>
            </div>
          </div>
        ) : (
          /* Main Booking Request Form */
          <form
            onSubmit={handleSubmit}
            className="royal-card bg-white p-6 sm:p-10 space-y-6 shadow-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                  Full Name <span className="text-[#B88C3A]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Anastasia Vance"
                    className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-3 text-xs text-[#2A211D] placeholder-[#A09289] focus:outline-none transition-colors"
                  />
                  <User className="w-4 h-4 text-[#8C7A70] absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                  Phone Number <span className="text-[#B88C3A]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 1 929-xxx-xxxx"
                    className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-3 text-xs text-[#2A211D] placeholder-[#A09289] focus:outline-none transition-colors"
                  />
                  <Phone className="w-4 h-4 text-[#8C7A70] absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Event Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                  Event / Wedding Date <span className="text-[#B88C3A]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-3 text-xs text-[#2A211D] focus:outline-none transition-colors [color-scheme:light]"
                  />
                </div>
              </div>

              {/* Ready-By Time */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                  Desired Ready-By Time
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.readyTime}
                    onChange={(e) => setFormData({ ...formData, readyTime: e.target.value })}
                    placeholder="e.g. 2:30 PM (Pre-Ceremony)"
                    className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-3 text-xs text-[#2A211D] placeholder-[#A09289] focus:outline-none transition-colors"
                  />
                  <Clock className="w-4 h-4 text-[#8C7A70] absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Event Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                  Event Category
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-3 text-xs text-[#2A211D] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Wedding / Bridal">Wedding / Bridal Ceremony</option>
                  <option value="Red Carpet / Gala">Red Carpet Gala / Evening Event</option>
                  <option value="Editorial / Photoshoot">Editorial / Fashion Photoshoot</option>
                  <option value="Birthday / Milestone">Birthday / Milestone Celebration</option>
                  <option value="Other / Custom">Other Private Appointment</option>
                </select>
              </div>

              {/* Desired Service */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                  Desired Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-3 text-xs text-[#2A211D] focus:outline-none transition-colors cursor-pointer"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Number of People */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                  Number of People Needing Makeup
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-3 text-xs text-[#2A211D] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="1 Person (Solo Client)">1 Person (Solo Client)</option>
                  <option value="2 People (Bride + 1)">2 People (e.g. Bride + Maid of Honor)</option>
                  <option value="3-4 People (Bridal Party)">3–4 People (Bridal Party / Group)</option>
                  <option value="5+ People (Full Bridal Party)">5+ People (Full Bridal Party & Mothers)</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                  Location in New York (Hotel, Venue, or Borough)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. The Plaza Hotel, Manhattan"
                    className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-3 text-xs text-[#2A211D] placeholder-[#A09289] focus:outline-none transition-colors"
                  />
                  <MapPin className="w-4 h-4 text-[#8C7A70] absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Additional Message / Vision Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-2 font-semibold">
                Style Vision, Skin Concerns, or Reference Notes
              </label>
              <div className="relative">
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your dress, skin type, whether you prefer soft glam or bold eye drama..."
                  className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm p-4 text-xs text-[#2A211D] placeholder-[#A09289] focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-[#8C7A70]">
                * Required fields. All consultations handled with strict client privacy.
              </span>

              <MagneticButton
                variant="primary"
                size="lg"
                type="submit"
                className="w-full sm:w-auto"
              >
                Submit Booking Inquiry
              </MagneticButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
