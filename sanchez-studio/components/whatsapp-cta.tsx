"use client";

import { trackWhatsAppClick } from "@/lib/analytics";
import { CTA_LABEL, whatsappUrl, type CtaOrigin } from "@/lib/site";

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.38a9.83 9.83 0 0 0 4.6 1.16h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.03-5.11-2.9-6.97A9.79 9.79 0 0 0 12.04 2Zm0 1.8c2.15 0 4.17.84 5.69 2.36a8.02 8.02 0 0 1 2.36 5.7c0 4.45-3.62 8.06-8.06 8.06a8.06 8.06 0 0 1-4.1-1.12l-.3-.18-3.05.8.82-2.97-.2-.31a8.02 8.02 0 0 1-1.23-4.28c0-4.45 3.62-8.06 8.07-8.06Zm-3.1 4.06c-.15 0-.38.06-.58.28-.2.22-.77.75-.77 1.82 0 1.07.79 2.11.9 2.25.11.15 1.53 2.34 3.71 3.28.52.22.92.36 1.24.46.52.17.99.14 1.37.09.42-.06 1.29-.53 1.47-1.04.18-.51.18-.95.13-1.04-.05-.09-.2-.15-.42-.26-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11-.14.22-.56.71-.69.86-.13.15-.25.16-.47.06-.22-.11-.93-.35-1.78-1.1-.66-.59-1.1-1.31-1.23-1.53-.13-.22-.02-.34.1-.45.1-.1.22-.25.33-.38.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.19-.68-1.63-.18-.43-.36-.37-.5-.38h-.42Z" />
    </svg>
  );
}

/**
 * CTA principal del sitio. El destino y el mensaje precargado se arman en
 * lib/site.ts a partir del `origin` — nunca hardcodear el número aquí.
 * Cada clic dispara el evento de conversión (lib/analytics.ts).
 */
export function WhatsAppCta({
  origin,
  label = CTA_LABEL,
  variant = "solid",
  className = "",
}: {
  origin: CtaOrigin;
  label?: string;
  variant?: "solid" | "outline" | "inverse";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-300 ease-editorial will-change-transform";

  const sizes =
    variant === "outline" ? "px-5 py-2.5 text-[0.85rem]" : "px-7 py-4 sm:px-8";

  const variants = {
    solid:
      "bg-accent text-paper shadow-[0_1px_2px_rgba(18,17,15,0.08)] hover:bg-ink hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(18,17,15,0.45)]",
    outline:
      "border border-line bg-paper/70 text-ink backdrop-blur hover:border-ink hover:bg-paper",
    inverse:
      "bg-paper text-ink hover:-translate-y-0.5 hover:bg-accent hover:text-paper shadow-[0_10px_30px_-16px_rgba(0,0,0,0.8)]",
  } as const;

  return (
    <a
      href={whatsappUrl(origin)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(origin)}
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
    >
      <WhatsAppGlyph className="h-[1.15em] w-[1.15em] shrink-0" />
      <span>{label}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 ease-editorial group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </a>
  );
}
