import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site";

/** Icono para cuando alguien guarda el sitio en la pantalla de inicio del iPhone. */
// next/og necesita el runtime edge: en Node falla al resolver sus assets
// en Windows, y en Vercel la genera igual sin costo adicional.
export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D24A29",
          color: "#FBFAF8",
          fontFamily: "serif",
          fontSize: 118,
          lineHeight: 1,
          paddingBottom: 12,
        }}
      >
        {BRAND.shortName.charAt(0)}
      </div>
    ),
    size
  );
}
