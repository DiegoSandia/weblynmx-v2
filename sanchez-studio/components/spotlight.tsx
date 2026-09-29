"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Foco de luz que recorre la sección oscura.
 *
 * En desktop sigue al cursor; en celular —donde no hay cursor— barre de
 * izquierda a derecha conforme haces scroll. Va detrás del texto, nunca encima.
 *
 * No es decoración gratuita: la sección habla de ver lo que pasa después del
 * clic, y el gesto es literalmente alumbrar lo que estaba a oscuras.
 *
 * Se monta dentro de un contenedor con `position: relative`.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(30);
  const y = useMotionValue(50);

  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 });

  // Recorrido por scroll: la base para touch, y el punto de partida en desktop.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const barridoX = useTransform(scrollYProgress, [0, 1], [18, 82]);

  useEffect(() => {
    if (reduce) return;

    const el = ref.current?.parentElement;
    if (!el) return;

    // Mientras nadie mueva el cursor, manda el scroll.
    const desuscribir = barridoX.on("change", (valor) => x.set(valor));

    let usandoCursor = false;

    const onPointerMove = (evento: PointerEvent) => {
      if (evento.pointerType === "touch") return;
      if (!usandoCursor) {
        usandoCursor = true;
        desuscribir();
      }
      const caja = el.getBoundingClientRect();
      x.set(((evento.clientX - caja.left) / caja.width) * 100);
      y.set(((evento.clientY - caja.top) / caja.height) * 100);
    };

    el.addEventListener("pointermove", onPointerMove);
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      if (!usandoCursor) desuscribir();
    };
  }, [barridoX, reduce, x, y]);

  const fondo = useMotionTemplate`radial-gradient(34rem circle at ${sx}% ${sy}%, rgba(210,74,41,0.20), rgba(210,74,41,0.06) 38%, transparent 68%)`;

  if (reduce) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{ background: fondo }}
    />
  );
}
