"use client";

import { getWhatsAppUrl, SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppUrl(
        "Hello GAURIÉ! I'd like to inquire about booking a mehendi experience."
      )}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label={`Chat on WhatsApp with ${SITE.name}`}
    >
      <MessageCircle className="w-5 h-5" fill="white" />
      <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
