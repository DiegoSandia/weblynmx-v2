# Mensaje para Codex — regeneración de imágenes

> Copiar y pegar tal cual.

---

Necesito que regeneres las 11 imágenes de la landing de Sánchez Studio. La tanda
anterior no sirvió; te explico exactamente por qué para que no se repita.

## QUÉ SALIÓ MAL LA VEZ PASADA

Entregaste fotos de banco genéricas: juntas de equipo creativo, manos sobre
laptops, cocinas de restaurante con gente de fondo. Todas con plantas, tazas de
café, escritorios de madera, profundidad de campo suave y luz ambiente cálida, en
paleta verde olivo y marrón.

Todo eso está en la lista de prohibiciones del prompt. Y hay un problema técnico
además del estético: el acento de todo el sitio es terracota **#D24A29** y las
imágenes venían en olivo. Chocan.

Parece que usaste una versión corta del prompt. El prompt tiene un BLOQUE BASE
largo — cámara, lente, esquema de luz, materiales, prohibiciones — y **ese bloque
es el que hace todo el trabajo**. No lo resumas ni lo parafrasees.

## DE DÓNDE SACAR LOS PROMPTS

```
C:\Users\diego\OneDrive\Desktop\WebLynMx-V2\sanchez-studio\PROMPTS-IMAGENES.md
```

Léelo completo. Usa los prompts **literales**. Cada prompt se arma así:
BLOQUE BASE completo + el bloque específico de esa imagen. Nada más, nada menos.

## ORDEN DE GENERACIÓN

1. Genera **primero IMG-01**. Esa fija luz, color, grano y textura de la mesa.
2. Para las otras 10, **adjunta IMG-01** y empieza el prompt con:
   `Misma mesa, misma luz, mismo grano y mismo color que la imagen adjunta.`

Sin ese paso la serie sale despareja aunque cada imagen individual esté bien.

## DÓNDE GUARDARLAS

Carpeta exacta (sobrescribe las que ya están ahí):

```
C:\Users\diego\OneDrive\Desktop\WebLynMx-V2\sanchez-studio\public\img\
```

Nombres y dimensiones exactas. No cambies ni una letra de los nombres:

| Archivo | Dimensiones | Proporción | Nota |
| --- | --- | --- | --- |
| `01-hero-banda.jpg` | 2100 × 900 | 21:9 | |
| `02-produccion-video.jpg` | 1600 × 2000 | 4:5 | |
| `03-desarrollo-web.jpg` | 1600 × 2000 | 4:5 | |
| `04-redes-contenido.jpg` | 1600 × 2000 | 4:5 | |
| `05-pauta-tracking.jpg` | 1600 × 2000 | 4:5 | |
| `06-despues-del-clic.jpg` | 2000 × 1600 | 5:4 | escena oscura |
| `07-restaurantes.jpg` | 1600 × 1600 | 1:1 | |
| `08-clinicas.jpg` | 1600 × 1600 | 1:1 | |
| `09-fitness.jpg` | 1600 × 1600 | 1:1 | |
| `10-servicios.jpg` | 1600 × 1600 | 1:1 | |
| `11-cierre.jpg` | 2000 × 750 | 16:6 | escena oscura — **ésta faltó** |

JPEG, calidad ~82, máximo 400 KB cada una. **La proporción tiene que ser exacta**:
el código la usa para reservar el espacio antes de que cargue la imagen, y si no
coincide la foto se recorta sola.

## FILTRO ANTES DE GUARDAR

Revisa cada imagen contra estas seis preguntas. Si alguna falla, **no la guardes**:
regenérala.

1. ¿El fondo es una hoja de papel crema sobre una mesa — no madera, no una
   habitación, no un degradado, no un estudio infinito?
2. ¿Hay **una sola** sombra dura, de borde nítido y larga, cayendo hacia la derecha?
3. ¿Los únicos colores son crema, negro y un acento terracota mate?
4. ¿Hay **cero** personas, manos, rostros, pantallas, plantas, tazas, humo, gotas,
   pétalos y telas?
5. ¿Al menos la mitad del encuadre es papel vacío?
6. ¿Se ve como fotografía con grano de película, no como render 3D limpio?

Las seis tienen que ser sí.

## AL TERMINAR

En este archivo:

```
C:\Users\diego\OneDrive\Desktop\WebLynMx-V2\sanchez-studio\lib\media.ts
```

pon `ready: true` en las 11 entradas. Hoy la de `cierre` está en `false` porque
faltaba el archivo.

**No toques ningún otro archivo del proyecto.**
