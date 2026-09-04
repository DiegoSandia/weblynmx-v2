"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Elemento visual principal del hero: tres proveedores desconectados que
 * convergen en una sola línea. Es la traducción gráfica del headline —
 * por eso NO va aquí una foto stock.
 *
 * [FOTO/VIDEO REAL] Cuando exista reel de portafolio, la alternativa natural
 * es sustituir este bloque por un <video muted loop playsInline> 16:9 de ~8s
 * con el mejor material grabado, conservando el mismo espacio y proporción.
 *
 * Hay dos versiones: SVG horizontal (sm y arriba) y una vertical en HTML para
 * mobile, donde el texto dentro del SVG quedaría ilegible al escalar.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const SOURCES = [
  { label: "Un editor de video", y: 44, d: "M28 44 C 150 44, 210 150, 320 150" },
  { label: "Alguien de redes", y: 150, d: "M28 150 L 320 150" },
  { label: "Un programador", y: 256, d: "M28 256 C 150 256, 210 150, 320 150" },
];

const OUTCOME = "Un solo equipo";

function HorizontalMark() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="Tres proveedores separados que convergen en un solo equipo"
      className="h-auto w-full overflow-visible"
    >
      <defs>
        <linearGradient id="merged" x1="320" y1="150" x2="540" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D24A29" stopOpacity="0.35" />
          <stop offset="35%" stopColor="#D24A29" stopOpacity="1" />
          <stop offset="100%" stopColor="#D24A29" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Las tres entradas: gris, delgadas, deliberadamente sin jerarquía */}
      {SOURCES.map((source, i) => (
        <g key={source.label}>
          <motion.path
            d={source.d}
            fill="none"
            stroke="#12110F"
            strokeOpacity={0.22}
            strokeWidth={1.25}
            strokeLinecap="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, delay: 0.35 + i * 0.14, ease: EASE }}
          />
          <motion.circle
            cx={28}
            cy={source.y}
            r={3.5}
            fill="#FBFAF8"
            stroke="#12110F"
            strokeOpacity={0.35}
            strokeWidth={1.25}
            initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.14, ease: EASE }}
            style={{ transformOrigin: `28px ${source.y}px` }}
          />
          <motion.text
            x={46}
            y={source.y - 13}
            fill="#75716A"
            fontSize={15}
            letterSpacing="0.01em"
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.14 }}
          >
            {source.label}
          </motion.text>
        </g>
      ))}

      {/* Nodo de convergencia */}
      <motion.circle
        cx={320}
        cy={150}
        r={6}
        fill="#D24A29"
        initial={{ scale: reduce ? 1 : 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 1.25, ease: EASE }}
        style={{ transformOrigin: "320px 150px" }}
      />

      {/* La única línea que sale: gruesa, con acento. El equipo. */}
      <motion.path
        d="M320 150 L 528 150"
        fill="none"
        stroke="url(#merged)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
      />

      <motion.text
        x={528}
        y={132}
        textAnchor="end"
        fill="#12110F"
        fontSize={16}
        fontWeight={500}
        letterSpacing="0.01em"
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.9 }}
      >
        {OUTCOME}
      </motion.text>

      {/* Pulso continuo que recorre la línea unificada */}
      {!reduce && (
        <motion.circle
          cy={150}
          r={3}
          fill="#D24A29"
          initial={{ cx: 320, opacity: 0 }}
          animate={{ cx: [320, 528], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.6,
            delay: 2.2,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut",
          }}
        />
      )}
    </svg>
  );
}

function VerticalMark() {
  const reduce = useReducedMotion();

  return (
    <div>
      <ul className="space-y-4 border-l border-line pl-5">
        {SOURCES.map((source, i) => (
          <motion.li
            key={source.label}
            className="relative text-[0.95rem] text-muted"
            initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE }}
          >
            <span className="absolute -left-[23px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-line bg-paper" />
            {source.label}
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="h-10 w-px origin-top bg-accent"
        initial={{ scaleY: reduce ? 1 : 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
      />

      <motion.p
        className="flex items-center gap-3 text-[1.02rem] font-medium tracking-[-0.015em] text-ink"
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.35 }}
      >
        <span className="-ml-[3px] h-2 w-2 shrink-0 rounded-full bg-accent" />
        {OUTCOME}
      </motion.p>
    </div>
  );
}

export function ConvergenceMark() {
  return (
    <>
      <div className="sm:hidden">
        <VerticalMark />
      </div>
      <div className="hidden sm:block">
        <HorizontalMark />
      </div>
    </>
  );
}
