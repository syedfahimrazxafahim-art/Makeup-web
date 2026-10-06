import React, { useState } from 'react';
import { Phone, MapPin, Calendar, ArrowUpRight, MessageSquare, CheckCircle2, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/assets';
import { PageId } from '../components/Header';
import { MagneticButton } from '../components/VengenceUI/MagneticButton';
import { TextReveal } from '../components/VengenceUI/TextReveal';
import { RoyalDivider, TiaraIcon } from '../components/RoyalMotif';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [msgSent, setMsgSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    subject: 'General Artistry Question',
    message: '',
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
  };

  const faqs = [
    {
      q: 'How far in advance should I book my bridal makeup in New York?',
      a: 'Prime wedding dates (May through October weekends) typically book 6 to 12 months in advance. However, last-minute weekday or off-peak dates may still be available—please call 1 929-423-4804 to check your specific date.',
    },
    {
      q: 'Do you provide on-location services throughout NYC?',
      a: 'Yes, Irina provides on-location services across all New York City boroughs (Manhattan, Brooklyn, Queens, etc.) directly to your hotel suite, bridal venue, or photo studio. Destination travel is available upon arrangement.',
    },
    {
      q: 'Is a bridal preview or makeup trial recommended?',
      a: 'A preview session is strongly recommended for brides 4 to 8 weeks before the wedding. It allows testing formulas, skin compatibility, lighting transitions, and locking down your exact vision with peace of mind.',
    },
    {
      q: 'How should I prep my skin before my appointment?',
      a: 'Arrive with freshly cleansed, makeup-free skin and your regular daytime moisturizer. Avoid chemical peels, aggressive waxing, or sunburn within 5 days of your appointment. Irina provides complete luxury skin prep before makeup application.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2A211D] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8C6225] font-semibold mb-3">
            <TiaraIcon className="w-4 h-4 text-[#B88C3A]" />
            <span>Connect & Inquire</span>
          </div>
          <TextReveal as="h1" className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#2A211D] tracking-tight">
            Contact Charkova Irina
          </TextReveal>
          <RoyalDivider variant="crown" className="my-4" />
          <p className="text-sm sm:text-base text-[#61554E] mt-3 font-normal leading-relaxed">
            Reach out directly for booking inquiries, editorial production schedules, or bridal
            consultations in New York.
          </p>
        </div>

        {/* Verified Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Direct Phone & Official Facebook */}
          <div className="lg:col-span-5 space-y-6">
            <div className="royal-card p-6 rounded-sm space-y-4 bg-white">
              <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold block">
                Official Contact Channels
              </span>

              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-between p-4 bg-[#FAF7F2] border border-[#B88C3A]/30 hover:border-[#B88C3A] rounded-sm transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] block">
                      Direct Telephone
                    </span>
                    <span className="text-sm font-semibold text-[#2A211D] group-hover:text-[#8C6225] transition-colors">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#8C6225] font-semibold uppercase tracking-wider">
                  Call &rarr;
                </span>
              </a>

              {/* Facebook */}
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#FAF7F2] border border-[#B88C3A]/30 hover:border-[#B88C3A] rounded-sm transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] block">
                      Facebook Page
                    </span>
                    <span className="text-sm font-semibold text-[#2A211D] group-hover:text-[#8C6225] transition-colors">
                      Charkovairinamuah
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C7A70] group-hover:text-[#8C6225] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-4 bg-[#FAF7F2] border border-[#B88C3A]/20 rounded-sm">
                <div className="w-10 h-10 rounded-full bg-[#B88C3A]/15 flex items-center justify-center text-[#8C6225] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C7A70] block">
                    Operating Base
                  </span>
                  <span className="text-sm font-semibold text-[#2A211D]">
                    {BUSINESS_INFO.location}
                  </span>
                  <p className="text-xs text-[#61554E] mt-1 leading-relaxed">
                    Available for on-location services across New York City and destination events.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Booking CTA card */}
            <div className="royal-card p-6 rounded-sm space-y-3 bg-[#F5EFE6]">
              <h3 className="font-serif text-2xl text-[#2A211D]">Need an Appointment?</h3>
              <p className="text-xs text-[#61554E] leading-relaxed">
                If you have an event date locked in, use our dedicated booking reservation form to
                provide event timing and guest count for a faster quote.
              </p>
              <MagneticButton
                variant="primary"
                size="sm"
                icon={<Calendar className="w-3.5 h-3.5" />}
                onClick={() => onNavigate('booking')}
                className="w-full justify-center mt-2"
              >
                Go to Booking Form
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Quick Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="royal-card p-6 sm:p-8 rounded-sm bg-white">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2A211D] font-normal mb-2">
                Send a Direct Message
              </h2>
              <p className="text-xs text-[#61554E] mb-6">
                Have a quick question regarding skin preparation, pricing, or photoshoot
                collaborations? Leave a message below.
              </p>

              {msgSent ? (
                <div className="p-8 bg-[#FAF7F2] border border-[#B88C3A]/40 rounded-sm text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#B88C3A]/20 flex items-center justify-center text-[#8C6225] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#2A211D]">Message Sent</h3>
                  <p className="text-xs text-[#61554E] max-w-sm mx-auto">
                    Thank you for your message. In this prototype preview, your question has been
                    recorded. You can also call directly at {BUSINESS_INFO.phone}.
                  </p>
                  <button
                    onClick={() => setMsgSent(false)}
                    className="text-xs uppercase tracking-wider text-[#8C6225] font-semibold underline pt-2 cursor-pointer"
                  >
                    Send another question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-1.5 font-semibold">
                      Your Name <span className="text-[#B88C3A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-2.5 text-xs text-[#2A211D] placeholder-[#A09289] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-1.5 font-semibold">
                      Phone Number <span className="text-[#B88C3A]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 1 929-xxx-xxxx"
                      className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-2.5 text-xs text-[#2A211D] placeholder-[#A09289] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-1.5 font-semibold">
                      Inquiry Topic
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm px-4 py-2.5 text-xs text-[#2A211D] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="General Artistry Question">General Artistry Question</option>
                      <option value="Bridal Date Availability">Bridal Date Availability</option>
                      <option value="Editorial Shoot Collaboration">Editorial Shoot Collaboration</option>
                      <option value="Custom Event Quote">Custom Event Quote</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2A211D] mb-1.5 font-semibold">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Type your question or request..."
                      className="w-full bg-[#FAF7F2] border border-[#B88C3A]/30 focus:border-[#8C6225] rounded-sm p-4 text-xs text-[#2A211D] placeholder-[#A09289] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton
                    variant="primary"
                    size="md"
                    type="submit"
                    className="w-full justify-center"
                    icon={<MessageSquare className="w-3.5 h-3.5" />}
                  >
                    Send Message
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-12 border-t border-[#B88C3A]/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#8C6225] font-semibold block mb-2">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl text-[#2A211D] font-normal">
              Frequently Asked Questions
            </h2>
            <RoyalDivider variant="diamond" className="my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="royal-card p-5 sm:p-6 rounded-sm space-y-2 bg-white"
              >
                <h3 className="font-semibold text-sm text-[#2A211D] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#B88C3A] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-[#61554E] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
