import { blogPosts } from "../data/blog";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="page-transition bg-theme text-theme">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* PAGE TITLE */}
        <h1
          className="
            text-4xl md:text-5xl font-bold mb-4
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
          data-aos="fade-up"
        >
          Writing & Reflections
        </h1>

        {/* SUBTEXT */}
        <p
          className="text-theme-soft max-w-2xl mb-14 leading-relaxed"
          data-aos="fade-up"
        >
          Thoughts on technology, creativity, personal growth, and the journey
          of becoming a better engineer & human.
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <a
              href={`/blog/${post.slug}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="
                relative block rounded-2xl overflow-hidden
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

              {/* PASTEL THUMBNAIL */}
              <div
                className={`
                  h-40 w-full rounded-b-none
                  border-b border-card
                  ${post.color}
                `}
              />

              {/* CONTENT */}
              <div className="p-6 relative z-10">
                <h3 className="
                  text-lg font-semibold mb-2
                  bg-gradient-to-r from-lavender to-neonLilac
                  text-transparent bg-clip-text
                ">
                  {post.title}
                </h3>

                <p className="text-theme-soft text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* READ MORE */}
                <div className="flex items-center gap-2 text-theme hover:text-neonLilac transition font-medium text-sm">
                  Read More <ArrowRight size={16} />
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
