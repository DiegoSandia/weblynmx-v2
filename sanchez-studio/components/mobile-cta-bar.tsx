"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { trackWhatsAppClick } from "@/lib/analytics";
import { CTA_LABEL, whatsappUrl } from "@/lib/site";
import { WhatsAppGlyph } from "./whatsapp-cta";

/**
 * Barra fija de WhatsApp para celular. Aparece cuando el hero ya salió de
 * pantalla y se esconde al llegar al CTA final (para no encimarse con él).
 * En desktop no existe: ahí el botón del nav siempre está a la vista.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.85;
      const nearEnd =
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - window.innerHeight * 0.9;
      setVisible(past && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "130%" }}
          animate={{ y: "0%" }}
          exit={{ y: "130%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] md:hidden"
        >
          <a
            href={whatsappUrl("barra-movil")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("barra-movil")}
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-4 text-[0.95rem] font-medium text-paper shadow-[0_14px_36px_-14px_rgba(18,17,15,0.7)] transition-transform duration-200 active:scale-[0.98]"
          >
            <WhatsAppGlyph className="h-[1.15em] w-[1.15em]" />
            {CTA_LABEL}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
