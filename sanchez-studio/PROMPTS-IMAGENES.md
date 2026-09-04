# Prompts para generar las imágenes (ChatGPT / GPT Image)

11 imágenes. Todas son **la misma mesa, la misma luz y el mismo acento** — esa es
la razón de que la serie se lea como un sistema de marca y no como banco de imágenes.

---

## Por qué salen genéricas (y cómo se arregla)

Un modelo de imagen, cuando no le especificas, rellena con sus valores por defecto.
Sus valores por defecto **son** el look genérico. Los cinco culpables:

1. **Sin cámara ni lente** → aplica un render limpio y plano.
   *Se arregla:* cuerpo, lente, diafragma, distancia y ángulo exactos.
2. **Sin esquema de luz** → mete luz suave difusa de tres puntos, sin sombra.
   *Se arregla:* una sola fuente, dura, con ángulo, altura, distancia y bandera.
3. **Sin geometría** → centra el sujeto y lo hace simétrico.
   *Se arregla:* posición en el encuadre por tercios, medidas y separaciones en cm.
4. **Sin imperfecciones** → todo sale nuevo, perfecto y de plástico.
   *Se arregla:* polvo, huellas, micro-rayones, bordes cortados a mano.
5. **Sin prohibiciones** → agrega humo, gotas, pétalos, degradados y viñeta.
   *Se arregla:* la lista de NO al final. Es la parte que más cambia el resultado.

**Regla práctica:** si una imagen sale genérica, casi siempre es porque tiene
**más objetos de los que pediste** y **menos vacío del que pediste**. Corrige con:
`Quita todo lo que no describí. El 55% del encuadre debe ser papel vacío.`

## Cómo generarlas

1. Genera **primero IMG-01**. Fija luz, color, grano y textura de la mesa.
2. Para las 10 restantes, adjunta IMG-01 y empieza con:
   `Misma mesa, misma luz, mismo grano y mismo color que la imagen adjunta.`
3. ChatGPT sólo entrega 1024×1024, 1536×1024 y 1024×1536. Genera en el más cercano
   y recorta al ratio final.
4. Guarda en `/public/img/` con el nombre exacto y pon `ready: true` en
   [`lib/media.ts`](lib/media.ts).

---

## BLOQUE BASE (va pegado al inicio de CADA prompt)

```
Fotografía de bodegón editorial, tomada con cámara real, no render.

MESA: papel de algodón prensado en frío de 300 g/m², color crema cálido #FBFAF8,
textura de grano claramente visible con la luz rasante, con dos ondulaciones muy
suaves y el borde cortado a mano (ligeramente irregular). Polvo fino visible.
No es una superficie de estudio infinito ni un fondo degradado: es papel real
sobre una mesa real, y se nota.

LUZ: una sola fuente. Reflector parabólico de 30 cm SIN difusor (luz dura),
colocado a 45° a la izquierda de la cámara y 50° de elevación, a 1.5 m del sujeto.
Cero luz de relleno; bandera negra a la derecha para cerrar las sombras.
Ratio de contraste 8:1. Sombras proyectadas de borde NÍTIDO, densas y largas
(entre 2 y 3 veces la altura del objeto), cayendo hacia la derecha del encuadre.

COLOR: paleta estrictamente crema (#FBFAF8) y negro profundo (#12110F).
Un único acento terracota #D24A29, siempre en acabado MATE, tipo pintura al
temple, sin brillo especular. Ningún otro color saturado en todo el encuadre.

PELÍCULA: aspecto de Kodak Portra 400 escaneada en tambor. Grano fino visible en
las medias tintas, halación mínima en las altas luces, saturación baja,
subexposición de 1/3 de paso. Blancos que no se queman.

MATERIA: los objetos tienen uso. Polvo, alguna huella dactilar tenue en el metal,
micro-rayones en los filos, cantos del papel con fibra levantada. Nada se ve
recién salido de fábrica.

NO INCLUIR (importante): fondo degradado, estudio infinito, viñeta, superficie
reflejante o reflejo simétrico bajo los objetos, bokeh de luces de fondo, humo,
niebla, salpicaduras, gotas de agua, pétalos, hojas secas, ramas, piedras
decorativas, telas arrugadas, composición centrada y simétrica, más objetos de
los que describo, personas, manos, rostros, texto, letras, números, logotipos,
marcas de agua, interfaces, pantallas, acabado 3D limpio o plástico, HDR,
luz suave difusa de tres puntos.
```

---

## IMG-01 — Banda del hero → `01-hero-banda.jpg` · recortar a **21:9** (generar 1536×1024)

