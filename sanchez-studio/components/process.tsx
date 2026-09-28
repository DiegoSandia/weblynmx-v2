import { MEDIA } from "@/lib/media";
import { Stagger, StaggerItem } from "./motion/reveal";
import { SectionHeading } from "./section-heading";
import { MediaFrame } from "./media-frame";

const STEPS = [
  {
    title: "Diagnóstico",
    detail: "revisamos dónde estás hoy: presencia digital, contenido, sitio, campañas activas.",
  },
  {
    title: "Plan integrado",
    detail: "un solo plan que cubre producción, distribución y conversión.",
  },
  {
    title: "Producción y optimización continua",
    detail: "ejecutamos y ajustamos con datos reales.",
  },
];

const PARALLAX = [6, 9, 12];

export function Process() {
  return (
    <section
      id="como-trabajamos"
      className="scroll-mt-24 border-t border-line bg-paper-dim py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading index="04" title="Cómo trabajamos" />

        {/*
          [FOTO REAL] Las tres imágenes son una sola narrativa: la misma hoja de
          papel diagnosticada, planeada y corregida. Sustituyen a la línea guía
          animada que había antes — con imagen, esa línea competía en vez de sumar.
        */}
        <Stagger as="ol" className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <StaggerItem as="li" key={step.title}>
              <MediaFrame
                media={MEDIA.proceso[i]}
                parallax={PARALLAX[i]}
                rounded="rounded-xl"
                sizes="(max-width: 768px) 100vw, 30vw"
              />

              <div className="mt-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-[0.72rem] uppercase tracking-[0.2em] text-muted">
                  Paso {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-3 text-[1.25rem] font-medium leading-tight tracking-[-0.02em] sm:text-[1.4rem]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-prose text-[0.97rem] leading-relaxed text-muted">
                {step.detail}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
