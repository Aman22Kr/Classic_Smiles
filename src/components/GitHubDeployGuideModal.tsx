import React, { useState } from 'react';
import { X, Check, Copy, GitBranch, Globe, Terminal, FileCode, CheckCircle2 } from 'lucide-react';

interface GitHubDeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployGuideModal: React.FC<GitHubDeployGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: '1. Create a Repository on GitHub',
      detail: 'Visit https://github.com/new and create a new public or private repository (e.g. "classicsmiles-mumbai"). Leave README and .gitignore unchecked.',
      code: null
    },
    {
      title: '2. Push this project to your repository',
      detail: 'Open your terminal inside this project folder and run:',
      code: `git init
git add .
git commit -m "Initial commit - Classic Smiles website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/classicsmiles-mumbai.git
git push -u origin main`
    },
    {
      title: '3. Enable 1-Click GitHub Pages',
      detail: 'In your GitHub repository, go to: Settings > Pages > Under "Build and deployment" > Source: select "GitHub Actions".',
      code: null
    },
    {
      title: '4. Done! Automated Deployment',
      detail: 'The included `.github/workflows/deploy.yml` file will automatically compile Vite with relative assets (`base: "./"`) and host your site live at `https://YOUR_USERNAME.github.io/classicsmiles-mumbai/`.',
      code: null
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-cyan-900 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-xs border border-white/10">
              <Globe className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">Deploy to GitHub Pages</h3>
              <p className="text-xs text-cyan-200/90 mt-0.5">Pre-configured with relative asset routing & automated CI/CD workflow</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Key Advantages Alert */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex gap-3 text-emerald-900">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-950">Pre-Configured For GitHub Pages</p>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                We have configured <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono text-[11px]">vite.config.ts</code> with <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono text-[11px]">base: './'</code> and provided <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono text-[11px]">.github/workflows/deploy.yml</code>. Subpages work seamlessly without 404 broken image paths!
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((s, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  {s.title}
                </div>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed ml-8">
                  {s.detail}
                </p>

                {s.code && (
                  <div className="mt-3 ml-8 relative">
                    <pre className="bg-slate-900 text-slate-100 p-3.5 rounded-lg text-xs font-mono overflow-x-auto selection:bg-cyan-500">
                      {s.code}
                    </pre>
                    <button
                      onClick={() => copyCode(s.code!, idx)}
                      className="absolute top-2 right-2 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1.5 transition-colors border border-slate-700"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Alternative Quick Deploy */}
          <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-slate-600" />
              Alternative: Deploy to Vercel or Netlify
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              You can also drag-and-drop the generated <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono text-[11px]">dist</code> folder directly into Netlify Drop, or import this GitHub repository directly to Vercel for zero-config instant SSL deployment.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <span className="text-xs text-slate-500">Ready to build: <code className="font-mono text-slate-700">npm run build</code></span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Got it, Close
          </button>
        </div>
      </div>
    </div>
  );
};
