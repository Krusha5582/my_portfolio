import { projects } from "../data/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="page-transition bg-theme text-theme">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* PAGE TITLE */}
        <h1 className="
          text-4xl md:text-5xl font-bold mb-12
          bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
          text-transparent bg-clip-text
        ">
          All Projects
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                relative block rounded-2xl p-6
                bg-card border border-card
                shadow-xl backdrop-blur-xl
                hover:shadow-2xl hover:scale-[1.02]
                transition-all duration-300
              "
            >

              {/* SOFT GRADIENT ACCENT */}
              <div
                className="
                  absolute inset-0 rounded-2xl opacity-30
                  bg-gradient-to-br from-lavender/30 via-neonLilac/20 to-transparent
                  pointer-events-none
                "
              />

              {/* CLICKABLE AREA → VIEW CASE STUDY */}
              <a href={`/projects/${project.id}`} className="block">

                {/* THUMBNAIL */}
                <div
                  className={`
                    rounded-xl mb-4 h-40 w-full border border-card
                    ${project.color}
                  `}
                />

                {/* TITLE */}
                <h3 className="
                  text-xl font-semibold mb-1
                  bg-gradient-to-r from-lavender to-neonLilac
                  text-transparent bg-clip-text
                ">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-theme-soft text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* VIEW CASE STUDY */}
                <div className="flex items-center gap-2 text-theme hover:text-neonLilac transition mb-3">
                  <ExternalLink size={18} />
                  <span>View Case Study</span>
                </div>

              </a>

              {/* VIEW WORK BUTTON */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm font-medium text-theme-soft
                  hover:text-icyCyan transition
                  inline-block mt-1
                "
              >
                View Work →
              </a>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
