"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppCta } from "./whatsapp-cta";
import { ConvergenceMark } from "./convergence-mark";

const EASE = [0.22, 1, 0.36, 1] as const;

// Headline literal del brief, partido en dos para poder dar énfasis tipográfico
// a la segunda mitad sin alterar una sola palabra.
const HEADLINE_A =
  "Hoy manejas tu marca coordinando a un editor de video, alguien de redes, y un programador";
const HEADLINE_B = "— y ninguno de los tres sabe lo que hacen los otros dos.";

function Words({
  text,
  className = "",
  delayStart = 0,
}: {
  text: string;
  className?: string;
  delayStart?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: reduce ? 0 : "105%", opacity: reduce ? 1 : 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: delayStart + i * 0.028,
              ease: EASE,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48">
      {/* Único gradiente del sitio: un halo tenue del color de acento detrás del hero. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[72rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #D24A29 0%, rgba(210,74,41,0.25) 45%, rgba(210,74,41,0) 78%)",
        }}
      />

      <div className="shell relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow"
        >
          <span className="h-px w-8 shrink-0 bg-line" />
          Producción de video · Desarrollo web · Marketing digital
        </motion.p>

        <h1 className="mt-8 max-w-[20ch] font-display text-display">
          <Words text={HEADLINE_A} delayStart={0.12} />{" "}
          <Words
            text={HEADLINE_B}
            className="italic text-accent"
            delayStart={0.12 + HEADLINE_A.split(" ").length * 0.028}
          />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 h-px w-full bg-line origin-left"
        />

        <div className="grid gap-12 pb-24 pt-10 sm:pb-32 lg:grid-cols-12 lg:gap-16 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: EASE }}
            className="lg:col-span-5"
          >
            <p className="max-w-prose text-lede text-ink-soft">
              Nosotros somos ese equipo, pero es uno solo.
            </p>
            <div className="mt-9">
              <WhatsAppCta origin="hero" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 lg:pt-2">
            <ConvergenceMark />
          </div>
        </div>
      </div>
    </section>
  );
}
