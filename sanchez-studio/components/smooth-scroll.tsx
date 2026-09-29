"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Scroll con inercia.
 *
 * Es el efecto que más cambia la percepción del sitio por línea de código: el
 * scroll deja de ser un salto del navegador y se convierte en un movimiento con
 * peso. Es lo que separa un sitio caro de uno normal antes de que el visitante
 * lea una sola palabra.
 *
 * Se apaga por completo si el usuario pidió menos movimiento, y ahí el scroll
 * vuelve a ser el nativo.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      // Curva exponencial: arranca rápido y se asienta. Nada de rebote.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Los anclas del nav también entran con inercia, no de un brinco.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
