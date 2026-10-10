import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, Filter } from 'lucide-react';
import { GALLERY_CASES } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'implants' | 'veneers' | 'whitening' | 'aligners'>('all');

  const filteredCases = filter === 'all'
    ? GALLERY_CASES
    : GALLERY_CASES.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Gallery Hero */}
      <section className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30 mb-3">
            Real Transformations
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Smile Makeover Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Witness the life-changing results achieved at Classic Smiles Mumbai. Explore untouched clinical before-and-after cases of dental implants, porcelain veneers, teeth whitening, and orthodontic alignment.
          </p>
        </div>
      </section>

      {/* Top Ad Space Placeholder per prompt specification */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="leaderboard" 
          slotName="Smile Gallery Top Banner - Google Ad Space Reserved (728x90)" 
        />
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4 w-full">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Makeovers' },
            { id: 'implants', label: 'Dental Implants' },
            { id: 'veneers', label: 'Porcelain Veneers' },
            { id: 'whitening', label: 'Teeth Whitening' },
            { id: 'aligners', label: 'Invisalign Aligners' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-cyan-700 text-white shadow-md shadow-cyan-700/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Cases Grid */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                    {item.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Timeframe: {item.duration}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 mt-3">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Patient: {item.ageGroup}
                </p>

                {/* Before / After Images */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 border border-slate-200">
                    <img
                      src={item.beforeImage}
                      alt="Before Makeover"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Before
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 border border-slate-200">
                    <img
                      src={item.afterImage}
                      alt="After Makeover"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-emerald-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      After
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Clinical Solution: </strong>
                  {item.description}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified Case
                </span>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-slate-900 hover:bg-cyan-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Book Similar Treatment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid Gallery Ad space */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="banner" 
          slotName="Gallery Partner Space - Non-breaking Ad Placement (728x90)" 
        />
      </div>
    </div>
  );
};
