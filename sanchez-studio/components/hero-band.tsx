"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MEDIA } from "@/lib/media";
import { MediaFrame } from "./media-frame";

/**
 * Banda de imagen entre el hero y los servicios.
 * Al hacer scroll la imagen se abre a todo lo ancho y pierde el radio:
 * es el gesto que separa la primera pantalla del resto del sitio.
 *
 * [FOTO/VIDEO REAL] Este es el mejor lugar del sitio para el frame más fuerte
 * del portafolio, o para un <video muted loop playsInline> corto.
 */
export function HeroBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["86%", "100%"]);
  const radius = useTransform(scrollYProgress, [0, 1], [26, 2]);

  return (
    <section ref={ref} className="pb-24 sm:pb-32">
      <motion.div
        style={
          reduce
            ? { width: "100%", borderRadius: 2 }
            : { width, borderRadius: radius }
        }
        className="mx-auto overflow-hidden"
      >
        <MediaFrame
          media={MEDIA.hero}
          rounded="rounded-none"
          ratioClass="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
          sizes="100vw"
          parallax={9}
          priority
        />
      </motion.div>
    </section>
  );
}
