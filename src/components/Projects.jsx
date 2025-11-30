import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
   title: "AMC Smart Civic Management",
  problem: "Manual civic processes for complaints, permits, and utility services were slow and lacked structured tracking.",
  approach: "Built a smart governance platform with NLP-based complaint sorting, workflow routing, and ML forecasting, supported by a cross-platform mobile interface.",
  result: "Improved processing speed by 60% and enabled real-time insights for better civic decision-making.",
  tech: ["React Native / Flutter", "Node.js", "Python", "NLP", "Machine Learning", "FastAPI", "Power BI", "MongoDB", "Firebase", "Docker", "Dart"],
      link: "https://github.com/Krusha5582/AMC-Smart-Application",
    },
    {
  title: "Conversational Chatbot for Institutions",
problem: "Students and staff struggled to access admission and course information quickly through static webpages.",
  approach: "Developed an NLP-driven chatbot with custom intents, a lightweight ML model, and a conversational UI. Integrated using Python on the backend and a JS-based web interface for seamless interaction.",
  result: "Reduced manual query load, improved response accessibility, and provided instant 24/7 support for institutional information.",

  tech: ["Python", "NLP", "ML", "Dialogflow", "React", "Json", "Html", "CSS"],
  link: "https://github.com/Krusha5582/Chatbot_",
},
{
  title: "MS Education Consultants Website",
  problem: "The consultancy needed a modern, responsive platform to manage student inquiries, showcase services, and streamline payments.",
  approach: "Developed a full MERN-stack website with secure Razorpay integration, admin and student dashboards, SEO-optimized pages, and a clean, mobile-first UI.",
  result: "Improved lead handling, enabled online payments, strengthened brand presence, and enhanced overall user experience.",
  tech: ["MongoDB", "Express", "React", "Node.js", "Razorpay", "SEO", "Responsive Design", "JavaScript", "CSS", "HTML", "Git", "GitHub", "Vercel", "Figma", "Postman"],
  link: "https://www.mseconsultant.com/"
},

  ];

  return (
    <section className="w-full py-24 md:py-32 bg-theme text-theme transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="
            text-3xl md:text-4xl font-bold tracking-tight mb-12
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
        >
          Featured Projects
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="
                relative rounded-2xl p-[2px]
                bg-gradient-to-br from-lavender/20 via-neonLilac/10 to-transparent
                hover:shadow-neonLilac/40 hover:scale-[1.02]
                transition-all duration-300
              "
            >
              {/* Glass Card Content */}
              <div
                className="
                  bg-card backdrop-blur-xl rounded-2xl p-8
                  border border-card relative z-10
                "
              >
                {/* Title */}
                <h3
                  className="
                    text-xl md:text-2xl font-semibold mb-4
                    bg-gradient-to-r from-lavender to-neonLilac
                    text-transparent bg-clip-text
                  "
                >
                  {project.title}
                </h3>

                {/* Case Study Breakdown */}
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-theme text-sm font-semibold">Problem</p>
                    <p className="text-theme-soft text-sm">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-theme text-sm font-semibold">Approach</p>
                    <p className="text-theme-soft text-sm">{project.approach}</p>
                  </div>

                  <div>
                    <p className="text-theme text-sm font-semibold">Result</p>
                    <p className="text-theme-soft text-sm">{project.result}</p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs px-3 py-1 rounded-md
                        bg-theme-soft border border-card
                        text-theme-soft backdrop-blur-xl
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Project */}
                <a
                  href={project.link}
                  className="
                    inline-flex items-center gap-2 text-sm font-medium
                    text-theme hover:text-neonLilac transition
                  "
                >
                  View Project <ExternalLink size={16} />
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
