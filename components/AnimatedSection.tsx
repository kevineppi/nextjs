'use client'

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "scale-in";
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-in", 
  delay = 0 
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback: if IntersectionObserver not supported, show immediately
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "200px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Safety fallback: show content after 1.5s regardless
    const fallback = setTimeout(() => setIsVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-[opacity,transform] ${
        isVisible 
          ? `opacity-100 translate-y-0 ${animation === 'slide-up' ? '' : ''}` 
          : 'opacity-0 translate-y-4'
      }`}
      style={{ 
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: isVisible ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
