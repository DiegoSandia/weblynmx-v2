import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site";

/** Favicon: monograma sobre el color de acento. */
// next/og necesita el runtime edge: en Node falla al resolver sus assets
// en Windows, y en Vercel la genera igual sin costo adicional.
export const runtime = "edge";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 42,
          lineHeight: 1,
          paddingBottom: 4,
        }}
      >
        {BRAND.shortName.charAt(0)}
      </div>
    ),
    size
  );
}
