import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { CLINIC_LOCATIONS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface ContactPageProps {
  onOpenBooking: (branchId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'juhu',
    treatmentType: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/30 mb-3">
            Reach Our Mumbai Team
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact & Appointments
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Have questions about dental implants, smile designs, or visit scheduling? Get in touch with our centralized Mumbai care coordinator.
          </p>
        </div>
      </section>

      {/* Top Google Ads Placeholder per prompt specification */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdPlaceholder 
          format="leaderboard" 
          slotName="Contact Page Top Banner - Google Ad Space Reserved (728x90)" 
        />
      </div>

      {/* Main Grid: Form on left, Central Helplines on right */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">Online Inquiry</span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">Send a Message</h2>
              </div>
              <div className="p-2.5 bg-cyan-50 rounded-xl text-cyan-700">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Inquiry Simulated Successfully</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message for our{' '}
                  <strong className="text-cyan-800 capitalize">{formData.branch}</strong> clinic has been recorded in template preview state.
                </p>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 max-w-md mx-auto">
                  <ShieldCheck className="w-4 h-4 inline mr-1 text-amber-600" />
                  <strong>Non-Breaking Layout Note:</strong> In accordance with your request, contact actions are simulated without outbound email endpoints, guaranteeing zero network errors.
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Malhotra"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Select Clinic Center *
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-600"
                    >
                      {CLINIC_LOCATIONS.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Dental Concern / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you'd like help with..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-cyan-600 resize-none"
                  />
                </div>

                {/* Form placeholder disclaimer per brief */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-cyan-600" />
                  <strong>Non-Functioning Contact Space:</strong> Design & field layout preserved as specified without external server endpoints.
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-700 hover:to-sky-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry (Interactive Preview)</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Helplines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Direct Contact
              </span>
              <h3 className="font-heading text-xl font-bold mt-1">
                Centralized Mumbai Desk
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Connect directly with our patient care managers for immediate advice or appointment rescheduling.
              </p>

              <div className="mt-6 space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/10 rounded-xl text-cyan-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Central Phone Lines</span>
                    <a href="tel:+919876543210" className="font-bold text-white hover:text-cyan-300 text-sm">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/10 rounded-xl text-cyan-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Official Email</span>
                    <span className="font-bold text-white text-sm">
                      info@classicsmiles.in
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/10 rounded-xl text-cyan-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Consultation Timings</span>
                    <span className="text-slate-200">
                      Monday to Saturday: 10:00 AM - 8:30 PM <br />
                      Sunday: By Prior Appointment
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Book Instant Priority Slot
                </button>
              </div>
            </div>

            {/* Sidebar Ad Placeholder per prompt */}
            <AdPlaceholder 
              format="rectangle" 
              slotName="Contact Page Sidebar Sponsor - Reserved Ad Space (300x250)"
            />
          </div>
        </div>
      </section>

      {/* 6 Clinics Quick Contact Bar */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="font-heading text-lg font-bold text-slate-900 mb-6 text-center">
            Clinic Centers Direct Phone Directory
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CLINIC_LOCATIONS.map((loc) => (
              <div key={loc.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <div className="text-xs font-bold text-slate-900 truncate">{loc.neighborhood.split(' ')[0]}</div>
                <a href={`tel:${loc.phone}`} className="text-[11px] text-cyan-700 font-semibold hover:underline mt-1 block">
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
