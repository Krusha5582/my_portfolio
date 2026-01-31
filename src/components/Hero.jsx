"use client";
import { useEffect, useState, useCallback, useRef } from "react";

export default function Hero() {
  const [systemReady, setSystemReady] = useState(false);
  const mouseRef = useRef({ x: 50, y: 50 });
  const containerRef = useRef(null);

  // Lightweight CSS var mouse tracking - NO STATE UPDATES
  const updateMousePos = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 100;
    mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 100;
    
    if (containerRef.current) {
      containerRef.current.style.setProperty('--mouse-x', `${mouseRef.current.x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${mouseRef.current.y}%`);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setSystemReady(true), 150);
    containerRef.current?.addEventListener("mousemove", updateMousePos);
    return () => {
      containerRef.current?.removeEventListener("mousemove", updateMousePos);
      clearTimeout(timeout);
    };
  }, [updateMousePos]);

  return (
    <section 
      ref={containerRef}
      className="hero-container relative w-full py-32 md:py-40 min-h-screen bg-gradient-to-br from-slate-950 via-theme to-slate-900 text-white overflow-hidden"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      }}
    >
      {/* Minimal system structure - subtle, not distracting */}
      <div className="absolute inset-0 z-0 opacity-3 pointer-events-none">
        {/* Single clean grid */}
        <div className="absolute inset-0 bg-grid" />
        {/* Single connection line - follows mouse subtly */}
        <div 
          className="absolute top-[20%] left-[20%] w-[60vw] h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent rotate-[-3deg] origin-left"
          style={{
            transform: `translateX(var(--mouse-x)) translateY(var(--mouse-y)) scaleX(0.8)`
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:gap-20 max-w-6xl mb-20 lg:mb-28">
          
          {/* Compact Identity - 30% space */}
          <div className="w-full lg:w-1/3 lg:pt-8 mb-12 lg:mb-0">
            <div className="relative">
              <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-4 border-slate-800/70 shadow-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/70 hover:border-slate-400/70 transition-all duration-500 hover:shadow-slate-400/20">
                <img
                  src="/photo.jpg"
                  alt="Krusha Parikh"
                  className="w-full h-full object-cover brightness-105 hover:brightness-110 transition-all duration-500"
                />
              </div>
              <h1 className="absolute -bottom-12 left-0 right-0 text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight text-center">
                Krusha Parikh
              </h1>
            </div>
            <p className={`mt-20 text-lg lg:text-xl text-slate-300/90 font-light max-w-sm leading-relaxed tracking-wide transition-all duration-1000 ${
              systemReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Most systems shine in demos. I build toward the ones that survive reality.
            </p>
          </div>

          {/* 70% Value Proposition - AquaAI leads */}
          <div className="flex-1 max-w-3xl">
            <div className={`bg-slate-900/50 border border-slate-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl transition-all duration-1000 hover:border-slate-600/80 hover:shadow-slate-500/15 ${
              systemReady 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-98'
            }`}>
              
              {/* ONE clear position */}
              <div className="mb-8">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-300 text-transparent bg-clip-text leading-tight mb-4 transition-all duration-1000 ${
                  systemReady ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-3'
                }`}>
                  Applied Data Systems
                </h2>
                <div className="h-px w-24 bg-gradient-to-r from-slate-400/50 to-transparent mb-6" />
              </div>
              
              {/* AQUA AI - The proof */}
              <div className={`mb-10 p-6 bg-slate-950/50 border border-slate-800 rounded-2xl transition-all duration-1000 delay-400 ${
                systemReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-1 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-emerald-300/90 tracking-tight">AquaAI</h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Sustainable data-center intelligence. Research → Production systems.
                </p>
              </div>
              
              {/* Precise capabilities */}
              <div className="space-y-3 mb-10 transition-all duration-1000 delay-600">
                <div className="flex items-center gap-3 text-slate-300/85 font-medium">
                  <span className="w-2 h-2 bg-slate-400 rounded-full" /> ML Reliability Engineering
                </div>
                <div className="flex items-center gap-3 text-slate-300/85 font-medium">
                  <span className="w-2 h-2 bg-slate-400 rounded-full" /> Production Security Systems  
                </div>
                <div className="flex items-center gap-3 text-slate-300/85 font-medium">
                  <span className="w-2 h-2 bg-slate-400 rounded-full" /> High-stakes Decision Modeling
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single urgent CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md lg:max-w-lg lg:ml-auto lg:justify-end mb-20">
          <a
            href="#projects"
            className="group flex-1 px-8 py-4 rounded-2xl font-mono text-lg font-semibold text-center border-2 border-slate-500/60 bg-slate-900/50 backdrop-blur-xl hover:border-emerald-400/70 hover:bg-emerald-500/5 hover:shadow-emerald-400/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400 font-medium tracking-wide"
          >
            <span>View Production Systems</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-400">→</span>
          </a>
          <a
            href="/resume"
            className="px-8 py-4 rounded-2xl font-mono text-lg font-semibold border-2 border-slate-600/70 bg-slate-900/30 backdrop-blur-xl hover:border-slate-400/80 hover:bg-slate-900/50 hover:shadow-slate-400/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400 tracking-wide"
          >
            Technical Resume
          </a>
        </div>

        {/* Single focus - now secondary */}
        <div className="max-w-md lg:max-w-lg ml-auto lg:-mr-8 opacity-80">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-2.5 h-2.5 border-2 border-slate-500/60 rounded-full transition-all duration-700 ${
              systemReady ? 'scale-100 opacity-100 delay-800' : 'scale-0 opacity-0'
            }`} />
            <span className="text-xs uppercase tracking-widest font-mono text-slate-400 font-semibold">FOCUS</span>
          </div>
          <div className="bg-slate-950/40 border border-slate-800/60 rounded-2xl p-5 backdrop-blur-xl font-mono text-sm text-slate-300/85 leading-tight tracking-wider">
            Reliability diagnostics • Security modeling • Decision systems
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-container {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, transparent 100%);
        }
        .bg-grid {
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-800 { animation-delay: 800ms; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        [class*="delay-"] {
          animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </section>
  );
}
