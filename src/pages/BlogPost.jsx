// BlogPost.jsx - FULLY SYNCHRONIZED WITH YOUR DATA

import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blog";
import { Zap, AlertCircle, Server, Clock, User, TrendingDown } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-925 text-white flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center border-2 border-slate-700 mx-auto mb-8">
            <Server className="w-12 h-12 text-slate-500" />
          </div>
          <h1 className="text-3xl font-black mb-4 text-slate-300">Engineering Note Unavailable</h1>
          <p className="text-slate-500 text-lg">Field report not found in production archives.</p>
        </div>
      </div>
    );
  }

  // ✅ USE ACTUAL POST DATA - NO HEURISTICS NEEDED
  const sections = parseContentSections(post.content);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-925 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        
        {/* METADATA ROW - FROM YOUR DATA */}
        <div className="bg-slate-900/70 backdrop-blur-2xl border border-slate-800/70 rounded-3xl p-8 lg:p-10 mb-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-mono uppercase tracking-wider text-slate-400">
            <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>POSTMORTEM</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span>SEV-{post.severity}</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl">
              <Server className="w-4 h-4 text-emerald-400" />
              <span>{post.systemType}</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl">
              <TrendingDown className="w-4 h-4 text-amber-400" />
              <span>{post.impact}</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl">
              <User className="w-4 h-4 text-blue-400" />
              <span>{post.role}</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl">
              <Clock className="w-4 h-4 text-slate-300" />
              <span>{post.duration}</span>
            </div>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-slate-50 max-w-3xl tracking-tight">
          {post.title}
        </h1>

        {/* FAILURE CONTEXT */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-10 mb-20">
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
            {post.failureHook}
          </p>
        </div>

        {/* SECTIONS - PARSED FROM YOUR ## HEADERS */}
        <div className="space-y-16">
          {sections.map((section, idx) => (
            <FieldReportSection 
              key={idx} 
              title={section.title} 
              content={section.content} 
              type={section.type}
            />
          ))}
        </div>

        {/* NAV */}
        <div className="border-t-2 border-slate-800/50 pt-24 mt-32 text-center">
          <a href="/blog" className="inline-flex items-center gap-3 bg-slate-900/70 backdrop-blur-xl hover:bg-slate-800/90 px-8 py-4 rounded-3xl border-2 border-slate-700/50 text-lg font-mono uppercase tracking-wider text-slate-300 hover:text-slate-100 hover:border-slate-600/70 transition-all duration-300 shadow-xl hover:shadow-slate-900/50">
            ← Return to Field Notes
            <Zap className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );

  // ✅ PARSES YOUR ACTUAL ## HEADERS
  function parseContentSections(content) {
    const sections = [];
    const lines = content.split('\n').filter(l => l.trim());
    
    let currentSection = { title: 'Context', content: [], type: 'context' };

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      
      // DETECT ## HEADERS FROM YOUR CONTENT
      if (trimmed.startsWith('## ')) {
        if (currentSection.content.length > 0) {
          sections.push({
            ...currentSection, 
            content: currentSection.content.filter(c => c.trim())
          });
        }
        currentSection = {
          title: trimmed.replace('## ', ''),
          content: [],
          type: getSectionType(trimmed)
        };
      } else {
        currentSection.content.push(line);
      }
    });

    if (currentSection.content.length > 0) {
      sections.push({
        ...currentSection, 
        content: currentSection.content.filter(c => c.trim())
      });
    }

    return sections.length > 0 ? sections : [{
      title: 'Engineering Analysis',
      content: [content],
      type: 'analysis'
    }];
  }

  function getSectionType(title) {
    const lower = title.toLowerCase();
    if (lower.includes('incident') || lower.includes('context')) return 'context';
    if (lower.includes('analysis') || lower.includes('engineering')) return 'analysis';
    if (lower.includes('system') || lower.includes('architecture')) return 'systems';
    if (lower.includes('model') || lower.includes('ml') || lower.includes('ai')) return 'ml';
    if (lower.includes('iot') || lower.includes('technical')) return 'iot';
    return 'analysis';
  }
}

// ✅ FIELD REPORT SECTION
function FieldReportSection({ title, content, type }) {
  const sectionStyles = {
    context: "border-l-emerald-500/60 bg-emerald-950/20",
    analysis: "border-l-orange-500/60 bg-orange-950/20",
    systems: "border-l-amber-500/50 bg-amber-950/20",
    ml: "border-l-purple-500/50 bg-purple-950/20",
    iot: "border-l-teal-500/50 bg-teal-950/20"
  };

  return (
    <section className="group">
      <div className={`border-l-8 pl-8 pb-8 mb-10 ${sectionStyles[type] || "border-l-slate-700/50 bg-slate-950/20"}`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-slate-400 to-transparent" />
          <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-widest text-slate-200">
            {title}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-slate-400/50 to-transparent" />
        </div>
      </div>

      <div className="space-y-6">
        {content.map((paragraph, idx) => (
          <div key={idx} className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 lg:p-8 hover:border-slate-700/70 transition-all duration-300">
            <div className="prose prose-lg max-w-none text-slate-300 leading-relaxed font-mono text-sm">
              {type === 'ml' || type === 'iot' || type === 'systems' ? (
                paragraph.split(' ').map((word, wdx) => {
                  const techTerms = /AI|ML|IoT|model|system|platform|data|sensor|latency|p95/i;
                  return techTerms.test(word) ? (
                    <span key={wdx} className="font-bold text-amber-400 bg-amber-950/60 px-1 rounded-sm">
                      {word}
                    </span>
                  ) : (
                    <span key={wdx}>{word} </span>
                  );
                })
              ) : (
                paragraph
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
