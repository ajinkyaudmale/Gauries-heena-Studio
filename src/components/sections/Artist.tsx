"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export function Artist() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      <div className="absolute top-20 left-0 w-64 h-64 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-mehendi fill-current">
          <path d="M100 10 Q130 50 100 90 Q70 50 100 10 M100 90 Q130 130 100 170 Q70 130 100 90 M10 100 Q50 70 90 100 Q50 130 10 100 M90 100 Q130 70 170 100 Q130 130 90 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll direction="left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <ImageWithLoading
                  src="https://images.unsplash.com/photo-1587613867088-2416821133c3?w=800&q=80"
                  alt="Gauri — founder and lead mehendi artist at GAURIÉ Henna Studios"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-cream p-4 md:p-5 border border-gold/20 rounded-sm shadow-lg">
                <p className="font-heading text-2xl md:text-3xl text-mehendi italic">
                  Gauri
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mt-1">
                  Lead Artist & Founder
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.15}>
            <div>
              <span className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-gold">
                The Artist
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl text-mehendi font-light leading-tight">
                Meet Gauri
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-gold/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>

              <p className="mt-8 font-heading text-xl md:text-2xl text-mehendi/80 leading-relaxed italic">
                &ldquo;Henna is not just an art form for me — it is a way of
                preserving emotions, memories and celebrations.&rdquo;
              </p>

              <p className="mt-6 text-base text-brown-muted leading-relaxed">
                With over a decade of dedicated practice, Gauri has adorned
                hundreds of brides and celebrated countless occasions across
                India. Her work blends deep respect for tradition with a
                contemporary eye for beauty — creating designs that feel both
                timeless and deeply personal.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-center gap-4"
              >
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-mehendi/20 text-mehendi text-sm hover:bg-mehendi hover:text-ivory transition-all duration-300 rounded-sm"
                >
                  <Instagram className="w-4 h-4" />
                  @gauriehenna
                </a>
              </motion.div>

              <div className="mt-10 pt-6 border-t border-cream">
                <svg
                  viewBox="0 0 300 60"
                  className="w-48 h-12 text-mehendi/30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M10 45 Q80 10 150 40 T290 35" />
                  <path d="M10 50 Q80 20 150 45 T290 40" strokeWidth="0.5" opacity="0.5" />
                </svg>
                <p className="text-xs text-brown-muted/60 mt-1 tracking-widest uppercase">
                  Signature
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
