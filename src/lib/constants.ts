export const SITE = {
  name: "GAURIÉ Henna Studios",
  tagline: "Where Every Hand Tells a Beautiful Story",
  description:
    "Luxury Indian mehendi artistry studio specializing in bridal henna, wedding designs, and custom henna experiences.",
  url: "https://gauriehenna.com",
  instagram: "https://instagram.com/gauriehenna",
  whatsapp: "919876543210",
  email: "hello@gauriehenna.com",
  phone: "+91 98765 43210",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const EVENT_TYPES = [
  "Bridal Mehendi",
  "Wedding",
  "Engagement",
  "Festive Occasion",
  "Corporate Event",
  "Other",
] as const;

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
