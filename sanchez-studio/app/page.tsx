import { BRAND, CONTACT, SITE_URL } from "@/lib/site";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { HeroBand } from "@/components/hero-band";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Audience } from "@/components/audience";
import { Process } from "@/components/process";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";

/**
 * Datos estructurados. Sirven para que Google entienda de qué es el negocio
 * y muestre algo decente cuando busquen la marca por nombre.
 * Sólo datos verificables: nada de dirección, reseñas ni precios inventados.
 */
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND.name,
  description: BRAND.tagline,
  url: SITE_URL,
  telephone: `+${CONTACT.whatsappNumber}`,
  areaServed: { "@type": "Country", name: "México" },
  knowsLanguage: "es-MX",
  serviceType: [
    "Producción de video",
    "Desarrollo web y sistemas digitales",
    "Redes sociales y estrategia de contenido",
    "Pauta paga con seguimiento técnico real",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <SiteNav />
      <main>
        <Hero />
        <HeroBand />
        <Services />
        <WhyUs />
        <Audience />
        <Process />
        <FinalCta />
      </main>
      <SiteFooter />

      {/* Botón fijo de WhatsApp en celular. */}
      <MobileCtaBar />

      {/* Grano sobre todo el sitio: le quita el acabado plano de plantilla. */}
      <div aria-hidden="true" className="grain-global" />
    </>
  );
}
