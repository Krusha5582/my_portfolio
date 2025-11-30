import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Spiral Confetti (God Mode)
  const launchGodConfetti = () => {
  // make sure this only runs in the browser
  if (typeof window === "undefined") return;

  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });

    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};


  const playChime = () => {
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_3b4ef71f65.mp3"
    );
    audio.volume = 0.5;
    audio.play();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("_captcha", "false");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/krusha5582@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success === "true" || data.success === true || data.status === "success") {
  e.target.reset();
  playChime();
  launchGodConfetti();
  setSubmitted(true);
}

    } catch {
      alert("Network error!");
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full py-32 bg-theme text-theme overflow-hidden">

      {/* AURORA BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none animate-aurora opacity-40"></div>

      <style>
        {`
          @keyframes aurora {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-aurora {
            background: linear-gradient(
              120deg,
              rgba(185,129,255,0.25),
              rgba(75,255,255,0.25),
              rgba(255,170,220,0.25)
            );
            background-size: 250% 250%;
            animation: aurora 10s ease infinite;
          }

          @keyframes flipIn {
            0% { transform: rotateY(90deg); opacity: 0; }
            100% { transform: rotateY(0); opacity: 1; }
          }
          .flip-card {
            animation: flipIn 0.6s ease-out forwards;
          }

          @keyframes glowPulse {
            0% { box-shadow: 0 0 20px rgba(185,129,255,0.3); }
            50% { box-shadow: 0 0 40px rgba(185,129,255,0.6); }
            100% { box-shadow: 0 0 20px rgba(185,129,255,0.3); }
          }
          .animate-glow {
            animation: glowPulse 3s ease-in-out infinite;
          }

        `}
      </style>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-lavender via-neonLilac to-icyCyan text-transparent bg-clip-text">
          Let's Connect
        </h2>

        <p className="text-theme-soft max-w-2xl mb-14">
          Whether you're looking to collaborate, hire, or simply say hello —
          I’d love to connect with you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* GOD MODE SUCCESS TRANSFORMATION */}
          {submitted ? (
            <div className="
              flip-card
              bg-card border border-card p-12 rounded-2xl 
              backdrop-blur-2xl shadow-2xl relative animate-glow
              text-center flex flex-col items-center justify-center
            ">
              <div className="
                absolute inset-0 bg-gradient-to-br 
                from-lavender/30 via-neonLilac/20 to-transparent
                rounded-2xl
              "></div>

              <CheckCircle2 size={80} className="text-lavender drop-shadow-2xl mb-4" />

              <h3 className="text-2xl font-semibold text-white mb-2">
                Message Sent Successfully!
              </h3>

              <p className="text-theme-soft max-w-sm">
                Thank you for reaching out. I’ll get back to you soon.
              </p>
            </div>
          ) : (
            /* CONTACT FORM */
            <form
              onSubmit={handleSubmit}
              className="
                bg-card border border-card p-8 rounded-2xl shadow-xl 
                backdrop-blur-xl space-y-6 relative group
                transition-all hover:border-lavender
              "
            >
              {/* floating glow */}
              <div className="
                absolute inset-0 rounded-2xl pointer-events-none
                opacity-0 group-hover:opacity-100 transition
                bg-gradient-to-br from-lavender/20 via-neonLilac/10 to-transparent
              "></div>

              <div>
                <label className="text-sm font-medium text-theme">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="
                    w-full mt-1 px-4 py-3 rounded-xl bg-theme-soft border border-card 
                    focus:ring-2 focus:ring-lavender outline-none transition
                  "
                />
              </div>

              <div>
                <label className="text-sm font-medium text-theme">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="
                    w-full mt-1 px-4 py-3 rounded-xl bg-theme-soft border border-card 
                    focus:ring-2 focus:ring-lavender outline-none transition
                  "
                />
              </div>

              <div>
                <label className="text-sm font-medium text-theme">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="
                    w-full mt-1 px-4 py-3 rounded-xl bg-theme-soft border border-card 
                    focus:ring-2 focus:ring-lavender outline-none transition
                  "
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full px-6 py-3 rounded-xl text-white font-medium
                  bg-gradient-to-r from-lavender to-neonLilac
                  hover:shadow-xl transition-all disabled:opacity-50
                "
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}

          {/* SOCIALS */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-lavender to-icyCyan text-transparent bg-clip-text">
                Email
              </h3>
              <a href="mailto:krusha5582@gmail.com" className="text-theme-soft hover:text-neonLilac">
                krusha5582@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-pastelPink to-neonLilac text-transparent bg-clip-text">
                Socials
              </h3>

              <div className="flex gap-6 mt-3">
                <a href="https://linkedin.com/in/krusha-parikh" target="_blank" className="hover:text-neonLilac">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Krusha5582" target="_blank" className="hover:text-neonLilac">
                  <Github size={24} />
                </a>
                <a href="https://instagram.com/notesby.krxsha" target="_blank" className="hover:text-neonLilac">
                  <Instagram size={24} />
                </a>
                <a href="mailto:krusha5582@gmail.com" className="hover:text-neonLilac">
                  <Mail size={24} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
