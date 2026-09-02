"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithLoading({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority = false,
  sizes,
}: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", fill && "w-full h-full")}>
      {!loaded && (
        <div
          className="absolute inset-0 bg-cream animate-pulse"
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover transition-all duration-700",
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
          className
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
