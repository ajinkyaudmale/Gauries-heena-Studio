"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/data";
import {
  Crown,
  Heart,
  Leaf,
  Palette,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Leaf,
  Sparkles,
  ShieldCheck,
  Crown,
  Heart,
};

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-mehendi text-ivory relative overflow-hidden">
      <div className="absolute inset-0 pattern-mandala opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mehendi-dark/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          label="The GAURIÉ Difference"
          title="Why Choose GAURIÉ"
          subtitle="Every detail reflects our commitment to artistry, authenticity, and an unforgettable experience."
          light
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.title}>
                <div className="group p-7 md:p-8 border border-ivory/10 rounded-sm hover:border-gold/30 hover:bg-ivory/5 transition-all duration-500">
                  <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-heading text-xl text-ivory font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-ivory/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
