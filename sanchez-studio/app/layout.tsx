import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { BRAND, INDEXABLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Serif editorial para titulares. Un solo peso, como en prensa impresa.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const TITLE = `${BRAND.name} — Video, web y marketing en un solo equipo`;

export const metadata: Metadata = {
  // Sin metadataBase, la imagen de previsualización se sirve con URL relativa
  // y WhatsApp no la levanta. Es el error más común al compartir un link.
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: BRAND.tagline,
  applicationName: BRAND.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: BRAND.tagline,
    url: "/",
    siteName: BRAND.name,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: BRAND.tagline,
  },
  // Controlado por INDEXABLE en lib/site.ts.
  robots: INDEXABLE
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
      }
    : {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        {children}
        {/*
          Analítica de Vercel. Hay que activarla en el panel del proyecto
          (Analytics → Enable); mientras tanto no hace nada.
          Los eventos de conversión salen de lib/analytics.ts.
        */}
        <Analytics />
      </body>
    </html>
  );
}
