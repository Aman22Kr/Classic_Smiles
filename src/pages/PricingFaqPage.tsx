import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  DollarSign, 
  Award,
  Calendar
} from 'lucide-react';
import { CLINIC_FAQS, TOURISM_SAVINGS_DATA, TREATMENTS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface PricingFaqPageProps {
  onOpenBooking: () => void;
}

export const PricingFaqPage: React.FC<PricingFaqPageProps> = ({ onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Treatments', 'Payment & Insurance', 'Dental Tourism'];

  const filteredFaqs = activeFaqCategory === 'All'
    ? CLINIC_FAQS
    : CLINIC_FAQS.filter(f => f.category === activeFaqCategory);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30 mb-3">
            Honest & Transparent
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Pricing, Warranties & FAQs
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            At Classic Smiles, we believe in upfront, transparent pricing without hidden surcharges. Explore our fees, manufacturer warranties, and answers to your dental questions.
          </p>
        </div>
      </section>

      {/* Ad Space Placeholder per prompt specification */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="leaderboard" 
          slotName="Pricing Guide Partner - Google Ad Space Reserved (728x90)" 
        />
      </div>

      {/* Transparent Price Guide Matrix */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
            Standard Fee Schedule
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Procedure Cost Breakdown
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            All prices include initial computerized 3D diagnostics, sterile surgical drapes, and post-operative follow-up visits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">{t.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{t.duration}</p>

                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Estimated Cost:</div>
                  <div className="text-lg font-bold text-cyan-800 font-heading mt-0.5">{t.approxCostInr}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{t.approxCostUsd}</div>
                </div>

                <div className="mt-4 space-y-1 text-xs text-slate-600">
                  {t.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-500">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 bg-slate-900 hover:bg-cyan-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Book Assessment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Warranties & Payment Options */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
                <Award className="w-5 h-5 text-cyan-700" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Lifetime Implant Warranty
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All Swiss and German implants (Nobel Biocare, Straumann) come with a genuine manufacturer passport and lifetime replacement warranty against breakage.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                10-15 Year Crown Warranty
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our in-house CAD/CAM monolithic zirconia and E-max porcelain crowns carry verified written warranties against fracture or material degradation.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                0% Interest EMI Available
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Split your treatment costs into 3, 6, 9, or 12 convenient monthly installments at zero interest through Bajaj Finserv, HDFC, and ICICI Bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQs Accordion */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
            Common Questions
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFaqCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFaqCategory === cat
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs divide-y divide-slate-100 p-2 sm:p-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="p-4">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full text-left flex justify-between items-center text-sm font-semibold text-slate-800 hover:text-cyan-700 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-cyan-700' : ''}`} />
              </button>
              {openFaqIndex === idx && (
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-2 border-l-2 border-cyan-500">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
