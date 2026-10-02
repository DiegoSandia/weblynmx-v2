/**
 * Contenido que todavía no existe y solo Diego puede llenar.
 *
 * REGLA: una sección con datos vacíos NO se muestra en producción. El sitio
 * está público; un prospecto no puede toparse con texto de relleno. En
 * desarrollo (npm run dev) sí se dibuja la estructura, para ver cómo va a
 * quedar antes de tener los datos.
 *
 * En cuanto llenes los campos de una sección, aparece sola. No hay que tocar
 * ningún componente.
 */

/** ¿Hay algo que mostrar? Un campo vacío o solo espacios no cuenta. */
const lleno = (valor: string) => valor.trim().length > 0;

/* ------------------------------------------------------------------ CASOS */

export type Caso = {
  /** "Restaurante en Roma Norte" */
  giro: string;
  /** "5 meses" */
  periodo: string;
  /** Qué estaba pasando antes. Una línea. */
  situacion: string;
  /** Qué hicimos. Una línea. */
  hicimos: string;
  /** El número que mejor se vea. Solo la cifra: "3.4x", "+180", "$212". */
  metrica: string;
  /** Qué mide esa cifra. "mensajes al mes", "costo por lead", "reservas". */
  unidad: string;
};

/**
 * Tres casos. Sin nombre del cliente si no hay permiso — el giro y la zona
 * bastan. La métrica puede ser lo que midas: reservas, mensajes, costo por
 * lead, ventas rastreadas. UNA sola por caso, la más fuerte.
 */
export const CASOS: Caso[] = [
  { giro: "", periodo: "", situacion: "", hicimos: "", metrica: "", unidad: "" },
  { giro: "", periodo: "", situacion: "", hicimos: "", metrica: "", unidad: "" },
  { giro: "", periodo: "", situacion: "", hicimos: "", metrica: "", unidad: "" },
];

export const casosListos = () => CASOS.filter((c) => lleno(c.giro) && lleno(c.metrica));

/* ------------------------------------------------------------------ EQUIPO */

/**
 * Quién está detrás. "Sánchez" insinúa una persona y ahora mismo no aparece
 * nadie. A este nivel de ticket se compra confianza en personas.
 *
 * La foto va en /public/img/ y aquí su ruta. Retrato real, no generada:
 * una cara inventada en la sección "quiénes somos" es exactamente el tipo de
 * cosa que destruye la confianza si alguien lo nota.
 */
export const EQUIPO = {
  nombre: "",
  /** "Director" / "Fundador" / lo que seas. */
  rol: "",
  /** Una línea: cuánto llevas, de dónde vienes. */
  linea: "",
  /** Ruta de la foto, p. ej. "/img/retrato.jpg". Vacío = sin foto. */
  foto: "",
};

export const equipoListo = () => lleno(EQUIPO.nombre) && lleno(EQUIPO.linea);

/* --------------------------------------------------------------- PREGUNTAS */

export type Pregunta = { pregunta: string; respuesta: string };

/**
 * Las cuatro objeciones reales. Respuestas de dos líneas, honestas.
 * Cuatro respuestas directas venden más que toda la sección de servicios.
 */
export const PREGUNTAS: Pregunta[] = [
  { pregunta: "¿Y si ya tengo agencia?", respuesta: "" },
  { pregunta: "¿Me amarran a un contrato largo?", respuesta: "" },
  { pregunta: "¿En cuánto tiempo arrancan?", respuesta: "" },
  { pregunta: "¿Han trabajado con mi giro?", respuesta: "" },
];

export const preguntasListas = () => PREGUNTAS.filter((p) => lleno(p.respuesta));

/* ------------------------------------------------------------------- PRECIO */

/**
 * Rango de precio. Vacío = no se muestra.
 * Un "desde" filtra a quien no te conviene y te ahorra juntas.
 * Ejemplo: "Los paquetes integrados arrancan en $35,000 MXN al mes."
 */
export const PRECIO = "";

/**
 * Lo que pasa después de apretar el botón. Vacío = no se muestra.
 * Ejemplo: "Te respondemos el mismo día y te mandamos un diagnóstico de tu
 * presencia digital en 48 horas, sin costo."
 *
 * Es lo que más sube la conversión de todo lo que queda por hacer: baja el
 * riesgo de dar el paso. Pero tiene que ser verdad — si prometes 48 horas,
 * son 48 horas.
 */
export const PROMESA_CTA = "";

/* -------------------------------------------------------------------------- */

/** En desarrollo se dibuja la estructura vacía; en producción no. */
export const MOSTRAR_PENDIENTES = process.env.NODE_ENV === "development";
