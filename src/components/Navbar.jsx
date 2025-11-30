import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import SoftParticles from "./SoftParticles";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    // { name: "Gallery", path: "/gallery" },  // ❌ COMMENTED AS REQUESTED
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  // Load saved theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Apply theme on mount or change
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl
        bg-white/70 dark:bg-black/20
        border-b border-black/10 dark:border-white/10
        transition-colors
      "
    >
      {/* Particles */}
      <div className="absolute inset-0 -z-10">
        <SoftParticles />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="
            text-lg font-semibold tracking-wide
            bg-gradient-to-r from-lavender to-icyCyan
            text-transparent bg-clip-text
          "
        >
          Krusha Parikh
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                  text-sm transition font-medium
                  ${
                    isActive
                      ? "text-neonLilac"
                      : "text-black/70 dark:text-white/70 hover:text-neonLilac"
                  }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Theme button */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-xl
              bg-white/80 dark:bg-white/10
              border border-black/10 dark:border-white/10
              hover:bg-white/60 dark:hover:bg-white/20
              transition
              text-black dark:text-white
            "
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            md:hidden 
            bg-white/80 dark:bg-black/40
            backdrop-blur-xl
            border-t border-black/10 dark:border-white/10
          "
        >
          <div className="flex flex-col py-6 px-6 space-y-4">

            {/* Mobile Theme Button */}
            <button
              onClick={toggleTheme}
              className="
                p-2 rounded-xl w-fit
                bg-white/80 dark:bg-white/10
                border border-black/10 dark:border-white/10
                hover:bg-white/60 dark:hover:bg-white/20
                transition
                text-black dark:text-white
              "
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Links */}
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                    text-lg py-1 transition font-medium
                    ${
                      isActive
                        ? "text-neonLilac"
                        : "text-black/70 dark:text-white/70 hover:text-neonLilac"
                    }
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}
