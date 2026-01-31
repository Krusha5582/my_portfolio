"use client";
import { useState, useRef, useEffect } from "react";
import { Shield, Database, Layers, ChevronRight } from "lucide-react";

const OPERATIONAL_CONTEXTS = {
  amc: {
    name: "Applied Systems Engineer",
    organization: "AMC Civic Operations",
    context: "Municipal operations with high-volume unstructured complaint streams and decision latency bottlenecks.",
    scope: "Production intelligence pipeline: ingestion → triage → routing → observability (1000+ decisions/day).",
    constraints: "Real-time failure isolation, graceful degradation, adversarial volume spikes.",
    impact: "Deployed fault-tolerant civic decision system reducing latency 60% with continuous diagnostics.",
    principles: ["System Integrity", "Diagnostic Intelligence", "Production Continuity"],
    icon: Shield,
    color: "emerald"
  },
  isac: {
    name: "Production Intelligence Engineer", 
    organization: "iSAC Institutional Systems",
    context: "Multi-campus institutional workflows with unstructured query entropy and manual orchestration.",
    scope: "Conversational diagnostics layer: intent classification → response routing → fallback orchestration.",
    constraints: "Query ambiguity, continuous quality monitoring, 24/7 operational reliability.",
    impact: "Eliminated manual triage overhead with structured operational intelligence across decision flows.",
    principles: ["Diagnostic Intelligence", "Production Continuity"],
    icon: Database,
    color: "slate"
  },
  consultant: {
    name: "Deployment Systems Engineer",
    organization: "MS Education Systems",
    context: "Consultancy operations requiring fault-tolerant human-in-the-loop decision surfaces.",
    scope: "Production MERN architecture: payment isolation → monitoring dashboards → recovery orchestration.",
    constraints: "Live payment reliability, operational observability, human decision integration.",
    impact: "Shipped stable production systems with real-time failure recovery and decision telemetry.",
    principles: ["Production Continuity", "System Integrity"],
    icon: Layers,
    color: "indigo"
  }
};

const OperationalContextModule = ({ context, index, isVisible }) => {
  const IconComponent = context.icon;
  const animationDuration = `${600 + index * 200}ms`;
  
  return (
    <div 
      className={`
        group relative p-8 lg:p-10 rounded-2xl border transition-all duration-600 hover:shadow-xl backdrop-blur-xl overflow-hidden
        ${context.color === 'emerald'
          ? 'bg-slate-900/97 border-2 border-slate-800/90 shadow-2xl hover:border-emerald-400/50 hover:shadow-emerald-400/12' 
          : context.color === 'slate'
            ? 'bg-slate-900/94 border border-slate-800/80 shadow-xl hover:border-slate-400/45 hover:shadow-slate-400/10'
            : 'bg-slate-900/91 border border-slate-800/75 shadow-lg hover:border-indigo-400/35 hover:shadow-indigo-400/8'
        }
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        animationDuration,
        animationFillMode: 'both'
      }}
    >
      {/* Context watermark */}
      <IconComponent 
        className={`absolute inset-0 w-32 h-32 lg:w-36 lg:h-36 opacity-[0.06] pointer-events-none z-0 ${
          context.color === 'emerald' ? 'text-emerald-900/25' :
          context.color === 'slate' ? 'text-slate-900/25' : 'text-indigo-900/25'
        }`}
      />
      
      <div className="relative z-10 space-y-6">
        {/* Role & Organization */}
        <div className="flex items-start gap-4">
          <div className={`
            w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl shadow-lg border flex-shrink-0 backdrop-blur-md
            transition-all duration-500 group-hover:scale-[1.05]
            ${context.color === 'emerald' 
              ? 'bg-emerald-500/90 border-emerald-400/60 shadow-emerald-500/30'
              : context.color === 'slate'
                ? 'bg-slate-500/90 border-slate-400/55 shadow-slate-500/25'
                : 'bg-indigo-500/85 border-indigo-400/50 shadow-indigo-500/20'
            }
          `}>
            <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className="font-bold tracking-tight mb-1 text-xl lg:text-2xl pr-2 text-white">
              {context.name}
            </h3>
            <p className="text-slate-400 font-mono text-sm tracking-wider uppercase">
              {context.organization}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {context.principles.map((principle, i) => (
                <span key={i} className={`text-xs font-mono uppercase tracking-wider px-2 py-1 rounded-sm border ${
                  context.color === 'emerald' ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-300' :
                  context.color === 'slate' ? 'border-slate-400/60 bg-slate-500/10 text-slate-300' :
                  'border-indigo-400/50 bg-indigo-500/10 text-indigo-300'
                }`}>
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Operational context */}
        <div className="space-y-1">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">Context</p>
          <p className="text-sm text-slate-300 leading-relaxed">{context.context}</p>
        </div>

        {/* System scope */}
        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">Scope</p>
          <p className="text-sm text-slate-300 leading-[1.6] group-hover:text-slate-200/95 transition-colors">{context.scope}</p>
        </div>

        {/* Engineering constraints */}
        <div className="space-y-1">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">Constraints</p>
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">{context.constraints}</p>
        </div>

        {/* Operational impact */}
        <div>
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">Impact</p>
          <p className="font-semibold text-lg leading-tight text-slate-100 drop-shadow-sm">
            {context.impact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
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
      {/* CONTINUOUS SYSTEM ENVIRONMENT */}
      <div className="absolute inset-0 z-0 opacity-[0.12]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,78,59,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:80px_80px] opacity-95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* OPERATIONAL CONTEXTS HEADER */}
        <div className="text-center mb-24 lg:mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-300 text-transparent bg-clip-text tracking-tight mb-8">
            Systems Roles
          </h2>
          
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-slate-400/70 to-emerald-400/70 mb-10 backdrop-blur-sm" />
          
          <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light tracking-wide leading-relaxed max-w-3xl mx-auto mb-6">
            Operational contexts expressing constraint-first engineering principles
          </div>
        </div>

        {/* OPERATIONAL CONTEXT MODULES */}
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <OperationalContextModule context={OPERATIONAL_CONTEXTS.amc} index={0} isVisible={isVisible} />
            <OperationalContextModule context={OPERATIONAL_CONTEXTS.isac} index={1} isVisible={isVisible} />
            <OperationalContextModule context={OPERATIONAL_CONTEXTS.consultant} index={2} isVisible={isVisible} />
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
