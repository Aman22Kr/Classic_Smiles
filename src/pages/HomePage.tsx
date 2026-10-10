import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Award, 
  Users, 
  Cpu, 
  Clock, 
  Check, 
  ChevronRight,
  Smile,
  Globe2
} from 'lucide-react';
import { TREATMENTS, CLINIC_LOCATIONS, DOCTORS, GALLERY_CASES, TESTIMONIALS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: (branch?: string, treatment?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'implants' | 'veneers' | 'whitening' | 'aligners'>('all');
  const [activeBeforeAfter, setActiveBeforeAfter] = useState<number>(0);
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickClinic, setQuickClinic] = useState('juhu');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const filteredCases = activeCategory === 'all' 
    ? GALLERY_CASES 
    : GALLERY_CASES.filter(c => c.category === activeCategory);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickSubmitted(true);
    setTimeout(() => {
      setQuickSubmitted(false);
      setQuickName('');
      setQuickPhone('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 lg:pt-18 lg:pb-28">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mumbai's Highest-Rated ISO Certified Dental Chain</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
                World-Class Smiles, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-400">
                  Crafted With Digital Precision.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Led by renowned implantologist <strong>Dr. Rahul Oza</strong>, Classic Smiles combines computer-guided implantology, 3D digital smile design, and an in-house milling lab across 6 premier centers in Mumbai.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Book Free Consultation</span>
                </button>

                <button
                  onClick={() => onNavigate('treatments')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 text-cyan-300" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-heading">25,000+</div>
                  <div className="text-xs text-slate-400">Happy Patients</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-heading">6 Centers</div>
                  <div className="text-xs text-slate-400">Across Mumbai</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-heading">16+ Years</div>
                  <div className="text-xs text-slate-400">Clinical Mastery</div>
                </div>
              </div>
            </div>

            {/* Right Quick Booking Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">Fast-Track Appointment</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">Request Consultation</h3>
                  </div>
                  <div className="p-2 bg-cyan-50 rounded-xl text-cyan-700">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {quickSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <p className="font-bold text-slate-900">Inquiry Received (Demo Mode)</p>
                    <p className="text-xs text-slate-600">
                      Thank you! In this replica, form submission is simulated with zero network errors so you can test smoothly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="mt-5 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Aditi Sharma"
                        value={quickName}
                        onChange={(e) => setQuickName(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Preferred Clinic Branch</label>
                      <select
                        value={quickClinic}
                        onChange={(e) => setQuickClinic(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-cyan-600"
                      >
                        {CLINIC_LOCATIONS.map((loc) => (
                          <option key={loc.id} value={loc.id}>
                            {loc.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Notice on non-breaking contact input */}
                    <div className="text-[11px] text-slate-400 italic">
                      * Interactive placeholder reservation space (won't trigger 404 or backend breaks)
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-700 hover:to-sky-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      Instant Callback Request
                    </button>
                  </form>
                )}

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-cyan-600" /> Direct: +91 98765 43210
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Doctors Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Google Ads Placeholder per prompt specification */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="leaderboard" 
          slotName="Leaderboard Advertisement - Google Ad Space Reserved (728x90)" 
        />
      </div>

      {/* Key Clinical Features */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-200 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">7-Step Sterilization</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Hospital-grade Class-B autoclave and 100% disposable instrument barrier protocols exceeding European standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-200 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">In-House CAD/CAM Lab</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Digital 3D intraoral scans and on-site high-precision milling machines produce crowns and veneers in 24-48 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-200 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Lifetime Implant Warranty</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We use genuine Nobel Biocare and Straumann Swiss/German implants with international manufacturer certification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-200 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Global Dental Tourism</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Dedicated concierge for overseas patients from USA, UK, UAE & Australia, saving 70-85% on world-class dental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
                Our Specialties
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
                Advanced Dental Treatments
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
                From single-visit smile makeovers to full mouth restorations, every procedure is carried out with digital accuracy and painless protocols.
              </p>
            </div>

            <button
              onClick={() => onNavigate('treatments')}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800 uppercase tracking-wider group cursor-pointer"
            >
              <span>View All Sub-Pages</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENTS.slice(0, 6).map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-cyan-300 transition-all flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-white">
                    <span className="text-xs font-medium bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {treatment.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {treatment.shortDesc}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {treatment.benefits.slice(0, 2).map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`treatment/${treatment.slug}`)}
                      className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Read Treatment Page</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(undefined, treatment.slug)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-cyan-100 hover:text-cyan-800 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Google Ads / Partner Space */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="banner" 
          slotName="Mid-Section Sponsored Partner Slot - Reserved Layout (728x90)" 
        />
      </div>

      {/* Doctor Profile Spotlight */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
                <img
                  src={DOCTORS[0].image}
                  alt={DOCTORS[0].name}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                  <div className="font-heading text-xl font-bold">{DOCTORS[0].name}</div>
                  <div className="text-xs text-cyan-300 font-medium">{DOCTORS[0].role}</div>
                  <div className="text-[11px] text-slate-300 mt-1">{DOCTORS[0].qualification}</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">12,000+ Implants</div>
                  <div className="text-[10px] text-slate-500">Global ICOI Fellow</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
                Clinical Leadership
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Pioneering Precision Dentistry in Mumbai
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {DOCTORS[0].bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {DOCTORS[0].specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider transition-colors cursor-pointer"
                >
                  Meet All Specialists & Team
                </button>
                <button
                  onClick={() => onOpenBooking('juhu', 'dental-implants')}
                  className="px-6 py-3 rounded-xl border border-cyan-600 text-cyan-700 hover:bg-cyan-50 font-semibold text-xs tracking-wider transition-colors cursor-pointer"
                >
                  Consult Dr. Rahul Oza
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Smile Transformation Showcase */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Real Patient Outcomes
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
              Smile Transformations
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Explore authentic cases completed at our Mumbai clinics with our in-house Digital Smile Design protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Case selector */}
            <div className="lg:col-span-4 space-y-3">
              {GALLERY_CASES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveBeforeAfter(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    activeBeforeAfter === idx
                      ? 'bg-white/10 border-cyan-400 text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="text-xs font-bold">{item.title}</div>
                  <div className="text-[11px] text-cyan-300 mt-1">{item.ageGroup} • {item.duration}</div>
                </button>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('gallery')}
                  className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs rounded-xl tracking-wide transition-colors"
                >
                  Explore Complete Smile Gallery →
                </button>
              </div>
            </div>

            {/* Display comparison */}
            <div className="lg:col-span-8 bg-slate-950/70 p-6 rounded-3xl border border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-800">
                    <img
                      src={GALLERY_CASES[activeBeforeAfter].beforeImage}
                      alt="Before treatment"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-red-600/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Initial Condition
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 text-center">Pre-treatment clinical assessment</p>
                </div>

                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-800">
                    <img
                      src={GALLERY_CASES[activeBeforeAfter].afterImage}
                      alt="After treatment"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Signature Result
                    </span>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium text-center">Completed in {GALLERY_CASES[activeBeforeAfter].duration}</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-300 font-semibold">Treatment Note: </strong>
                {GALLERY_CASES[activeBeforeAfter].description}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Mumbai Clinic Centers */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
              Convenient Locations
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
              6 Clinics Across Mumbai
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              State-of-the-art facilities equipped with advanced 3D imaging and sterilization suites throughout Western Mumbai and Powai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLINIC_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-6 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-900">
                        {loc.neighborhood}
                      </h3>
                      <p className="text-xs text-cyan-700 font-semibold mt-0.5">
                        {loc.landmark}
                      </p>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-xl text-slate-600">
                      <MapPin className="w-5 h-5 text-cyan-700" />
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {loc.address}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                      <a href={`tel:${loc.phone}`} className="hover:text-cyan-800 font-medium">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex gap-2">
                  <button
                    onClick={() => onNavigate(`locations#${loc.id}`)}
                    className="flex-1 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(loc.id)}
                    className="flex-1 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl transition-colors text-center cursor-pointer"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('locations')}
              className="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-cyan-600 text-slate-800 font-semibold text-xs tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-cyan-700" />
              <span>Explore All Clinic Maps & Metro Routes</span>
            </button>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
              Patient Experiences
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
              Trusted by Patients Worldwide
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Read authentic feedback from local Mumbai families and international travelers who trusted Classic Smiles with their care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{t.patientName}</span>
                        {t.flag && <span>{t.flag}</span>}
                      </div>
                      <div className="text-[11px] text-slate-500">{t.location}</div>
                    </div>
                  </div>
                  <div className="mt-1 text-[10px] text-cyan-700 font-semibold">
                    {t.treatment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Tourism Banner */}
      <section className="py-14 bg-gradient-to-r from-sky-900 via-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
              International & NRI Dental Tourism
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-1">
              Visiting Mumbai from USA, UK, UAE, or Australia?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-cyan-100/90 max-w-2xl leading-relaxed">
              Save up to 80% on full-mouth implants, porcelain veneers, and cosmetic smile designs. Enjoy free airport transfers, partner hotel discounts, and virtual consultations.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('tourism')}
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-cyan-50 transition-colors shadow-lg cursor-pointer"
            >
              Dental Tourism Details
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-white font-semibold text-xs tracking-wider transition-colors cursor-pointer"
            >
              Free Video Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
