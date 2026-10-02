import { MOSTRAR_PENDIENTES, PRECIO, preguntasListas } from "@/lib/contenido";
import { Reveal, Stagger, StaggerItem } from "./motion/reveal";
import { SectionHeading } from "./section-heading";
import { Pendiente } from "./pendiente";

/**
 * Las objeciones, respondidas antes del cierre.
 *
 * Va pegada al CTA final a propósito: son las cuatro cosas que el prospecto
 * se está preguntando justo cuando va a decidir si escribe o no.
 *
 * Sin acordeón: con cuatro respuestas de dos líneas, esconderlas detrás de un
 * clic solo añade fricción a lo que queremos que lean.
 */
export function Preguntas({ index }: { index: string }) {
  const preguntas = preguntasListas();
  const hayPrecio = PRECIO.trim().length > 0;

  if (preguntas.length === 0 && !hayPrecio && !MOSTRAR_PENDIENTES) return null;

  return (
    <section id="preguntas" className="scroll-mt-24 border-t border-line bg-paper-dim py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index={index} title="Preguntas" />

        {hayPrecio ? (
          <Reveal as="p" className="mt-10 max-w-prose text-[clamp(1.1rem,2vw,1.45rem)] leading-[1.45] tracking-[-0.015em]">
            {PRECIO}
          </Reveal>
        ) : null}

        {preguntas.length === 0 ? (
          <Pendiente
            titulo="Faltan las respuestas"
            campos="Las cuatro preguntas ya están escritas: ya tengo agencia, contrato largo, en cuánto arrancan, mi giro. Faltan las respuestas, de dos líneas cada una. Y si quieres, el rango de precio."
          />
        ) : (
          <Stagger as="dl" className="mt-14 border-t border-line">
            {preguntas.map((item) => (
              <StaggerItem key={item.pregunta} className="border-b border-line">
                <div className="grid gap-3 py-7 sm:py-9 lg:grid-cols-12 lg:gap-8">
                  <dt className="text-[1.1rem] font-medium leading-tight tracking-[-0.02em] sm:text-[1.25rem] lg:col-span-5">
                    {item.pregunta}
                  </dt>
                  <dd className="max-w-prose text-[0.98rem] leading-relaxed text-muted lg:col-span-7">
                    {item.respuesta}
                  </dd>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
