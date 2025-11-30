import { NavLink } from "react-router-dom";
import { blogPosts } from "../data/blog";

export default function Blog() {
  return (
    <section className="w-full py-24 md:py-32 bg-theme text-theme page-transition">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page Title */}
        <h1
          className="
            text-4xl md:text-5xl font-bold tracking-tight mb-10
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
        >
          Blog & Writings
        </h1>

        {/* Subtitle */}
        <p className="text-theme-soft max-w-2xl mb-14">
          Thoughts, stories, and insights at the intersection of engineering,
          creativity, data, and personal growth.
        </p>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <NavLink
              key={index}
              to={`/blog/${post.slug}`}
              className="
                group
                bg-card border border-card
                rounded-2xl p-6 shadow-xl backdrop-blur-xl
                hover:scale-[1.02] hover:shadow-2xl 
                transition-all duration-300
                cursor-pointer
              "
            >
              {/* Image */}
              {post.image && (
                <div className="w-full h-56 rounded-xl overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              )}

              {/* Title */}
              <h3
                className="
                  text-2xl font-semibold mb-2
                  bg-gradient-to-r from-lavender to-neonLilac
                  text-transparent bg-clip-text
                "
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-theme-soft text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Read More */}
              <span
                className="
                  text-neonLilac text-sm font-medium
                  group-hover:underline
                  transition
                "
              >
                Read More →
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