```
[BLOQUE BASE]

TOMA: cenital perfecto, eje óptico a 90° respecto a la mesa. Hasselblad X2D con
XCD 45 mm, f/9, cámara a 1.2 m sobre la superficie. Formato apaisado.

SUJETO: tres objetos alineados en una fila horizontal perfecta, separados por
exactamente 6 cm entre sí, apoyados sobre el eje horizontal que corre a un tercio
desde el borde superior:
  1. Una lente de cine de montura PL, cuerpo de aluminio anodizado negro mate,
     con los anillos de diafragma grabados en el metal, apoyada de costado.
  2. Una placa de papel de algodón de 18×24 cm con una retícula de líneas finas
     grabada en seco — relieve sin tinta, sólo visible por la sombra que proyecta
     cada surco con la luz rasante.
  3. Una tarjeta de papel crema de 9×5 cm, completamente en blanco, esquinas rectas.

ACENTO: una cinta de papel terracota mate #D24A29 de 1.5 cm de ancho atraviesa
los tres objetos de izquierda a derecha en línea recta: pasa POR ENCIMA de la
tarjeta, POR DEBAJO de la placa y POR ENCIMA de la lente, y sale del encuadre por
el borde derecho sin interrumpirse.

COMPOSICIÓN: el tercio inferior del encuadre queda completamente vacío — sólo
papel y las sombras largas de los tres objetos. Deja aire arriba y abajo para
poder recortar a 21:9.
```

## IMG-02 — Producción de video → `02-produccion-video.jpg` · **4:5** (generar 1024×1536)

```
[BLOQUE BASE]

TOMA: cámara a la altura de la mesa, eje a 8° sobre la horizontal (casi a ras).
Canon EOS R5 con RF 100 mm macro, f/5.6, a 40 cm del sujeto. Formato vertical.

SUJETO: una sola lente de cine anamórfica, cuerpo negro anodizado con desgaste
real en los cantos, apoyada de costado sobre el papel, con el frontal apuntando
hacia la izquierda del encuadre. El elemento frontal de cristal ocupa el tercio
izquierdo. Enfoque exacto en el borde del cristal; el barril se va a desenfoque
suave hacia la derecha.

ACENTO: un rebote terracota mate #D24A29 tiñe el reflejo interno del cristal —
un solo destello ovalado, sin flare de estrella, sin rayos.

COMPOSICIÓN: la lente ocupa el tercio inferior izquierdo. Los dos tercios
superiores y la derecha del encuadre son papel vacío, con la sombra larga de la
lente cruzando en diagonal hacia la esquina inferior derecha.
```

## IMG-03 — Desarrollo web → `03-desarrollo-web.jpg` · **4:5** (generar 1024×1536)

```
[BLOQUE BASE]

TOMA: tres cuartos alto, eje a 55° sobre la mesa. Hasselblad X2D con XCD 90 mm,
f/11 para tener toda la maqueta a foco. Formato vertical.

SUJETO: una maqueta arquitectónica construida sólo con cartulina de algodón:
cinco planchas rectangulares de 2 mm de grosor, apiladas una sobre otra y
desfasadas 12 mm cada una hacia la derecha, formando una escalera. Los cantos
cortados a mano, con la fibra del papel visible en el corte. Entre plancha y
plancha hay una separación de 8 mm sostenida por pequeños tacos de papel, de modo
que cada capa proyecta una sombra dura sobre la de abajo.

ACENTO: la TERCERA plancha desde abajo es de papel terracota mate #D24A29.
Las otras cuatro son crema.

COMPOSICIÓN: la pila ocupa el tercio inferior derecho del encuadre. El resto es
papel vacío. Sin pantallas, sin dispositivos, sin código, sin cables.
```

## IMG-04 — Redes y contenido → `04-redes-contenido.jpg` · **4:5** (generar 1024×1536)

```
[BLOQUE BASE]

TOMA: cenital perfecto, 90° sobre la mesa. Hasselblad X2D con XCD 45 mm, f/9,
cámara a 90 cm de la superficie. Formato vertical.

SUJETO: nueve tarjetas de papel de algodón de 6 × 10.6 cm (proporción 9:16),
completamente en blanco, acomodadas en una cuadrícula de 3 columnas × 3 filas con
exactamente 1.5 cm de separación entre tarjetas, alineadas con precisión
milimétrica. Cada tarjeta está apenas despegada del papel de fondo, lo justo para
proyectar una sombra dura y paralela hacia la derecha.

ACENTO: una sola tarjeta —la de la fila del centro, columna derecha— es de papel
terracota mate #D24A29. Las otras ocho son crema.

COMPOSICIÓN: la cuadrícula está desplazada hacia la mitad superior del encuadre;
el tercio inferior es papel vacío. Sin calendarios, sin números, sin íconos, sin
nada impreso sobre las tarjetas.
```

