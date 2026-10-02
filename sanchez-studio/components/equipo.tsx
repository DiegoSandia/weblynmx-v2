import Image from "next/image";
import { EQUIPO, MOSTRAR_PENDIENTES, equipoListo } from "@/lib/contenido";
import { Reveal } from "./motion/reveal";
import { SectionHeading } from "./section-heading";
import { Pendiente } from "./pendiente";

/**
 * Quién está detrás.
 *
 * [FOTO REAL — no generada] El retrato tiene que ser una foto de verdad. Una
 * cara inventada en la sección de "quiénes somos" es lo único de todo el sitio
 * que, si alguien lo nota, destruye la confianza en lugar de construirla.
 */
export function Equipo({ index }: { index: string }) {
  const listo = equipoListo();

  if (!listo && !MOSTRAR_PENDIENTES) return null;

  return (
    <section id="quienes-somos" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index={index} title="Quiénes somos" />

        {!listo ? (
          <Pendiente
            titulo="Falta tu nombre y tu cara"
            campos="Nombre, rol, una línea de cuánto llevas y de dónde vienes, y la ruta de un retrato real en /public/img/. Nada más."
          />
        ) : (
          <div className="mt-16 grid gap-10 sm:grid-cols-12 sm:gap-14">
            {EQUIPO.foto ? (
              <Reveal className="sm:col-span-5 lg:col-span-4">
                <div className="grain relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper-dim">
                  <Image
                    src={EQUIPO.foto}
                    alt={`Retrato de ${EQUIPO.nombre}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ) : null}

            <Reveal
              delay={0.08}
              className={EQUIPO.foto ? "sm:col-span-7 lg:col-span-8" : "sm:col-span-12"}
            >
              <p className="font-display text-title">{EQUIPO.nombre}</p>
              {EQUIPO.rol ? (
                <p className="mt-3 text-[0.78rem] uppercase tracking-[0.18em] text-muted">
                  {EQUIPO.rol}
                </p>
              ) : null}
              <p className="mt-8 max-w-prose text-[clamp(1.05rem,1.9vw,1.35rem)] leading-[1.5] tracking-[-0.015em] text-ink-soft">
                {EQUIPO.linea}
              </p>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
