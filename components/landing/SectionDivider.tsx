'use client'

import { useEffect, useRef, useState } from "react";

interface SectionDividerProps {
  variant?: "wave" | "angle" | "gradient";
}

const SectionDivider = ({ variant = "wave" }: SectionDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on element position
      const elementCenter = rect.top + rect.height / 2;
      const progress = Math.max(0, Math.min(1, 1 - (elementCenter / viewportHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative h-32 md:h-48 overflow-hidden -mt-1">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"
        style={{
          opacity: 0.5 + scrollProgress * 0.5
        }}
      />
      
      {/* Animated lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl px-8">
          {/* Center line that draws on scroll */}
          <div 
            className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-all duration-300"
            style={{
              transform: `scaleX(${0.3 + scrollProgress * 0.7})`,
              opacity: 0.4 + scrollProgress * 0.6
            }}
          />
          
          {/* Decorative dots */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/30 transition-all duration-500"
                style={{
                  transform: `scale(${0.5 + scrollProgress * 0.5})`,
                  opacity: 0.3 + scrollProgress * 0.7,
                  transitionDelay: `${i * 100}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles on scroll */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${15 + i * 14}%`,
              top: `${30 + (i % 2) * 40}%`,
              transform: `translateY(${(1 - scrollProgress) * (20 + i * 5)}px)`,
              opacity: scrollProgress * 0.6,
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
            }}
          />
        ))}
      </div>

      {/* Subtle pulse ring */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-primary/10"
        style={{
          transform: `translate(-50%, -50%) scale(${0.8 + scrollProgress * 0.4})`,
          opacity: scrollProgress * 0.3
        }}
      />
    </div>
  );
};

export default SectionDivider;
