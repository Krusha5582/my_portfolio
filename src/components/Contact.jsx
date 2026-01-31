import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target) return;
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    formData.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/krusha5582@gmail.com", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const success =
        data.success ||
        data.status === "success" ||
        data.message ||
        data.type === "success" ||
        data.submission;

      if (success) {
        form.reset();
        setSubmitted(true);
      }
    } catch {
      alert("Network error!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-925 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        
        {/* HERO - MATCHES RESUME PAGE TONE */}
        <header className="mb-24 text-left">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-none text-slate-50">
            Get In Touch
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
            For serious inquiries about collaboration or opportunities.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* FORM - CLEAN + FUNCTIONAL */}
          {submitted ? (
            <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-12 lg:p-16 text-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-2xl lg:text-3xl font-black mb-4 text-slate-100">
                Message Received
              </h3>
              <p className="text-lg text-slate-400 font-light max-w-sm mx-auto leading-relaxed">
                Thanks for reaching out. I'll respond within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-8 py-3 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 rounded-xl font-mono uppercase tracking-wider text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-600 transition-all"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-8 lg:p-10 space-y-6">
              <div>
                <label className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all resize-vertical"
                  disabled={loading}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 px-8 py-4 rounded-xl font-mono uppercase tracking-wider text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          {/* CONTACT OPTIONS - SAME VISUAL LANGUAGE */}
          <div className="lg:pt-8 space-y-12">
            <div>
              <h3 className="text-2xl lg:text-3xl font-black mb-6 text-slate-100">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:krusha5582@gmail.com"
                  className="group block p-6 border-2 border-slate-800/50 hover:border-slate-700 hover:bg-slate-900/50 rounded-xl transition-all"
                >
                  <div className="flex items-center gap-3 text-lg font-semibold text-slate-300 group-hover:text-slate-100">
                    <Mail className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                    krusha5582@gmail.com
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-black mb-6 text-slate-100">
                Social
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/krusha-parikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 border-2 border-slate-800/50 hover:border-slate-600 hover:bg-slate-900/50 rounded-xl transition-all"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                  <span className="font-mono text-sm text-slate-400 group-hover:text-slate-200">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Krusha5582"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 border-2 border-slate-800/50 hover:border-slate-600 hover:bg-slate-900/50 rounded-xl transition-all"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-slate-200" />
                  <span className="font-mono text-sm text-slate-400 group-hover:text-slate-200">GitHub</span>
                </a>
                <a
                  href="https://instagram.com/notesby.krxsha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 border-2 border-slate-800/50 hover:border-slate-600 hover:bg-slate-900/50 rounded-xl transition-all"
                >
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-pink-400" />
                  <span className="font-mono text-sm text-slate-400 group-hover:text-slate-200">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
