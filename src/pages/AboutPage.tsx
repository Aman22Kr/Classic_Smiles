import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Users, 
  HeartHandshake, 
  Microscope, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { DOCTORS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* About Hero */}
      <section className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30 mb-3">
              About Classic Smiles
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Mumbai’s Center for Digital & Aesthetic Dentistry
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded over 16 years ago by Dr. Rahul Oza, Classic Smiles was established on a single principle: providing world-class, ethical, and pain-free dental healthcare with zero compromises in technology and hygiene.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Space Placeholder per prompt specification */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="leaderboard" 
          slotName="About Us Leaderboard - Reserved Sponsor Placement (728x90)" 
        />
      </div>

      {/* Founder & Mission Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <img
                src={DOCTORS[0].image}
                alt={DOCTORS[0].name}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                <h3 className="font-heading text-xl font-bold">{DOCTORS[0].name}</h3>
                <p className="text-xs text-cyan-300">{DOCTORS[0].role}</p>
                <p className="text-[11px] text-slate-300 mt-1">{DOCTORS[0].qualification}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
              Our Founding Vision
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              "Every Patient Deserves a Healthy, Radiant Smile Without Fear or Compromise."
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Classic Smiles has grown from a single boutique dental clinic to Mumbai’s most trusted chain of 6 multi-specialty centers across Bandra, Juhu, Andheri, Borivali, Santacruz, and Powai.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our team consists of certified implantologists, aesthetic smile architects, microscopic endodontists, and Invisalign diamond providers trained at premiere dental institutes in the USA, Germany, Switzerland, and Japan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center">
                <div className="text-2xl font-bold text-cyan-700 font-heading">25k+</div>
                <div className="text-xs text-slate-500 mt-1">Smiles Transformed</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center">
                <div className="text-2xl font-bold text-cyan-700 font-heading">12k+</div>
                <div className="text-xs text-slate-500 mt-1">Implants Placed</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center">
                <div className="text-2xl font-bold text-cyan-700 font-heading">100%</div>
                <div className="text-xs text-slate-500 mt-1">Sterilization Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Doctors Team */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
              Expert Clinical Panel
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Meet Our Specialists
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Every dental discipline is spearheaded by a dedicated postgraduate specialist with international clinical credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-slate-200">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-cyan-700 font-semibold mt-0.5">
                      {doc.role}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {doc.qualification}
                    </p>
                    <p className="text-[11px] text-slate-600 font-medium mt-2">
                      {doc.experience}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-200 space-y-1">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Centers:</div>
                      <div className="text-xs text-slate-700">{doc.branches.join(' • ')}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenBooking()}
                    className="w-full py-2 bg-slate-900 hover:bg-cyan-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Consult Doctor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology Infrastructure */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
            Digital Precision
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Cutting-Edge Clinical Infrastructure
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Investing in next-generation dental hardware and software to guarantee zero pain, higher longevity, and rapid turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              3D Intraoral Scanners (iTero)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No more messy impression putty. Our 3D optical cameras capture 6,000 frames per second to render an ultra-accurate 3D digital model of your mouth in under 5 minutes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Microscopic Endodontics
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-magnification surgical operating microscopes allow our endodontists to view root canal anatomy under up to 25x magnification, eliminating hidden untreated infections.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Class-B Vacuum Autoclaves
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hospital-grade multi-pulse vacuum steam sterilizers that penetrate porous instruments, guaranteeing 100% elimination of viruses, spores, and bacteria between every single patient.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
