import { MEDIA } from "@/lib/media";
import { Stagger, StaggerItem } from "./motion/reveal";
import { SectionHeading } from "./section-heading";
import { ScrollQuote } from "./scroll-quote";
import { MediaFrame } from "./media-frame";

/**
 * Los cuatro puntos del recorrido salen textualmente del párrafo de esta
 * sección (anuncio, clic, landing, venta). Los dos últimos van en acento:
 * son justamente los que la mayoría de las agencias no ve.
 */
const TRACK = [
  { label: "Anuncio", covered: false },
  { label: "Clic", covered: false },
  { label: "Landing y sitio", covered: true },
  { label: "Venta", covered: true },
];

const QUOTE = [
  {
    text: "La mayoría de las agencias de redes te reportan qué tan bien funcionó tu campaña mirando solo el anuncio.",
    className: "text-white/70",
  },
  {
    text: "Nosotros vemos también lo que pasa después del clic — la landing, el sitio, el sistema de seguimiento — porque lo construimos nosotros mismos.",
    className: "text-paper",
  },
  {
    text: "Diagnósticos más precisos, resultados que se rastrean hasta la venta, no solo hasta el clic.",
    className: "italic text-accent-light",
  },
];

export function WhyUs() {
  return (
    <section
      id="por-que-nosotros"
      className="scroll-mt-24 bg-ink py-24 text-paper sm:py-32"
    >
      <div className="shell">
        <SectionHeading index="02" title="Por qué nosotros" tone="dark" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ScrollQuote
              chunks={QUOTE}
              className="font-display text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.25] tracking-[-0.02em]"
            />
          </div>

          <div className="lg:col-span-5">
            {/*
              [FOTO REAL] Idealmente una captura real de un panel de resultados
              o del sitio entregado a un cliente — algo que sí construimos.
            */}
            <MediaFrame
              media={MEDIA.porQueNosotros}
              tone="dark"
              sizes="(max-width: 1024px) 100vw, 40vw"
              parallax={8}
            />
          </div>
        </div>

        <Stagger className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {TRACK.map((step) => (
            <StaggerItem key={step.label}>
              <div
                className={`h-px w-full ${step.covered ? "bg-accent-light" : "bg-white/20"}`}
              />
              <div className="mt-4 flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    step.covered ? "bg-accent-light" : "bg-white/35"
                  }`}
                />
                <span
                  className={`text-[0.8rem] tracking-[0.02em] ${
                    step.covered ? "text-paper" : "text-white/45"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
