import SoftParticles from "./SoftParticles";

export default function Hero() {
  return (
    <section
      className="
        relative w-full py-32 md:py-40
        bg-theme 
        text-theme 
        overflow-hidden
        transition-colors duration-300
      "
    >
      {/* Soft particles */}
      <div className="absolute inset-0 z-0 opacity-50">
        <SoftParticles />
      </div>

      {/* Subtle tech grid */}
      <div className="absolute inset-0 z-0 tech-grid opacity-[0.15]" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-start">

        {/* Profile Photo */}
        <div
  className="
    w-40 h-52 md:w-48 md:h-60 
    rounded-3xl overflow-hidden
    bg-card border border-card
    shadow-xl backdrop-blur-2xl
    mb-10
  "
>
  <img
    src="/photo.jpg"
    alt="Krusha Parikh"
    className="w-full h-full object-cover"
  />
</div>


        {/* Name */}
        <h1
          className="
            text-4xl md:text-6xl font-bold tracking-tight
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text gradient-animate
          "
        >
          Krusha Parikh
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-lg md:text-xl text-theme-soft leading-relaxed">
          Analytical • Impact-Driven • Evolving
        </p>

        {/* Tagline */}
        <p className="mt-2 max-w-2xl text-theme-soft">
          Computer Engineering Student crafting data-driven, secure, and meaningful solutions for real-world impact.
        </p>

        {/* CTA Button */}
        <a
  href="/resume"
  className="mt-8 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-lavender to-neonLilac text-white shadow-md hover:shadow-xl hover:scale-[1.03] transition-all"
>
  View Resume
</a>

      </div>
    </section>
  );
}
