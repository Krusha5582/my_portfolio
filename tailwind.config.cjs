/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,jsx}"],

  // ⭐ Safelist to ensure dynamic bg-{color}/40 classes work
  safelist: [
    "bg-pastelPink/40",
    "bg-pastelPurple/40",
    "bg-pastelGreen/40",
    "bg-pastelBlue/40",
    "bg-pastelRose/40",
    "bg-pastelYellow/40",
    "bg-icyCyan/40",
    "bg-lavender/40",
  ],

  theme: {
    extend: {
      colors: {
        // ⚡ Your existing dark-mode palette
        lavender: "#C3A4FF",
        pastelPink: "#F5DFFF",
        neonLilac: "#B881FF",
        icyCyan: "#A3FFE4",
        inkBlack: "#0D0D0D",

        // ⚡ Your light-mode palette
        lightBg: "#ffffff",
        lightText: "#0d0d0d",
        lightGlass: "rgba(255,255,255,0.5)",
        lightBorder: "rgba(0,0,0,0.08)",
        lightLavender: "#D8C8FF",
        lightPink: "#FCE4FF",

        // ⭐ Added smooth pastel variants
        pastelPurple: "#D9C3FF",
        pastelGreen: "#C8F7D4",
        pastelBlue: "#CFE9FF",
        pastelRose: "#F7D0C8",
        pastelYellow: "#FFF2B3",
      },
    },
  },

  plugins: [],
};
