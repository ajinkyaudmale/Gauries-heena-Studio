"use client";

import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { SITE } from "@/lib/constants";
import { instagramPosts } from "@/lib/data";
import { Instagram } from "lucide-react";

export function InstagramSection() {
  return (
    <section className="py-24 md:py-32 bg-mehendi-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-floral opacity-20" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-4"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm tracking-[0.2em] uppercase">
              @gauriehenna
            </span>
          </a>
          <h2 className="font-heading text-3xl md:text-4xl text-ivory font-light">
            Follow the Journey
          </h2>
          <p className="mt-3 text-ivory/60 text-sm md:text-base">
            Daily inspiration, behind-the-scenes, and the latest artistry from our studio.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {instagramPosts.map((post) => (
            <StaggerItem key={post.id}>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm"
                aria-label={`View ${post.alt} on Instagram`}
              >
                <ImageWithLoading
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-mehendi/0 group-hover:bg-mehendi/40 transition-colors duration-500 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateOnScroll className="text-center mt-10">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors border-b border-gold/40 pb-1"
          >
            Follow @gauriehenna on Instagram
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
