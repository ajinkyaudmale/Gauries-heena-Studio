"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          label="What We Offer"
          title="Curated Mehendi Experiences"
          subtitle="From timeless bridal artistry to contemporary expressions — each service is crafted with care, culture, and creativity."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <article className="group relative bg-ivory overflow-hidden rounded-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-mehendi/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithLoading
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="font-heading text-xl md:text-2xl text-mehendi font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-brown-muted leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-dark transition-colors group/link"
                  >
                    Explore
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
