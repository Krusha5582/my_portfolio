"use client";
import { useState, useRef, useEffect } from "react";

const EDUCATION = [
  {
    degree: "B.E. Computer Engineering",
    school: "Indus University", 
    period: "2023 – 2026",
    cgpa: "9.0+ (ongoing)",
    focus: "Applied software engineering, data systems, secure system design with reliability constraints.",
    icon: "code"
  },
  {
    degree: "Diploma Computer Engineering",
    school: "Gujarat Technological University",
    period: "2020 – 2023", 
    cgpa: "9.37",
    focus: "Programming fundamentals, algorithms, system design, software reliability foundations.",
    icon: "circuit"
  }
];

const EducationModule = ({ item, index, isVisible }) => {
  const animationDuration = `${600 + index * 200}ms`;
  
  return (
    <div 
      className="
        relative p-8 lg:p-10 rounded-2xl border border-slate-800/70 
        bg-slate-900/90 backdrop-blur-xl shadow-xl 
        hover:border-slate-600/80 hover:shadow-slate-400/10 transition-all duration-500
        overflow-hidden
      "
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        animationDuration,
        animationFillMode: 'both'
      }}
    >
      {/* Subtle vertical divider */}
      <div className="absolute left-0 w-[2px] h-full bg-gradient-to-b from-slate-700/60 to-slate-900/40" />
      
      <div className="relative z-10 pl-6 space-y-6">
        {/* Degree header */}
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 mt-3 bg-slate-500/60 rounded-full flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <h3 className="font-bold tracking-tight text-xl lg:text-2xl text-slate-100 mb-1 pr-2">
              {item.degree}
            </h3>
            <p className="text-slate-400 font-mono text-sm tracking-wider uppercase">
              {item.school}
            </p>
            <p className="text-slate-500 font-mono text-sm tracking-wider uppercase">
              {item.period} • CGPA: <span className="text-slate-300 font-semibold">{item.cgpa}</span>
            </p>
          </div>
        </div>

        {/* Focus areas */}
        <div className="space-y-3">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-500 mb-3">
            Focus
          </p>
          <p className="text-sm text-slate-300 leading-relaxed tracking-tight">
            {item.focus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Education() {
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
        {/* FOUNDATION HEADER */}
        <div className="text-center mb-24 lg:mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-300 text-transparent bg-clip-text tracking-tight mb-8">
            Engineering Foundation
          </h2>
          
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-slate-400/60 to-slate-400/60 mb-10 backdrop-blur-sm" />
          
          <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light tracking-wide leading-relaxed max-w-3xl mx-auto mb-6">
            Academic grounding for applied systems engineering
          </div>
        </div>

        {/* EDUCATION MODULES */}
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((item, index) => (
              <EducationModule key={index} item={item} index={index} isVisible={isVisible} />
            ))}
          </div>
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
        
        .fade-in {
          animation: fade-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
