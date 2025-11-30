import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post)
    return (
      <div className="page-transition bg-theme text-theme p-20 text-center">
        Post not found.
      </div>
    );

  return (
    <div className="page-transition bg-theme text-theme">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* TITLE */}
        <h1
          className="
            text-4xl md:text-5xl font-bold mb-4
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
          data-aos="fade-up"
        >
          {post.title}
        </h1>

        {/* SUBTEXT EXCERPT */}
        <p
          className="text-theme-soft text-lg mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {post.excerpt}
        </p>

        {/* PASTEL THUMBNAIL */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className={`
            w-full rounded-2xl mb-12 h-64
            border border-card
            ${post.color}
          `}
        />

        {/* GRADIENT DIVIDER */}
        <div
          className="
            h-[2px] w-full mb-12
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            opacity-40 rounded-full
          "
        />

        {/* FULL ARTICLE CONTENT */}
        <article
          className="
            prose prose-lg max-w-none
            text-theme leading-relaxed
            dark:prose-invert
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {post.content
            .split("\n")
            .filter((p) => p.trim() !== "")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </article>

      </div>
    </div>
  );
}
