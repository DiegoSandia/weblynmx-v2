/**
 * Manifiesto de imágenes del sitio.
 *
 * CÓMO AGREGAR UNA IMAGEN REAL:
 *   1. Genera la imagen con el prompt correspondiente (ver PROMPTS-IMAGENES.md).
 *   2. Guárdala en /public/img/ con EXACTAMENTE el nombre de `src`.
 *   3. Cambia `ready` a true.
 *
 * Mientras `ready` sea false se pinta un placeholder tipográfico intencional
 * (no una imagen rota). El sitio nunca se ve incompleto.
 */

export type Media = {
  /** Identificador corto que se muestra en el placeholder. */
  id: string;
  /** Ruta dentro de /public. */
  src: string;
  /** Texto alternativo. Obligatorio: son imágenes de contenido, no decorativas. */
  alt: string;
  /** Proporción, en formato CSS aspect-ratio. */
  ratio: string;
  /** Cambiar a true cuando el archivo ya exista en /public/img. */
  ready: boolean;
};

export const MEDIA = {
  hero: {
    id: "IMG-01",
    src: "/img/01-hero-banda.jpg",
    alt: "Composición abstracta de luz y material que representa al estudio",
    ratio: "21 / 9",
    ready: true,
  },

  // Una por disciplina, en el mismo orden que la lista de servicios.
  servicios: [
    {
      id: "IMG-02",
      src: "/img/02-produccion-video.jpg",
      alt: "Producción de video: luz de set y textura de película",
      ratio: "4 / 5",
      ready: true,
    },
    {
      id: "IMG-03",
      src: "/img/03-desarrollo-web.jpg",
      alt: "Desarrollo web: estructura y retícula construida a la medida",
      ratio: "4 / 5",
      ready: true,
    },
    {
      id: "IMG-04",
      src: "/img/04-redes-contenido.jpg",
      alt: "Redes y contenido: calendario de piezas en formato vertical",
      ratio: "4 / 5",
      ready: true,
    },
    {
      id: "IMG-05",
      src: "/img/05-pauta-tracking.jpg",
      alt: "Pauta con seguimiento: trayectoria de datos hasta la conversión",
      ratio: "4 / 5",
      ready: true,
    },
  ],

  porQueNosotros: {
    id: "IMG-06",
    src: "/img/06-despues-del-clic.jpg",
    alt: "Lo que pasa después del clic: recorrido completo hasta la venta",
    ratio: "5 / 4",
    ready: true,
  },

  // Una por giro de negocio, en el mismo orden que las tarjetas.
  giros: [
    {
      id: "IMG-07",
      src: "/img/07-restaurantes.jpg",
      alt: "Restaurantes",
      ratio: "1 / 1",
      ready: true,
    },
    {
      id: "IMG-08",
      src: "/img/08-clinicas.jpg",
      alt: "Clínicas",
      ratio: "1 / 1",
      ready: true,
    },
    {
      id: "IMG-09",
      src: "/img/09-fitness.jpg",
      alt: "Estudios de fitness",
      ratio: "1 / 1",
      ready: true,
    },
    {
      id: "IMG-10",
      src: "/img/10-servicios.jpg",
      alt: "Negocios de servicios",
      ratio: "1 / 1",
      ready: true,
    },
  ],

  cierre: {
    id: "IMG-11",
    src: "/img/11-cierre.jpg",
    alt: "",
    ratio: "16 / 6",
    ready: true,
  },
} satisfies Record<string, Media | Media[]>;
