import React from 'react';
import { 
  Plane, 
  Hotel, 
  ShieldCheck, 
  Sparkles, 
  Video, 
  CreditCard, 
  CheckCircle2, 
  Calendar,
  DollarSign,
  HeartHandshake
} from 'lucide-react';
import { TOURISM_SAVINGS_DATA } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface TourismPageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const TourismPage: React.FC<TourismPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30">
              International Dental Tourism • Mumbai, India
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Save Up to 85% on Premium Dental Care in Mumbai
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Why pay exorbitant prices at home? Combine world-class dental implants and porcelain veneers with an unforgettable stay in India’s vibrant financial and cultural capital.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <Video className="w-4 h-4 text-slate-950" />
                <span>Request Free Video Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space Placeholder per prompt specification */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="leaderboard" 
          slotName="Dental Tourism Global Partner - Google Ad Space Reserved (728x90)" 
        />
      </div>

      {/* Cost Comparison Table */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
            Radical Savings, Zero Compromise
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Dental Cost Comparison
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Compare treatment costs at Classic Smiles Mumbai against typical private clinic fees in the USA, UK, and Australia.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider font-semibold">
                <tr>
                  <th className="py-4 px-6">Procedure</th>
                  <th className="py-4 px-4 text-slate-300">USA Average</th>
                  <th className="py-4 px-4 text-slate-300">UK Average</th>
                  <th className="py-4 px-4 text-slate-300">Australia</th>
                  <th className="py-4 px-6 text-cyan-300 bg-cyan-950/80">Classic Smiles Mumbai</th>
                  <th className="py-4 px-4 text-emerald-400 text-right">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TOURISM_SAVINGS_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.procedure}</td>
                    <td className="py-4 px-4 text-slate-600">{row.costUSA}</td>
                    <td className="py-4 px-4 text-slate-600">{row.costUK}</td>
                    <td className="py-4 px-4 text-slate-600">{row.costAus}</td>
                    <td className="py-4 px-6 font-bold text-cyan-800 bg-cyan-50/50">{row.costClassicSmiles}</td>
                    <td className="py-4 px-4 font-bold text-emerald-600 text-right">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Step by Step Concierge Process */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
              Seamless Journey
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Your 4-Step Dental Vacation
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              We handle every detail from your initial virtual smile assessment to airport chauffeuring and Mumbai sightseeing recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Virtual Video Consult
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send your current dental X-rays or smile photos. Dr. Rahul Oza reviews your case and presents a detailed treatment roadmap with transparent fixed pricing.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                VIP Airport Pickup & Hotel
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Arrive at Mumbai International Airport (BOM). Our private driver welcomes you and transfers you to our partner 4-star or 5-star hotel in Juhu or Bandra.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Express Digital Treatment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Using our on-site CAD/CAM milling lab, complex smile designs and implant restorations are concluded in just 3 to 5 comfortable days with zero pain.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Sightsee & Fly Home Smiling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explore the Gateway of India, Marine Drive, and vibrant Mumbai cuisine. Final checkup completed, and you return home with an international warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Concierge Benefits */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              White-Glove Support
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">
              International Patient Concierge Desk
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our full-time international patient coordinators assist you at every step, ensuring fluent English communication, rapid scheduling, and seamless convenience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Complimentary Airport Chauffeur</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Medical Visa Invitation Letters</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Special Rates at Juhu Beach Hotels</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>All Major Credit Cards & Wire Transfer</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Schedule Virtual Pre-Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
