import type { CtaOrigin } from "./site";

/**
 * Evento de clic a WhatsApp.
 *
 * No requiere instalar ningún SDK: si la herramienta no está en la página,
 * la llamada simplemente no ocurre. Cuando se agregue Meta Pixel, GA4 o GTM
 * al layout, los eventos empiezan a llegar solos, sin tocar este archivo.
 *
 * Este es el evento de conversión del sitio. Todo lo demás es tráfico.
 */
export function trackWhatsAppClick(origin: CtaOrigin) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    va?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };

  try {
    // Meta Pixel — "Contact" es el evento estándar para inicio de conversación.
    w.fbq?.("track", "Contact", { content_name: origin });

    // Google Analytics 4 / Google Ads
    w.gtag?.("event", "whatsapp_click", { origin });

    // Vercel Analytics (evento personalizado)
    w.va?.("event", { name: "whatsapp_click", data: { origin } });

    // Google Tag Manager
    w.dataLayer?.push({ event: "whatsapp_click", origin });
  } catch {
    // Un bloqueador de anuncios no debe impedir que el link abra WhatsApp.
  }
}
