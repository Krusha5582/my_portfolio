export default function AboutPage() {
  return (
    <div className="page-transition bg-theme text-theme">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Heading */}
        <h1
          className="
            text-4xl font-bold mb-6
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
          data-aos="fade-up"
        >
          About Me
        </h1>

        {/* Soft divider */}
        <div
          className="h-[2px] w-24 bg-gradient-to-r from-lavender to-neonLilac rounded-full mb-10"
          data-aos="fade-up"
          data-aos-delay="80"
        />

        {/* About Card */}
        <div
          className="
            relative bg-card border border-card p-10 rounded-2xl
            shadow-xl backdrop-blur-xl leading-relaxed
          "
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {/* Soft gradient glow behind card */}
          <div
            className="
              absolute inset-0 rounded-2xl opacity-30
              bg-gradient-to-br from-lavender/20 via-neonLilac/20 to-transparent
              pointer-events-none
            "
          />

          <p className="relative z-10 text-theme-soft text-lg space-y-4">
            I’m <span className="text-theme font-semibold">Krusha Parikh</span>, 
            a final-year Computer Engineering student who has always been drawn to the idea 
            of building solutions that feel intentional. My journey started with a curiosity 
            for how systems work beneath the surface, which gradually evolved into an interest 
            in data, cybersecurity, machine learning, and the stories hidden inside information. 
            Over time, I discovered that I enjoy turning complexity into clarity and transforming 
            ideas into structured, secure, and aesthetically thoughtful digital experiences.
            <br /><br />

            During my undergraduate years, I had opportunities that shaped not just my skills 
            but the way I approach work. Serving as the Technical Head of iSAC taught me how 
            leadership, communication, and technical decision-making come together. Projects 
            like an AI-based governance system and an intelligent chatbot allowed me to explore 
            data-driven logic and human-centered design. Volunteering at the Vibrant Gujarat 
            Global Summit in 2024 exposed me to large-scale coordination and real-time problem solving. 
            Each experience moved me from curiosity to capability, from observing problems to actively 
            solving them.
            <br /><br />

            Today, I see myself at the intersection of technology, analysis, and expression. 
            I enjoy working with databases, machine learning, visualisation, cybersecurity, and 
            project management, and I find equal joy in expressing ideas through tech and lifestyle 
            content creation. People describe me as analytical, expressive, punctual, ambitious, 
            and detail-oriented. I’m now working toward building scalable products, contributing 
            to meaningful tech solutions, and exploring deeper roles in data and cyber investigation. 
            I want my work to be secure, purposeful, and rooted in real impact.
          </p>
        </div>

      </div>
    </div>
  );
}
