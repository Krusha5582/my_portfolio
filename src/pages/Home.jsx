import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import SecureAnalyzeBuild from "../components/SecureAnalyzeBuild";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      {/* GLOBAL SYSTEM PLANE */}
      <div className="min-h-screen text-white relative overflow-x-hidden">
        
        {/* CONTINUOUS ENVIRONMENT LAYER */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Primary gradient plane */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-925" />
          
          {/* Engineering grid overlay */}
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(135deg,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
          
          {/* Radial focus points */}
          <div className="absolute inset-0 opacity-[0.1]">
            <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-40 right-32 w-80 h-80 bg-slate-900/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
        </div>

        {/* SCROLLING CONTENT PLANE */}
        <div className="relative z-10">
          
          {/* HERO - SYSTEM ENTRYPOINT */}
          <section id="hero" className="pt-24 lg:pt-32 min-h-screen flex items-center justify-center">
            <Hero />
          </section>

          {/* SYSTEMS THINKING INTERFACE */}
          <section id="about" className="pb-32 lg:pb-40">
            <About />
          </section>

          {/* SECURE • ANALYZE • BUILD - CONCEPTUAL CORE
          <section id="sab" className="py-28 lg:py-36 border-b border-slate-800/40">
            <SecureAnalyzeBuild />
          </section> */}

          {/* PRODUCTION SYSTEMS - NARRATIVE PEAK */}
          <section 
            id="projects" 
            className="py-32 lg:py-44 border-y border-slate-800/30 backdrop-blur-xl"
          >
            <Projects />
          </section>

          {/* OPERATIONAL LAYERS */}
          <section id="experience" className="py-28 lg:py-36">
            <Experience />
          </section>

          {/* CAPABILITY MATRIX */}
          <section id="skills" className="py-24 lg:py-32 border-y border-slate-800/40">
            <Skills />
          </section>

          {/* FOUNDATION SPECIFICATION */}
          <section id="education" className="py-24 lg:py-32">
            <Education />
          </section>

          {/* VALIDATION SURFACE */}
          <section id="certifications" className="py-20 lg:py-28 border-y border-slate-800/30">
            <Certifications />
          </section>

          {/* SYSTEM INTERFACE */}
          <section id="contact" className="py-32 lg:py-44 min-h-screen flex items-center justify-center border-t border-slate-800/40">
            <Contact />
          </section>

        </div>

      </div>

      {/* GLOBAL ENGINEERING CONTROLS */}
      <style jsx global>{`
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(148,163,184,0.4) transparent;
        }
        
        *::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        *::-webkit-scrollbar-track {
          background: transparent;
        }
        
        *::-webkit-scrollbar-thumb {
          background: rgba(148,163,184,0.4);
          border-radius: 3px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: rgba(148,163,184,0.6);
        }
        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }
      `}</style>
    </>
  );
}
