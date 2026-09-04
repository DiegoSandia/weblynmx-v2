import Image from "next/image";
import { MEDIA } from "@/lib/media";
import { Reveal } from "./motion/reveal";
import { WhatsAppCta } from "./whatsapp-cta";

/** Cierre: repite el CTA del hero, con la misma frase del hero. */
export function FinalCta() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-28 text-paper sm:py-36">
      {/*
        [FOTO REAL] Fondo opcional del cierre. Va muy apagada a propósito:
        el protagonista es el botón, no la imagen.
      */}
      {MEDIA.cierre.ready && (
        <Image
          src={MEDIA.cierre.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18rem] left-1/2 h-[36rem] w-[62rem] -translate-x-1/2 rounded-full opacity-[0.28] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #D24A29 0%, rgba(210,74,41,0.3) 50%, rgba(210,74,41,0) 80%)",
        }}
      />

      <div className="shell relative text-center">
        <Reveal>
          <p className="mx-auto max-w-[18ch] font-display text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.02] tracking-[-0.03em]">
            Nosotros somos ese equipo, pero es uno solo.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 flex justify-center">
            <WhatsAppCta origin="cierre" variant="inverse" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
