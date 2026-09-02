"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const aspectClasses = {
  tall: "row-span-2",
  wide: "col-span-1 md:col-span-2",
  square: "",
};

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const lightboxImages = filteredItems.map((item) => ({
    src: item.image.replace("w=600", "w=1200"),
    alt: item.alt,
  }));

  return (
    <section id="gallery" className="py-24 md:py-32 pattern-mandala">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured Gallery"
          subtitle="A glimpse into the artistry, elegance, and emotion woven into every design."
        />

        <AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 md:px-5 py-2 text-xs md:text-sm tracking-wide uppercase transition-all duration-300 rounded-sm cursor-pointer",
                  activeCategory === category
                    ? "bg-mehendi text-ivory"
                    : "bg-cream text-brown-muted hover:bg-mehendi/10 hover:text-mehendi"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              delay={index * 0.05}
              className={cn(
                "relative overflow-hidden rounded-sm cursor-pointer group",
                aspectClasses[item.aspect]
              )}
            >
              <button
                onClick={() => setLightboxIndex(index)}
                className="absolute inset-0 w-full h-full cursor-pointer"
                aria-label={`View ${item.alt}`}
              >
                <ImageWithLoading
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-mehendi/0 group-hover:bg-mehendi/30 transition-colors duration-500 flex items-end justify-start p-4">
                  <span className="text-ivory text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    {item.category}
                  </span>
                </div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <Button href="#gallery" variant="outline" size="md">
            View Full Gallery
          </Button>
        </AnimateOnScroll>
      </div>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
