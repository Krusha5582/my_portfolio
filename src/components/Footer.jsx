import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        w-full py-12 mt-20
        bg-theme text-theme
        border-t border-card
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">

        {/* Branding */}
        <h3
          className="
            text-xl font-semibold tracking-wide
            bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
            text-transparent bg-clip-text
          "
        >
          Krusha Parikh
        </h3>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/krusha-parikh"
            className="text-theme hover:text-neonLilac transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/krusha-parikh"
            className="text-theme hover:text-neonLilac transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://instagram.com/krusha-parikh"
            className="text-theme hover:text-neonLilac transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a
            href="mailto:krusha5582@gmail.com"
            className="text-theme hover:text-neonLilac transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-card" />

        {/* Copyright */}
        <p className="text-theme-soft text-sm text-center">
          © {new Date().getFullYear()} <span className="font-medium text-theme">
            Krusha Parikh
          </span>{" "}
          — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
