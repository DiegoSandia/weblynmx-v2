# Sánchez Studio — landing page

Landing de una sola página. Next.js 14 (App Router) + Tailwind CSS + Framer Motion.
Lista para deploy en Vercel.

## Correr en local

```bash
npm install
npm run dev
```

## Los dos datos que se cambian seguido

Todo vive en [`lib/site.ts`](lib/site.ts). **No** hay nombre de marca ni número
de WhatsApp hardcodeado en ninguna sección.

- `BRAND.name` / `BRAND.shortName` — el nombre "Sánchez Studio" está a prueba.
  Cambiando estas dos constantes se actualizan nav, footer, `<title>`, metadata
  y el mensaje precargado de WhatsApp.
- `CONTACT.whatsappNumber` — número en formato internacional (52 + 10 dígitos).
  De ahí se arma `WHATSAPP_URL`, que usan los cuatro CTAs del sitio.
- `CONTACT.whatsappMessage` — mensaje con el que abre el chat.
- `CTA_LABEL` — texto del botón principal.

## Estructura

| Archivo | Sección |
| --- | --- |
| `components/site-nav.tsx` | Nav fija |
| `components/hero.tsx` | 1. Hero |
| `components/convergence-mark.tsx` | Gráfico del hero (SVG desktop + versión vertical mobile) |
| `components/services.tsx` | 2. Qué hacemos |
| `components/why-us.tsx` | 3. Por qué nosotros (bloque oscuro) |
| `components/audience.tsx` | 4. Para quién es esto |
| `components/process.tsx` | 5. Cómo trabajamos |
| `components/final-cta.tsx` | 6. CTA final |
| `components/site-footer.tsx` | Footer |
| `components/hero-band.tsx` | Banda de imagen que se abre a todo lo ancho al hacer scroll |
| `components/media-frame.tsx` | Marco de imagen: cortinilla + parallax + grano |
| `components/scroll-quote.tsx` | Párrafo que se ilumina palabra por palabra |
| `components/mobile-cta-bar.tsx` | Botón fijo de WhatsApp en celular |
| `components/scroll-progress.tsx` | Línea de progreso de lectura en el nav |
| `components/motion/reveal.tsx` | Primitivas de animación (`Reveal`, `Stagger`) |

## Diseño

- Un solo acento: `#D24A29` (token `accent` en `tailwind.config.ts`). Todo lo
  demás es papel (`#FBFAF8`) y tinta (`#12110F`).
- Tipografía: Instrument Serif para titulares, Inter para texto (vía `next/font`).
- Todos los efectos son **scroll-driven**, no hover: en celular no hay hover y ese
  es el dispositivo principal del público objetivo.
- Todas las animaciones respetan `prefers-reduced-motion`.

## Imágenes

Las 11 imágenes del sitio están declaradas en [`lib/media.ts`](lib/media.ts).
Mientras `ready` sea `false` se pinta un placeholder tipográfico con el mismo
movimiento que tendrá la foto — el sitio nunca se ve roto.

Para agregar una: genera la imagen con el prompt de
[`PROMPTS-IMAGENES.md`](PROMPTS-IMAGENES.md), guárdala en `/public/img/` con el
nombre exacto de `src`, y cambia `ready` a `true`.

## Seguimiento

Cada uno de los 5 CTAs manda un mensaje precargado distinto (`CtaOrigin` en
[`lib/site.ts`](lib/site.ts)), así que al llegar el WhatsApp se sabe de qué
sección salió sin ninguna herramienta externa:

| Origen | Mensaje que llega |
| --- | --- |
| Nav | "…quiero platicar sobre mi negocio." |
| Hero | "…vi su sitio y quiero platicar…" |
| Cierre | "…terminé de leer su sitio…" |
| Barra móvil | "…les escribo desde su sitio…" |
| Footer | "…quiero más información sobre sus servicios." |

Además, [`lib/analytics.ts`](lib/analytics.ts) dispara el evento de conversión en
Meta Pixel, GA4, GTM y Vercel Analytics. No requiere instalar ningún SDK: si la
herramienta no está en la página, la llamada no ocurre. Al pegar el pixel en el
layout, los eventos empiezan a llegar solos.

Vercel Analytics hay que activarlo en el panel del proyecto (Analytics → Enable).

## SEO y compartir

- `app/opengraph-image.tsx` — tarjeta de 1200×630 para WhatsApp y redes.
- `app/icon.tsx` y `app/apple-icon.tsx` — favicon y icono de pantalla de inicio.
- `app/robots.ts`, `app/sitemap.ts`, y JSON-LD de `ProfessionalService` en la home.
- `app/not-found.tsx` — 404 con la identidad del sitio.

Las tres rutas de imagen usan `runtime = "edge"`: en Node, `next/og` falla al
resolver sus assets en Windows.

## Deploy en Vercel

Importar este directorio como proyecto nuevo. Framework: Next.js.

**Variable obligatoria:** `NEXT_PUBLIC_SITE_URL` con el dominio real (ver
`.env.example`). Sin ella la tarjeta de previsualización no funciona.
