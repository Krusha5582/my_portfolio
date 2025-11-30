export default function ResumePage() {
  return (
    <div className="page-transition min-h-screen bg-theme text-theme pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-10 
                     bg-gradient-to-r from-pastelPink to-lavender
                     text-transparent bg-clip-text tracking-tight"
          data-aos="fade-up"
        >
          My Resume
        </h1>

        {/* PDF Viewer */}
        <div
          className="w-full h-[700px] bg-card border border-card 
                     rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <iframe
            src="/Resume_Krusha.pdf"
            title="Resume PDF"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Download Button */}
        <a
          href="/Resume_Krusha.pdf"
          download="Krusha_Resume.pdf"
          className="mt-8 inline-block px-8 py-4 rounded-xl font-semibold
                     bg-gradient-to-r from-lavender to-neonLilac
                     text-white shadow-xl hover:shadow-2xl hover:scale-[1.03]
                     transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Download Resume
        </a>

      </div>
    </div>
  );
}
