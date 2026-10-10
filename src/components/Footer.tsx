import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  Github, 
  Heart,
  Clock,
  ExternalLink
} from 'lucide-react';
import { CLINIC_LOCATIONS, TREATMENTS } from '../data/mockData';
import { AdPlaceholder } from './AdPlaceholder';

import { ClassicSmilesLogo } from './ClassicSmilesLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenDeployGuide
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Ad Space Placeholder per prompt specification */}
        <div className="mb-12">
          <AdPlaceholder 
            format="banner" 
            slotName="Footer Sponsor Banner - Google Ad Space Reserved"
            className="my-0"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <ClassicSmilesLogo theme="dark" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mumbai’s premier dental healthcare network led by Dr. Rahul Oza. Setting international benchmarks in computer-guided implantology, porcelain smile makeovers, and painless microscopic dentistry across 6 state-of-the-art centers.
            </p>

            {/* Certifications */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ISO 9001:2015 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" /> ICOI USA Accredited
              </span>
            </div>

            {/* GitHub Deploy Quick Action */}
            <div className="pt-3">
              <button
                onClick={onOpenDeployGuide}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-medium transition-all group"
              >
                <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Deploy to GitHub Guide</span>
                <span className="text-[10px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800">Ready</span>
              </button>
            </div>
          </div>

          {/* Quick Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
              Specialized Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {TREATMENTS.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <button
                    onClick={() => {
                      onNavigate(`treatment/${t.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
              Explore & Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-cyan-300 transition-colors"
                >
                  About Dr. Rahul Oza & Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('gallery')} 
                  className="hover:text-cyan-300 transition-colors"
                >
                  Before & After Smile Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tourism')} 
                  className="hover:text-cyan-300 transition-colors"
                >
                  Dental Tourism (NRI & Global)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing')} 
                  className="hover:text-cyan-300 transition-colors"
                >
                  Transparent Cost Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('locations')} 
                  className="hover:text-cyan-300 transition-colors"
                >
                  Mumbai Clinic Directory
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Mumbai Clinics Quick List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
              6 Mumbai Centers
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {CLINIC_LOCATIONS.map((loc) => (
                <li key={loc.id} className="group">
                  <button
                    onClick={() => onNavigate(`locations#${loc.id}`)}
                    className="text-left group-hover:text-cyan-300 transition-colors"
                  >
                    <span className="font-semibold text-slate-200 block">{loc.neighborhood}</span>
                    <span className="text-[11px] text-slate-500">{loc.phone}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Classic Smiles Dental Clinic Private Limited. All Rights Reserved.</p>
          
          <div className="text-[11px] text-slate-500 text-center md:text-right">
            <span>Designed for replica demonstration. Interactive contact forms and ad spaces operate in simulated mode without external network calls.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
