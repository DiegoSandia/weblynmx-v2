import { MEDIA } from "@/lib/media";
import { Reveal, Stagger, StaggerItem } from "./motion/reveal";
import { SectionHeading } from "./section-heading";
import { MediaFrame } from "./media-frame";

// Los cuatro giros salen del propio párrafo de la sección.
const VERTICALS = ["Restaurantes", "Clínicas", "Estudios de fitness", "Negocios de servicios"];

const PARALLAX = [7, 12, 9, 14];

export function Audience() {
  return (
    <section id="para-quien" className="scroll-mt-24 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="03" title="Para quién es esto" />

        <Reveal delay={0.06}>
          <p className="mt-12 max-w-[46ch] text-[clamp(1.15rem,2.2vw,1.6rem)] leading-[1.5] tracking-[-0.015em] text-ink-soft">
            Trabajamos con negocios locales que ya superaron la etapa de{" "}
            <span className="italic text-ink">“hazme un post”</span> — restaurantes,
            clínicas, estudios de fitness y negocios de servicios que buscan
            mercadotecnia profesional sin armar un equipo interno ni coordinar media
            docena de proveedores.
          </p>
        </Reveal>

        {/*
          [FOTO REAL] Una imagen por giro. Si ya hay trabajo hecho para alguno,
          va la foto del cliente real; si no, la imagen generada del prompt.
        */}
        <Stagger as="ul" className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {MEDIA.giros.map((media, i) => (
            <StaggerItem as="li" key={media.id} className="group">
              <MediaFrame
                media={media}
                parallax={PARALLAX[i]}
                rounded="rounded-2xl"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 23vw"
              />
              <div className="mt-4 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-line transition-colors duration-300 group-hover:bg-accent" />
                <span className="text-[0.95rem] font-medium leading-snug tracking-[-0.015em]">
                  {VERTICALS[i]}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
