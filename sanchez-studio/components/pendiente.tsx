/**
 * Marca de sección sin contenido. Solo se dibuja en desarrollo — en producción
 * la sección entera no se monta, así que un prospecto nunca ve esto.
 */
export function Pendiente({
  titulo,
  campos,
  archivo = "lib/contenido.ts",
}: {
  titulo: string;
  campos: string;
  archivo?: string;
}) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-accent/40 bg-accent-soft/40 px-6 py-8">
      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-accent">
        Pendiente · solo visible en desarrollo
      </p>
      <p className="mt-3 text-[1.05rem] font-medium tracking-[-0.015em]">{titulo}</p>
      <p className="mt-2 max-w-prose text-[0.92rem] leading-relaxed text-muted">{campos}</p>
      <p className="mt-4 text-[0.8rem] text-muted">
        Se llena en <span className="text-ink">{archivo}</span>. En cuanto tenga datos,
        la sección aparece sola en el sitio.
      </p>
    </div>
  );
}
