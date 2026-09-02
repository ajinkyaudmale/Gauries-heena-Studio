"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-14 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-4",
            light ? "text-gold-light" : "text-gold"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight",
          light ? "text-ivory" : "text-mehendi"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-ivory/80" : "text-brown-muted"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-12 bg-gold/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        <span className="h-px w-12 bg-gold/60" />
      </div>
    </motion.div>
  );
}
