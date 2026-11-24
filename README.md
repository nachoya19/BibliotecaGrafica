# Biblioteca de Estilo Gráfico

Catálogo web personal de referencia visual para consultar estilos, animaciones de texto y microinteracciones listas para aplicar en proyectos web.

Cada efecto cuenta con una **página HTML propia** donde se muestra su nombre, descripción, un escenario interactivo en vivo (con botones para **Repetir**, **Pausar/Reanudar**, cambiar fondo **Oscuro / Claro / Cuadrícula**), un bloque **Prompt para agente IA** listo para copiar y pedir ese componente concreto a un agente, y un cajón desplegable con su código HTML, CSS y JS copiable.

## Cómo abrir la biblioteca

No requiere compilación ni instalación de dependencias:

- **Directamente en el navegador**: abre `index.html` con doble clic (`file://`).
- **Con servidor local (opcional)**: ejecuta `python3 -m http.server 8765` en esta carpeta y visita `http://localhost:8765`.

## Categoría actual: Animaciones de Texto (01–21)

1. **Typewriter** (`efectos/animaciones-texto/01-typewriter.html`)
2. **Mask Rise** (`efectos/animaciones-texto/02-mask-rise.html`)
3. **Scramble Decode** (`efectos/animaciones-texto/03-scramble-decode.html`)
4. **Gradient Flow** (`efectos/animaciones-texto/04-gradient-flow.html`)
5. **Word Stagger** (`efectos/animaciones-texto/05-word-stagger.html`)
6. **Blur In** (`efectos/animaciones-texto/06-blur-in.html`)
7. **Letter Bounce** (`efectos/animaciones-texto/07-letter-bounce.html`)
8. **Marker Highlight** (`efectos/animaciones-texto/08-marker-highlight.html`)
9. **Number Count-up** (`efectos/animaciones-texto/09-number-count-up.html`)
10. **Rotating Word** (`efectos/animaciones-texto/10-rotating-word.html`)
11. **Tracking Expand** (`efectos/animaciones-texto/11-tracking-expand.html`)
12. **Outline to Fill** (`efectos/animaciones-texto/12-outline-to-fill.html`)
13. **RGB Glitch** (`efectos/animaciones-texto/13-rgb-glitch.html`)
14. **Wave** (`efectos/animaciones-texto/14-wave.html`)
15. **Letter Flip** (`efectos/animaciones-texto/15-letter-flip.html`)
16. **Squiggle Underline** (`efectos/animaciones-texto/16-squiggle-underline.html`)
17. **3D Extrude** (`efectos/animaciones-texto/17-3d-extrude.html`)
18. **Zoom Punch** (`efectos/animaciones-texto/18-zoom-punch.html`)
19. **Strike & Replace** (`efectos/animaciones-texto/19-strike-replace.html`)
20. **Split Halves** (`efectos/animaciones-texto/20-split-halves.html`)
21. **Circular Text** (`efectos/animaciones-texto/21-circular-text.html`)

## Categoría: Estilos Web (01–09)

1. **Claymorphism** (`efectos/estilos-web/01-claymorphism.html`)
2. **Brutalismo** (`efectos/estilos-web/02-brutalismo.html`)
3. **Skeuomorphism** (`efectos/estilos-web/03-skeuomorphism.html`)
4. **Aurora** (`efectos/estilos-web/04-aurora.html`)
5. **Grain** (`efectos/estilos-web/05-grain.html`)
6. **Isométrico** (`efectos/estilos-web/06-isometrico.html`)
7. **Neo-Graffiti** (`efectos/estilos-web/07-neo-graffiti.html`)
8. **Graffiti Vivo** (`efectos/estilos-web/08-graffiti-vivo.html`)
9. **Sakuga VFX** (`efectos/estilos-web/09-sakuga-vfx.html`) — Autor: [Justin Finkelman](https://github.com/finktheartist/sakuga-vfx/tree/main) (MIT)

## Cómo añadir nuevas categorías o efectos

1. Crea una carpeta para la categoría dentro de `efectos/` (por ejemplo, `efectos/botones/`) y su hoja CSS en `assets/css/`.
2. Añade la categoría al array `CATEGORIES` y los nuevos elementos al array `EFFECTS` dentro de `assets/js/catalog-data.js`.
3. Crea la página HTML de cada nuevo efecto usando la misma estructura que `efectos/animaciones-texto/01-typewriter.html` con el atributo `data-effect-id` en `<body>` coincidiendo con el `id` registrado en `catalog-data.js`.
# BibliotecaGrafica
