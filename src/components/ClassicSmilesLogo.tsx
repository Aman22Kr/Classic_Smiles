import React from 'react';

interface ClassicSmilesLogoProps {
  variant?: 'full' | 'icon-only';
  theme?: 'light' | 'dark';
  className?: string;
}

export const ClassicSmilesLogo: React.FC<ClassicSmilesLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* New Distinctive Emblem: Interlocking Aesthetic Dental Shield & Smile Arc */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-sky-900 via-teal-800 to-cyan-700 p-0.5 shadow-md shadow-cyan-900/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-[10px] bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-1.5 overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Subtle Geometric Hex / Shield Ring */}
            <path
              d="M50 8L86 24V56C86 76 50 92 50 92C50 92 14 76 14 56V24L50 8Z"
              stroke="url(#shieldGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70"
            />
            {/* Classic Stylized Tooth Shape */}
            <path
              d="M32 36C32 28 40 24 50 28C60 24 68 28 68 36C68 47 64 56 61 72C59 80 54 80 50 67C46 80 41 80 39 72C36 56 32 47 32 36Z"
              fill="url(#toothFill)"
            />
            {/* Radiant Golden Smile Curve */}
            <path
              d="M26 48C34 62 66 62 74 48"
              stroke="#FDE047"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Classic Star/Diamond Sparkle */}
            <path
              d="M50 18L52.5 24L58 26.5L52.5 29L50 35L47.5 29L42 26.5L47.5 24L50 18Z"
              fill="#FFFFFF"
            />

            <defs>
              <linearGradient id="shieldGrad" x1="14" y1="8" x2="86" y2="92" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="0.5" stopColor="#2DD4BF" />
                <stop offset="1" stopColor="#FDE047" />
              </linearGradient>
              <linearGradient id="toothFill" x1="32" y1="26" x2="68" y2="76" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#E0F2FE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography */}
      {variant === 'full' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-heading text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                isDark ? 'text-white' : 'text-slate-900 group-hover:text-cyan-700'
              }`}
            >
              CLASSIC SMILES
            </span>
          </div>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase ${
              isDark ? 'text-cyan-400' : 'text-slate-500'
            }`}
          >
            Premier Dental Clinics • Mumbai
          </span>
        </div>
      )}
    </div>
  );
};