## IMG-05 — Pauta con seguimiento → `05-pauta-tracking.jpg` · **4:5** (generar 1024×1536)

```
[BLOQUE BASE]

TOMA: cámara a la altura de la mesa, eje a 15° sobre la horizontal.
Canon EOS R5 con RF 100 mm macro, f/2.8 — profundidad de campo muy corta.
Formato vertical.

SUJETO: un hilo de algodón terracota mate #D24A29, tenso, atraviesa el encuadre
en diagonal desde la esquina inferior izquierda hasta la esquina superior derecha.
El hilo pasa a través de cuatro tarjetas de papel de algodón de 7×10 cm, cada una
con una perforación circular limpia en el centro, colocadas de pie a distintas
distancias de la cámara: la primera a 15 cm del lente, la última a 60 cm.

FOCO Y LUZ: la primera y la segunda tarjeta están desenfocadas y en penumbra
(la bandera negra las cubre). La tercera y la cuarta están a foco nítido y
plenamente iluminadas. La transición de sombra a luz ocurre exactamente entre la
segunda y la tercera tarjeta.

COMPOSICIÓN: sensación de una sola trayectoria continua, no de cuatro objetos
sueltos. Sin flechas, sin gráficas, sin marcas.
```

## IMG-06 — Después del clic → `06-despues-del-clic.jpg` · **5:4** (generar 1536×1024) · **escena oscura**

```
[BLOQUE BASE, con estos cambios: la mesa es de papel negro mate #12110F en vez de
crema, y la escena está subexpuesta 1.5 pasos]

TOMA: tres cuartos, eje a 30° sobre la mesa. Hasselblad X2D con XCD 90 mm, f/8.
Formato apaisado.

SUJETO: cuatro planchas rectangulares de papel de 15×20 cm, de pie, escalonadas en
profundidad de izquierda a derecha, separadas 8 cm entre sí, cada una girada 5°
más que la anterior.

LUZ: la única fuente entra por la DERECHA del encuadre en haz estrecho y rasante.
Alcanza únicamente a la tercera y la cuarta plancha, que además reciben un rebote
terracota mate #D24A29 en su canto. La primera y la segunda quedan a un 8% de
exposición: se adivinan sus siluetas contra el negro, no se leen sus superficies.
El corte entre sombra y luz es duro y ocurre entre la segunda y la tercera.

COMPOSICIÓN: el 60% del encuadre es negro vacío. El tema de la imagen es
exactamente el contraste entre lo que se ve y lo que no.
```

## IMG-07 — Restaurantes → `07-restaurantes.jpg` · **1:1** (generar 1024×1024)

```
[BLOQUE BASE]

TOMA: tres cuartos alto, eje a 60° sobre la mesa. Hasselblad X2D con XCD 90 mm,
f/8, a 55 cm del sujeto. Formato cuadrado.

SUJETO: un solo plato hondo de cerámica cruda sin esmaltar, de 22 cm, con la
textura del torno visible y una imperfección real en el borde. Dentro, un único
elemento de comida colocado con precisión: tres láminas finas superpuestas en el
centro, sin salsa alrededor, sin decoración, sin hierbas encima.

ACENTO: un trazo terracota mate #D24A29 pintado a mano en el reverso del borde
del plato, visible sólo en el lado izquierdo.

COMPOSICIÓN: el plato está descentrado hacia la izquierda; el 55% derecho del
encuadre es papel vacío cruzado por la sombra dura y larga del plato.
Sin cubiertos, sin mantel, sin copas, sin manos, sin fondo de restaurante, sin
desenfoque de cocina.
```

## IMG-08 — Clínicas → `08-clinicas.jpg` · **1:1** (generar 1024×1024)

```
[BLOQUE BASE]

TOMA: cenital perfecto, 90° sobre la mesa. Hasselblad X2D con XCD 45 mm, f/9,
cámara a 70 cm. Formato cuadrado.

SUJETO: cinco instrumentos quirúrgicos de acero inoxidable —pinza, tijera recta,
mango de bisturí, sonda y espátula— alineados en fila vertical perfecta, con
exactamente 2.5 cm entre uno y otro, todos con el mango hacia abajo del encuadre.
Acero pulido con micro-rayones de uso y una huella dactilar tenue en el segundo
instrumento. Cada pieza proyecta una sombra dura y paralela hacia la derecha.

ACENTO: el mango del instrumento del centro está recubierto de terracota mate
#D24A29.

COMPOSICIÓN: la fila ocupa la mitad izquierda del encuadre; la derecha es papel
vacío con las cinco sombras paralelas. La sensación es de precisión y orden,
NO de hospital: sin guantes, sin gasas, sin batas, sin azul clínico, sin camilla.
```

## IMG-09 — Estudios de fitness → `09-fitness.jpg` · **1:1** (generar 1024×1024)

