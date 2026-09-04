import Link from "next/link";
import { BRAND } from "@/lib/site";
import { WhatsAppCta } from "@/components/whatsapp-cta";

/** 404 con la misma tipografía y el mismo acento que el resto del sitio. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <div className="shell py-24">
        <p className="eyebrow">
          <span className="h-px w-8 shrink-0 bg-line" />
          Error 404
        </p>

        <h1 className="mt-8 max-w-[14ch] font-display text-title">
          Esta página no existe.
        </h1>

        <p className="mt-6 max-w-prose text-[1.05rem] leading-relaxed text-muted">
          El enlace está roto o la página se movió. Puedes volver al inicio o
          escribirnos directamente.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <WhatsAppCta origin="footer" />
          <Link
            href="/"
            className="text-[0.95rem] text-ink-soft underline decoration-line underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
          >
            Volver a {BRAND.name}
          </Link>
        </div>
      </div>
    </main>
  );
}
