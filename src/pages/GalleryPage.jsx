export default function GalleryPage() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <div className="page-transition bg-theme text-theme">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* HEADING */}
        <h1
          className="
            text-4xl font-bold mb-4
            bg-gradient-to-r from-neonLilac via-lavender to-icyCyan
            text-transparent bg-clip-text
          "
          data-aos="fade-up"
        >
          Aesthetic Gallery
        </h1>

        {/* SUBTEXT */}
        <p
          className="text-theme-soft max-w-2xl mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Glimpses from my creative life — singing, travel, journaling,
          photography, coding snaps, and little aesthetic moments I love.
        </p>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              {/* IMAGE */}
              <img
                src={img}
                className="
                  w-full rounded-2xl object-cover shadow-xl
                  border border-card bg-card
                  transition-all duration-300
                  group-hover:scale-[1.02] group-hover:shadow-neonLilac/30
                "
              />

              {/* GRADIENT OVERLAY ON HOVER */}
              <div
                className="
                  absolute inset-0 rounded-2xl opacity-0
                  bg-gradient-to-br from-lavender/10 via-neonLilac/10 to-icyCyan/10
                  transition-opacity duration-300 pointer-events-none
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
