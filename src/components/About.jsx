"use client";
import { useEffect, useState, useRef, useCallback } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState({ 
    philosophy: false, 
    system: false, 
    leadership: false, 
    focus: false 
  });
  const ref = useRef(null);
  const containerRef = useRef(null);

  const observer = useCallback((node) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Philosophy first (core), then cascade
          setTimeout(() => setIsVisible(prev => ({...prev, philosophy: true})), 100);
          setTimeout(() => setIsVisible(prev => ({...prev, system: true})), 300);
          setTimeout(() => setIsVisible(prev => ({...prev, leadership: true})), 500);
          setTimeout(() => setIsVisible(prev => ({...prev, focus: true})), 700);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
  }, []);

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Functional system grid - aligns with cards */}
      <div className="absolute inset-0 z-0 opacity-8 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,65,85,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        {/* Dynamic connectors */}
        <div className="absolute top-[25%] left-[15%] w-[2px] h-[50vh] bg-gradient-to-b from-slate-600/40 via-slate-400/20 to-transparent" />
        <div className="absolute top-[45%] left-[25%] w-px h-[35vh] bg-gradient-to-b from-emerald-500/30 to-transparent rotate-3" />
      </div>

      <div ref={containerRef} className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Precise hierarchy - Philosophy first */}
        <div className="text-center mb-24 lg:mb-32 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-300 text-transparent bg-clip-text tracking-tight mb-6">
            Systems Engineering
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-slate-400/60 to-slate-600/60" />
          <p className="text-xl text-slate-400 font-light tracking-wide mt-6 max-w-xl mx-auto leading-relaxed">
            Diagnostics, constraints, and feedback loops before features
          </p>
        </div>

        <div ref={observer} className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl">
          
          {/* Node 1: CORE PHILOSOPHY - Dominant */}
          <div className={`xl:col-span-2 relative bg-gradient-to-b from-slate-900/80 to-slate-950/60 border-2 border-slate-700/80 backdrop-blur-xl rounded-3xl p-10 lg:p-12 shadow-2xl hover:border-slate-500/90 hover:shadow-slate-400/25 transition-all duration-1000 hover:-translate-y-3 ${
            isVisible.philosophy ? 'opacity-100 scale-100 shadow-2xl' : 'opacity-0 scale-95 shadow-xl'
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-500/20 to-emerald-500/10 rounded-3xl blur-xl -z-10 animate-pulse" />
            <div className="flex items-start gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-500/90 to-slate-400/90 rounded-2xl flex items-center justify-center shadow-xl border border-slate-400/60 flex-shrink-0 mt-1">
                <svg className="w-7 h-7 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight mb-3 bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text">
                  System Design Priority
                </h3>
                <p className="text-slate-300/95 text-xl font-medium leading-tight">
                  Uncertainty modeling > Prediction accuracy
                </p>
              </div>
            </div>
            <blockquote className="text-slate-300/90 leading-relaxed text-lg border-l-4 border-slate-600/60 pl-6 italic font-light">
              "Most ML stops at prediction. I engineer the diagnostics, failure modes, and decision systems around it."
            </blockquote>
          </div>

          {/* Node 2: AQUA AI SYSTEM - Concrete proof */}
          <div className={`relative bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl hover:border-emerald-500/60 hover:shadow-emerald-400/20 transition-all duration-700 hover:-translate-y-2 ${
            isVisible.system ? 'opacity-100 scale-100' : 'opacity-0 scale-97'
          }`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/90 to-teal-500/90 rounded-2xl flex items-center justify-center shadow-lg border-2 border-emerald-400/70 flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-emerald-300/95 tracking-tight mb-2">AquaAI</h3>
                <p className="text-slate-300/90 text-sm lg:text-base font-mono">Sustainable DC Intelligence</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-400 font-mono leading-relaxed">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400/60 rounded-full" /> Hybrid Transformer-GRU</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400/60 rounded-full" /> Diagnostics-first architecture</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400/60 rounded-full" /> Water + thermal optimization</li>
            </ul>
          </div>

          {/* Node 3: LEADERSHIP PROOF */}
          <div className={`xl:col-span-1 relative bg-slate-900/60 border border-slate-800/70 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl hover:border-slate-600/80 hover:shadow-slate-500/20 transition-all duration-700 hover:-translate-y-2 ${
            isVisible.leadership ? 'opacity-100 scale-100' : 'opacity-0 scale-97'
          }`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-500/80 to-slate-400/80 rounded-2xl flex items-center justify-center shadow-lg border-2 border-slate-400/50 flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4h5.5a1 1 0 011 1v2a1 1 0 01-1 1H8.5a1 1 0 01-1-1v-2a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-2">Technical Authority</h3>
                <p className="text-slate-300/90 text-sm lg:text-base">iSAC Technical Head</p>
              </div>
            </div>
            <div className="text-slate-400 text-sm leading-relaxed">
              <p>AI governance systems + Vibrant Gujarat Summit tech leadership</p>
            </div>
          </div>

          {/* Node 4: CONTEXT - Subtle, no glow */}
          <div className={`relative bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
            isVisible.focus ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
          }`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500/70 to-orange-500/70 rounded-xl flex items-center justify-center border border-amber-400/50 flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-300 tracking-tight">Next: Investigation</h4>
            </div>
            <div className="space-y-1 text-xs text-slate-400 font-mono tracking-wider leading-tight">
              <div>• Data-driven cyber investigation</div>
              <div>• Production systems engineering</div>
              <div>• Technical content systems</div>
            </div>
          </div>
        </div>

        {/* Directional CTA */}
        <div className="text-center mt-20 lg:mt-28">
          <a href="#projects" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-mono text-lg font-semibold border-2 border-slate-600/70 bg-slate-900/40 backdrop-blur-xl hover:border-emerald-400/70 hover:bg-emerald-500/5 hover:shadow-emerald-400/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 tracking-wide">
            <span>→ View Applied Systems</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(32px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
      `}</style>
    </section>
  );
}
