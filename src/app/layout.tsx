import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GAURIÉ Henna Studios | Luxury Bridal Mehendi Artistry",
  description:
    "Where Every Hand Tells a Beautiful Story. Luxury Indian mehendi artistry for bridal, wedding, engagement, and special occasions. Book your bespoke henna experience with GAURIÉ.",
  keywords: [
    "henna",
    "mehendi",
    "bridal mehendi",
    "henna artist",
    "Indian wedding henna",
    "GAURIÉ Henna Studios",
    "luxury henna",
    "Arabic mehendi",
  ],
  authors: [{ name: "GAURIÉ Henna Studios" }],
  openGraph: {
    title: "GAURIÉ Henna Studios | Art That Blooms On Your Hands",
    description:
      "Luxury Indian mehendi artistry studio specializing in bridal henna, wedding designs, and custom henna experiences.",
    type: "website",
    locale: "en_IN",
    siteName: "GAURIÉ Henna Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "GAURIÉ Henna Studios",
    description:
      "Where Every Hand Tells a Beautiful Story — luxury bridal mehendi artistry.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
