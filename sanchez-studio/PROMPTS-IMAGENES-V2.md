# Prompts de imágenes — versión 2

La versión 1 ([`PROMPTS-IMAGENES.md`](PROMPTS-IMAGENES.md)) produjo once bodegones
técnicamente correctos pero monótonos: la misma idea once veces, metáforas de papel
que hay que descifrar, y cero trabajo real a la vista.

Esta versión conserva la luz, el color y el grano, y cambia tres cosas:

1. **Variedad de escala deliberada.** Macro extremo, objeto medio, escena. La serie
   tiene que respirar, no repetirse.
2. **Herramientas y gestos reales** en vez de metáforas de cartulina.
3. **Manos trabajando** en cuatro de las once. Vida sin caer en banco de imágenes.

> Lo que esto **no** arregla: que no hay trabajo real del estudio. Eso son frames
> del reel y capturas de sitios entregados, no imágenes generadas.

---

## Reglas de siempre

- Genera **IMG-01 primero**. Fija luz, color y grano.
- Para las otras diez, **adjunta IMG-01** y empieza con:
  `Misma luz, mismo color y mismo grano que la imagen adjunta.`
- Proporciones **exactas** — el código las usa para reservar el espacio:

| Archivo | Dimensiones | Proporción | Registro |
| --- | --- | --- | --- |
| `01-hero-banda.jpg` | 2100 × 900 | 21:9 | escena + manos |
| `02-produccion-video.jpg` | 1600 × 2000 | 4:5 | macro extremo + manos |
| `03-desarrollo-web.jpg` | 1600 × 2000 | 4:5 | macro extremo |
| `04-redes-contenido.jpg` | 1600 × 2000 | 4:5 | objeto medio |
| `05-pauta-tracking.jpg` | 1600 × 2000 | 4:5 | objeto medio, oscura |
| `06-despues-del-clic.jpg` | 2000 × 1600 | 5:4 | escena oscura |
| `07-restaurantes.jpg` | 1600 × 1600 | 1:1 | manos trabajando |
| `08-clinicas.jpg` | 1600 × 1600 | 1:1 | macro extremo |
| `09-fitness.jpg` | 1600 × 1600 | 1:1 | macro + contraluz |
| `10-servicios.jpg` | 1600 × 1600 | 1:1 | manos trabajando |
| `11-cierre.jpg` | 2000 × 750 | 16:6 | escena oscura |

JPEG calidad ~82, máximo 400 KB. Guardar en `/public/img/` con el nombre exacto.

---

## BLOQUE BASE v2 (al inicio de cada prompt)

```
Fotografía documental de oficio, tomada con cámara real. No render, no ilustración,
no banco de imágenes.

LUZ: una sola fuente dura y direccional, sin difusor, entrando desde la izquierda a
unos 45° y 50° de elevación. Sin relleno. Sombras de borde nítido, densas y largas.
Ratio de contraste 8:1. Es luz de taller a media tarde, no luz de estudio publicitario.

COLOR: crema cálido (#FBFAF8), negro profundo (#12110F) y grises de metal. Un único
acento terracota mate (#D24A29), presente en un solo elemento del encuadre. Ningún
otro color saturado. Si hay una pantalla encendida, su luz también es terracota.

PELÍCULA: Kodak Portra 400 escaneada en tambor. Grano visible en las medias tintas,
halación mínima en altas luces, saturación baja, subexpuesta 1/3 de paso.

MATERIA: todo tiene uso. Polvo, huellas en el metal y en el cristal, micro-rayones,
cables con marcas de haberse enrollado mil veces, cantos golpeados. Nada nuevo.

MANOS (cuando el prompt las pida): manos de adulto trabajando, siempre entrando desde
un borde del encuadre, nunca completas ni centradas, sin rostro, sin mirar a cámara.
Dedos parcialmente ocultos por el objeto que sostienen. Uñas cortas y limpias, sin
anillos, sin reloj, sin tatuajes.

NO INCLUIR: fondo degradado, estudio infinito, viñeta, reflejo simétrico bajo los
objetos, bokeh de luces de fondo, humo, niebla, gotas de agua, pétalos, plantas,
tazas de café, libretas decorativas, composición centrada y simétrica, rostros,
personas de cuerpo entero, texto legible, logotipos, marcas de agua, interfaces
reconocibles, acabado 3D limpio, HDR, luz suave difusa de tres puntos.
```

