'use client'

import { useRef, useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p" | "span";
}

const TextReveal = ({ text, className = "", as: Tag = "h2" }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start revealing when element enters bottom 80%, finish when at 30%
      const start = vh * 0.85;
      const end = vh * 0.3;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setProgress(p);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => {
          const wordProgress = Math.min(1, Math.max(0, 
            (progress * words.length - i) * 1.2
          ));
          return (
            <span
              key={i}
              className="inline-block mr-[0.3em] transition-none"
              style={{
                opacity: 0.15 + wordProgress * 0.85,
                filter: `blur(${(1 - wordProgress) * 3}px)`,
                transform: `translateY(${(1 - wordProgress) * 4}px)`,
              }}
            >
              {word}
            </span>
          );
        })}
      </Tag>
    </div>
  );
};

export default TextReveal;
