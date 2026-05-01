'use client'

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname === prevPath.current) {
      setDisplayChildren(children);
      return;
    }

    prevPath.current = pathname;
    setPhase("exit");

    const exitTimer = setTimeout(() => {
      setDisplayChildren(children);
      setPhase("enter");

      const enterTimer = setTimeout(() => {
        setPhase("idle");
      }, 500);

      return () => clearTimeout(enterTimer);
    }, 300);

    return () => clearTimeout(exitTimer);
  }, [pathname, children]);

  const style: React.CSSProperties =
    phase === "exit"
      ? { opacity: 0, transform: "translateY(12px)", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }
      : phase === "enter"
      ? { opacity: 1, transform: "translateY(0)", transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }
      : { opacity: 1, transform: "translateY(0)" };

  return <div style={style}>{displayChildren}</div>;
};

export default PageTransition;
