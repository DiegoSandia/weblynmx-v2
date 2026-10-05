"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Media } from "@/lib/media";
import { MediaFrame } from "./media-frame";

export type ItemGaleria = {
  media: Media;
  title: string;
  detail: string;
};

/**
 * Galería anclada: la sección se queda fija en pantalla y las tarjetas se
 * desplazan de lado mientras haces scroll vertical.
 *
 * Cada tarjeta lleva su título y su línea. Sin eso, el visitante pasa casi
 * mil píxeles de scroll viendo imágenes abstractas con un número debajo y
 * nada que las explique: la lista que las describe queda hasta después del
 * recorrido, o sea, demasiado tarde.
 *
 * Solo en desktop (lg y arriba). En celular no tiene sentido secuestrar el
 * scroll vertical, así que ahí va el carrusel con swipe — ese vive en
 * services.tsx y este bloque queda oculto, sin descargar sus imágenes.
 */
export function PinnedGallery({
  items,
  eyebrow,
  title,
}: {
  items: readonly ItemGaleria[];
  eyebrow: string;
  title: string;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const [distancia, setDistancia] = useState(0);

  useEffect(() => {
    const medir = () => {
      const track = trackRef.current;
      if (!track) return;
      const nueva = Math.max(0, track.scrollWidth - window.innerWidth + 96);

      setDistancia((anterior) => {
        if (anterior === nueva) return anterior;

        /*
          useScroll mide el rango del contenedor una sola vez al montar, cuando
          la distancia todavía era 0 y por tanto el rango también. Al crecer el
          contenedor no vuelve a medir solo, y el riel se queda quieto.
          Un resize sintético lo obliga a re-medir con la altura ya correcta.
        */
        requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
        return nueva;
      });
    };

    medir();
    window.addEventListener("resize", medir);

    const observer = new ResizeObserver(medir);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => {
      window.removeEventListener("resize", medir);
      observer.disconnect();
    };
  }, [items.length]);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  // Sin resorte a propósito: Lenis ya suaviza la posición del scroll, y un
  // muelle encima suaviza dos veces — se siente con retraso, no con peso.
  const x = useTransform(scrollYProgress, [0, 1], [0, -distancia]);

  return (
    <div
      ref={outerRef}
      className="relative hidden lg:block"
      style={{ height: `calc(100vh + ${distancia}px)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="shell shrink-0 pb-8">
          <p className="eyebrow">
            <span className="h-px w-8 shrink-0 bg-line" />
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-title">{title}</h2>
        </div>

        <motion.div
          ref={trackRef}
          style={reduce ? undefined : { x }}
          className="flex shrink-0 gap-6 px-12"
        >
          {items.map((item, i) => (
            <figure key={item.media.id} className="w-[20rem] shrink-0 2xl:w-[22rem]">
              <MediaFrame media={item.media} parallax={4} sizes="22rem" />

              <figcaption className="mt-4">
                <span className="text-[0.72rem] tabular-nums tracking-[0.2em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-[1.05rem] font-medium leading-snug tracking-[-0.02em]">
                  {item.title}
                </p>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">
                  {item.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
