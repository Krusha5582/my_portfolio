import { 
  Award, 
  Shield, 
  Star, 
  Cpu, 
  Globe2, 
  BookOpen 
} from "lucide-react";

import { certifications } from "../data/certifications";

export default function Certifications() {
  
  // CATEGORY → ICON
  const categoryIcons = {
    technical:   <Cpu className="w-8 h-8 text-icyCyan" />,
    leadership:  <Star className="w-8 h-8 text-lavender" />,
    volunteering:<Globe2 className="w-8 h-8 text-neonLilac" />,
    specialization:<BookOpen className="w-8 h-8 text-pastelPink" />,
  };

  const sorted = [...certifications].sort((a, b) => b.year - a.year);

  return (
    <section className="w-full py-24 md:py-32 bg-theme text-theme relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="
          text-3xl md:text-4xl font-bold tracking-tight mb-12
          bg-gradient-to-r from-lavender via-neonLilac to-icyCyan
          text-transparent bg-clip-text">
          Certifications & Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sorted.map((cert, index) => (
            <div key={index} className="relative group">

              <div className="
                relative z-10 p-8 rounded-2xl
                bg-card border border-card shadow-xl
                backdrop-blur-xl transition-transform duration-300
                group-hover:scale-[1.03] group-hover:-rotate-[1deg]
              ">
                
                {/* ICON FIX — NOW ALWAYS VISIBLE */}
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center
                  rounded-full bg-gradient-to-br from-lavender/30 to-icyCyan/30
                  border border-card backdrop-blur-xl animate-morphRing">
                  {categoryIcons[cert.category]}
                </div>

                <p className="text-center font-medium 
                  bg-gradient-to-r from-lavender to-neonLilac 
                  text-transparent bg-clip-text">
                  {cert.title}
                </p>

                <p className="text-center text-theme-soft text-xs mt-1">
                  {cert.by} • {cert.year}
                </p>

                {/* Category Badge */}
                <span className="
                  mt-3 block text-center text-[10px] px-3 py-1 mx-auto w-fit
                  rounded-full border border-card
                  bg-gradient-to-r from-lavender/10 to-icyCyan/10
                  text-theme-soft tracking-wide">
                  {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                </span>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
