"use client";
import { useState, useRef, useEffect } from "react";
import { Shield, Database, Layers, ChevronRight } from "lucide-react";

const SYSTEMS_THINKING = {
  integrity: {
    title: "System Integrity",
    subtitle: "Constraint-Driven Design",
    principle: "Failure modes are engineered in",
    desc: "Adversarial conditions where false confidence costs more than low accuracy. Reliability bounds and uncertainty quantification as first-class architectural constraints from phase zero through deployment.",
    applied: "AquaAI: decision diagnostics & governance",
    icon: Shield,
    color: "emerald"
  },
  diagnostics: {
    title: "Diagnostic Intelligence", 
    subtitle: "Empirical Validation",
    principle: "Bottlenecks reveal system truth",
    desc: "High-throughput diagnostics across data pipelines and ML systems. Temporal modeling, failure mode analysis, and observability turn operational complexity into structured decision surfaces.",
    applied: "iSAC: production intelligence systems",
    icon: Database,
    color: "slate"
  },
  continuity: {
    title: "Production Continuity",
    subtitle: "Deployment Disciplines",
    principle: "Scale demands resilience patterns",
    desc: "Fault-tolerant deployment architectures bridging decision intelligence to operational reality. Production-grade human-in-the-loop interfaces maintain clarity under constraint and failure conditions.",
    applied: "Portfolio: production decision interfaces",
    icon: Layers,
    color: "indigo"
  }
};

const ThinkingCard = ({ principle, index, isVisible }) => {
  const IconComponent = principle.icon;
  const animationDuration = `${550 + index * 180}ms`; // Semantic stagger: 550→730→910ms
  
  return (
    <div 
      className={`
        group relative p-8 lg:p-10 rounded-2xl border transition-all duration-600 hover:shadow-xl backdrop-blur-xl overflow-hidden
        ${principle.color === 'emerald'
          ? 'bg-slate-900/98 border-2 border-slate-800/92 shadow-2xl hover:border-emerald-400/55 hover:shadow-emerald-400/15' 
          : principle.color === 'slate'
            ? 'bg-slate-900/95 border border-slate-800/85 shadow-xl hover:border-slate-400/50 hover:shadow-slate-400/12'
            : 'bg-slate-900/92 border border-slate-800/75 shadow-lg hover:border-indigo-400/40 hover:shadow-indigo-400/10'
        }
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        animationDuration,
        animationFillMode: 'both'
      }}
    >
      {/* System plane watermark */}
      <IconComponent 
        className={`absolute inset-0 w-32 h-32 lg:w-36 lg:h-36 opacity-[0.065] pointer-events-none z-0 ${
          principle.color === 'emerald' ? 'text-emerald-900/28' :
          principle.color === 'slate' ? 'text-slate-900/28' : 'text-indigo-900/28'
        }`}
      />
      
      <div className="relative z-10">
        {/* Module header */}
        <div className="flex items-start gap-4 mb-8">
          <div className={`
            w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl shadow-lg border flex-shrink-0 backdrop-blur-md
            transition-all duration-500 group-hover:scale-[1.05]
            ${principle.color === 'emerald' 
              ? 'bg-emerald-500/92 border-emerald-400/65 shadow-emerald-500/35'
              : principle.color === 'slate'
                ? 'bg-slate-500/92 border-slate-400/60 shadow-slate-500/30'
                : 'bg-indigo-500/88 border-indigo-400/55 shadow-indigo-500/25'
            }
          `}>
            <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className={`font-bold tracking-tight mb-2 pr-2 ${
              principle.color === 'emerald' 
                ? 'text-2xl lg:text-3xl text-white' 
                : principle.color === 'slate' 
                  ? 'text-xl lg:text-2xl text-slate-100'
                  : 'text-lg lg:text-xl text-slate-200'
            }`}>
              {principle.title}
            </h3>
            <p className={`font-mono text-sm lg:text-base font-medium tracking-wider uppercase ${
              principle.color === 'emerald' ? 'text-emerald-300' :
              principle.color === 'slate' ? 'text-slate-300' : 'text-slate-400'
            }`}>
              {principle.subtitle}
            </p>
          </div>
        </div>

        {/* PRINCIPLE ANCHOR - engineering directive */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-4">
            <div className={`w-2.5 h-2.5 mt-1.5 rounded-full flex-shrink-0 ${
              principle.color === 'emerald' ? 'bg-emerald-400/90' :
              principle.color === 'slate' ? 'bg-slate-400/80' : 'bg-indigo-400/70'
            }`} />
            <p className="font-mono text-sm font-semibold tracking-[0.12em] uppercase text-slate-200 leading-tight flex-1">
              {principle.principle}
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-slate-800/70 via-slate-700/50 to-transparent" />
        </div>

        {/* System behavior */}
        <p className="text-sm lg:text-base text-slate-300 leading-[1.7] mb-8 group-hover:text-slate-200/95 transition-colors duration-300">
          {principle.desc}
        </p>

        {/* Applied systems mapping */}
        <div className="pt-6 pb-4 border-t border-slate-800/60">
          <a href="#projects" className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold hover:text-emerald-400 transition-all duration-300">
            <span className="text-slate-400 group-hover:text-slate-200">Applied:</span>
            <span className="text-slate-300 group-hover:text-slate-100">{principle.applied}</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function SystemsThinking() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-925 text-white relative overflow-hidden">
      {/* CONTINUOUS ARCHITECTURAL PLANE */}
      <div className="absolute inset-0 z-0 opacity-[0.12]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,78,59,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:80px_80px] opacity-95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* SYSTEM ARCHITECTURE HEADER */}
        <div className="text-center mb-24 lg:mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-300 text-transparent bg-clip-text tracking-tight mb-8">
            Secure • Analyze • Build
          </h2>
          
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-slate-400/70 to-emerald-400/70 mb-10 backdrop-blur-sm" />
          
          <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light tracking-wide leading-relaxed max-w-3xl mx-auto mb-6">
            Constraint-first design → diagnostic intelligence → production continuity
          </div>
          
          <p className="text-lg md:text-xl text-slate-400/95 font-medium max-w-2xl mx-auto tracking-wide">
            Systems engineering principles for reliability-critical environments
          </p>
        </div>

        {/* DIRECTIONAL SYSTEM MODULES */}
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <ThinkingCard principle={SYSTEMS_THINKING.integrity} index={0} isVisible={isVisible} />
            <ThinkingCard principle={SYSTEMS_THINKING.diagnostics} index={1} isVisible={isVisible} />
            <ThinkingCard principle={SYSTEMS_THINKING.continuity} index={2} isVisible={isVisible} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(28px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .fade-in {
          animation: fade-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
