"use client";

import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 pattern-floral relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          label="Our Story"
          title="More Than Henna. A Story."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden">
                <ImageWithLoading
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
                  alt="Elegant henna artistry at GAURIÉ studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-sm -z-10 hidden md:block" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-mehendi/5 rounded-sm -z-10 hidden md:block" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.15}>
            <div>
              <p className="text-base md:text-lg text-brown-muted leading-relaxed">
                At <span className="font-medium text-mehendi">GAURIÉ Henna Studios</span>,
                every design is thoughtfully created to celebrate love, culture,
                tradition and individuality. From intricate bridal patterns to
                elegant contemporary designs, every hand becomes a canvas.
              </p>
              <p className="mt-5 text-base md:text-lg text-brown-muted leading-relaxed">
                We believe mehendi is more than adornment — it is a ritual of
                beauty, a whisper of heritage, and a celebration of the moments
                that matter most.
              </p>

              <StaggerContainer className="mt-10 grid grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <div className="text-center p-4 md:p-6 bg-cream/60 border border-gold/10 rounded-sm">
                      <p className="font-heading text-xl md:text-2xl text-mehendi font-medium">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs md:text-sm text-brown-muted tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