---

## IMG-01 — Banda del hero → `01-hero-banda.jpg` · 21:9

```
[BLOQUE BASE v2]

TOMA: cenital, 90° sobre la mesa. Hasselblad X2D con XCD 45 mm, f/9, a 1.2 m.
Formato apaisado muy panorámico.

ESCENA: una mesa de trabajo real, de madera oscura muy gastada, vista desde arriba.
Sobre ella, dispersos con el desorden natural de quien está trabajando —no acomodados
para la foto—: un monitor de campo pequeño apoyado de canto, una lente de cine de
montura PL, un cable BNC enrollado, una libreta abierta con una retícula trazada a
mano en lápiz, y una tarjeta de memoria.

ACENTO: el monitor de campo está encendido y muestra una sola franja horizontal
terracota; su luz tiñe apenas los objetos más cercanos.

MANOS: una mano entra desde el borde izquierdo y ajusta el anillo de la lente.
Solo se ve del antebrazo a los dedos, cortada por el borde.

COMPOSICIÓN: los objetos ocupan la mitad izquierda. La derecha es mesa vacía con las
sombras largas cruzándola. Deja aire arriba y abajo para recortar a 21:9.
```

## IMG-02 — Producción de video → `02-produccion-video.jpg` · 4:5

```
[BLOQUE BASE v2]

TOMA: macro extremo. Canon EOS R5 con RF 100 mm macro, f/2.8, a 18 cm del sujeto.
Profundidad de campo de apenas unos milímetros. Formato vertical.

SUJETO: el anillo de foco estriado de una lente de cine, tan de cerca que las estrías
llenan dos tercios del encuadre y se ve el desgaste del anodizado en los filos.
Las marcas de distancia grabadas quedan fuera de foco y son ilegibles.

MANOS: dos dedos de una mano giran el anillo, entrando desde la derecha. Hay un
levísimo arrastre de movimiento en los dedos —el anillo está girando en este
instante— mientras el metal permanece nítido.

ACENTO: un destello terracota se cuela en el borde superior del barril.

COMPOSICIÓN: el resto del encuadre cae a negro por falta de luz, no por viñeta.
```

## IMG-03 — Desarrollo web → `03-desarrollo-web.jpg` · 4:5

```
[BLOQUE BASE v2]

TOMA: macro extremo en ángulo muy cerrado, casi rasante a la superficie de la pantalla.
Canon EOS R5 con RF 100 mm macro, f/4. Formato vertical.

SUJETO: la esquina de un monitor encendido, fotografiada tan de cerca y tan de lado
que se alcanza a ver la matriz de subpíxeles. En pantalla no hay interfaz reconocible:
solo una retícula de líneas finas y un bloque sólido terracota, desenfocándose hacia
el fondo del encuadre.

DETALLE: polvo real asentado sobre el cristal y una huella dactilar, iluminados a
contraluz por la propia pantalla. En el cristal se refleja, muy tenue y fuera de foco,
el borde iluminado de la ventana del cuarto.

COMPOSICIÓN: diagonal fuerte. Dos tercios del encuadre en penumbra.
```

## IMG-04 — Redes y contenido → `04-redes-contenido.jpg` · 4:5

