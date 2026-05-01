'use client'

import { useRef, useCallback } from "react";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const MagneticCard = ({ children, className = "", glowColor }: MagneticCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.opacity = "1";
    glowRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, ${glowColor || "hsl(var(--primary) / 0.1)"}, transparent 60%)`;
  }, [glowColor]);

  const handleLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = "0";
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Glow overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-[1]"
        style={{ opacity: 0 }}
      />
      {/* Content */}
      <div className="relative z-[2]">
        {children}
      </div>
    </div>
  );
};

export default MagneticCard;
