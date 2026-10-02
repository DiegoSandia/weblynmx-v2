import { CASOS, MOSTRAR_PENDIENTES, casosListos } from "@/lib/contenido";
import { Stagger, StaggerItem } from "./motion/reveal";
import { SectionHeading } from "./section-heading";
import { Pendiente } from "./pendiente";

/**
 * La prueba. Es el hueco más caro que tiene la landing: todo el argumento
 * depende de que el modelo integrado funcione, y hasta ahora no hay nada que
 * lo verifique.
 *
 * Va justo después de "Por qué nosotros" a propósito: primero el argumento,
 * inmediatamente después la evidencia.
 */
export function Casos({ index }: { index: string }) {
  const casos = casosListos();

  if (casos.length === 0 && !MOSTRAR_PENDIENTES) return null;

  return (
    <section id="casos" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index={index} title="Resultados" />

        {casos.length === 0 ? (
          <Pendiente
            titulo="Faltan los tres casos"
            campos="Por cada uno: giro y zona, periodo, qué estaba pasando, qué hicimos, y una sola métrica con su unidad. Sin nombre del cliente si no hay permiso."
          />
        ) : (
          <Stagger as="ul" className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-3">
            {casos.map((caso) => (
              <StaggerItem
                as="li"
                key={caso.giro + caso.metrica}
                className="flex flex-col bg-paper px-6 py-8 sm:px-7 sm:py-10"
              >
                <p className="font-display text-[clamp(2.6rem,6vw,3.6rem)] leading-none tracking-[-0.03em] text-accent">
                  {caso.metrica}
                </p>
                <p className="mt-3 text-[0.9rem] leading-snug text-muted">{caso.unidad}</p>

                <div className="mt-8 h-px w-full bg-line" />

                <p className="mt-6 text-[1.02rem] font-medium leading-snug tracking-[-0.015em]">
                  {caso.giro}
                </p>
                <p className="mt-1 text-[0.8rem] uppercase tracking-[0.16em] text-muted">
                  {caso.periodo}
                </p>

                <p className="mt-6 text-[0.95rem] leading-relaxed text-ink-soft">
                  {caso.situacion}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{caso.hicimos}</p>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
