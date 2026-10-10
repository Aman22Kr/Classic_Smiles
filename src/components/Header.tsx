import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  Calendar, 
  Shield 
} from 'lucide-react';
import { TREATMENTS, CLINIC_LOCATIONS } from '../data/mockData';

import { ClassicSmilesLogo } from './ClassicSmilesLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (branch?: string, treatment?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsDropdownOpen, setIsTreatmentsDropdownOpen] = useState(false);
  const [isClinicsDropdownOpen, setIsClinicsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setIsTreatmentsDropdownOpen(false);
    setIsClinicsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Notification / Helpline Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-cyan-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Emergency & Phone */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-1.5 hover:text-cyan-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Helpline: +91 98765 43210</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mon-Sat: 10:00 AM - 8:30 PM (Sun by appt)</span>
            </div>
            <span className="hidden lg:inline text-slate-600">|</span>
            <div className="hidden lg:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>6 Centers in Mumbai: Bandra, Juhu, Andheri, Borivali, Santacruz, Powai</span>
            </div>
          </div>

          {/* Right badges */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-cyan-900/60 text-cyan-200 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-cyan-700/50">
              <Shield className="w-3 h-3 text-cyan-400" /> ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-200 ${isScrolled ? 'py-2.5 shadow-md' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <ClassicSmilesLogo theme="light" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-700">
            <button
              onClick={() => navigateTo('home')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'home' ? 'text-cyan-700 font-bold bg-cyan-50' : 'hover:text-cyan-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Treatments Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsTreatmentsDropdownOpen(true)}
              onMouseLeave={() => setIsTreatmentsDropdownOpen(false)}
            >
              <button
                onClick={() => navigateTo('treatments')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentPath.startsWith('treatment') ? 'text-cyan-700 font-bold bg-cyan-50' : 'hover:text-cyan-700 hover:bg-slate-50'
                }`}
              >
                <span>Treatments</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {isTreatmentsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 pt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 mb-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex justify-between items-center">
                    <span>Multi-Specialty Care</span>
                    <button 
                      onClick={() => navigateTo('treatments')} 
                      className="text-cyan-700 hover:underline capitalize"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-0.5">
                    {TREATMENTS.map((t) => (
                      <button
                        key={t.slug}
                        onClick={() => navigateTo(`treatment/${t.slug}`)}
                        className="w-full text-left px-3 py-2 rounded-xl hover:bg-cyan-50/70 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs font-semibold text-slate-800 group-hover:text-cyan-800">
                            {t.title}
                          </p>
                          <p className="text-[10px] text-slate-500 line-clamp-1">
                            {t.shortDesc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown / Link */}
            <button
              onClick={() => navigateTo('about')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'about' ? 'text-cyan-700 font-bold bg-cyan-50' : 'hover:text-cyan-700 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* Smile Gallery */}
            <button
              onClick={() => navigateTo('gallery')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'gallery' ? 'text-cyan-700 font-bold bg-cyan-50' : 'hover:text-cyan-700 hover:bg-slate-50'
              }`}
            >
              Smile Gallery
            </button>

            {/* Dental Tourism */}
            <button
              onClick={() => navigateTo('tourism')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'tourism' ? 'text-cyan-700 font-bold bg-cyan-50' : 'hover:text-cyan-700 hover:bg-slate-50'
              }`}
            >
              Dental Tourism
            </button>

            {/* Mumbai Clinics Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsClinicsDropdownOpen(true)}
              onMouseLeave={() => setIsClinicsDropdownOpen(false)}
            >
              <button
                onClick={() => navigateTo('locations')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentPath === 'locations' ? 'text-cyan-700 font-bold bg-cyan-50' : 'hover:text-cyan-700 hover:bg-slate-50'
                }`}
              >
                <span>Mumbai Clinics</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {isClinicsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 pt-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 mb-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex justify-between items-center">
                    <span>6 Mumbai Centers</span>
                    <button 
                      onClick={() => navigateTo('locations')} 
                      className="text-cyan-700 hover:underline capitalize"
                    >
                      Map View
                    </button>
                  </div>
                  <div className="space-y-0.5">
                    {CLINIC_LOCATIONS.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => navigateTo(`locations#${loc.id}`)}
                        className="w-full text-left px-3 py-2 rounded-xl hover:bg-cyan-50/70 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs font-semibold text-slate-800 group-hover:text-cyan-800">
                            {loc.name}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {loc.landmark}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing & FAQs */}
            <button
              onClick={() => navigateTo('pricing')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'pricing' ? 'text-cyan-700 font-bold bg-cyan-50' : 'hover:text-cyan-700 hover:bg-slate-50'
              }`}
            >
              Pricing & FAQs
            </button>

            {/* Contact */}
            <button
              onClick={() => navigateTo('contact')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPath === 'contact' ? 'text-cyan-700 font-bold bg-cyan-50' : 'hover:text-cyan-700 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-700 hover:to-sky-800 text-white font-semibold text-xs tracking-wide shadow-md shadow-cyan-700/20 hover:shadow-cyan-700/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-cyan-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <div className="pb-3 border-b border-slate-100">
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-2.5 px-3 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Consultation
            </button>
          </div>

          <div className="space-y-1 font-medium text-sm">
            <button
              onClick={() => navigateTo('home')}
              className={`w-full text-left px-3 py-2 rounded-lg ${currentPath === 'home' ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700'}`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`w-full text-left px-3 py-2 rounded-lg ${currentPath === 'about' ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700'}`}
            >
              About Us & Doctors
            </button>
            <button
              onClick={() => navigateTo('treatments')}
              className={`w-full text-left px-3 py-2 rounded-lg ${currentPath.startsWith('treatment') ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700'}`}
            >
              All Dental Treatments
            </button>
            <div className="pl-4 space-y-1 border-l-2 border-slate-100 my-1">
              {TREATMENTS.map((t) => (
                <button
                  key={t.slug}
                  onClick={() => navigateTo(`treatment/${t.slug}`)}
                  className="w-full text-left py-1 text-xs text-slate-600 hover:text-cyan-700"
                >
                  • {t.title}
                </button>
              ))}
            </div>
            <button
              onClick={() => navigateTo('gallery')}
              className={`w-full text-left px-3 py-2 rounded-lg ${currentPath === 'gallery' ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700'}`}
            >
              Smile Makeover Gallery
            </button>
            <button
              onClick={() => navigateTo('tourism')}
              className={`w-full text-left px-3 py-2 rounded-lg ${currentPath === 'tourism' ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700'}`}
            >
              Dental Tourism (International)
            </button>
            <button
              onClick={() => navigateTo('locations')}
              className={`w-full text-left px-3 py-2 rounded-lg ${currentPath === 'locations' ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700'}`}
            >
              Our 6 Mumbai Clinics
            </button>
            <button
              onClick={() => navigateTo('pricing')}
              className={`w-full text-left px-3 py-2 rounded-lg ${currentPath === 'pricing' ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700'}`}
            >
              Cost Guide & FAQs
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`w-full text-left px-3 py-2 rounded-lg ${currentPath === 'contact' ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700'}`}
            >
              Contact Us & Inquiries
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
