import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Se deja rastrear siempre: es la única forma de que el buscador lea la
  // etiqueta noindex del layout. Lo que sí se retira mientras no se indexa
  // es el sitemap, que sería una invitación contradictoria.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(INDEXABLE ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  };
}
