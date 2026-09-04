"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BRAND, NAV_LINKS } from "@/lib/site";
import { WhatsAppCta } from "./whatsapp-cta";
import { ScrollProgress } from "./scroll-progress";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-6 sm:h-20">
        <a
          href="#top"
          className="flex items-baseline gap-2 text-[1.05rem] tracking-[-0.02em]"
        >
          <span className="font-display text-[1.35rem] leading-none">{BRAND.shortName}</span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
            Studio
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.85rem] text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              <span className="after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 after:ease-editorial hover:after:w-full">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <WhatsAppCta origin="nav" label="WhatsApp" variant="outline" className="shrink-0" />
      </nav>

      {/* Progreso de lectura: una línea de acento que avanza con el scroll. */}
      <ScrollProgress />
    </motion.header>
  );
}