```
[BLOQUE BASE v2]

TOMA: frontal ligeramente en ángulo, eje a 20° respecto al muro. Hasselblad X2D con
XCD 90 mm, f/8. Formato vertical.

SUJETO: un muro de corcho gastado con doce miniaturas verticales impresas en papel
mate, clavadas con chinchetas. No están perfectamente alineadas: algunas ligeramente
chuecas, una despegada por una esquina, otra encimada sobre la de al lado. Es un muro
de trabajo, no una cuadrícula de diseño. Las imágenes impresas son manchas de luz y
sombra irreconocibles, sin caras ni texto.

ACENTO: una sola de las doce es una hoja terracota lisa, sin imagen.

LUZ: la luz dura entra en diagonal y deja la mitad inferior del muro en sombra, con
las chinchetas proyectando sombras minúsculas y nítidas.
```

## IMG-05 — Pauta con seguimiento → `05-pauta-tracking.jpg` · 4:5

```
[BLOQUE BASE v2]

TOMA: lateral, cámara a la altura de la pantalla, eje casi paralelo a ella.
Canon EOS R5 con RF 100 mm macro, f/2. Formato vertical. Cuarto a oscuras.

SUJETO: una pantalla vista de canto en la que se distingue una línea ascendente.
Casi toda la línea está desenfocada y apenas insinuada; **solo el punto final de la
curva está nítido**, y ese punto brilla en terracota.

ATMÓSFERA: el resto del cuarto en negro. La única iluminación del encuadre viene de
la propia pantalla.

COMPOSICIÓN: la curva entra por la esquina inferior izquierda y el punto nítido queda
en el tercio superior derecho. Todo lo demás, vacío oscuro.
```

## IMG-06 — Después del clic → `06-despues-del-clic.jpg` · 5:4 · escena oscura

```
[BLOQUE BASE v2, fondo negro #12110F, subexpuesta 1.5 pasos]

TOMA: tres cuartos, eje a 25° sobre la mesa. Hasselblad X2D con XCD 90 mm, f/8.
Formato apaisado.

SUJETO: cuatro monitores pequeños en fila, escalonados en profundidad de izquierda a
derecha sobre una mesa oscura, separados unos 20 cm, cada uno girado un poco más que
el anterior. Marcos gastados, cables colgando por detrás.

LUZ: los dos primeros están APAGADOS —solo se adivina su silueta contra el negro—.
Los dos últimos están ENCENDIDOS, con un brillo terracota uniforme que ilumina la
mesa frente a ellos y revela el polvo de la superficie.

COMPOSICIÓN: el 55% del encuadre es negro vacío. El tema es el corte entre lo apagado
y lo encendido.
```

## IMG-07 — Restaurantes → `07-restaurantes.jpg` · 1:1

```
[BLOQUE BASE v2]

TOMA: cenital, 90° sobre la mesa. Hasselblad X2D con XCD 90 mm, f/5.6, a 60 cm.
Formato cuadrado.

SUJETO: un plato de cerámica cruda a medio emplatar sobre una plancha de acero de
cocina, rayada por el uso.

MANOS: dos manos entran desde el borde inferior. Una sostiene el plato por el canto,
la otra coloca un elemento con pinzas. Los dedos quedan parcialmente ocultos tras el
plato y las pinzas. Cortadas por el borde del encuadre, sin muñecas completas.

ACENTO: el mango de las pinzas es terracota.

COMPOSICIÓN: el plato descentrado a la izquierda, la mitad derecha es acero vacío con
la sombra dura de las manos cruzándolo. Sin ambiente de restaurante, sin comensales,
sin fondo de cocina — solo la plancha y el gesto.
```

## IMG-08 — Clínicas → `08-clinicas.jpg` · 1:1

