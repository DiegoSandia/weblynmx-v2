"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "./motion/reveal";
import { SectionHeading } from "./section-heading";

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

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="como-trabajamos"
      className="scroll-mt-24 border-t border-line bg-paper-dim py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading index="04" title="Cómo trabajamos" />

        <div className="relative mt-16">
          {/* Línea guía: horizontal en desktop, vertical en mobile. Se dibuja al entrar. */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: reduce ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[7px] top-2 h-[calc(100%-2rem)] w-px origin-top bg-line md:hidden"
          />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-[7px] hidden h-px w-full origin-left bg-line md:block"
          />

          <Stagger as="ol" className="grid gap-12 md:grid-cols-3 md:gap-10">
            {STEPS.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="relative pl-8 md:pl-0 md:pt-10">
                <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border border-line bg-paper-dim md:top-0" />
                <span className="absolute left-[5px] top-[11px] h-1.5 w-1.5 rounded-full bg-accent md:left-1 md:top-1" />

                <span className="block text-[0.72rem] uppercase tracking-[0.2em] text-muted">
                  Paso {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.3rem] font-medium leading-tight tracking-[-0.02em] sm:text-[1.45rem]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-prose text-[0.98rem] leading-relaxed text-muted">
                  {step.detail}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
