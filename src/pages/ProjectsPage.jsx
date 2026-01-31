import { projects } from "../data/projects";
import { Github, ArrowRight, BarChart3, Zap } from "lucide-react";

export default function ProjectsPage() {
  const systemSignals = {
    totalSystems: projects.length,
    featuredCount: projects.filter(p => p.featured).length,
    productionCount: projects.filter(p => p.type === "production").length,
  };

  const heroProject = projects.find(p => p.id === 1);
  const sortedGridProjects = projects
    .filter(p => p.id !== 1)
    .sort((a, b) => (b.quantifiableImpact || 0) - (a.quantifiableImpact || 0))
    .slice(0, 6);

  const getRoleChip = (role, domain) => {
    if (role.includes("Lead")) return `Lead Engineer — ${domain}`;
    if (role.includes("Sole")) return `Sole Engineer — ${domain}`;
    if (role.includes("Full-Stack")) return `Full-Stack — ${domain}`;
    if (role.includes("NLP")) return `Applied AI — ${domain}`;
    return `Engineer — ${domain}`;
  };

  const getDomainImpact = (project) => {
    const baseImpact = project.impact || "Impact delivered";
    switch(project.domain) {
      case 'Civic Operations':
        return `${baseImpact} (gov compliance · ${project.scale || '50k'} records/day)`;
      case 'EdTech':
        return `${baseImpact} (student retention · ${project.users || '10k'} users)`;
      case 'Business Automation':
        return `${baseImpact} (revenue impact · ${project.revenue || '$250k/yr'} saved)`;
      case 'Infrastructure':
        return `${baseImpact} (p95 latency · ${project.events || '1M'} events/day)`;
      default:
        return `${baseImpact} (${project.type} scale)`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-925 text-white page-transition">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        
        {/* HERO */}
        <div className="text-center mb-20 lg:mb-24 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-slate-50">
            Production Systems
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            These systems repeat a pattern: broken workflows → unclear ownership → production rewrites under constraint.
          </p>
        </div>

        {/* SYSTEM SIGNALS */}
        <section className="mb-24 lg:mb-32 text-center border-t border-slate-800/30 pt-16">
          <div className="inline-flex items-center gap-12 px-16 py-8 bg-slate-950/50 border border-slate-800 rounded-3xl font-mono text-sm tracking-widest uppercase max-w-4xl mx-auto">
            <span className="text-emerald-400 font-semibold">{systemSignals.totalSystems} systems shipped</span>
            <span className="h-5 w-px bg-slate-700" />
            <span className="text-slate-400">{systemSignals.featuredCount} high-stakes</span>
            <span className="h-5 w-px bg-slate-700" />
            <span className="text-slate-400">{systemSignals.productionCount} production</span>
          </div>
        </section>

        {/* HERO PROJECT - CONSISTENT ANATOMY */}
        <section className="mb-28 lg:mb-36">
          <article className="group relative rounded-3xl h-[640px] lg:h-[760px] bg-slate-950 border-2 border-slate-800 hover:border-emerald-500/70 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500/80 to-emerald-400/80" />
            <a href={`/projects/1`} className="block h-full p-10 lg:p-12">
              
              {/* CONTENT CONTAINER - FIXED SPACING */}
              <div className="relative z-10 h-full flex flex-col justify-between pt-12 lg:pt-16">
                
                {/* HEADER ROW - FIXED HEIGHT */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-emerald-950/90 border border-emerald-900/70 text-emerald-100 text-sm font-bold rounded-xl">
                      Lead Engineer — Civic Operations
                    </span>
                    {heroProject?.live && (
                      <span className="px-3 py-1.5 bg-emerald-950/90 text-emerald-200 text-xs font-mono uppercase tracking-widest border border-emerald-900 rounded-lg">
                        Live
                      </span>
                    )}
                  </div>

                  <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-slate-50 group-hover:text-white tracking-tight">
                    AMC Smart Civic Management
                  </h2>
                </div>

                {/* DECISION STACK - FIXED SPACING */}
                <div className="mb-12 space-y-3 text-sm font-mono text-slate-300 leading-tight">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    <span><strong className="text-slate-200">Failure:</strong> Polling workflows collapsed under peak civic load</span>
                  </div>
                  <div className="flex items-center gap-3 pl-6">
                    <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
                    <span><strong className="text-slate-200">Decision:</strong> Event-driven routing with async queues</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    <span><strong className="text-emerald-300">Result:</strong> p95 &lt;200ms, SLA 4h→1.6h, 50k+ records/day</span>
                  </div>
                </div>

                {/* METRICS GRID - FIXED HEIGHT */}
                <div className="grid grid-cols-3 gap-6 mb-12 font-mono text-xs uppercase tracking-wider text-slate-400">
                  <div className="space-y-1">
                    <span className="text-slate-500">Reliability</span>
                    <span className="font-black text-2xl text-emerald-400">99.9%</span>
                    <span className="text-slate-500 text-[10px]">6mo sustained</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-500">Latency</span>
                    <span className="font-black text-2xl text-emerald-400">&lt;200ms</span>
                    <span className="text-slate-500 text-[10px]">p95 peak</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-500">Throughput</span>
                    <span className="font-black text-xl text-slate-200">50k+/day</span>
                    <span className="text-slate-500 text-[10px]">records</span>
                  </div>
                </div>

                {/* FOOTER - FIXED HEIGHT */}
                <div className="pt-8 border-t border-slate-800/40">
                  <a href={`/projects/1`} className="inline-flex items-center gap-2 text-xl font-bold text-slate-300 hover:text-white group/cta transition-all duration-300">
                    Read case study →
                    <span className="ml-2 opacity-0 group-hover/cta:opacity-100 text-xs font-mono text-slate-500 transition-opacity duration-300">
                      What broke • Tradeoffs • Production postmortem
                    </span>
                  </a>
                </div>
              </div>
            </a>
          </article>
        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/50 to-transparent my-32 lg:my-40" />

        {/* SUPPORTING SYSTEMS - SAME ANATOMY */}
        <section>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-slate-100">
              Supporting Systems
            </h2>
            <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              These systems vary in domain, but repeat the same pattern: broken workflows, unclear ownership, production rewrites under constraint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
            {sortedGridProjects.map((project) => {
              const domainColors = {
                'Civic Operations': 'from-emerald-500/60 to-teal-500/60',
                'EdTech': 'from-amber-500/60 to-orange-500/60', 
                'Business Automation': 'from-purple-500/60 to-violet-500/60',
                'Infrastructure': 'from-blue-500/60 to-cyan-500/60',
              };
              
              return (
                <article 
                  key={project.id}
                  className="group relative h-96 rounded-2xl bg-slate-950 border-2 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`absolute left-0 top-0 h-full w-1 ${domainColors[project.domain] || 'bg-slate-600'}`} />
                  
                  <a href={`/projects/${project.id}`} className="block h-full p-8 lg:p-10">
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      
                      {/* HEADER ROW - SAME SPACING */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1.5 text-xs font-bold border border-slate-800/50 bg-slate-950/70 text-slate-300 rounded-lg">
                            {getRoleChip(project.role, project.domain)}
                          </span>
                          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-black mb-6 leading-tight text-slate-200 group-hover:text-slate-100">
                          {project.title}
                        </h3>
                      </div>

                      {/* METRICS - SAME SPACING */}
                      <div className="grid grid-cols-2 gap-4 mb-8 font-mono text-xs uppercase tracking-wider text-slate-400">
                        <div>
                          <span className="text-slate-500 block mb-1">{project.role}</span>
                          <span className="font-black text-emerald-400 text-sm">{getDomainImpact(project)}</span>
                        </div>
                      </div>

                      {/* FOOTER - SAME SPACING */}
                      <div className="pt-6 border-t border-slate-800/30 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                          {project.type}
                        </span>
                        <a href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-200 transition-colors">
                          Case study →
                        </a>
                      </div>
                    </div>
                  </a>

                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-6 right-6 p-3 border border-slate-800/50 hover:border-slate-600 rounded-xl bg-slate-950/90 hover:bg-slate-900 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4 text-slate-400 hover:text-slate-200" />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* REFLECTION */}
        <div className="border-t-2 border-slate-800 pt-24 mt-40 text-center max-w-2xl mx-auto">
          <p className="text-xl text-slate-400 font-light italic leading-relaxed tracking-wide">
            "Most systems fail quietly before they fail loudly. I learned to design for the quiet failures first."
          </p>
        </div>
      </div>
    </div>
  );
}
