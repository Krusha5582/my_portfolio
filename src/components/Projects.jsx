"use client";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Shield, Database, Layers, ChevronRight } from "lucide-react";

const PROJECTS = {
  amc: {
    name: "AMC Civic Intelligence System",
    context: "Civic operations lacked observability across unstructured complaint streams and decision latency.",
    architecture: "Pipeline: ingestion → NLP triage → workflow routing with real-time telemetry and failure isolation.",
    impact: "Reduced decision latency 60% with continuous operational diagnostics across live civic workloads.",
    principles: ["System Integrity", "Diagnostic Intelligence"],
    tech: ["React Native", "FastAPI", "MongoDB", "NLP/ML"],
    link: "https://github.com/Krusha5582/AMC-Smart-Application",
    icon: Shield,
    color: "emerald",
    primary: true
  },
  isac: {
    name: "iSAC Production Intelligence", 
    context: "Institutional workflows had unstructured query entropy and manual response orchestration.",
    architecture: "Conversational diagnostics layer with intent classification and structured response routing.",
    impact: "Eliminated manual triage with 24/7 operational intelligence across institutional decision flows.",
    principles: ["Diagnostic Intelligence", "Production Continuity"],
    tech: ["Python", "Dialogflow", "React"],
    link: "https://github.com/Krusha5582/Chatbot_",
    icon: Database,
    color: "slate"
  },
  portfolio: {
    name: "Production Decision Interfaces",
    context: "Consultancy needed fault-tolerant human-in-the-loop decision surfaces for live operations.",
    architecture: "MERN deployment architecture with payment isolation and production monitoring dashboards.",
    impact: "Deployed stable decision systems with real-time failure recovery and operational telemetry.",
    principles: ["Production Continuity", "System Integrity"],
    tech: ["MERN", "Razorpay", "Vercel"],
    link: "https://www.mseconsultant.com/",
    icon: Layers,
    color: "indigo"
  }
};

const ProjectModule = ({ project, index, isVisible }) => {
  const IconComponent = project.icon;
  const animationDuration = `${550 + index * 180}ms`;
  
  return (
    <div 
      className={`
        group relative p-7 lg:p-9 rounded-2xl border transition-all duration-700 hover:shadow-2xl backdrop-blur-xl overflow-hidden
        ${project.color === 'emerald' && project.primary
          ? 'bg-slate-900/98 border-2 border-slate-800/95 shadow-2xl hover:border-emerald-400/60 hover:shadow-emerald-500/20 scale-105' 
          : project.color === 'emerald'
            ? 'bg-slate-900/97 border-2 border-slate-800/90 shadow-2xl hover:border-emerald-400/50 hover:shadow-emerald-400/12' 
            : project.color === 'slate'
              ? 'bg-slate-900/94 border border-slate-800/80 shadow-xl hover:border-slate-400/45 hover:shadow-slate-400/10'
              : 'bg-slate-900/91 border border-slate-800/75 shadow-lg hover:border-indigo-400/35 hover:shadow-indigo-400/8'
        }
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        animationDuration,
        animationFillMode: 'both'
      }}
    >
      {/* System watermark */}
      <IconComponent 
        className={`absolute inset-0 w-32 h-32 lg:w-36 lg:h-36 opacity-[0.07] pointer-events-none z-0 ${
          project.color === 'emerald' ? 'text-emerald-900/30' :
          project.color === 'slate' ? 'text-slate-900/28' : 'text-indigo-900/25'
        }`}
      />
      
      <div className="relative z-10 space-y-6">
        {/* System header */}
        <div className="flex items-start gap-4">
          <div className={`
            w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl shadow-lg border flex-shrink-0 backdrop-blur-md
            transition-all duration-500 group-hover:scale-[1.05]
            ${project.color === 'emerald' 
              ? 'bg-emerald-500/92 border-emerald-400/65 shadow-emerald-500/35'
              : project.color === 'slate'
                ? 'bg-slate-500/90 border-slate-400/55 shadow-slate-500/25'
                : 'bg-indigo-500/85 border-indigo-400/50 shadow-indigo-500/20'
            }
          `}>
            <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className={`font-bold tracking-tight mb-3 text-xl lg:text-2xl pr-2 ${
              project.color === 'emerald' ? 'text-white' :
              project.color === 'slate' ? 'text-slate-100' : 'text-slate-200'
            }`}>
              {project.name}
            </h3>
            {project.primary && (
              <div className="absolute -top-3 -right-3 bg-emerald-500/90 text-white text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border-2 border-slate-900/50">
                Primary System
              </div>
            )}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.principles.map((principle, i) => (
                <span key={i} className={`text-xs font-mono uppercase tracking-wider px-2 py-1 rounded-sm border ${
                  project.color === 'emerald' ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-300' :
                  project.color === 'slate' ? 'border-slate-400/60 bg-slate-500/10 text-slate-300' :
                  'border-indigo-400/50 bg-indigo-500/10 text-indigo-300'
                }`}>
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Context - tightened */}
        <div className="space-y-1">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">Context</p>
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">{project.context}</p>
        </div>

        {/* Architecture */}
        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">Architecture</p>
          <p className="text-sm text-slate-300 leading-[1.6] group-hover:text-slate-200/95 transition-colors">{project.architecture}</p>
        </div>

        {/* IMPACT - most prominent */}
        <div className="pt-1">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">Impact</p>
          <p className={`font-semibold text-lg lg:text-xl leading-tight tracking-tight ${
            project.color === 'emerald' ? 'text-white drop-shadow-sm' :
            project.color === 'slate' ? 'text-slate-100' : 'text-slate-200'
          }`}>
            {project.impact}
          </p>
        </div>

        {/* Tech + CTA - bottom panel */}
        <div className="pt-6 pb-4 border-t border-slate-800/60 bg-slate-900/30 backdrop-blur-sm rounded-xl flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-slate-700/60 bg-slate-800/40 text-slate-400 text-[0.7rem]">
                {t}
              </span>
            ))}
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest font-semibold hover:text-emerald-400 transition-all duration-300"
          >
            View System <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
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
      <div className="absolute inset-0 z-0 opacity-[0.13]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,78,59,0.32),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.095)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.095)_1px,transparent_1px)] bg-[size:80px_80px] opacity-95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* SYSTEMS ARCHITECTURE HEADER */}
        <div className="text-center mb-24 lg:mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-300 text-transparent bg-clip-text tracking-tight mb-8">
            Production Systems
          </h2>
          
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-slate-400/75 to-emerald-400/75 mb-10 backdrop-blur-sm" />
          
          <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light tracking-wide leading-relaxed max-w-3xl mx-auto mb-6">
            Deployed architectures expressing constraint-first engineering principles
          </div>
        </div>

        {/* PRIMARY + SUPPORTING SYSTEM LAYER */}
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ProjectModule project={PROJECTS.amc} index={0} isVisible={isVisible} />
            <ProjectModule project={PROJECTS.isac} index={1} isVisible={isVisible} />
            <ProjectModule project={PROJECTS.portfolio} index={2} isVisible={isVisible} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(32px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .fade-in {
          animation: fade-in 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
