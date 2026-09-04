import { ImageResponse } from "next/og";
import { BRAND, CONTACT } from "@/lib/site";

/**
 * Tarjeta de previsualización del link.
 *
 * Es lo primero que ve el prospecto cuando le mandan el sitio por WhatsApp,
 * antes de abrirlo. Sin esto el link llega como texto pelón.
 * Next la genera en build y la sirve en /opengraph-image.
 */

export const alt = `${BRAND.name} — ${BRAND.tagline}`;
// next/og necesita el runtime edge: en Node falla al resolver sus assets
// en Windows, y en Vercel la genera igual sin costo adicional.
export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Instrument Serif desde Google Fonts, en TTF (satori no lee woff2).
 * Si la red falla en el build, cae a la tipografía por defecto en lugar de
 * romper el deploy.
 */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap"
    ).then((res) => res.text());

    const url = css.match(/src:\s*url\((https:[^)]+)\)\s*format\('truetype'\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const displayFont = await loadDisplayFont();
  const display = displayFont ? "Instrument Serif" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBFAF8",
          color: "#12110F",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logotipo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontFamily: display, fontSize: 46, lineHeight: 1 }}>
            {BRAND.shortName}
          </span>
          <span
            style={{
              fontSize: 17,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#75716A",
            }}
          >
            Studio
          </span>
        </div>

        {/* Mensaje */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div
            style={{
              display: "flex",
              fontFamily: display,
              fontSize: 76,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            {BRAND.tagline}
          </div>

          {/* El mismo gesto del sitio: tres líneas sueltas que se vuelven una. */}
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <div style={{ width: 96, height: 2, backgroundColor: "#C9C4BB" }} />
              <div style={{ width: 96, height: 2, backgroundColor: "#C9C4BB" }} />
              <div style={{ width: 96, height: 2, backgroundColor: "#C9C4BB" }} />
            </div>
            <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#D24A29" }} />
            <div style={{ width: 340, height: 4, backgroundColor: "#D24A29" }} />
          </div>
        </div>

        {/* Contacto */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#3A3833",
          }}
        >
          <span>WhatsApp {CONTACT.whatsappDisplay}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: displayFont
        ? [{ name: "Instrument Serif", data: displayFont, style: "normal", weight: 400 }]
        : undefined,
    }
  );
}
