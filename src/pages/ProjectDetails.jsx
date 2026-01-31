import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowRight, Github, Users, Clock, BarChart3, AlertCircle, Zap, Brain, Lightbulb, Code } from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project)
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-925 text-white pt-28 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-black text-slate-100 mb-4 tracking-tight">System not found</h1>
          <a href="/projects" className="text-slate-400 hover:text-slate-300 inline-flex items-center gap-2 text-lg font-semibold transition-colors">
            ← All systems
          </a>
        </div>
      </div>
    );

  // ✅ 100% DATA-DRIVEN - Handle missing scale gracefully
  const meta = {
    role: project.role || "Engineer",
    team: project.team || "Solo",
    duration: project.duration || "3 months",
    scale: project.scale || "Production scale", // Fallback for commented scales
    domain: project.domain || "Systems",
    stakeholders: project.stakeholders || ["Users"],
    decisions: project.decisions || "Production architecture",
    lessons: project.lessons || "Shipped & iterated"
  };

  // ✅ Data-driven system layers (first 4 stack items)
  const systemLayers = {
    ingestion: project.stack?.[0] || "Input Layer",
    processing: project.stack?.[1] || "Core Logic", 
    storage: project.stack?.[2] || "Data Store",
    observability: project.stack?.[3] || "Metrics"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-900 text-white pt-20 lg:pt-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 mb-12 text-sm text-slate-500 font-mono uppercase tracking-widest">
          <a href="/projects" className="hover:text-slate-300 flex items-center gap-2 group transition-colors">
            <span className="w-1 h-1 bg-slate-500 rounded-full group-hover:bg-slate-300 transition-colors" />
            All systems
          </a>
        </nav>

        {/* 1️⃣ HERO SUMMARY - Professional snapshot */}
        <section className="mb-24 lg:mb-32">
          <div className="bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 mb-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8 text-sm">
              <div className="space-y-1">
                <span className="text-slate-500 font-mono uppercase tracking-wider text-xs">Role</span>
                <span className="font-bold text-slate-200">{meta.role}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 font-mono uppercase tracking-wider text-xs">Team</span>
                <span className="font-semibold text-slate-300">{meta.team}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 font-mono uppercase tracking-wider text-xs">Duration</span>
                <span className="font-semibold text-slate-300">{meta.duration}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 font-mono uppercase tracking-wider text-xs">Domain</span>
                <span className="font-semibold text-slate-300">{meta.domain}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 font-mono uppercase tracking-wider text-xs">Scale</span>
                <span className="font-bold text-emerald-400">{meta.scale}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.live && (
                <span className="px-4 py-2 bg-emerald-900/80 text-emerald-200 text-sm font-bold border border-emerald-800/70 rounded-xl">
                  Live
                </span>
              )}
              <span className="px-4 py-2 bg-slate-800/70 text-slate-300 text-sm font-bold border border-slate-700/70 rounded-xl">
                {project.type?.toUpperCase()}
              </span>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight text-slate-50 mb-8 bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-text text-transparent">
            {project.title}
          </h1>
        </section>

        {/* 2️⃣ PROBLEM & CONSTRAINT - Updated for new data */}
        <section className="mb-28 lg:mb-36">
          <h2 className="text-4xl lg:text-5xl font-black mb-12 text-slate-100 font-mono tracking-tight uppercase border-b border-slate-800/40 pb-8">
            Production constraint
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-900/50 border border-slate-800/60 rounded-3xl p-10 lg:p-12 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-black text-amber-300 mb-8 font-mono flex items-center gap-3 tracking-tight">
                <AlertCircle className="w-8 h-8" />
                What was breaking
              </h3>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed font-mono">
                <div>• <span className="font-medium">{project.constraint}</span></div>
                <div>• {project.description}</div>
                <div>• No structured workflows</div>
                <div>• Zero production observability</div>
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/60 rounded-3xl p-10 lg:p-12 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-black text-slate-300 mb-8 font-mono flex items-center gap-3 tracking-tight">
                <Users className="w-8 h-8" />
                Stakeholders served
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {meta.stakeholders.map((stakeholder, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full flex-shrink-0" />
                    <span className="text-slate-300 font-medium">{stakeholder}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ SYSTEM ARCHITECTURE */}
        <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-12 text-slate-100 font-mono tracking-tight uppercase">
              Production architecture
            </h2>
            <div className="space-y-4">
              {Object.entries(systemLayers).map(([key, layer]) => (
                <div key={key} className="group flex items-start gap-4 p-8 bg-slate-900/40 hover:bg-slate-800/70 border border-slate-800/40 hover:border-emerald-500/50 rounded-3xl backdrop-blur-sm transition-all duration-500 shadow-xl hover:shadow-emerald-500/20">
                  <div className="w-4 h-4 mt-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-all" />
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-xl font-black text-slate-200 group-hover:text-emerald-300 truncate">
                      {layer}
                    </div>
                    <div className="text-sm text-slate-500 font-mono mt-2 uppercase tracking-wider">
                      Production layer
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ARCHITECTURE DIAGRAM */}
          <div className="relative rounded-4xl border-4 border-slate-800/50 bg-gradient-to-br from-slate-900/80 to-slate-950/50 min-h-[600px] group backdrop-blur-2xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-900/40 [background-size:80px_80px] opacity-60 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-16 lg:p-20 text-center">
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-emerald-900/80 to-teal-900/80 border-4 border-emerald-400/50 rounded-4xl flex items-center justify-center mb-12 backdrop-blur-xl shadow-2xl group-hover:scale-110 transition-all duration-500">
                <Code className="w-16 h-16 lg:w-20 lg:h-20 text-emerald-400" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-100 mb-10 font-mono tracking-tight uppercase">
                System Flow
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {Object.values(systemLayers).map((phase, i) => (
                  <div key={i} className="px-6 py-4 bg-slate-800/70 hover:bg-emerald-500/10 hover:border-emerald-400/50 border border-slate-700/50 hover:shadow-lg rounded-2xl text-lg font-mono font-semibold text-slate-300 hover:text-emerald-300 transition-all duration-400 group-hover:scale-105">
                    {phase}
                  </div>
                ))}
              </div>
              <p className="text-xl text-slate-500 font-mono max-w-2xl mx-auto tracking-wider uppercase">
                {project.year} | {meta.scale} | {Object.values(systemLayers).join(' → ')}
              </p>
            </div>
          </div>
        </section>

        {/* 6️⃣ BEFORE vs AFTER - Generic for all projects */}
        <section className="mb-32 lg:mb-40">
          <h2 className="text-5xl lg:text-6xl font-black mb-20 text-slate-100 font-mono tracking-tight uppercase border-b-4 border-slate-800/40 pb-16 max-w-4xl mx-auto text-center">
            Results delivered
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-gradient-to-br from-amber-950/70 via-amber-900/60 to-slate-950/90 border-4 border-amber-800/70 rounded-4xl p-12 lg:p-16 backdrop-blur-2xl shadow-2xl hover:shadow-amber-500/40 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-black text-amber-300 mb-10 font-mono flex items-center gap-4 tracking-tight">
                    <AlertCircle className="w-12 h-12" />
                    Before: Manual processes
                  </h3>
                  <div className="space-y-6 text-xl text-slate-300 leading-relaxed font-mono tracking-tight">
                    <div>• {project.constraint}</div>
                    <div>• Manual workflows → scaling limits</div>
                    <div>• No structured observability</div>
                    <div>• Unpredictable operations</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-950/70 via-emerald-900/60 to-slate-950/90 border-4 border-emerald-800/70 rounded-4xl p-12 lg:p-16 backdrop-blur-2xl shadow-2xl hover:shadow-emerald-500/40 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-black text-emerald-300 mb-10 font-mono flex items-center gap-4 tracking-tight">
                    <Zap className="w-12 h-12" />
                    After: Production systems
                  </h3>
                  <div className="space-y-6 text-xl text-slate-300 leading-relaxed font-mono tracking-tight">
                    <div>• {project.impact}</div>
                    <div>• Automated reliable workflows</div>
                    <div>• Real-time system visibility</div>
                    <div>• Predictable scaled operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8️⃣ DECISIONS + 9️⃣ LESSONS */}
        <section className="mb-28 lg:mb-36">
          <h2 className="text-4xl lg:text-5xl font-black mb-16 text-slate-100 font-mono tracking-tight uppercase border-b border-slate-800/40 pb-12 max-w-4xl mx-auto text-center">
            Engineering judgment
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-slate-900/60 border-2 border-slate-800/70 rounded-4xl p-12 lg:p-16 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/60 transition-all duration-500">
                <h3 className="text-2xl font-black text-slate-300 mb-8 font-mono flex items-center gap-4 tracking-tight">
                  <Brain className="w-10 h-10" />
                  Key decisions
                </h3>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-mono">
                  <div>• <span className="font-bold text-emerald-400">{meta.decisions}</span></div>
                  <div>• Production-first architecture</div>
                  <div>• Scale-tested technology choices</div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-950/70 to-slate-950/90 border-2 border-emerald-800/70 rounded-4xl p-12 lg:p-16 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500">
                <h3 className="text-2xl font-black text-emerald-300 mb-8 font-mono flex items-center gap-4 tracking-tight">
                  <Lightbulb className="w-10 h-10" />
                  Lessons learned
                </h3>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-mono">
                  <div>• <span className="font-bold">{meta.lessons}</span></div>
                  <div>• Ship simple, iterate with telemetry</div>
                  <div>• Constraints drive better solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1️⃣0️⃣ PRIMARY IMPACT */}
        <section className="text-center mb-24 lg:mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black mb-16 text-slate-100 font-mono uppercase tracking-tight">
              Delivered outcome
            </h2>
            <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-950/80 border-4 border-emerald-400/40 rounded-4xl p-20 lg:p-24 backdrop-blur-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all duration-500">
              <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent mb-12 leading-none tracking-tight">
                {project.impact}
              </div>
              <div className="text-2xl text-slate-300 max-w-3xl mx-auto font-mono tracking-wider leading-relaxed">
                {meta.domain} systems serving {meta.scale} with production-grade reliability.
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL CTAs */}
        <div className="flex flex-col lg:flex-row gap-8 pt-24 pb-32 border-t-4 border-slate-800/60">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center justify-center gap-4 px-12 py-10 bg-gradient-to-r from-emerald-900/95 to-teal-900/95 hover:from-emerald-800/100 hover:to-teal-800/100 border-4 border-emerald-500/70 hover:border-emerald-400/90 rounded-4xl font-mono font-black text-2xl text-white shadow-2xl hover:shadow-emerald-500/50 backdrop-blur-xl transition-all duration-700 hover:scale-[1.02]"
            >
              <Github className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
              View Production Code
            </a>
          )}
          <a
            href="/projects"
            className="group flex-1 flex items-center justify-center gap-4 px-12 py-10 bg-slate-900/80 hover:bg-slate-800/95 border-4 border-slate-800/70 hover:border-slate-600/90 rounded-4xl font-mono font-black text-2xl text-slate-200 hover:text-white transition-all duration-500 backdrop-blur-xl"
          >
            ← All Production Systems
          </a>
        </div>
      </div>
    </div>
  );
}
