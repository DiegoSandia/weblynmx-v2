/**
 * ÚNICO lugar donde viven el nombre de marca y los datos de contacto.
 * El nombre "Sánchez Studio" está a prueba: si cambia, se cambia AQUÍ y
 * se propaga a nav, hero, metadata, footer y al mensaje de WhatsApp.
 */

export const BRAND = {
  name: "Sánchez Studio",
  /** Se usa en el nav y en el footer como logotipo tipográfico. */
  shortName: "Sánchez",
  tagline: "Producción de video, desarrollo web y marketing digital en un solo equipo.",
} as const;

/**
 * Dominio del sitio. Sin esto, la imagen de previsualización de WhatsApp
 * no resuelve y el link se comparte sin tarjeta.
 * En Vercel: Settings → Environment Variables → NEXT_PUBLIC_SITE_URL
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanchez-studio.vercel.app";

export const CONTACT = {
  /** Número tal como se muestra en pantalla. */
  whatsappDisplay: "55 4142 6190",
  /** Número en formato internacional para wa.me (52 = México). */
  whatsappNumber: "525541426190",
} as const;

/**
 * De dónde salió el clic. Cada origen manda un mensaje precargado distinto,
 * así que al llegar el WhatsApp se sabe qué sección lo generó sin necesidad
 * de ninguna herramienta externa. Es el mismo seguimiento que le vendemos al
 * cliente, aplicado a nuestro propio embudo.
 */
export type CtaOrigin = "nav" | "hero" | "cierre" | "barra-movil" | "footer";

const ORIGIN_MESSAGE: Record<CtaOrigin, string> = {
  nav: `Hola ${BRAND.name}, quiero platicar sobre mi negocio.`,
  hero: `Hola ${BRAND.name}, vi su sitio y quiero platicar sobre mi negocio.`,
  cierre: `Hola ${BRAND.name}, terminé de leer su sitio y quiero platicar sobre mi negocio.`,
  "barra-movil": `Hola ${BRAND.name}, les escribo desde su sitio para platicar sobre mi negocio.`,
  footer: `Hola ${BRAND.name}, quiero más información sobre sus servicios.`,
};

/** Link de WhatsApp para un CTA concreto. */
export function whatsappUrl(origin: CtaOrigin) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    ORIGIN_MESSAGE[origin]
  )}`;
}

/** Etiqueta por defecto del botón principal. */
export const CTA_LABEL = "Escríbenos por WhatsApp";

/** Anclas de navegación. */
export const NAV_LINKS = [
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#por-que-nosotros", label: "Por qué nosotros" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
] as const;
