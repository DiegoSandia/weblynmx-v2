"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Chunk = { text: string; className?: string };

/**
 * Párrafo que se ilumina palabra por palabra conforme se hace scroll.
 * Es el efecto de la sección oscura y funciona igual con el dedo que con
 * el mouse — por eso está aquí y no un hover.
 */
export function ScrollQuote({
  chunks,
  className = "",
}: {
  chunks: Chunk[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  const words = chunks.flatMap((chunk, ci) =>
    chunk.text.split(" ").map((word, wi) => ({
      word,
      className: chunk.className,
      key: `${ci}-${wi}`,
    }))
  );

  return (
    <p ref={ref} className={className}>
      {words.map((item, i) => (
        <span key={item.key}>
          <Word
            progress={scrollYProgress}
            start={i / words.length}
            end={(i + 2) / words.length}
            className={item.className}
            reduce={Boolean(reduce)}
          >
            {item.word}
          </Word>{" "}
        </span>
      ))}
    </p>
  );
}

function Word({
  progress,
  start,
  end,
  className = "",
  reduce,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  className?: string;
  reduce: boolean;
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, [start, end], [0.16, 1]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={reduce ? undefined : { opacity }}
    >
      {children}
    </motion.span>
  );
}
