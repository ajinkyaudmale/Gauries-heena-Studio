import { LogoLight } from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mehendi-dark text-ivory/80 pattern-mandala">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <LogoLight />
            <p className="mt-4 text-sm leading-relaxed text-ivory/60 max-w-xs">
              {SITE.tagline}
            </p>
            <p className="mt-2 text-xs tracking-widest uppercase text-gold/70">
              Luxury Mehendi Artistry
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-5">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ivory/50">{SITE.email}</p>
            <p className="text-sm text-ivory/50">{SITE.phone}</p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40 tracking-wide">
            © {currentYear} GAURIÉ Henna Studios. Crafted with love.
          </p>
          <p className="text-xs text-ivory/30 tracking-widest uppercase">
            Art That Blooms On Your Hands
          </p>
        </div>
      </div>
    </footer>
  );
}
