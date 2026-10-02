import { BRAND, CONTACT, SITE_URL } from "@/lib/site";
import {
  MOSTRAR_PENDIENTES,
  PRECIO,
  casosListos,
  equipoListo,
  preguntasListas,
} from "@/lib/contenido";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { HeroBand } from "@/components/hero-band";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Casos } from "@/components/casos";
import { Audience } from "@/components/audience";
import { Process } from "@/components/process";
import { Equipo } from "@/components/equipo";
import { Preguntas } from "@/components/preguntas";
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
  /*
    Las secciones de contenido pendiente no se montan hasta tener datos, así
    que la numeración se calcula aquí en vez de ir fija en cada componente.
    Si "Resultados" todavía no existe, "Para quién" es la 03 y no la 04 —
    nunca quedan huecos en la secuencia.
  */
  const hayCasos = casosListos().length > 0 || MOSTRAR_PENDIENTES;
  const hayEquipo = equipoListo() || MOSTRAR_PENDIENTES;
  const hayPreguntas =
    preguntasListas().length > 0 || PRECIO.trim().length > 0 || MOSTRAR_PENDIENTES;

  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  const iServicios = num();
  const iPorQue = num();
  const iCasos = hayCasos ? num() : "";
  const iParaQuien = num();
  const iComo = num();
  const iEquipo = hayEquipo ? num() : "";
  const iPreguntas = hayPreguntas ? num() : "";

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
        <Services index={iServicios} />
        <WhyUs index={iPorQue} />
        {/* La prueba va pegada al argumento: primero por qué, luego la evidencia. */}
        <Casos index={iCasos} />
        <Audience index={iParaQuien} />
        <Process index={iComo} />
        <Equipo index={iEquipo} />
        {/* Las objeciones, justo antes del cierre. */}
        <Preguntas index={iPreguntas} />
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
