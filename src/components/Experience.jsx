import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="w-full py-24 md:py-32 bg-theme text-theme transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2
          className="
            text-3xl md:text-4xl font-bold tracking-tight mb-12
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
        >
          Experience Timeline
        </h2>

        <div className="relative ml-6 md:ml-10">

          {/* Glowing Cyber Line */}
          <div
            className="
              absolute left-0 top-0 w-[3px] h-full
              bg-gradient-to-b from-lavender to-icyCyan
              opacity-80
              rounded-full
              dark:shadow-[0_0_20px_#B881FF]
            "
          />

          {/* Dotted Overlay Line */}
          <div
            className="
              absolute left-[1px] top-0 w-[1px] h-full
              dark:bg-white/20 bg-black/20
              bg-[linear-gradient(to_bottom,transparent_0%,transparent_70%,rgba(255,255,255,0.3)_70%,transparent_100%)]
              bg-[length:4px_20px]
              opacity-60
            "
          />

          {/* Timeline Items */}
          <div className="space-y-16 relative z-10">

            {experience.map((item, i) => (
              <div key={i} className="relative pl-10">

                {/* Node with neon pulse */}
                <div
                  className="
                    absolute left-[-9px] top-1
                    w-5 h-5 rounded-full
                    bg-gradient-to-r from-lavender to-icyCyan
                    shadow-[0_0_12px_#C3A4FF,0_0_20px_#A3FFE4]
                    animate-[pulseGlow_3s_ease-in-out_infinite]
                  "
                />

                {/* Cyber connector → card */}
                <div
                  className="
                    absolute left-0 top-4 w-6 h-[1px]
                    bg-gradient-to-r from-lavender/70 to-icyCyan/70
                    opacity-70
                  "
                ></div>

                {/* Experience Card */}
                <div
                  className="
                    bg-card border border-card
                    p-6 md:p-7 rounded-2xl shadow-xl backdrop-blur-xl
                    hover:scale-[1.02] hover:shadow-2xl
                    transition-all duration-300
                  "
                >
                  <h3
                    className="
                      text-xl font-semibold
                      bg-gradient-to-r from-lavender to-icyCyan
                      text-transparent bg-clip-text
                    "
                  >
                    {item.role}
                  </h3>

                  <p className="text-theme-soft text-sm mt-1 mb-3">
                    {item.org} • {item.period}
                  </p>

                  <ul className="list-disc ml-6 space-y-2 text-theme-soft">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Pulse Glow Animation */}
      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 12px #C3A4FF, 0 0 20px #A3FFE4; }
          50% { box-shadow: 0 0 20px #B881FF, 0 0 30px #A3FFE4; }
          100% { box-shadow: 0 0 12px #C3A4FF, 0 0 20px #A3FFE4; }
        }
      `}</style>

    </section>
  );
}
