'use client'

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ImageIcon, Loader2 } from "lucide-react";

interface OptimizedImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: "square" | "video" | "4/3" | "3/2" | "auto";
  priority?: boolean;
  showLoader?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * OptimizedImage - High-quality lazy loading image component
 * 
 * Features:
 * - IntersectionObserver-based lazy loading
 * - Smooth fade-in animation on load
 * - Native loading="lazy" fallback
 * - Placeholder while loading
 * - Error state handling
 * - High-quality rendering with proper CSS
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = "auto",
  priority = false,
  showLoader = true,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for lazy loading
  useEffect(() => {
    if (priority || !containerRef.current) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before visible
        threshold: 0.01,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    setIsError(false);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setIsError(true);
    setIsLoaded(true);
    onError?.();
  };

  // Aspect ratio classes
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    auto: "",
  };

  // No image source
  if (!src) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "relative bg-muted flex items-center justify-center overflow-hidden",
          aspectClasses[aspectRatio],
          containerClassName
        )}
      >
        <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative bg-muted overflow-hidden",
        aspectClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Loading placeholder */}
      {!isLoaded && showLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground/50" />
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
          <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
        </div>
      )}

      {/* Actual image - only render when in view */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded && !isError ? "opacity-100" : "opacity-0",
            className
          )}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
