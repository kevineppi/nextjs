'use client'

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ImageIcon, Loader2 } from "lucide-react";

interface ImageGalleryImage {
  id: string;
  image_url: string;
  thumbnail_url?: string | null;
  alt_text?: string | null;
  is_primary?: boolean;
}

interface ImageGalleryProps {
  images: ImageGalleryImage[];
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "4/3" | "3/2";
  showThumbnails?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

/**
 * ImageGallery - Multi-image gallery with thumbnails and navigation
 * Uses native img tags for maximum image quality
 */
const ImageGallery = ({
  images,
  alt,
  className,
  aspectRatio = "square",
  showThumbnails = true,
  showArrows = true,
}: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    const primaryIndex = images.findIndex(img => img.is_primary);
    return primaryIndex >= 0 ? primaryIndex : 0;
  });
  const [isLoaded, setIsLoaded] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className={cn("relative bg-muted flex items-center justify-center", className)}>
        <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
      </div>
    );
  }

  const currentImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
  };

  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsLoaded(false);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsLoaded(false);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Main Image Container */}
      <div className="relative group">
        <div className={cn("relative bg-black overflow-hidden", aspectClasses[aspectRatio])}>
          {/* Loading spinner */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <Loader2 className="w-8 h-8 animate-spin text-white/50" />
            </div>
          )}
          <img
            src={currentImage.image_url}
            alt={currentImage.alt_text || alt}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "w-full h-full object-contain transition-all duration-500",
              isLoaded ? "opacity-100" : "opacity-0",
              "group-hover:scale-105"
            )}
          />

          {/* Navigation Arrows - inside image */}
          {hasMultipleImages && showArrows && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 hover:scale-110 z-10"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 hover:scale-110 z-10"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          {/* Bottom Bar with Thumbnails or Dots - integrated into image */}
          {hasMultipleImages && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-8 pb-3 px-3 z-10">
              {showThumbnails ? (
                // Thumbnails inside image
                <div className="flex gap-2 justify-center overflow-x-auto scrollbar-hide">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLoaded(false);
                        setActiveIndex(index);
                      }}
                      className={cn(
                        "relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden transition-all duration-200 border-2",
                        index === activeIndex
                          ? "border-white scale-110"
                          : "border-transparent opacity-70 hover:opacity-100 hover:border-white/50"
                      )}
                    >
                      <img
                        src={image.thumbnail_url || image.image_url}
                        alt={`${alt} - Bild ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : (
                // Dot indicators as fallback
                <div className="flex items-center justify-center gap-1.5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLoaded(false);
                        setActiveIndex(index);
                      }}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === activeIndex
                          ? "bg-white w-4"
                          : "bg-white/50 hover:bg-white/80"
                      )}
                      aria-label={`Bild ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Image Counter */}
          {hasMultipleImages && (
            <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-xs font-medium text-white z-10">
              {activeIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
