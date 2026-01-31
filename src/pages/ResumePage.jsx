export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-925 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        
        {/* HERO */}
        <header className="mb-24 text-left">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-none text-slate-50">
            Engineering Resumes
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
            One engineering baseline, specialized for security and ML roles.
          </p>
        </header>

        {/* PRIMARY RESUME - FIXED SPACING */}
        <section className="mb-28">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              PRIMARY PROFILE
            </div>
            <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-10 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-100 leading-tight">
                Software & Systems Engineer
              </h2>
              <p className="text-xl text-slate-300 font-light mb-10 leading-relaxed">
                Production systems, applied ML, and security-aware engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/Krusha Parikh - Resume.pdf" 
                  download="Krusha Parikh - Resume.pdf"
                  className="group flex-1 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 px-8 py-4 rounded-xl font-mono text-sm uppercase tracking-wider font-semibold text-slate-200 hover:text-white hover:border-slate-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Download Core Resume
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L12 21l5.5-5.5m-5.5 5.5V6" />
                  </svg>
                </a>
                <a 
                  href="/Krusha Parikh - Resume.pdf#toolbar=0&navpanes=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-slate-800 rounded-xl font-mono text-sm uppercase tracking-wider text-slate-400 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-900/50 transition-all"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALIZED SECTION - FIXED BORDERS + RESPONSIVE */}
        <section>
          <div className="text-center mb-20">
            <h3 className="text-3xl lg:text-4xl font-black mb-4 text-slate-300 uppercase tracking-wider">
              Specialized Role Profiles
            </h3>
            <p className="text-lg text-slate-500 font-light max-w-xl mx-auto">
              Focused resumes tailored for specific hiring pipelines.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* CYBERSECURITY - CLEANED UP */}
            <div className="group border-l-4 border-amber-600 bg-slate-900/50 border border-slate-800 rounded-xl p-8 lg:p-10 hover:bg-slate-900/80 transition-all duration-300 hover:border-slate-700">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-6">
                CYBERSECURITY
              </div>
              <h4 className="text-2xl lg:text-3xl font-black mb-4 text-slate-100 leading-tight">
                Cybersecurity Engineer
              </h4>
              <p className="text-lg text-slate-400 font-light mb-8 leading-relaxed">
                Threat modeling • Secure architectures • Risk mitigation
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="/Krusha Parikh - Cyber.pdf" 
                  download="Krusha Parikh - Cyber.pdf"
                  className="group/btn flex-1 bg-amber-950/90 hover:bg-amber-900 border-2 border-amber-800 px-6 py-3 rounded-lg font-mono uppercase tracking-wider text-amber-200 hover:text-amber-100 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  Download
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L12 21l5.5-5.5m-5.5 5.5V6" />
                  </svg>
                </a>
                <a 
                  href="/Krusha Parikh - Cyber.pdf#toolbar=0&navpanes=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-slate-800 rounded-lg font-mono uppercase tracking-wider text-slate-400 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-900/50 transition-all text-sm"
                >
                  Preview
                </a>
              </div>
            </div>

            {/* DATA SCIENCE - CLEANED UP */}
            <div className="group border-l-4 border-emerald-600 bg-slate-900/50 border border-slate-800 rounded-xl p-8 lg:p-10 hover:bg-slate-900/80 transition-all duration-300 hover:border-slate-700">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-6">
                DATA SCIENCE
              </div>
              <h4 className="text-2xl lg:text-3xl font-black mb-4 text-slate-100 leading-tight">
                Data Science & Machine Learning Engineer
              </h4>
              <p className="text-lg text-slate-400 font-light mb-8 leading-relaxed">
                Predictive modeling • Applied ML • System optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="/Krusha Parikh - DSML.pdf" 
                  download="Krusha Parikh - DSML.pdf"
                  className="group/btn flex-1 bg-emerald-950/90 hover:bg-emerald-900 border-2 border-emerald-800 px-6 py-3 rounded-lg font-mono uppercase tracking-wider text-emerald-200 hover:text-emerald-100 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  Download
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L12 21l5.5-5.5m-5.5 5.5V6" />
                  </svg>
                </a>
                <a 
                  href="/Krusha Parikh - DSML.pdf#toolbar=0&navpanes=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-slate-800 rounded-lg font-mono uppercase tracking-wider text-slate-400 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-900/50 transition-all text-sm"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSE */}
        <footer className="mt-32 pt-16 border-t border-slate-800 text-center">
          <p className="text-lg text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
            Each resume mirrors how engineering teams evaluate candidates.
          </p>
        </footer>
      </div>
    </div>
  );
}
