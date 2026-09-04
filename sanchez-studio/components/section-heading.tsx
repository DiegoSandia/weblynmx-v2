import { Reveal } from "./motion/reveal";

/**
 * Cabecera editorial compartida: número de sección + título.
 * Los títulos son los mismos nombres de sección del brief — no se inventa copy.
 */
export function SectionHeading({
  index,
  title,
  tone = "light",
  className = "",
}: {
  index: string;
  title: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div className={className}>
      <Reveal>
        <p className={`eyebrow ${isDark ? "text-white/55" : "text-muted"}`}>
          <span className={`h-px w-8 shrink-0 ${isDark ? "bg-white/25" : "bg-line"}`} />
          {index}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-6 font-display text-title">{title}</h2>
      </Reveal>
    </div>
  );
}
