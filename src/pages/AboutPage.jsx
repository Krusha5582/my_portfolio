"use client";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && (setIsVisible(true), observer.disconnect()),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-925 text-white pt-20 lg:pt-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* THESIS - Slow scale reveal (KEEP) */}
        <section className="mb-24 lg:mb-36 max-w-3xl mx-auto" 
          style={{opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(20px)', transition: 'all 1.4s cubic-bezier(0.22, 1, 0.36, 1)'}}>
          <div className="border-l-4 border-slate-600/80 pl-8 py-12 lg:py-16 bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-transparent to-slate-700/30 group-hover:from-slate-700/70" />
            <div className="relative">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6 leading-tight">
                Most failures aren't bugs. They're unwritten assumptions.
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-6 font-light leading-[1.75]">
                I build systems that survive when data and reality don't match the diagrams.
              </p>
              <p className="text-lg text-slate-400 italic max-w-xl leading-[1.75] group-hover:text-slate-300 transition-colors">
                Because assumptions fail first.
              </p>
              <p className="text-sm text-slate-500 mt-8 font-mono tracking-wider uppercase border-t border-slate-800/50 pt-6">
                Krusha Parikh
              </p>
            </div>
          </div>
        </section>

        {/* LESSONS - Faster stagger only */}
        <section className="mb-20 lg:mb-28" ref={sectionRef}>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent my-12" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-slate-200 border-b border-slate-800/40 pb-6 max-w-3xl font-mono tracking-widest uppercase">
            PRODUCTION FAILURES SURVIVED
          </h2>
          
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="group pl-8 lg:pl-10 border-l-2 border-slate-700/60 hover:border-slate-400/80 hover:bg-slate-900/30 transition-all duration-400 py-6 backdrop-blur-sm rounded-xl cursor-default" 
              style={{opacity: isVisible ? 1 : 0, transition: 'all 0.6s ease-out', transitionDelay: isVisible ? '0.15s' : '0s'}}>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-200 mb-3 font-mono">
                CSV APOCALYPSE
              </h3>
              <p className="text-lg text-slate-400 leading-[1.75] mb-3">
                Team caught malformed CSVs at 10x volume during iSAC launch. 
                Backup validation saved deployment.
              </p>
              <p className="text-sm text-slate-500 italic font-mono mt-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-emerald-400 transition-all duration-300 leading-tight">
                assumptions fail faster than code
              </p>
            </div>

            <div className="group pl-8 lg:pl-10 border-l-2 border-slate-700/60 hover:border-slate-400/80 hover:bg-slate-900/30 transition-all duration-400 py-6 backdrop-blur-sm rounded-xl cursor-default" 
              style={{opacity: isVisible ? 1 : 0, transition: 'all 0.6s ease-out', transitionDelay: isVisible ? '0.3s' : '0s'}}>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-200 mb-3 font-mono">
                POLLING DEATH SPIRAL
              </h3>
              <p className="text-lg text-slate-400 leading-[1.75] mb-3">
                Summit auth failed at 10k concurrent. Event sourcing fixed it (500ms→40ms).
              </p>
              <p className="text-sm text-slate-500 italic font-mono mt-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-emerald-400 transition-all duration-300 leading-tight">
                p95s don't lie, dashboards do
              </p>
            </div>

            <div className="group pl-8 lg:pl-10 border-l-2 border-slate-700/60 hover:border-slate-400/80 hover:bg-slate-900/30 transition-all duration-400 py-6 backdrop-blur-sm rounded-xl cursor-default" 
              style={{opacity: isVisible ? 1 : 0, transition: 'all 0.6s ease-out', transitionDelay: isVisible ? '0.45s' : '0s'}}>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-200 mb-3 font-mono">
                SILENT MODEL DRIFT
              </h3>
              <p className="text-lg text-slate-400 leading-[1.75] mb-3">
                AI Gov ML dropped 22% accuracy. Self-checks caught it before regulators.
              </p>
              <p className="text-sm text-slate-500 italic font-mono mt-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-emerald-400 transition-all duration-300 leading-tight">
                confidence ≠ correctness
              </p>
            </div>
          </div>
        </section>

        {/* BELIEFS - De-emphasized valley (smaller, lighter) */}
        <section className="mb-16 lg:mb-20 max-w-xl mx-auto text-slate-500 font-mono text-xs lg:text-sm leading-[1.75] opacity-80">
          <h4 className="text-slate-400 mb-4 font-semibold tracking-wider uppercase text-sm">
            Things I used to believe
          </h4>
          <div className="space-y-2">
            <div>• staging = production</div>
            <div>• accuracy = safety</div>
            <div>• edge cases later</div>
            <div>• more features = better</div>
          </div>
        </section>

        {/* LEADERSHIP - Hover-driven only (NO entrance) */}
        <section className="mb-20 lg:mb-28">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent my-12" />
          <h2 className="text-2xl lg:text-3xl font-bold mb-12 text-slate-200 max-w-3xl font-mono tracking-widest uppercase">
            DECISIONS OWNED UNDER FIRE
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {title: "iSAC WebSocket", desc: "40-person team, deadline tripled. I cut 7 features and rewrote spec to ship.", num: "01"},
              {title: "AI Gov validation", desc: "Caught 22% accuracy drop with self-checks before regulators flagged.", num: "02"},
              {title: "Summit events", desc: "Survived 10k concurrent after p95 failures by switching from polling.", num: "03"}
            ].map((item, i) => (
              <div key={i} className="group p-6 lg:p-8 border border-slate-800/40 rounded-xl hover:border-slate-400/80 hover:shadow-2xl hover:bg-slate-900/60 hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm origin-bottom hover:scale-[1.02] cursor-default">
                <div className="font-mono text-xs text-slate-500 mb-3 opacity-50 group-hover:opacity-100 transition-all duration-300">
                  [{item.num}]
                </div>
                <h4 className="font-bold text-lg text-slate-100 mb-3 group-hover:text-white">{item.title}</h4>
                <p className="text-sm text-slate-300 leading-[1.75]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH - Callback close (KEEP animation) */}
        <section className="max-w-3xl mx-auto pb-32 border-t-4 border-slate-800/70 pt-16 relative overflow-hidden"
          style={{opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0.97)', transition: 'all 1.6s cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0.6s'}}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-slate-100 font-mono tracking-widest uppercase">
            RELIABLE ML SYSTEMS RESEARCH
          </h2>
          
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800/60 rounded-2xl p-10 lg:p-14 shadow-2xl relative group cursor-default">
            <p className="text-xl lg:text-2xl text-slate-300 leading-[1.75] mb-8 font-light">
              Data systems that stay reliable when real-world inputs change unexpectedly.
            </p>
            <p className="text-lg text-slate-400 italic mb-6 leading-[1.75] font-medium">
              I now design systems assuming the assumptions will fail first.
            </p>
            <p className="text-lg text-emerald-400 font-semibold tracking-wider uppercase font-mono bg-slate-800/50 px-4 py-2 rounded-lg inline-block">
              MS Applied Data Science Research
            </p>
          </div>
        </section>

      </div>

      {/* Mobile optimizations */}
      <style jsx>{`
        @media (hover: none) {
          .group:hover .group-hover\\:opacity-100 {
            opacity: 1 !important;
            transform: none !important;
          }
          .group:hover .group-hover\\:text-emerald-400 {
            color: rgb(6 147 227) !important;
          }
        }
        @media (max-width: 1024px) {
          .mb-20 { margin-bottom: 3rem !important; }
          .mb-24 { margin-bottom: 4rem !important; }
          .mb-28 { margin-bottom: 5rem !important; }
          .mb-32 { margin-bottom: 6rem !important; }
          .text-lg { font-size: 1.05rem !important; }
          .leading-\\[1.75\\] { line-height: 1.8 !important; }
        }
      `}</style>
    </div>
  );
}
