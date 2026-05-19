import { GALLERY_IMAGES } from "@/data/constants";
import type { GalleryImage } from "@/types";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  index: number;
  total: number;
}

function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
  index,
  total,
}: LightboxProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <dialog
      open
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 m-0 max-w-none max-h-none w-screen h-screen border-none"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      aria-label="Image lightbox"
      data-ocid="gallery.dialog"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white bg-black/50 hover:bg-black/80 border border-white/10 hover:border-[#DC143C] transition-all duration-200"
        aria-label="Close lightbox"
        data-ocid="gallery.close_button"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 border border-white/10 text-white/60 text-xs font-display tracking-widest">
        {index + 1} / {total}
      </div>

      {/* Image container */}
      <div
        className="relative flex flex-col items-center max-w-5xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="presentation"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="object-contain max-h-[80vh] w-full"
        />
        {image.caption && (
          <p className="mt-4 text-center text-white/40 text-xs font-display tracking-[0.2em] uppercase">
            {image.caption}
          </p>
        )}
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 border border-white/10 text-white/60 hover:text-white hover:border-[#DC143C] hover:bg-black/80 transition-all duration-200"
        aria-label="Previous image"
        data-ocid="gallery.pagination_prev"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 border border-white/10 text-white/60 hover:text-white hover:border-[#DC143C] hover:bg-black/80 transition-all duration-200"
        aria-label="Next image"
        data-ocid="gallery.pagination_next"
      >
        <ChevronRight size={22} />
      </button>
    </dialog>
  );
}

// CSS columns masonry — items flow top-to-bottom naturally with varied heights
export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % GALLERY_IMAGES.length);
  }, [activeIndex]);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[#0D0D0D]"
      data-ocid="gallery.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p
            className="text-[#DC143C] text-xs font-display font-bold tracking-[0.3em] uppercase mb-5"
            style={{
              textShadow:
                "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Portfolio
          </p>
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl uppercase leading-none tracking-tight">
            OUR WORK IN THE FIELD
          </h2>
        </div>

        {/* CSS Columns masonry */}
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-3"
          data-ocid="gallery.list"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full mb-3 overflow-hidden bg-[#1A1A1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC143C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
              aria-label={`View full image: ${img.alt}`}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/50 transition-all duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={26} className="text-white drop-shadow-lg" />
                  {img.caption && (
                    <p className="text-white/80 text-xs font-display tracking-wider uppercase text-center px-4 leading-snug max-w-[180px]">
                      {img.caption}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-10 text-center text-[#4A4A4A] text-sm font-body italic">
          Installations completed at Eskom power station facilities across
          Mpumalanga.
        </p>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <Lightbox
          image={GALLERY_IMAGES[activeIndex]}
          onClose={() => setActiveIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          index={activeIndex}
          total={GALLERY_IMAGES.length}
        />
      )}
    </section>
  );
}
