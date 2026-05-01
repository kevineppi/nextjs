'use client'

import { TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const LiveCounter = () => {
  const [count, setCount] = useState(12);

  useEffect(() => {
    // Simulate live counter with random updates
    const interval = setInterval(() => {
      setCount((prev) => {
        const random = Math.random();
        if (random > 0.7) return Math.min(prev + 1, 25);
        if (random < 0.3) return Math.max(prev - 1, 8);
        return prev;
      });
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 px-4 py-2 rounded-full animate-pulse">
      <TrendingUp className="w-4 h-4 text-primary" />
      <span className="text-sm font-semibold">
        🔥 <span className="text-primary">{count}</span> Anfragen heute
      </span>
    </div>
  );
};

export default LiveCounter;