```
[BLOQUE BASE v2]

TOMA: macro extremo, cenital. Canon EOS R5 con RF 100 mm macro, f/3.5, a 20 cm.
Formato cuadrado.

SUJETO: la punta de un instrumento quirúrgico de acero, tan de cerca que se ven las
marcas del pulido y una micro-muesca en el filo. Descansa sobre un paño de algodón
crudo con la trama bien visible.

LUZ: la luz rasante atraviesa el filo y proyecta una sombra larguísima y afilada sobre
la tela, que se convierte en el verdadero sujeto de la imagen.

ACENTO: un anillo terracota en la base del mango, fuera de foco al fondo del encuadre.

COMPOSICIÓN: el instrumento cruza en diagonal. Dos tercios son tela vacía y sombra.
Sin guantes, sin batas, sin azul clínico, sin instrumental de más.
```

## IMG-09 — Estudios de fitness → `09-fitness.jpg` · 1:1

```
[BLOQUE BASE v2]

TOMA: contraluz duro. Canon EOS R5 con RF 100 mm macro, f/4, a 35 cm.
Formato cuadrado.

SUJETO: el moleteado de una barra de acero, en macro, con magnesio incrustado en el
grabado. La barra cruza el encuadre en horizontal.

ATMÓSFERA: la fuente de luz está detrás y a la izquierda, así que el polvo de magnesio
suspendido en el aire se enciende como polvo en un haz, mientras la barra queda casi
en silueta con un filo de luz en el canto superior.

ACENTO: al fondo, muy desenfocado, un disco con el aro interior terracota.

COMPOSICIÓN: más de la mitad del encuadre es aire con polvo iluminado. Sin gimnasio,
sin personas, sin piso de goma.
```

## IMG-10 — Negocios de servicios → `10-servicios.jpg` · 1:1

```
[BLOQUE BASE v2]

TOMA: cenital, 90°. Hasselblad X2D con XCD 45 mm, f/8, a 70 cm. Formato cuadrado.

SUJETO: una libreta de trabajo abierta sobre una camioneta o banco de trabajo metálico,
con anotaciones a mano ilegibles —trazos de lápiz, no letras legibles— y una esquina
doblada de tanto pasarla.

MANOS: una mano entra desde arriba y pasa la página; el papel está a media curva, con
un leve arrastre de movimiento en la hoja mientras la mano permanece nítida.

ACENTO: un juego de llaves con la anilla terracota, apoyado en el borde derecho, fuera
de foco.

COMPOSICIÓN: la libreta ocupa el centro izquierda. Idea de oficio y ruta, no de
oficina. Sin laptop, sin celular.
```

## IMG-11 — Fondo del cierre → `11-cierre.jpg` · 16:6 · escena oscura

```
[BLOQUE BASE v2, fondo negro #12110F, subexpuesta 2 pasos]

TOMA: frontal, cámara a la altura de la mesa. Hasselblad X2D con XCD 45 mm, f/11.
Formato apaisado muy panorámico.

ESCENA: la misma mesa de trabajo de IMG-01, ahora de noche y vacía. Al fondo, un
monitor apagado del que solo se distingue el marco. Sobre la mesa, la única luz es
una línea horizontal terracota que cruza el encuadre de lado a lado — el reflejo de
una tira LED fuera de cuadro sobre el canto metálico de la mesa.

COMPOSICIÓN: la mitad superior queda completamente negra y vacía: ahí va texto encima.
Nada de objetos, nada de partículas, nada de degradado radial.
```

---

## Filtro antes de guardar

Si alguna respuesta es "no", regenera:

1. ¿Hay **una sola** sombra dura, de borde nítido?
2. ¿El único color además de crema, negro y gris metal es el terracota?
3. ¿La imagen se ve **distinta en escala** a la anterior de la serie?
4. ¿Se entiende de qué oficio habla **sin** tener que descifrar una metáfora?
5. Si hay manos: ¿están cortadas por el borde, sin rostro, con dedos bien formados?
6. ¿Se ve fotografía con grano, no render limpio?
7. ¿Hay al menos un 40% de encuadre vacío?

**Las manos son el riesgo alto.** Revisa dedos: número correcto, articulaciones creíbles,
nada fundido con el objeto. A la mínima duda, regenera — una mano rara arruina la
credibilidad de toda la serie.

