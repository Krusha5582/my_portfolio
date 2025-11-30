import { useEffect, useRef } from "react";

const NODES = 20; // small and elegant

export default function SoftParticles() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 90; // navbar height area only

    // Generate elegant particles
    const particles = Array.from({ length: NODES }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1.5 + Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        // soft glowing pastel gradient
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        gradient.addColorStop(0, "rgba(195,164,255, 0.8)"); // lavender glow
        gradient.addColorStop(1, "rgba(195,164,255, 0)");   // fade
        ctx.fillStyle = gradient;

        ctx.fill();

        // movement
        p.x += p.vx;
        p.y += p.vy;

        // bounce softly
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Resize handling
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 90;
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[90px] -z-10 opacity-70"
    />
  );
}
