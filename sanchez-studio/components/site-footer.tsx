import { BRAND, CONTACT, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper pb-28 pt-14 md:pb-14">
      <div className="shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="flex items-baseline gap-2">
            <span className="font-display text-[1.6rem] leading-none">{BRAND.shortName}</span>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
              Studio
            </span>
          </p>
          <p className="mt-4 max-w-prose text-[0.92rem] leading-relaxed text-muted">
            {BRAND.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={whatsappUrl("footer")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.95rem] text-ink transition-colors duration-300 hover:text-accent"
          >
            WhatsApp {CONTACT.whatsappDisplay}
          </a>
          <p className="text-[0.8rem] text-muted">
            © {year} {BRAND.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
