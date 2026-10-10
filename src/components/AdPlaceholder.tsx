import React from 'react';

interface AdPlaceholderProps {
  format?: 'leaderboard' | 'rectangle' | 'banner' | 'skyscraper';
  className?: string;
  slotName?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  format = 'leaderboard',
  className = '',
  slotName = 'Sponsored Partner / Google AdSense Slot'
}) => {
  // Dimension presets standard in Google AdSense
  const getFormatStyle = () => {
    switch (format) {
      case 'leaderboard':
        return 'w-full max-w-[728px] h-[90px] mx-auto';
      case 'banner':
        return 'w-full h-[90px] sm:h-[120px]';
      case 'rectangle':
        return 'w-full max-w-[336px] h-[280px] mx-auto';
      case 'skyscraper':
        return 'w-[160px] h-[600px] hidden lg:block';
      default:
        return 'w-full h-[90px]';
    }
  };

  return (
    <div className={`my-6 flex items-center justify-center ${className}`}>
      <div
        className={`${getFormatStyle()} relative flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100/70 p-3 text-center text-slate-500 shadow-xs transition-colors hover:bg-slate-100`}
        aria-label="Advertisement Placeholder"
      >
        <div className="absolute top-1.5 right-2 text-[10px] uppercase tracking-wider text-slate-400 font-medium">
          Ad Space
        </div>
        
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs font-semibold text-slate-600 tracking-wide">
            {slotName}
          </span>
        </div>
        <p className="mt-1 text-[11px] text-slate-600">
          Ad placement reserved (Non-intrusive container reserved per user brief to prevent layout shift)
        </p>
      </div>
    </div>
  );
};
