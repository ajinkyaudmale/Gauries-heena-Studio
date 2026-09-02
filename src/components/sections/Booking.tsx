"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EVENT_TYPES, getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  location: "",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[\d\s+\-()]{10,}$/.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email";
  }
  if (!data.eventType) errors.eventType = "Please select an event type";
  if (!data.eventDate) errors.eventDate = "Event date is required";
  if (!data.location.trim()) errors.location = "Location is required";

  return errors;
}

export function Booking() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const whatsappMessage = [
      "Hello GAURIÉ! I'd like to book a mehendi experience.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Event Type: ${form.eventType}`,
      `Event Date: ${form.eventDate}`,
      `Location: ${form.location}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(getWhatsAppUrl(whatsappMessage), "_blank");
    setSubmitted(true);
  };

  const inputClasses = (field: keyof FormErrors) =>
    cn(
      "w-full px-4 py-3 bg-ivory border rounded-sm text-charcoal text-sm placeholder:text-brown-muted/50 transition-all duration-300",
      "focus:border-gold focus:ring-2 focus:ring-gold/20",
      errors[field]
        ? "border-nude"
        : "border-cream hover:border-gold/30"
    );

  return (
    <section id="contact" className="py-24 md:py-32 pattern-floral relative">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Create Something Beautiful"
          subtitle="Share your vision with us and we'll craft a mehendi experience as unique as your celebration."
        />

        <AnimateOnScroll>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 bg-cream/60 border border-gold/20 rounded-sm"
            >
              <CheckCircle className="w-12 h-12 text-mehendi mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-mehendi">
                Thank You!
              </h3>
              <p className="mt-3 text-brown-muted">
                Your booking inquiry has been sent via WhatsApp. We&apos;ll get
                back to you within 24 hours.
              </p>
              <Button
                variant="outline"
                size="md"
                className="mt-6"
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                }}
              >
                Send Another Inquiry
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-brown-muted mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClasses("name")}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-nude">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-brown-muted mb-2">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses("phone")}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-nude">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-brown-muted mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses("email")}
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-nude">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="eventType" className="block text-xs tracking-widest uppercase text-brown-muted mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className={cn(inputClasses("eventType"), "cursor-pointer")}
                  >
                    <option value="">Select event type</option>
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="mt-1.5 text-xs text-nude">{errors.eventType}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-xs tracking-widest uppercase text-brown-muted mb-2">
                    Event Date *
                  </label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange}
                    className={inputClasses("eventDate")}
                  />
                  {errors.eventDate && (
                    <p className="mt-1.5 text-xs text-nude">{errors.eventDate}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-xs tracking-widest uppercase text-brown-muted mb-2">
                  Location *
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={handleChange}
                  className={inputClasses("location")}
                  placeholder="City, venue or address"
                />
                {errors.location && (
                  <p className="mt-1.5 text-xs text-nude">{errors.location}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-brown-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={cn(inputClasses("name"), "resize-none")}
                  placeholder="Tell us about your vision, number of guests, or any special requests..."
                />
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" variant="primary" className="w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  Book Your Mehendi Experience
                </Button>
              </div>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
