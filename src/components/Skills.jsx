import { skills } from "../data/skills";
import { Code, Cpu, Database, Shield, Sparkles } from "lucide-react";

export default function Skills() {
  const icons = {
    "Software Engineering": <Code size={18} />,
    "Data Science & ML": <Database size={18} />,
    Cybersecurity: <Shield size={18} />,
    "Web Development": <Cpu size={18} />,
    "Creative & Leadership": <Sparkles size={18} />,
  };

  return (
    <section className="w-full py-20 md:py-24 bg-theme text-theme">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h2
          className="
            text-3xl md:text-4xl font-bold mb-12 
            bg-gradient-to-r from-lavender to-neonLilac 
            text-transparent bg-clip-text
          "
        >
          Skills Overview
        </h2>

        {/* COMPACT GRID */}
        <div className="space-y-8">
          {skills.map((group, index) => (
            <div
              key={index}
              className="
                rounded-2xl bg-card/60 border border-card
                p-6 md:p-7 shadow-md backdrop-blur-xl
                transition-all hover:shadow-xl hover:scale-[1.01]
              "
            >
              {/* HEADER */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="
                    p-2 rounded-lg bg-theme-soft border border-card 
                    text-theme shadow-inner
                  "
                >
                  {icons[group.title]}
                </span>

                <h3
                  className="
                    text-lg md:text-xl font-semibold 
                    bg-gradient-to-r from-lavender to-pastelPink
                    text-transparent bg-clip-text
                  "
                >
                  {group.title}
                </h3>
              </div>

              {/* ULTRA-COMPACT SKILL CHIPS */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1 text-xs rounded-lg
                      bg-theme-soft border border-card text-theme-soft
                      hover:bg-lavender/20 
                      transition-all
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
