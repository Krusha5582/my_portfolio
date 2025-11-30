import { Shield, BarChart3, Cpu } from "lucide-react";

export default function SecureAnalyzeBuild() {
  const pillars = [
    {
      title: "Secure",
      desc: "Designing systems that prioritise trust. From cybersecurity fundamentals to secure coding, system hardening, and investigation-driven thinking, I focus on creating digital environments that are protected, reliable, and resilient.",
      icon: <Shield className="w-6 h-6 text-neonLilac" />,
      stripe: "from-lavender/20 to-icyCyan/20",
    },
    {
      title: "Analyze",
      desc: "Making sense of complexity through data. I work with ML models, pattern recognition, dashboards, and data storytelling to turn raw information into clear insights, structured decisions, and meaningful outcomes.",
      icon: <BarChart3 className="w-6 h-6 text-icyCyan" />,
      stripe: "from-icyCyan/20 to-pastelPink/20",
    },
    {
      title: "Build",
      desc: "Developing clean, scalable, and user-centered experiences. Whether it’s engineering, UI/UX, or project leadership, I enjoy creating solutions that blend functionality, aesthetics, and real-world purpose.",
      icon: <Cpu className="w-6 h-6 text-lavender" />,
      stripe: "from-pastelPink/20 to-neonLilac/20",
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-theme text-theme">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2
          className="
            text-3xl md:text-4xl font-bold tracking-tight mb-12
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
        >
          Secure • Analyze • Build
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                rounded-2xl p-[2px] shadow-xl
                transition-all duration-300
                hover:scale-[1.03] hover:shadow-neonLilac/30
              "
            >
              {/* Soft pastel striped background */}
              <div
                className={`
                  absolute inset-0 -z-10 opacity-70
                  bg-gradient-to-br ${item.stripe}
                `}
              />

              {/* Glass Card */}
              <div
                className="
                  bg-card backdrop-blur-xl rounded-2xl p-8 
                  border border-card
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div className="mb-4">
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl font-semibold mb-3
                    bg-gradient-to-r from-lavender to-neonLilac
                    text-transparent bg-clip-text
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-theme-soft leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
