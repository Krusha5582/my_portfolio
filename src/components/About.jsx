export default function About() {
  return (
    <section
      className="
        w-full py-24 md:py-32
        bg-theme text-theme
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2
          className="
            text-3xl md:text-4xl font-bold tracking-tight 
            bg-gradient-to-r from-lavender to-neonLilac
            text-transparent bg-clip-text
            mb-10
          "
        >
          About Me
        </h2>

        {/* Content Card */}
        <div
          className="
            bg-card border border-card
            rounded-2xl p-8 md:p-10
            shadow-xl backdrop-blur-xl
            transition-colors duration-300
          "
        >
          <p className="text-lg text-theme-soft leading-relaxed">
            I’m a final-year Computer Engineering student who enjoys solving real problems with clarity and purpose. My work revolves around data, cybersecurity, and machine learning, and I’m drawn to projects where logic and impact meet. I like building systems that make sense, stay secure, and add value to people who use them.
            </p>

          <p className="mt-4 text-theme-soft leading-relaxed">
            I’ve had the chance to lead as the Technical Head of iSAC and contribute to projects like an AI-based governance system and an intelligent chatbot. Experiences such as volunteering at the Vibrant Gujarat Global Summit have shaped how I approach teamwork, responsibility, and communication. They’ve also taught me to stay curious and disciplined when exploring new ideas.
          </p>

          <p className="mt-4 text-theme-soft leading-relaxed">
            People describe me as analytical, expressive, punctual, ambitious, and detail-oriented. I’m now working toward building scalable products, growing my tech-and-lifestyle content, and diving deeper into data-driven problem-solving and cyber investigation. I want my work to feel meaningful, thoughtfully designed, and rooted in real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}
