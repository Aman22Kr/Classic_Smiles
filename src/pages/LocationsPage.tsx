import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  Train, 
  Calendar, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { CLINIC_LOCATIONS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface LocationsPageProps {
  onOpenBooking: (branchId?: string) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onOpenBooking }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(CLINIC_LOCATIONS[0].id);

  const activeClinic = CLINIC_LOCATIONS.find(c => c.id === selectedBranchId) || CLINIC_LOCATIONS[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Locations Hero */}
      <section className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30 mb-3">
            Our Mumbai Network
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            6 Multi-Specialty Clinics Across Mumbai
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Equipped with uniform 7-stage sterilization, computerized 3D intraoral diagnostics, and luxury patient operatory suites across Western Mumbai and Powai.
          </p>
        </div>
      </section>

      {/* Ad Space Placeholder per prompt specification */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="leaderboard" 
          slotName="Locations Directory Partner - Google Ad Space Reserved (728x90)" 
        />
      </div>

      {/* Branch Selector Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2 w-full">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CLINIC_LOCATIONS.map((clinic) => (
            <button
              key={clinic.id}
              onClick={() => setSelectedBranchId(clinic.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedBranchId === clinic.id
                  ? 'bg-cyan-700 text-white shadow-md shadow-cyan-700/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{clinic.neighborhood}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Branch Spotlight */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Branch Details */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs uppercase font-bold text-cyan-700 tracking-wider">
                  Open Today • Doctors on Duty
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                {activeClinic.name}
              </h2>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                {activeClinic.landmark}
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Clinic Address:</span>
                    <span className="text-slate-600 leading-relaxed">{activeClinic.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Helplines:</span>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <a href={`tel:${activeClinic.phone}`} className="text-cyan-700 font-semibold hover:underline">
                        {activeClinic.phone}
                      </a>
                      <span className="text-slate-300">|</span>
                      <a href={`tel:${activeClinic.secondaryPhone}`} className="text-cyan-700 font-semibold hover:underline">
                        {activeClinic.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours:</span>
                    <p className="text-slate-600">{activeClinic.hours}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{activeClinic.sundayHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Metro & Transit:</span>
                    <p className="text-slate-600">{activeClinic.metroStation}</p>
                  </div>
                </div>
              </div>

              {/* On-Site Facilities */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                  Specialized Center Facilities:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  {activeClinic.facilities.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenBooking(activeClinic.id)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-700 hover:to-sky-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Slot at {activeClinic.neighborhood.split(' ')[0]}</span>
              </button>
            </div>
          </div>

          {/* Clinic Photo & Non-breaking Map Placeholder */}
          <div className="lg:col-span-5 bg-slate-100 flex flex-col border-t lg:border-t-0 lg:border-l border-slate-200">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img
                src={activeClinic.image}
                alt={activeClinic.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-white text-xs font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs">
                {activeClinic.name} Exterior
              </span>
            </div>

            {/* Google Map Container Placeholder (Safe, responsive, non-breaking per prompt) */}
            <div className="p-6 flex-1 flex flex-col justify-center items-center bg-slate-50 border-t border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-cyan-700" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Interactive Google Map Location
              </h4>
              <p className="text-xs text-slate-500 max-w-xs mt-1">
                {activeClinic.address}
              </p>
              
              <div className="mt-4 px-4 py-2 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600">
                Landmark: <strong>{activeClinic.landmark}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 6 Centers Quick Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h3 className="font-heading text-xl font-bold text-slate-900 mb-6">
          All 6 Clinic Locations in Mumbai
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_LOCATIONS.map((c) => (
            <div
              key={c.id}
              className={`p-6 rounded-2xl border transition-all ${
                selectedBranchId === c.id
                  ? 'bg-cyan-50/50 border-cyan-400 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-base font-bold text-slate-900">{c.neighborhood}</h4>
                <button
                  onClick={() => setSelectedBranchId(c.id)}
                  className="text-xs font-semibold text-cyan-700 hover:underline cursor-pointer"
                >
                  Select
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">{c.address}</p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-800">{c.phone}</span>
                <button
                  onClick={() => onOpenBooking(c.id)}
                  className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
