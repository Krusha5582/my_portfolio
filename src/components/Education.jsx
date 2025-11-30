export default function Education() {
  const education = [
    {
      degree: "B.E. in Computer Engineering",
      school: "Indus University",
      period: "2023 – 2026",
      cgpa: "Target: 9.0+",
      desc: "Focused on software engineering, data science, machine learning, and secure systems. Actively working toward a strong academic profile with a 9+ CGPA goal.",
    },
    {
      degree: "Diploma in Computer Engineering",
      school: "Gujarat Technological University",
      period: "2020 – 2023",
      cgpa: "9.37",
      desc: "Built strong fundamentals in programming, algorithms, software design, and system development.",
    },
  ];

  return (
    <section className="w-full py-20 md:py-24 bg-theme text-theme">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2
          className="
            text-3xl md:text-4xl font-bold tracking-tight mb-10
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
        >
          Education
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, i) => (
            <div
              key={i}
              className="
                relative rounded-2xl shadow-lg backdrop-blur-xl
                bg-card border border-card
                hover:shadow-neonLilac/20 hover:scale-[1.02]
                transition-all overflow-hidden
              "
            >
              {/* Gradient Ribbon Header */}
              <div
                className="
                  w-full py-2.5 px-4
                  bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
                  text-white font-semibold text-base
                  tracking-wide shadow-md
                "
              >
                🎓 {item.degree}
              </div>

              {/* Cyber Left Stripe */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-lavender/70 to-icyCyan/70"></div>

              {/* Neon Dot */}
              <span
                className="
                  absolute left-0 top-6 -translate-x-1/2 
                  w-2.5 h-2.5 rounded-full 
                  bg-gradient-to-r from-lavender to-icyCyan
                  shadow-[0_0_10px_#B881FF]
                "
              />

              {/* Card Body */}
              <div className="p-5 md:p-6 space-y-1.5">
                <p className="font-medium text-theme">{item.school}</p>
                <p className="text-theme-soft text-sm">{item.period}</p>
                <p className="text-theme-soft text-sm">CGPA: {item.cgpa}</p>

                <p className="text-theme-soft leading-relaxed pt-2 text-sm">
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
