"use client";
import { useState, useRef, useEffect } from "react";
import { Shield, Database, Layers, BarChart3 } from "lucide-react";

const CAPABILITY_VALIDATION = {
  diagnostics: {
    title: "Diagnostic Intelligence",
    subtitle: "Data Systems & Observability",
    evidence: [
      {
        name: "Google Data Analytics",
        issuer: "Google • 2024",
        applied: "Data pipeline validation, diagnostic modeling, observability surfaces"
      },
      {
        name: "J.P. Morgan Quantitative Research", 
        issuer: "Forage • 2026",
        applied: "Quantitative analysis, financial data systems, research methodology"
      },
      {
        name: "Machine Learning Fundamentals",
        issuer: "Stanford Online • 2024",
        applied: "Model evaluation, feature engineering, system diagnostics"
      }
    ],
    icon: Database,
    color: "slate"
  },
  reliability: {
    title: "System Integrity", 
    subtitle: "Secure Architecture & Deployment",
    evidence: [
      {
        name: "AWS Cloud Practitioner",
        issuer: "AWS • 2025",
        applied: "Production deployment, monitoring, failure isolation"
      },
      {
        name: "Cybersecurity Fundamentals",
        issuer: "IBM • 2024",
        applied: "Threat modeling, secure pipelines, constraint validation"
      }
    ],
    icon: Shield,
    color: "emerald"
  },
  recognition: {
    title: "Production Continuity",
    subtitle: "Deployed Systems Evidence",
    evidence: [
      {
        name: "Technical Excellence Award",
        issuer: "iSAC Systems • 2024",
        applied: "Production intelligence layer across institutional operations"
      },
      {
        name: "Systems Design Innovation", 
        issuer: "AMC Civic Operations • 2025",
        applied: "Fault-tolerant civic decision pipeline architecture"
      }
    ],
    icon: Layers,
    color: "indigo"
  }
};

const ValidationModule = ({ capability, index, isVisible }) => {
  const IconComponent = capability.icon;
  const animationDuration = `${700 + index * 300}ms`;
  
  return (
    <div 
      className={`
        group relative p-9 lg:p-12 rounded-2xl border transition-all duration-700 hover:shadow-2xl backdrop-blur-xl overflow-hidden
        ${capability.color === 'emerald'
          ? 'bg-slate-900/98 border-2 border-slate-800/95 shadow-2xl hover:border-emerald-400/60 hover:shadow-emerald-500/20' 
          : capability.color === 'slate'
            ? 'bg-slate-900/96 border-2 border-slate-800/90 shadow-2xl hover:border-slate-400/50 hover:shadow-slate-400/15'
            : 'bg-slate-900/92 border border-slate-800/80 shadow-xl hover:border-indigo-400/45 hover:shadow-indigo-400/12'
        }
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        animationDuration,
        animationFillMode: 'both'
      }}
    >
      {/* Capability watermark */}
      <IconComponent 
        className={`absolute inset-0 w-32 h-32 lg:w-40 lg:h-40 opacity-[0.08] pointer-events-none z-0 ${
          capability.color === 'emerald' ? 'text-emerald-900/35' :
          capability.color === 'slate' ? 'text-slate-900/30' : 'text-indigo-900/28'
        }`}
      />
      
      <div className="relative z-10 space-y-8">
        {/* Principle header */}
        <div className="flex items-start gap-5">
          <div className={`
            w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-2xl shadow-xl border-2 flex-shrink-0 backdrop-blur-xl mt-1
            ${capability.color === 'emerald' 
              ? 'bg-emerald-500/95 border-emerald-400/70 shadow-emerald-500/40'
              : capability.color === 'slate'
                ? 'bg-slate-500/95 border-slate-400/65 shadow-slate-500/35'
                : 'bg-indigo-500/90 border-indigo-400/60 shadow-indigo-500/30'
            }
          `}>
            <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white drop-shadow-sm" />
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className="font-black tracking-tight text-2xl lg:text-3xl pr-3 text-white mb-2 leading-tight">
              {capability.title}
            </h3>
            <p className="font-mono text-sm lg:text-base font-semibold tracking-widest uppercase text-slate-400">
              {capability.subtitle}
            </p>
          </div>
        </div>

        {/* Evidence stack */}
        <div className="space-y-5">
          {capability.evidence.map((evidence, eIndex) => (
            <div key={eIndex} className="group/evidence pt-6 pb-5 border-t border-slate-800/50 first:pt-0 first:border-t-0 hover:bg-slate-900/60 rounded-xl transition-all duration-400 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2.5 bg-gradient-to-br from-slate-500/80 to-slate-400/60 rounded-full flex-shrink-0 shadow-md group-hover/evidence:scale-110 transition-all" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <p className="font-bold text-lg lg:text-xl text-slate-100 tracking-tight group-hover/evidence:text-white pr-4 leading-tight">
                      {evidence.name}
                    </p>
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-500 group-hover/evidence:text-slate-400">
                      {evidence.issuer}
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium tracking-tight">
                    {evidence.applied}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Certifications() {
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
    <section className="w-full py-28 lg:py-36 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-900 text-white relative overflow-hidden">
      {/* ENHANCED SYSTEM ENVIRONMENT */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,78,59,0.35),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
        {/* VALIDATION SYSTEM HEADER */}
        <div className="text-center mb-28 lg:mb-40 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-slate-100 via-white to-slate-200 text-transparent bg-clip-text tracking-tight mb-10 leading-none">
            Capability Validation
          </h2>
          
          <div className="h-px w-40 mx-auto bg-gradient-to-r from-slate-400/80 to-emerald-400/80 mb-12 backdrop-blur-md shadow-lg" />
          
          <div className="text-2xl md:text-3xl lg:text-4xl text-slate-300 font-light tracking-wide leading-relaxed max-w-4xl mx-auto">
            External validation of constraint-first systems engineering capabilities
          </div>
        </div>

        {/* VALIDATION MODULES */}
        <div ref={sectionRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <ValidationModule capability={CAPABILITY_VALIDATION.diagnostics} index={0} isVisible={isVisible} />
            <ValidationModule capability={CAPABILITY_VALIDATION.reliability} index={1} isVisible={isVisible} />
            <ValidationModule capability={CAPABILITY_VALIDATION.recognition} index={2} isVisible={isVisible} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes system-activation {
          from { 
            opacity: 0; 
            transform: translateY(32px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        .system-active {
          animation: system-activation 1.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
