"use client";

import { Button } from "@/components/ui/Button";
import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <ImageWithLoading
          src="https://images.unsplash.com/photo-1591604466377-1a63d107f802?w=1920&q=85"
          alt="Indian mehendi artist creating intricate bridal henna design"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold fill-current">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="20"
              x2="100"
              y2="180"
              stroke="currentColor"
              strokeWidth="0.3"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gold-light mb-6"
          >
            {SITE.name}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.1] tracking-tight"
          >
            Art That Blooms
            <br />
            <span className="italic text-gold-light">On Your Hands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-ivory/75 leading-relaxed max-w-lg"
          >
            Transforming beautiful moments into timeless stories through intricate
            and elegant henna artistry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="#contact" size="lg" variant="secondary">
              Book Your Experience
            </Button>
            <Button href="#gallery" size="lg" variant="outline" className="border-ivory/40 text-ivory hover:bg-ivory hover:text-mehendi">
              Explore Our Art
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/50 hover:text-gold transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
