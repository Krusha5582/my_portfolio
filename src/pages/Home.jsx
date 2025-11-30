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
    <div className="page-transition bg-theme text-theme">

      {/* HERO */}
      <section id="hero" className="pt-24 bg-theme text-theme">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-theme text-theme">
        <About />
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="py-24 bg-theme-soft backdrop-blur-xl border-y border-card"
      >
        <Skills />
      </section>

      {/* SECURE • ANALYZE • BUILD */}
      <section id="sab" className="py-24 bg-theme text-theme">
        <SecureAnalyzeBuild />
      </section>

      {/* FEATURED PROJECTS */}
      <section
        id="projects"
        className="py-24 bg-theme-soft backdrop-blur-xl border-y border-card"
      >
        <Projects />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-theme text-theme">
        <Experience />
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="py-24 bg-theme-soft backdrop-blur-xl border-y border-card"
      >
        <Education />
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-24 bg-theme text-theme">
        <Certifications />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-theme-soft backdrop-blur-xl border-t border-card"
      >
        <Contact />
      </section>

    </div>
  );
}
