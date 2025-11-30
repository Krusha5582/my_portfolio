
// Generate particle positions OUTSIDE the component (safe, pure)
const PARTICLES = [...Array(25)].map(() => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 4 + Math.random() * 6,
}));

export default function NavParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        ></span>
      ))}
    </div>
  );
}
