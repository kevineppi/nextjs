'use client'

import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none">
      <div
        className="h-full bg-primary origin-left transition-none"
        style={{
          transform: `scaleX(${progress / 100})`,
          boxShadow: progress > 0 ? "0 0 10px hsl(var(--primary) / 0.5), 0 0 30px hsl(var(--primary) / 0.2)" : "none",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
