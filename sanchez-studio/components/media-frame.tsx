"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Media } from "@/lib/media";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Marco de imagen del sitio. Todos los efectos son scroll-driven (no hover),
 * porque el público objetivo entra desde el celular y ahí no hay hover:
 *
 *  - Revelado por cortinilla (clip-path) al entrar en pantalla.
 *  - Parallax: la foto se mueve más lento que el bloque que la contiene.
 *  - Asentamiento: entra a 1.12 de escala y baja a 1.
 *  - Grano encima, para que no se sienta un render limpio de plantilla.
 *
 * Mientras `media.ready` sea false pinta un placeholder tipográfico con el
 * mismo movimiento, para poder juzgar el diseño antes de tener las fotos.
 */
export function MediaFrame({
  media,
  className = "",
  rounded = "rounded-[1.25rem]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  parallax = 7,
  priority = false,
  tone = "light",
  ratioClass,
}: {
  media: Media;
  className?: string;
  rounded?: string;
  sizes?: string;
  /** Recorrido del parallax en % de la altura del marco. 0 lo desactiva. */
  parallax?: number;
  priority?: boolean;
  tone?: "light" | "dark";
  /** Proporción por clases (para cambiarla por breakpoint). Gana sobre media.ratio. */
  ratioClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce || !parallax ? ["0%", "0%"] : [`-${parallax}%`, `${parallax}%`]
  );

  return (
    <motion.div
      ref={ref}
      className={`grain relative overflow-hidden bg-paper-dim ${rounded} ${ratioClass ?? ""} ${className}`}
      style={ratioClass ? undefined : { aspectRatio: media.ratio }}
      initial={{ clipPath: reduce ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 1.05, ease: EASE }}
    >
      {/* Contenedor sobredimensionado: da margen para que el parallax no deje huecos. */}
      <motion.div className="absolute -inset-y-[12%] inset-x-0" style={{ y }}>
        {media.ready ? (
          <motion.div
            className="relative h-full w-full"
            initial={{ scale: reduce ? 1 : 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            transition={{ duration: 1.4, ease: EASE }}
          >
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover"
            />
          </motion.div>
        ) : (
          <Placeholder media={media} tone={tone} />
        )}
      </motion.div>

      {/* Tinte cálido mínimo para que todas las fotos convivan con el acento. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          tone === "dark" ? "bg-ink/25" : "bg-accent/[0.06]"
        } mix-blend-multiply`}
      />
    </motion.div>
  );
}

/** Estado sin foto: se ve deliberado, no roto. */
function Placeholder({ media, tone }: { media: Media; tone: "light" | "dark" }) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex h-full w-full flex-col justify-between p-5 sm:p-6 ${
        isDark ? "bg-[#1B1917] text-white/45" : "bg-paper-dim text-muted"
      }`}
      style={{
        backgroundImage: isDark
          ? "linear-gradient(135deg, rgba(210,74,41,0.22) 0%, rgba(210,74,41,0) 55%)"
          : "linear-gradient(135deg, rgba(210,74,41,0.16) 0%, rgba(210,74,41,0) 58%)",
      }}
    >
      <span className="text-[0.62rem] uppercase tracking-[0.22em]">{media.id}</span>
      <span className="text-[0.68rem] leading-relaxed">
        {media.src.replace("/img/", "")}
        <br />
        <span className="opacity-70">{media.ratio.replace(" / ", ":")}</span>
      </span>
    </div>
  );
}
