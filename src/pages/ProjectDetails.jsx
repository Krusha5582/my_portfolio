import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project)
    return <div className="p-20 text-center">Project not found.</div>;

  return (
    <div className="page-transition bg-theme text-theme">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        {/* DESCRIPTION */}
        <p className="text-theme-soft max-w-2xl mb-10">{project.description}</p>

        {/* PASTEL THUMBNAIL */}
        <div
          className={`
            rounded-2xl mb-10 w-full h-64
            border border-card
            ${project.color}
          `}
        />

        {/* TECH STACK */}
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/10 rounded-xl border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* IMPACT */}
        <h2 className="text-2xl font-semibold mb-4">Impact</h2>
        <p className="text-theme-soft mb-10">{project.impact}</p>

        {/* VIEW WORK BUTTON */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-4 px-6 py-2
            rounded-xl border border-card
            bg-white/5 text-theme-soft
            hover:text-white hover:bg-neonLilac/20 hover:border-neonLilac/40
            transition-all duration-300 font-medium
          "
        >
          View Work →
        </a>

      </div>
    </div>
  );
}
