'use client'

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: string;
  className?: string;
}

const AnimatedCounter = ({ target, className = "" }: AnimatedCounterProps) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        
        // Parse the target to extract numeric part
        const numMatch = target.match(/[\d.]+/);
        if (!numMatch) {
          setDisplay(target);
          return;
        }
        
        const numVal = parseFloat(numMatch[0]);
        const prefix = target.slice(0, target.indexOf(numMatch[0]));
        const suffix = target.slice(target.indexOf(numMatch[0]) + numMatch[0].length);
        const hasDecimal = numMatch[0].includes(".");
        const decimals = hasDecimal ? numMatch[0].split(".")[1].length : 0;
        
        const duration = 1500;
        const startTime = performance.now();
        
        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = numVal * eased;
          
          setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplay(target);
          }
        };
        
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className={className}>{display}</span>;
};

export default AnimatedCounter;
