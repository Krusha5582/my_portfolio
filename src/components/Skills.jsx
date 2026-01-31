"use client";
import { useState, useRef, useEffect } from "react";
import { Database, Shield, Code, ChevronRight, Target } from "lucide-react";

const ARCHITECTURE = {
  intelligence: {
    title: "Core Intelligence",
    subtitle: "ML Diagnostics & Decision Systems",
    items: [
      "Temporal modeling & forecasting",
      "ML diagnostics & evaluation", 
      "Data pipeline engineering",
      "Uncertainty quantification"
    ],
    applied: "AquaAI • Governance systems",
    tech: ["Python", "PyTorch", "NumPy"],
    color: "emerald",
    icon: Database
  },
  reliability: {
    title: "Production Architecture", 
    subtitle: "System Reliability Engineering",
    items: [
      "Failure mode analysis",
      "Reliability engineering",
      "Secure deployment patterns", 
      "Monitoring & observability"
    ],
    applied: "iSAC production systems",
    tech: ["Docker", "AWS", "Linux"],
    color: "slate",
    icon: Shield
  },
  interfaces: {
    title: "System Interfaces",
    subtitle: "Decision Delivery Layer",
    items: [
      "React/Next.js architecture",
      "API-first design", 
      "Real-time dashboards",
      "Human-in-the-loop interfaces"
    ],
    applied: "Portfolio systems",
    tech: ["React", "Next.js"],
    color: "indigo",
    icon: Code
  }
};