---

# Imágenes adicionales

Slots del sitio que hoy no tienen imagen. Mismo BLOQUE BASE v2, mismo filtro.

| Archivo | Dimensiones | Proporción | Dónde |
| --- | --- | --- | --- |
| `12-paquetes.jpg` | 1600 × 2000 | 4:5 | 5º servicio, completa la galería |
| `13-paso-diagnostico.jpg` | 1500 × 1000 | 3:2 | Cómo trabajamos, paso 01 |
| `14-paso-plan.jpg` | 1500 × 1000 | 3:2 | Cómo trabajamos, paso 02 |
| `15-paso-produccion.jpg` | 1500 × 1000 | 3:2 | Cómo trabajamos, paso 03 |
| `16-textura-papel.jpg` | 2400 × 2400 | 1:1 | Textura de fondo, secciones claras |
| `17-textura-negra.jpg` | 2400 × 2400 | 1:1 | Textura de fondo, secciones oscuras |

**Las tres de proceso son una sola historia.** Es la misma hoja de papel en tres
momentos: se diagnostica, se planea, se corrige. Genera la 13 primero y adjúntala en
la 14 y la 15 para que se reconozca el mismo papel, la misma mesa y la misma letra.

## IMG-12 — Paquetes integrados → `12-paquetes.jpg` · 4:5

```
[BLOQUE BASE v2]

TOMA: macro, cenital. Canon EOS R5 con RF 100 mm macro, f/5.6, a 25 cm.
Formato vertical.

SUJETO: tres cables de tipo distinto —uno grueso de video, uno de red y uno delgado
de audio, cada uno con su textura y su desgaste— entran por el borde superior del
encuadre en paralelo y terminan los tres enchufados en un mismo bloque conector
metálico, que descansa sobre la mesa de madera gastada.

ACENTO: el bloque conector tiene una banda terracota pintada en un costado.

COMPOSICIÓN: los cables ocupan la mitad superior; el conector queda en el centro; la
mitad inferior es mesa vacía con la sombra dura del bloque. La idea es "tres entradas,
una sola conexión" — leída de un vistazo, sin metáfora que descifrar.
```

## IMG-13 — Paso 01, Diagnóstico → `13-paso-diagnostico.jpg` · 3:2

```
[BLOQUE BASE v2]

TOMA: cenital, 90°. Hasselblad X2D con XCD 90 mm, f/8, a 50 cm. Formato apaisado.

SUJETO: la captura de un sitio web impresa en papel mate, colocada sobre la mesa de
trabajo. La impresión está en escala de grises y su contenido es irreconocible —bloques
de gris, sin texto legible ni interfaz identificable—. Encima, alguien ha hecho
anotaciones a mano: círculos, flechas cortas y tachones.

ACENTO: las anotaciones están hechas con lápiz de color terracota, y el lápiz descansa
en diagonal sobre la hoja, aún sin guardar.

MANOS: ninguna. El gesto ya ocurrió.

COMPOSICIÓN: la hoja descentrada a la izquierda, ligeramente chueca respecto al
encuadre. La derecha es mesa vacía. Sombra dura del papel levantado en una esquina.
```

## IMG-14 — Paso 02, Plan integrado → `14-paso-plan.jpg` · 3:2

```
[BLOQUE BASE v2 — adjuntar IMG-13: misma mesa, mismo papel, misma letra]

TOMA: cenital, 90°. Hasselblad X2D con XCD 90 mm, f/8, a 50 cm. Formato apaisado.

SUJETO: una hoja grande, limpia, sobre la misma mesa. Dibujado a mano con regla: un
diagrama de tres carriles horizontales paralelos que convergen hacia la derecha en una
sola línea. Los trazos son de lápiz, hechos con cuidado pero sin ser perfectos. Sin
texto legible en ningún punto del diagrama — solo líneas y algún punto marcado.

ACENTO: la línea única en la que convergen los tres carriles está trazada en terracota.

AL MARGEN: la hoja arrugada del diagnóstico (IMG-13) asoma por el borde izquierdo del
encuadre, debajo de esta, parcialmente cubierta.

COMPOSICIÓN: el diagrama ocupa dos tercios. Aire arriba y abajo.
```

