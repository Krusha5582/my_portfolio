import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);

  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-xl
      bg-slate-950/90
      border-b border-slate-800/50
      transition-colors
    ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="
            text-lg font-black tracking-tight
            text-slate-100 hover:text-slate-200 transition-colors
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
                  text-sm font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-emerald-400 border-b-2 border-emerald-400 pb-1"
                      : "text-slate-400 hover:text-slate-200"
                  }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="
          md:hidden 
          bg-slate-950/95 backdrop-blur-xl
          border-t border-slate-800/50
        ">
          <div className="flex flex-col py-6 px-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                    text-lg py-2 px-2 rounded-xl transition-all font-medium
                    ${
                      isActive
                        ? "text-emerald-400 bg-emerald-950/50"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
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