```
[BLOQUE BASE]

TOMA: cámara a la altura de la mesa, eje a 5° sobre la horizontal.
Canon EOS R5 con RF 100 mm macro, f/4. Formato cuadrado.

SUJETO: un solo disco de peso de hierro fundido de 20 kg, apoyado de canto sobre
el papel y sostenido en equilibrio vertical. Superficie con pintura desgastada,
óxido leve en el borde interior y la textura rugosa del fundido bien visible con
la luz rasante. El papel se hunde ligeramente bajo el peso del disco.

ATMÓSFERA: polvo de magnesio finísimo suspendido, visible ÚNICAMENTE dentro del
haz de luz que entra por la izquierda. Nada de humo ni de niebla general.

ACENTO: el aro interior del disco está pintado en terracota mate #D24A29.

COMPOSICIÓN: el disco ocupa el tercio izquierdo; su sombra cruza todo el encuadre
hacia la derecha. Sin gimnasio, sin barra, sin personas, sin piso de goma.
```

## IMG-10 — Negocios de servicios → `10-servicios.jpg` · **1:1** (generar 1024×1024)

```
[BLOQUE BASE]

TOMA: cenital perfecto, 90° sobre la mesa. Hasselblad X2D con XCD 45 mm, f/9,
cámara a 70 cm. Formato cuadrado.

SUJETO: tres objetos acomodados con precisión geométrica sobre una línea
horizontal, separados por exactamente 4 cm:
  1. Un manojo de tres llaves de latón gastado, dispuestas en abanico cerrado.
  2. Una libreta cerrada de tapa de cartón crudo, 10×15 cm, con el canto de las
     hojas visible y ligeramente desalineado por el uso.
  3. Una tarjeta de papel crema de 9×5 cm, en blanco, perfectamente recta.
Latón con pátina, cartón con una esquina golpeada.

ACENTO: la anilla del llavero es de metal recubierto en terracota mate #D24A29.

COMPOSICIÓN: la fila corre por el tercio inferior; los dos tercios superiores son
papel vacío. Tres sombras duras y paralelas hacia la derecha. Idea de oficio y
orden, NO de oficina: sin laptop, sin café, sin plantas, sin celular.
```

## IMG-11 — Fondo del cierre → `11-cierre.jpg` · recortar a **16:6** (generar 1536×1024) · **escena oscura**

```
[BLOQUE BASE, con estos cambios: la mesa es de papel negro mate #12110F en vez de
crema, y la escena está subexpuesta 2 pasos]

TOMA: cenital perfecto, 90° sobre la mesa. Hasselblad X2D con XCD 45 mm, f/11.
Formato apaisado.

SUJETO: prácticamente nada. Sólo la textura del papel negro, apenas revelada por
una única línea de luz terracota mate #D24A29 de 8 mm de grosor que cruza el
encuadre de lado a lado en horizontal, a la altura del tercio inferior. La línea
es una tira de papel terracota iluminada de canto, no un rayo de luz digital.

COMPOSICIÓN: el centro y toda la mitad superior del encuadre quedan prácticamente
negros y completamente vacíos — ahí va a ir texto encima. Máximo espacio negativo,
mínimo detalle. Sin objetos, sin partículas, sin degradado radial, sin viñeta.
```

---

## Correcciones rápidas

Si el resultado no da, responde en el mismo chat con una de estas — de arriba
hacia abajo, en ese orden:

| Problema | Qué escribir |
| --- | --- |
| Se ve genérico | `Quita todo lo que no describí en el prompt. El 55% del encuadre debe ser papel vacío. Menos objetos, más aire.` |
| Se ve plano | `La luz está demasiado suave. Una sola fuente dura sin difusor, sin relleno, sombras de borde nítido y densas. Sube el contraste a 8:1.` |
| Parece render 3D | `Es una fotografía real hecha con cámara: grano de película visible, polvo en la superficie, micro-rayones, bordes de papel irregulares. Nada perfecto.` |
| Sujeto centrado | `Descentra el sujeto al tercio izquierdo. Composición asimétrica, nunca simétrica.` |
| Colores de más | `Paleta estrictamente crema #FBFAF8 y negro #12110F, con un solo acento terracota mate #D24A29. Elimina cualquier otro color.` |
| Metió adornos | `Elimina humo, gotas, pétalos, telas, piedras y cualquier elemento decorativo. Sólo los objetos que describí, nada más.` |
| Inventó texto | `Sin texto, sin letras, sin números, sin símbolos ni grabados legibles en ningún objeto.` |
| Fondo degradado | `El fondo no es un degradado ni un estudio infinito: es una hoja de papel de algodón real sobre una mesa, con textura de grano y borde visible.` |
