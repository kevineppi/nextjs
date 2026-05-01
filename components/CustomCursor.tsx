'use client'

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const handleOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("[data-cursor]");
      if (el) {
        setLabel((el as HTMLElement).dataset.cursor || "");
        setIsHovering(true);
      }
      // Also detect links and buttons
      const interactive = (e.target as HTMLElement).closest("a, button, [role='button']");
      if (interactive && !el) {
        setIsHovering(true);
        setLabel("");
      }
    };

    const handleOut = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("[data-cursor], a, button, [role='button']");
      if (el) {
        setIsHovering(false);
        setLabel("");
      }
    };

    let raf: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    raf = requestAnimationFrame(animate);

    // Hide default cursor
    document.documentElement.style.cursor = "none";
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = "a, button, [role='button'], input, textarea, select, [data-cursor] { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
      document.getElementById("custom-cursor-style")?.remove();
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ willChange: "transform" }}
    >
      {/* Outer ring */}
      <div
        className="flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-out"
        style={{
          width: isHovering ? (label ? 90 : 50) : 32,
          height: isHovering ? (label ? 90 : 50) : 32,
          marginLeft: isHovering ? (label ? -45 : -25) : -16,
          marginTop: isHovering ? (label ? -45 : -25) : -16,
          borderColor: isHovering ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.3)",
          backgroundColor: isHovering ? "hsl(var(--primary) / 0.08)" : "transparent",
          mixBlendMode: label ? "normal" : "difference",
        }}
      >
        {label && (
          <span
            ref={labelRef}
            className="mono text-[9px] font-bold uppercase tracking-[0.15em] text-primary text-center leading-tight"
          >
            {label}
          </span>
        )}
      </div>
      {/* Center dot */}
      <div
        className="absolute rounded-full bg-primary transition-all duration-200"
        style={{
          width: isHovering ? 0 : 4,
          height: isHovering ? 0 : 4,
          top: -2,
          left: -2,
        }}
      />
    </div>
  );
};

export default CustomCursor;
