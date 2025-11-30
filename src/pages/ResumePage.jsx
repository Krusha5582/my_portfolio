export default function ResumePage() {
  return (
    <div className="page-transition bg-theme text-theme">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">

        <h1
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-pastelPink to-lavender text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          My Resume
        </h1>

        {/* PDF VIEWER */}
        <iframe
          src="/Resume_Krusha.pdf"
          className="w-full h-[700px] border border-card rounded-2xl shadow-xl"
        />

        <a
          href="/Resume_Krusha.pdf"
          download
          className="mt-6 inline-block px-6 py-3 bg-neonLilac text-black font-semibold rounded-xl hover:opacity-90 transition"
        >
          Download Resume
        </a>

      </div>
    </div>
  );
}
