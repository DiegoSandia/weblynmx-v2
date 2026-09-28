import { MEDIA } from "@/lib/media";
import { Reveal, Stagger, StaggerItem } from "./motion/reveal";
import { SectionHeading } from "./section-heading";
import { MediaFrame } from "./media-frame";

const SERVICES = [
  {
    title: "Producción de video",
    detail: "contenido de marca y redes, grabado y editado por nosotros.",
  },
  {
    title: "Desarrollo web y sistemas digitales",
    detail: "sitios, landing pages y herramientas a la medida, no plantillas.",
  },
  {
    title: "Redes sociales y estrategia de contenido",
    detail: "manejo de cuenta, calendario y community management.",
  },
  {
    title: "Pauta paga con seguimiento técnico real",
    detail:
      "Meta Ads y Google Ads, con tracking y landing configurados por el mismo equipo que corre la campaña.",
  },
  {
    title: "Paquetes integrados",
    detail: "todo el embudo bajo una sola relación de trabajo.",
  },
];

// Desfase vertical en desktop: rompe la retícula y se siente editorial.
const OFFSET = ["", "lg:mt-16", "", "lg:mt-16", ""];
// Cada imagen se mueve a distinta velocidad: da profundidad al hacer scroll.
const PARALLAX = [6, 11, 8, 13, 9];

export function Services() {
  return (
    <section id="que-hacemos" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="01" title="Qué hacemos" />
      </div>

      {/*
        Una imagen por disciplina, en el mismo orden que la lista de abajo.
        SIN pie de foto a propósito: repetía palabra por palabra los títulos de
        la lista, y esa redundancia costaba casi media pantalla en celular.
        En celular es un carrusel con snap; de tablet en adelante, retícula
        desfasada con parallax.
      */}
      <Reveal delay={0.08}>
        <div className="mt-14 flex snap-row gap-4 overflow-x-auto px-6 pb-2 sm:mx-auto sm:grid sm:max-w-shell sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-8 lg:grid-cols-5 lg:gap-6 lg:px-12">
          {MEDIA.servicios.map((media, i) => (
            <div
              key={media.id}
              className={`snap-item w-[68vw] shrink-0 sm:w-auto ${OFFSET[i]}`}
            >
              <MediaFrame
                media={media}
                parallax={PARALLAX[i]}
                sizes="(max-width: 640px) 68vw, (max-width: 1024px) 30vw, 18vw"
              />
            </div>
          ))}
        </div>
      </Reveal>

      <div className="shell">
        <Stagger as="ul" className="mt-16 border-t border-line">
          {SERVICES.map((service, i) => (
            <StaggerItem as="li" key={service.title} className="group border-b border-line">
              <div className="grid gap-2 py-6 transition-all duration-500 ease-editorial group-hover:pl-2 sm:py-8 lg:grid-cols-12 lg:gap-8">
                <span className="text-[0.75rem] tabular-nums tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-accent lg:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.25rem] font-medium leading-tight tracking-[-0.02em] sm:text-[1.45rem] lg:col-span-5">
                  {service.title}
                </h3>
                <p className="max-w-prose text-[0.97rem] leading-relaxed text-muted lg:col-span-6">
                  {service.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
