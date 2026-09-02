export const services = [
  {
    id: "bridal",
    title: "Bridal Mehendi",
    description:
      "Exquisite full-hand and feet bridal designs crafted with precision, tradition, and timeless elegance for your special day.",
    image:
      "https://images.unsplash.com/photo-1591604466377-1a63d107f802?w=800&q=80",
    alt: "Intricate bridal mehendi design on hands",
  },
  {
    id: "wedding",
    title: "Wedding & Engagement",
    description:
      "Celebrate your union with bespoke henna artistry for the bride, groom, and every cherished guest at your celebration.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Indian wedding celebration with henna",
  },
  {
    id: "arabic",
    title: "Arabic Mehendi",
    description:
      "Bold, flowing patterns with striking negative space — modern Arabic style that makes a sophisticated statement.",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    alt: "Arabic style mehendi pattern",
  },
  {
    id: "traditional",
    title: "Traditional Mehendi",
    description:
      "Classic Indian motifs — peacocks, paisleys, and mandalas — woven into designs rooted in centuries of heritage.",
    image:
      "https://images.unsplash.com/photo-1609166217892-d7b0a4e8e8c9?w=800&q=80",
    alt: "Traditional Indian mehendi artwork",
  },
  {
    id: "contemporary",
    title: "Contemporary Designs",
    description:
      "Fresh, artistic interpretations that blend modern aesthetics with the soul of traditional henna craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Contemporary henna design",
  },
  {
    id: "festive",
    title: "Festive & Special Occasions",
    description:
      "From Karva Chauth to baby showers — beautiful henna for every milestone and celebration in your life.",
    image:
      "https://images.unsplash.com/photo-1606800052052-8315a5a78620?w=800&q=80",
    alt: "Festive occasion henna celebration",
  },
] as const;

export type GalleryCategory =
  | "All"
  | "Bridal"
  | "Arabic"
  | "Traditional"
  | "Minimal"
  | "Engagement";

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Bridal",
  "Arabic",
  "Traditional",
  "Minimal",
  "Engagement",
];

export const galleryItems = [
  {
    id: 1,
    category: "Bridal" as const,
    image:
      "https://images.unsplash.com/photo-1591604466377-1a63d107f802?w=600&q=80",
    alt: "Elaborate bridal mehendi",
    aspect: "tall" as const,
  },
  {
    id: 2,
    category: "Arabic" as const,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    alt: "Arabic henna design",
    aspect: "wide" as const,
  },
  {
    id: 3,
    category: "Traditional" as const,
    image:
      "https://images.unsplash.com/photo-1609166217892-d7b0a4e8e8c9?w=600&q=80",
    alt: "Traditional peacock mehendi",
    aspect: "square" as const,
  },
  {
    id: 4,
    category: "Minimal" as const,
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    alt: "Minimal modern henna",
    aspect: "tall" as const,
  },
  {
    id: 5,
    category: "Engagement" as const,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Engagement ceremony henna",
    aspect: "wide" as const,
  },
  {
    id: 6,
    category: "Bridal" as const,
    image:
      "https://images.unsplash.com/photo-1606800052052-8315a5a78620?w=600&q=80",
    alt: "Bridal henna close-up",
    aspect: "square" as const,
  },
  {
    id: 7,
    category: "Traditional" as const,
    image:
      "https://images.unsplash.com/photo-1587613867088-2416821133c3?w=600&q=80",
    alt: "Traditional mandala henna",
    aspect: "tall" as const,
  },
  {
    id: 8,
    category: "Arabic" as const,
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    alt: "Arabic floral henna",
    aspect: "wide" as const,
  },
  {
    id: 9,
    category: "Minimal" as const,
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    alt: "Delicate minimal henna",
    aspect: "square" as const,
  },
  {
    id: 10,
    category: "Engagement" as const,
    image:
      "https://images.unsplash.com/photo-1520854221256-17451d120f54?w=600&q=80",
    alt: "Engagement mehendi session",
    aspect: "tall" as const,
  },
] as const;

export const whyChooseUs = [
  {
    icon: "Palette",
    title: "Personalized Designs",
    description:
      "Every pattern is uniquely tailored to reflect your personality, occasion, and vision.",
  },
  {
    icon: "Leaf",
    title: "Premium Natural Henna",
    description:
      "We use only the finest organic henna paste for rich, long-lasting, skin-safe colour.",
  },
  {
    icon: "Sparkles",
    title: "Intricate Artistry",
    description:
      "Meticulous detail and refined technique in every stroke, swirl, and motif.",
  },
  {
    icon: "ShieldCheck",
    title: "Hygiene & Care",
    description:
      "Sterile tools, fresh cones, and utmost care for your comfort and safety.",
  },
  {
    icon: "Crown",
    title: "Bridal Expertise",
    description:
      "Specialized bridal artistry with deep understanding of wedding traditions.",
  },
  {
    icon: "Heart",
    title: "Passion in Every Detail",
    description:
      "Henna is our craft and calling — infused with love in every design we create.",
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    occasion: "Wedding — Mumbai",
    rating: 5,
    review:
      "Gauri created the most breathtaking bridal mehendi I've ever seen. Every guest was mesmerized. Her patience, artistry, and warmth made my wedding morning truly magical.",
  },
  {
    id: 2,
    name: "Ananya Reddy",
    occasion: "Engagement — Hyderabad",
    rating: 5,
    review:
      "The Arabic design was absolutely stunning — bold yet elegant. Gauri understood exactly what I wanted and delivered beyond my expectations. Highly recommend!",
  },
  {
    id: 3,
    name: "Meera Patel",
    occasion: "Bridal Mehendi — Ahmedabad",
    rating: 5,
    review:
      "From consultation to the final stroke, the experience was flawless. The henna stain was deep and beautiful, and the design told my love story perfectly.",
  },
  {
    id: 4,
    name: "Kavita Desai",
    occasion: "Karva Chauth — Pune",
    rating: 5,
    review:
      "I've been coming to GAURIÉ for three years now. The quality, hygiene, and designs are unmatched. It always feels like a luxury experience.",
  },
  {
    id: 5,
    name: "Riya Kapoor",
    occasion: "Destination Wedding — Udaipur",
    rating: 5,
    review:
      "Gauri travelled for our destination wedding and created art on 15 pairs of hands. Every single person was in awe. She is truly an artist.",
  },
] as const;

export const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1591604466377-1a63d107f802?w=400&q=80",
    alt: "Bridal henna artwork",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80",
    alt: "Arabic henna design",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1609166217892-d7b0a4e8e8c9?w=400&q=80",
    alt: "Traditional mehendi",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80",
    alt: "Contemporary henna",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1606800052052-8315a5a78620?w=400&q=80",
    alt: "Festive henna art",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
    alt: "Wedding henna moment",
  },
] as const;

export const stats = [
  { value: "500+", label: "Happy Hands" },
  { value: "Bridal", label: "Specialist" },
  { value: "Custom", label: "Designs" },
] as const;
