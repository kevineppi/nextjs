'use client'

import { useEffect, useRef } from "react";

const TechGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let scrollY = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Minimal floating orbs - only 3 for performance
    const orbs = Array.from({ length: 3 }, (_, i) => ({
      x: Math.random() * 1400,
      y: Math.random() * 900,
      radius: 120 + Math.random() * 200,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      hue: i === 0 ? 152 : i === 1 ? 38 : 152,
      opacity: 0.03 + Math.random() * 0.015,
    }));

    let lastTime = 0;
    const draw = (timestamp: number) => {
      // Throttle to ~30fps for perf
      if (timestamp - lastTime < 33) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = timestamp;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const scrollOffset = scrollY * 0.08;

      // Ambient orbs only
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.radius) orb.x = w + orb.radius;
        if (orb.x > w + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = h + orb.radius;
        if (orb.y > h + orb.radius) orb.y = -orb.radius;

        const gradient = ctx.createRadialGradient(
          orb.x, orb.y - scrollOffset * 0.1, 0,
          orb.x, orb.y - scrollOffset * 0.1, orb.radius
        );
        gradient.addColorStop(0, `hsla(${orb.hue}, 35%, 50%, ${orb.opacity})`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 35%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y - scrollOffset * 0.1, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle dot grid - reduced density
      const gridSize = 100;
      ctx.fillStyle = `hsla(152, 20%, 40%, 0.03)`;
      const xOff = (scrollOffset * 0.2) % gridSize;
      const yOff = (scrollOffset * 0.15) % gridSize;
      for (let x = 0; x < w + gridSize; x += gridSize) {
        for (let y = 0; y < h + gridSize; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x + xOff, y + yOff, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
};

export default TechGridBackground;
