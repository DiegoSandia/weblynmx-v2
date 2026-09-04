"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Línea de progreso de lectura, pegada al borde inferior del nav. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
    />
  );
}