## IMG-15 — Paso 03, Producción y optimización → `15-paso-produccion.jpg` · 3:2

```
[BLOQUE BASE v2 — adjuntar IMG-14: es la MISMA hoja, tiempo después]

TOMA: cenital, 90°, ligeramente más cerca. Hasselblad X2D con XCD 90 mm, f/8, a 40 cm.
Formato apaisado.

SUJETO: la hoja del plan de IMG-14, ahora trabajada: con tachaduras, un carril
redibujado encima del original, dos números escritos a mano en el margen (ilegibles,
solo trazo), una esquina manchada y el papel ligeramente ondulado por el uso.

ACENTO: la corrección más reciente —el carril redibujado— está en terracota y se
distingue del lápiz gris de lo anterior.

MANOS: una mano entra por el borde inferior derecho y apoya la punta de un lápiz sobre
el punto que acaba de corregir. Cortada por el borde, dedos parcialmente ocultos tras
el lápiz.

COMPOSICIÓN: más cerrada que las dos anteriores. Se debe sentir que es la misma hoja
después de semanas de trabajo, no una hoja nueva.
```

## IMG-16 — Textura de papel → `16-textura-papel.jpg` · 1:1

```
Fotografía macro de una hoja de papel de algodón prensado en frío de 300 g/m², color
crema cálido #FBFAF8, llenando todo el encuadre.

Luz muy rasante desde la izquierda, casi paralela a la superficie, de modo que el
relieve de la fibra y el grano del papel se vean con claridad en sombra y luz.
Se ven fibras individuales, alguna mota más oscura incrustada en la pulpa y una
irregularidad muy leve del prensado.

Sin objetos, sin sombras proyectadas de nada externo, sin borde de la hoja, sin
degradado, sin viñeta, sin texto. Solo superficie, de esquina a esquina, uniforme en
exposición para que pueda repetirse como fondo.
```

## IMG-17 — Textura negra → `17-textura-negra.jpg` · 1:1

```
Fotografía macro de cartulina negra mate #12110F, llenando todo el encuadre.

Luz muy rasante desde la izquierda, que revela apenas la textura del cartón: el grano,
alguna fibra levantada y una irregularidad mínima de la superficie. La imagen es casi
negra en su totalidad, con el relieve insinuado, nunca evidente.

Sin objetos, sin borde, sin degradado, sin viñeta, sin texto, sin brillos ni reflejos
especulares. Solo superficie, uniforme en exposición.
```

> **Nota sobre las texturas:** ChatGPT no genera texturas perfectamente repetibles —
> si se ponen en mosaico se notan las costuras. Para el uso previsto (una sola capa
> grande y translúcida sobre la sección) eso no importa. No las pidas "tileable"
> ni "seamless": el resultado empeora.

## Correcciones rápidas

| Problema | Qué escribir |
| --- | --- |
| Sigue viéndose plana | `Una sola fuente dura, sin relleno, sombras de borde nítido. Contraste 8:1.` |
| Muy parecida a la anterior | `Cambia radicalmente la distancia de cámara: acércate hasta que el sujeto no se reconozca completo.` |
| Manos deformes | `Mano cortada por el borde, solo dos o tres dedos visibles, el resto oculto tras el objeto.` |
| Parece render | `Fotografía real: grano de película, polvo, huellas en el metal, desgaste en los filos.` |
| Metió adornos | `Elimina plantas, tazas, humo y cualquier objeto que no describí.` |
| Se ve a banco de imágenes | `Desorden natural de alguien trabajando, no objetos acomodados para la foto.` |
