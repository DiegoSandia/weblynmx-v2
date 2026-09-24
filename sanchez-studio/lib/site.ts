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
 * Dominio del sitio. Se resuelve solo, en este orden:
 *   1. NEXT_PUBLIC_SITE_URL — se pone a mano cuando haya dominio propio.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — la inyecta Vercel sola, así que en el
 *      .vercel.app la tarjeta de WhatsApp funciona sin configurar nada.
 *   3. localhost en desarrollo.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * Interruptor de indexación. En false el sitio pide a los buscadores que NO
 * lo indexen — mientras el nombre de marca siga a prueba y el dominio sea
 * temporal, no conviene que Google levante "Sánchez Studio" en un .vercel.app
 * que después hay que limpiar.
 *
 * Ojo: NO se bloquea el rastreo en robots.txt. Si se bloqueara, el buscador no
 * podría leer la etiqueta noindex y la URL podría aparecer igual. Se deja
 * rastrear y se le sirve noindex, que es lo que sí garantiza que no indexe.
 *
 * Poner en true el día que el nombre y el dominio sean definitivos.
 */
export const INDEXABLE = false;

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
