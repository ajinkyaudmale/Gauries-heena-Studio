"use client";

import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const BANNER_ALT = `${SITE.name} — Art on hands, beauty in every detail. Bridal henna, custom designs, natural henna, made with love.`;

export function Hero() {
  return (
    <section id="home" className="relative bg-[#f6e7dc] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full"
      >
        {/* Mobile banner (485x1024) */}
        <div className="relative w-full aspect-[485/1024] md:hidden">
          <Image
            src="/images/hero-banner-mobile.jpg"
            alt={BANNER_ALT}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Desktop banner (1024x512) */}
        <div className="relative hidden md:block w-full aspect-[2/1]">
          <Image
            src="/images/hero-banner-desktop.jpg"
            alt={BANNER_ALT}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button href="#contact" size="lg" variant="primary">
          Book Your Experience
        </Button>
        <Button href="#gallery" size="lg" variant="outline">
          Explore Our Art
        </Button>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden md:flex justify-center pb-6 text-mehendi/50 hover:text-gold transition-colors"
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
