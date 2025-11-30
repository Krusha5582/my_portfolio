/**
 * Cyber Network Effect
 * Glowing particles + connecting lines (Premium Tech Look)
 * Fully React-safe, NO Math.random inside renders
 */

import { useEffect, useRef } from "react";

// --- Particle + Network config ---
const PARTICLE_COUNT = 35;
const MAX_DISTANCE = 130;

const generateParticles = () => {
  const arr = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 80, // restrict height so it stays behind navbar
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    });
  }
  return arr;
};

export default function CyberNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = generateParticles();

    canvas.width = window.innerWidth;
    canvas.height = 90; // re-check: only behind navbar

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nodes
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(184, 129, 255, 0.9)"; // neon-lilac glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#B881FF";
        ctx.fill();
      });

      // Draw lines between close particles
      particles.forEach((p1) => {
        particles.forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(163, 255, 228, ${1 - dist / MAX_DISTANCE})`; // icy cyan lines
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Resize handler
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 90;
      particles = generateParticles();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[90px] -z-10 opacity-70"
    />
  );
}
