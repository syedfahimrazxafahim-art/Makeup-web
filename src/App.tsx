/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { LightboxModal } from './components/LightboxModal';
import { PORTFOLIO_ITEMS, PortfolioItem } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const [bookingPrefill, setBookingPrefill] = useState<{
    service?: string;
    look?: string;
  }>({});

  const handleNavigate = (page: PageId, extraData?: { selectedService?: string; selectedLook?: string }) => {
    if (extraData?.selectedService) {
      setBookingPrefill({ service: extraData.selectedService });
    } else if (extraData?.selectedLook) {
      setBookingPrefill({ look: extraData.selectedLook });
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookLookFromLightbox = (item: PortfolioItem) => {
    setLightboxItem(null);
    setBookingPrefill({
      service: item.category === 'Bridal' ? 'Bridal Artistry & Preview' : 'Red Carpet & Evening Glam',
      look: item.title,
    });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#2A211D]">
      {/* Universal Luxury Top Bar */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Multi-Page Routed View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'booking' && (
          <BookingPage
            initialService={bookingPrefill.service}
            initialLook={bookingPrefill.look}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Universal Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Full-Screen Portfolio Lightbox */}
      <LightboxModal
        item={lightboxItem}
        allItems={PORTFOLIO_ITEMS}
        onClose={() => setLightboxItem(null)}
        onNavigate={(item) => setLightboxItem(item)}
        onBookLook={handleBookLookFromLightbox}
      />
    </div>
  );
}
