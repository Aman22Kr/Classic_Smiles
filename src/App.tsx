/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { GitHubDeployGuideModal } from './components/GitHubDeployGuideModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { GalleryPage } from './pages/GalleryPage';
import { TourismPage } from './pages/TourismPage';
import { LocationsPage } from './pages/LocationsPage';
import { PricingFaqPage } from './pages/PricingFaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Current route path state. Hash-based for 100% GitHub Pages zero-configuration compatibility!
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingBranch, setBookingBranch] = useState<string | undefined>(undefined);
  const [bookingTreatment, setBookingTreatment] = useState<string | undefined>(undefined);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  // Sync with browser URL hash for deep links and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash) {
        setCurrentPath(hash);
      } else {
        setCurrentPath('home');
      }
    };

    // Initialize from hash if present
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = `#/${path}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (branch?: string, treatment?: string) => {
    setBookingBranch(branch);
    setBookingTreatment(treatment);
    setIsBookingOpen(true);
  };

  // Render current view based on path
  const renderCurrentPage = () => {
    // Specific treatment sub-page: e.g. "treatment/dental-implants" or "treatments/dental-implants"
    if (currentPath.startsWith('treatment/')) {
      const slug = currentPath.replace('treatment/', '');
      return (
        <TreatmentsPage
          currentTreatmentSlug={slug}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    if (currentPath.startsWith('treatments/')) {
      const slug = currentPath.replace('treatments/', '');
      return (
        <TreatmentsPage
          currentTreatmentSlug={slug}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    // Treatments overview hub
    if (currentPath === 'treatments') {
      return (
        <TreatmentsPage
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    switch (currentPath.split('#')[0]) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />;
      case 'tourism':
        return <TourismPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />;
      case 'locations':
        return <LocationsPage onOpenBooking={handleOpenBooking} />;
      case 'pricing':
      case 'faq':
        return <PricingFaqPage onOpenBooking={() => handleOpenBooking()} />;
      case 'contact':
        return <ContactPage onOpenBooking={handleOpenBooking} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased">
      {/* Navigation Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Interactive Priority Booking Modal (Simulated per user request) */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultBranch={bookingBranch}
        defaultTreatment={bookingTreatment}
      />

      {/* GitHub Deployment Guide Modal */}
      <GitHubDeployGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
