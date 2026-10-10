import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ChevronRight, 
  Calendar,
  Layers,
  ChevronDown
} from 'lucide-react';
import { TREATMENTS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface TreatmentsPageProps {
  currentTreatmentSlug?: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (branch?: string, treatment?: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  currentTreatmentSlug,
  onNavigate,
  onOpenBooking
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // If a specific treatment slug is provided, show its rich dedicated sub-page!
  const selectedTreatment = TREATMENTS.find(t => t.slug === currentTreatmentSlug);

  if (selectedTreatment) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Treatment Detail Hero */}
        <section className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
              <button onClick={() => onNavigate('home')} className="hover:text-cyan-300">Home</button>
              <ChevronRight className="w-3.5 h-3.5" />
              <button onClick={() => onNavigate('treatments')} className="hover:text-cyan-300">Treatments</button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-cyan-300 font-medium">{selectedTreatment.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30">
                  Classic Smiles Specialty Care
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {selectedTreatment.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  {selectedTreatment.shortDesc}
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => onOpenBooking(undefined, selectedTreatment.slug)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book for this Treatment</span>
                  </button>
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Duration: {selectedTreatment.duration}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-4/3">
                  <img
                    src={selectedTreatment.image}
                    alt={selectedTreatment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Space Placeholder per prompt specification */}
        <div className="max-w-7xl mx-auto px-4 w-full">
          <AdPlaceholder 
            format="leaderboard" 
            slotName={`Specialty Placement - ${selectedTreatment.title} Google Ad Space (728x90)`}
          />
        </div>

        {/* Treatment Content Breakdown */}
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Details */}
            <div className="lg:col-span-8 space-y-10">
              {/* Detailed Overview */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                  Clinical Overview & Technology
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {selectedTreatment.longDesc}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Who Is This Treatment Suitable For?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTreatment.suitableFor.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="font-heading text-xl font-bold text-slate-900 mb-4">
                  Why Choose Classic Smiles for {selectedTreatment.title}
                </h2>
                <div className="space-y-3">
                  {selectedTreatment.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step by step Procedure */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="font-heading text-xl font-bold text-slate-900 mb-6">
                  Step-by-Step Clinical Procedure
                </h2>
                <div className="space-y-4">
                  {selectedTreatment.procedureSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-xl bg-cyan-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Phase {idx + 1}</div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {selectedTreatment.faqs && selectedTreatment.faqs.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                  <h2 className="font-heading text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-700" />
                    Frequently Asked Questions
                  </h2>
                  <div className="divide-y divide-slate-100">
                    {selectedTreatment.faqs.map((faq, idx) => (
                      <div key={idx} className="py-3">
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                          className="w-full text-left flex justify-between items-center text-xs sm:text-sm font-semibold text-slate-800 hover:text-cyan-700 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-cyan-700' : ''}`} />
                        </button>
                        {openFaqIndex === idx && (
                          <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-2 border-l-2 border-cyan-400">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar with all other treatments & Quick action */}
            <div className="lg:col-span-4 space-y-6">
              {/* Cost card */}
              <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
                <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">Transparent Pricing</span>
                <div className="mt-3">
                  <div className="text-xl font-bold font-heading">{selectedTreatment.approxCostInr}</div>
                  <div className="text-xs text-cyan-200 mt-1">{selectedTreatment.approxCostUsd}</div>
                </div>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                  Includes preliminary 3D scan, specialized materials, and clinical follow-up. 0% EMI financing available.
                </p>
                <button
                  onClick={() => onOpenBooking(undefined, selectedTreatment.slug)}
                  className="w-full mt-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Book Priority Slot
                </button>
              </div>

              {/* Sidebar Ad Placeholder */}
              <AdPlaceholder 
                format="rectangle" 
                slotName="Treatment Sidebar - Reserved Ad Space (300x250)"
              />

              {/* Other treatments menu */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Other Specialized Treatments
                </h3>
                <div className="space-y-1.5">
                  {TREATMENTS.filter(t => t.slug !== currentTreatmentSlug).map((t) => (
                    <button
                      key={t.slug}
                      onClick={() => onNavigate(`treatment/${t.slug}`)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-cyan-800 hover:bg-cyan-50 transition-colors flex items-center justify-between"
                    >
                      <span className="truncate">{t.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // TREATMENTS OVERVIEW HUB (When visiting /treatments)
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Treatments Hub Hero */}
      <section className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30 mb-3">
            Multi-Specialty Clinical Excellence
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Dental Treatments & Procedures
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            From single-visit smile makeovers to full mouth restorations, every procedure is carried out with digital accuracy, minimally invasive methods, and European sterilization standards across all 6 Mumbai clinics.
          </p>
        </div>
      </section>

      {/* Top Ad Space Placeholder */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="leaderboard" 
          slotName="Treatments Hub Google Ad Space Reserved (728x90)" 
        />
      </div>

      {/* Grid of all treatments */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-cyan-300 transition-all flex flex-col justify-between group"
            >
              <div>
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

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {treatment.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {treatment.benefits.slice(0, 3).map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => onNavigate(`treatment/${treatment.slug}`)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-cyan-50 hover:text-cyan-800 text-slate-700 rounded-xl text-xs font-semibold transition-colors text-center cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Detailed Sub-Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenBooking(undefined, treatment.slug)}
                  className="px-4 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