function LayerCard({ layer, index, isPrimary = false, isVisible }) {
  const animationDuration = `${700 + index * 200}ms`;
  
  return (
    <div 
      className={`
        group relative p-8 lg:p-10 rounded-2xl border transition-all duration-500 hover:shadow-xl
        ${isPrimary 
          ? 'lg:col-span-1 bg-slate-900/95 border-2 border-slate-800 shadow-xl hover:border-emerald-400/60 hover:shadow-emerald-400/15' 
          : layer.color === 'slate'
            ? 'bg-slate-900/90 border border-slate-800/70 shadow-lg hover:border-slate-400/50 hover:shadow-slate-400/10'
            : 'bg-slate-900/85 border border-slate-800/60 shadow-md hover:border-indigo-400/40 hover:shadow-indigo-400/10'
        }
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        animationDuration,
        animationFillMode: 'both'
      }}
    >
      {/* Background watermark */}
      <layer.icon 
        className={`absolute inset-0 w-32 h-32 opacity-2 pointer-events-none z-0 ${
          layer.color === 'emerald' ? 'text-emerald-900/20' :
          layer.color === 'slate' ? 'text-slate-900/20' : 'text-indigo-900/20'
        }`}
        style={{ animationDelay: `${100 + index * 50}ms` }}
      />
      
      <div className="relative z-10">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`
            w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl shadow-md border-2 flex-shrink-0
            transition-all duration-400 group-hover:scale-105
            ${layer.color === 'emerald' 
              ? 'bg-emerald-500/90 border-emerald-400/70 shadow-emerald-500/30'
              : layer.color === 'slate'
                ? 'bg-slate-500/90 border-slate-400/60 shadow-slate-500/25'
                : 'bg-indigo-500/90 border-indigo-400/60 shadow-indigo-500/25'
            }
          `}>
            <layer.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className={`font-bold tracking-tight mb-2 pr-2 ${
              layer.color === 'emerald' 
                ? 'text-2xl lg:text-3xl text-white' 
                : layer.color === 'slate' 
                  ? 'text-xl lg:text-2xl text-slate-100'
                  : 'text-lg lg:text-xl text-slate-200'
            }`}>
              {layer.title}
            </h3>
            <p className={`font-mono text-sm lg:text-base font-medium ${
              layer.color === 'emerald' ? 'text-emerald-300' : 
              layer.color === 'slate' ? 'text-slate-300' : 'text-slate-400'
            }`}>
              {layer.subtitle}
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="space-y-3 mb-6">
          {layer.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm leading-relaxed group-hover:text-white/95 transition-colors">
              <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${
                layer.color === 'emerald' ? 'bg-emerald-400/90' :
                layer.color === 'slate' ? 'bg-slate-400/80' : 'bg-indigo-400/70'
              }`} />
              <span className="text-slate-300 hover:text-white/90 transition-colors">{item}</span>
            </div>
          ))}
        </div>

        {/* Applied */}
        <div className="pt-4 pb-3 border-t border-slate-800/40">
          <a href={layer.appliedLink || '#projects'} className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-medium hover:text-emerald-400 transition-all">
            <span className="text-slate-400 group-hover:text-slate-200">Applied:</span>
            <span className="text-slate-300 group-hover:text-slate-100">{layer.applied}</span>
            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-1" />
          </a>
        </div>

        {/* Tech Stack - Higher contrast */}
        {layer.tech?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/30 bg-slate-900/30 rounded-lg p-2.5 backdrop-blur-sm">
            {layer.tech.map((tech, idx) => (
              <div 
                key={idx}
                className="px-2.5 py-1.5 text-xs font-mono font-semibold rounded-md border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-md
                         bg-slate-800/50 border-slate-700/60 hover:bg-slate-700/70 hover:border-slate-500/70"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span className="text-slate-300 hover:text-slate-100 transition-colors tracking-wider">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CapabilityArchitecture() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-900 text-white relative overflow-hidden">
      {/* Architecture flow background */}
      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(6,78,59,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-300 text-transparent bg-clip-text tracking-tight mb-6">
            Capability Architecture
          </h2>
          
          <div className="h-px w-28 mx-auto bg-gradient-to-r from-slate-400/40 to-emerald-400/40 mb-8" />
          
          <div className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-light tracking-wide leading-relaxed max-w-2xl mx-auto mb-4">
            From diagnostics → reliable production → decision delivery
          </div>
          
          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-xl mx-auto">
            Applied ML, data systems, and reliability-critical engineering roles
          </p>
        </div>

        {/* Architecture Grid */}
        <div ref={sectionRef} className="max-w-6xl mx-auto mb-20 lg:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
            <LayerCard layer={ARCHITECTURE.intelligence} index={0} isPrimary isVisible={isVisible} />
            <LayerCard layer={ARCHITECTURE.reliability} index={1} isVisible={isVisible} />
            <LayerCard layer={ARCHITECTURE.interfaces} index={2} isVisible={isVisible} />
          </div>
        </div>

        {/* Active Research */}
        <div className="text-center mb-16 lg:mb-20">
          <div className={`
            inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border-2 backdrop-blur-xl shadow-lg max-w-sm mx-auto 
            transition-all duration-500 group hover:shadow-xl hover:border-amber-500/50 hover:-translate-y-0.5
            ${isVisible 
              ? 'opacity-100 scale-100 border-amber-400/50 bg-amber-500/4 shadow-amber-400/25' 
              : 'opacity-0 scale-95 border-slate-800/60'
            }
          `}>
            <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400">Active Research</div>
              <div className="text-sm font-medium text-amber-200">Cyber investigation systems</div>
            </div>
          </div>
        </div>

        {/* Production CTA */}
        <div className="text-center">
          <a 
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono text-lg font-semibold 
                       border-2 border-slate-700/60 bg-slate-900/50 backdrop-blur-xl shadow-lg
                       hover:border-emerald-400/70 hover:bg-emerald-500/8 hover:shadow-emerald-400/25 
                       hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-500 tracking-wide"
          >
            <span>Systems in Production</span>
            <ChevronRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(24px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-watermark {
          from { 
            opacity: 0; 
            transform: scale(0.8) translateY(12px); 
          }
          to { 
            opacity: 0.2; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .fade-in {
          animation: fade-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .fade-in-watermark {
          animation: fade-in-watermark 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
