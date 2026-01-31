import { blogPosts } from "../data/blog";
import { ArrowRight, AlertCircle, Zap, Brain, Code, Hammer } from "lucide-react";

export default function BlogPage() {
  // Featured post (most important, calm dominance)
  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-925 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        
        {/* 1️⃣ PAGE HERO - CALM AUTHORITY */}
        <div className="text-center mb-20 lg:mb-24 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-slate-50">
            Production Notes
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Postmortems and engineering decisions from real systems that shipped to production.
          </p>
        </div>

        {/* 2️⃣ FEATURED POSTMORTEM - SUBTLE DOMINANCE */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-2xl lg:text-3xl font-black mb-12 text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800/50 pb-6 max-w-2xl">
            Featured Postmortem
          </h2>
          
          <a
            href={`/blog/${featuredPost.slug}`}
            className="group relative block rounded-3xl h-[380px] lg:h-[440px] border-2 border-emerald-500/60 bg-gradient-to-br from-slate-950/95 to-slate-900 hover:border-emerald-400/80 hover:shadow-emerald-500/20 shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            {/* Thumbnail - CONTEXT, not drama */}
            <div className="h-48 lg:h-56 bg-gradient-to-br from-emerald-950/90 to-slate-950/90 border-b border-emerald-500/30 flex items-center justify-center text-center p-8">
              <div className="max-w-lg mx-auto">
                <div className="text-2xl lg:text-3xl font-black uppercase tracking-widest text-emerald-300 mb-2">
                  {featuredPost.tension || "POSTMORTEM"}
                </div>
                <div className="text-sm text-emerald-200/80 font-mono tracking-wider uppercase">
                  Production incident analysis
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 lg:p-12">
              <div className="flex items-center gap-2 mb-6 opacity-90">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-emerald-300">
                  POSTMORTEM · PRODUCTION INCIDENT
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight text-slate-100 group-hover:text-white line-clamp-2">
                {featuredPost.title}
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-8 line-clamp-3 font-mono max-w-xl">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-emerald-300 hover:text-emerald-100 font-semibold text-sm transition-all">
                Read postmortem →
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </section>

        {/* 3️⃣ SECTION DIVIDER + OTHER NOTES */}
        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-black mb-12 text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800/50 pb-6 max-w-2xl">
            Other Engineering Notes
          </h2>
          <p className="text-lg text-slate-500 font-light mb-16 max-w-2xl leading-relaxed">
            Architecture decisions, system analyses, and applied experiments from production systems.
          </p>
        </section>

        {/* 4️⃣ CONSISTENT GRID - NO SHOUTING */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 mb-24">
          {otherPosts.map((post, index) => {
            // Engineering categories (NO "ANALYSIS" or "REFLECTION")
            const postCategory = post.category || "systems";
            const categories = {
              postmortem: { icon: Zap, color: "emerald", label: "POSTMORTEM", weight: "high" },
              incident: { icon: AlertCircle, color: "red", label: "INCIDENT", weight: "high" },
              architecture: { icon: Brain, color: "blue", label: "ARCHITECTURE NOTES", weight: "medium" },
              systems: { icon: Hammer, color: "amber", label: "SYSTEM DESIGN", weight: "medium" },
              design: { icon: Code, color: "slate", label: "DESIGN DECISIONS", weight: "low" }
            };
            
            const category = categories[postCategory] || categories.systems;
            const Icon = category.icon;
            const isHighImpact = category.weight === "high";

            return (
              <a
                href={`/blog/${post.slug}`}
                key={post.slug || index}
                className={`
                  group relative rounded-2xl h-80 overflow-hidden transition-all duration-500
                  ${isHighImpact 
                    ? "border-2 border-emerald-500/50 bg-slate-950 hover:border-emerald-400/80 shadow-xl hover:shadow-emerald-500/20" 
                    : "border border-slate-800/50 bg-slate-950/80 hover:border-slate-600 hover:shadow-lg"
                  }
                `}
              >
                {/* Thumbnail - SPECIFIC TENSION */}
                <div className={`
                  h-40 flex items-center justify-center text-center p-8
                  ${isHighImpact 
                    ? "bg-gradient-to-br from-emerald-950/95 to-red-950/90 text-emerald-200 border-b-2 border-emerald-500/50" 
                    : "bg-gradient-to-br from-slate-900/95 to-slate-950/90 text-slate-300 border-b border-slate-800/50"
                  }
                `}>
                  <span className="text-xl lg:text-2xl font-black uppercase tracking-widest leading-tight">
                    {post.tension || post.keyword || category.label}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Icon className={`w-4 h-4 ${isHighImpact ? "text-emerald-400" : "text-slate-400"}`} />
                    <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                      isHighImpact ? "text-emerald-300" : "text-slate-400"
                    }`}>
                      {category.label}
                    </span>
                  </div>

                  <h3 className="text-lg lg:text-xl font-black mb-4 leading-tight text-slate-100 group-hover:text-white line-clamp-2 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 font-mono">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 group-hover:text-emerald-400 transition-all font-semibold text-sm">
                    {isHighImpact ? "Read postmortem →" : "Read analysis →"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* 5️⃣ SINGLE CONFIDENT CLOSE */}
        <div className="border-t-2 border-slate-800 pt-24 mt-32 text-center max-w-xl mx-auto">
          <p className="text-lg text-slate-400 font-light leading-relaxed tracking-wide">
            These notes focus on failure modes, tradeoffs, and decisions that shaped production systems.
          </p>
        </div>

      </div>
    </div>
  );
}
