(function () {
  'use strict';

  var CATEGORIES = [
    {
      id: 'animaciones-texto',
      name: 'Animaciones de Texto',
      description: 'Tipografía cinética, revelados, física de resortes y efectos cromáticos para titulares e interfaces.'
    },
    {
      id: 'estilos-web',
      name: 'Estilos Web',
      description: 'Sistemas visuales, texturas, fondos atmosféricos e ilustraciones para definir la personalidad de una web.'
    }
  ];

  var EFFECTS = [
    {
      number: '01',
      id: '01-typewriter',
      slug: '01-typewriter',
      category: 'animaciones-texto',
      name: 'Typewriter',
      description: 'Efecto máquina de escribir con cursor activo.',
      tags: ['JS', 'Cursor', 'Monoespaciado'],
      continuous: true,
      replayable: true,
      path: 'efectos/animaciones-texto/01-typewriter.html',
      hint: 'Escribe y borra frases con ritmo realista y cursor parpadeante.',
      previewHtml:
        '<div class="fx-01-wrap"><span data-mini-typewriter>Diseño vivo_</span><span class="fx-01-cursor is-blinking" aria-hidden="true"></span></div>',
      code: {
        html: '<div class="fx-01-wrap">\n  <span id="fx-01-output"></span><span class="fx-01-cursor is-blinking" aria-hidden="true"></span>\n</div>',
        css: '.fx-01-wrap {\n  font-family: "JetBrains Mono", monospace;\n  font-size: clamp(1.35rem, 3.6vw, 2.5rem);\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n}\n.fx-01-cursor {\n  width: 0.12em;\n  height: 1.15em;\n  margin-left: 0.14em;\n  background: #00e5ff;\n  animation: fx-01-blink 1s steps(2, start) infinite;\n}\n@keyframes fx-01-blink {\n  0%, 49% { opacity: 1; }\n  50%, 100% { opacity: 0; }\n}',
        js: 'const phrases = ["Diseño que comunica.", "Código limpio y vivo.", "Microinteracciones finas."];\n// Alterna escritura y borrado con setTimeout respetando pausa y reduced-motion.'
      }
    },
    {
      number: '02',
      id: '02-mask-rise',
      slug: '02-mask-rise',
      category: 'animaciones-texto',
      name: 'Mask Rise',
      description: 'Revelado vertical con overflow: hidden.',
      tags: ['CSS', 'Máscara', 'Editorial'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/02-mask-rise.html',
      hint: 'Cada línea emerge desde su máscara invisible con retraso escalonado.',
      previewHtml:
        '<div class="fx-02-stack" data-stagger><span class="fx-02-line"><span class="fx-02-text">DISEÑO QUE</span></span><span class="fx-02-line"><span class="fx-02-text">EMERGE LIMPIO</span></span></div>',
      code: {
        html: '<div class="fx-02-stack" data-stagger>\n  <span class="fx-02-line"><span class="fx-02-text">DISEÑO QUE</span></span>\n  <span class="fx-02-line"><span class="fx-02-text">EMERGE CON</span></span>\n  <span class="fx-02-line"><span class="fx-02-text">PRECISIÓN</span></span>\n</div>',
        css: '.fx-02-line { overflow: hidden; display: block; }\n@media (prefers-reduced-motion: no-preference) {\n  .fx-02-line > .fx-02-text {\n    animation: fx-02-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;\n    animation-delay: inherit;\n  }\n  .fx-02-stack > .fx-02-line {\n    animation-delay: calc((var(--sibling-index, 1) - 1) * 0.12s);\n  }\n}\n@keyframes fx-02-rise {\n  from { transform: translateY(115%); }\n  to { transform: translateY(0); }\n}',
        js: '// Solo si el navegador no soporta sibling-index(), asigna --sibling-index (1..N).'
      }
    },
    {
      number: '03',
      id: '03-scramble-decode',
      slug: '03-scramble-decode',
      category: 'animaciones-texto',
      name: 'Scramble Decode',
      description: 'Permutación criptográfica de caracteres.',
      tags: ['JS', 'rAF', 'Cifrado'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/03-scramble-decode.html',
      hint: 'Haz clic sobre el texto o pulsa Repetir para volver a decodificar.',
      previewHtml:
        '<div class="fx-03-text" data-mini-scramble="SISTEMA VIVO">SISTEMA VIVO</div>',
      code: {
        html: '<div class="fx-03-text" data-scramble-target="SISTEMA DECODIFICADO">SISTEMA DECODIFICADO</div>',
        css: '.fx-03-text {\n  font-family: "JetBrains Mono", monospace;\n  font-size: clamp(1.45rem, 4.2vw, 3.1rem);\n  font-weight: 700;\n  letter-spacing: 0.06em;\n}\n.fx-03-glyph { color: #22e564; }\n.fx-03-locked { color: inherit; }',
        js: 'const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*";\n// requestAnimationFrame renderiza en verde (.fx-03-glyph) los caracteres permutando y fija en blanco/tinta (.fx-03-locked) cada letra final.'
      }
    },
    {
      number: '04',
      id: '04-gradient-flow',
      slug: '04-gradient-flow',
      category: 'animaciones-texto',
      name: 'Gradient Flow',
      description: 'Gradiente en movimiento continuo.',
      tags: ['CSS', 'Gradiente', 'Continuo'],
      continuous: true,
      replayable: false,
      path: 'efectos/animaciones-texto/04-gradient-flow.html',
      hint: 'Desplazamiento cromático suave; se ralentiza bajo prefers-reduced-motion.',
      previewHtml: '<div class="fx-04-text">FLUJO VIVO</div>',
      code: {
        html: '<h2 class="fx-04-text">FLUJO CROMÁTICO</h2>',
        css: '.fx-04-text {\n  background-image: linear-gradient(110deg, #7c5cff 0%, #00e5ff 25%, #ff2e93 50%, #ffd166 75%, #7c5cff 100%);\n  background-size: 300% 100%;\n  background-clip: text;\n  color: transparent;\n  animation: fx-04-flow 6s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fx-04-text { animation-duration: 36s; }\n}',
        js: '// Efecto 100% CSS.'
      }
    },
    {
      number: '05',
      id: '05-word-stagger',
      slug: '05-word-stagger',
      category: 'animaciones-texto',
      name: 'Word Stagger',
      description: 'Entrada escalonada palabra por palabra.',
      tags: ['CSS', 'Stagger', 'sibling-index'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/05-word-stagger.html',
      hint: 'Cada palabra entra con un retardo calculado por su posición en el contenedor.',
      previewHtml:
        '<div class="fx-05-sentence" data-stagger><span class="fx-05-word">Cada</span><span class="fx-05-word">palabra</span><span class="fx-05-word">entra</span><span class="fx-05-word">con</span><span class="fx-05-word">ritmo</span></div>',
      code: {
        html: '<p class="fx-05-sentence" data-stagger>\n  <span class="fx-05-word">Cada</span>\n  <span class="fx-05-word">palabra</span>\n  <span class="fx-05-word">entra</span>\n  <span class="fx-05-word">en</span>\n  <span class="fx-05-word">escena</span>\n</p>',
        css: '.fx-05-word { --stagger-step: 0.085s; display: inline-block; }\n.fx-05-word:last-child { padding: 0.06em 0.36em; border-radius: 12px; background: #ffffff; border: 1px solid #ffffff; color: #52a800; }\n[data-surface="light"] .fx-05-word:last-child { background: #000000; border-color: #000000; color: #a3ff12; }\n@media (prefers-reduced-motion: no-preference) {\n  .fx-05-word {\n    animation: fx-05-in 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;\n    animation-delay: calc((var(--sibling-index, 1) - 1) * var(--stagger-step));\n  }\n  @supports (animation-delay: calc(sibling-index() * 0.1s)) {\n    .fx-05-word { animation-delay: calc((sibling-index() - 1) * var(--stagger-step)); }\n  }\n}',
        js: '// Fallback automático con --sibling-index si CSS.supports("animation-delay: calc(sibling-index() * 0.1s)") es false.'
      }
    },
    {
      number: '06',
      id: '06-blur-in',
      slug: '06-blur-in',
      category: 'animaciones-texto',
      name: 'Blur In',
      description: 'De desenfoque foveal a nitidez cristalina.',
      tags: ['CSS', 'Filter', 'Enfoque'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/06-blur-in.html',
      hint: 'Transición óptica desde desenfoque de 18px y escala sutil hasta nitidez total.',
      previewHtml:
        '<div class="fx-06-group" data-stagger><span class="fx-06-word">Enfoque</span><span class="fx-06-word">nítido</span></div>',
      code: {
        html: '<div class="fx-06-group" data-stagger>\n  <span class="fx-06-word">Enfoque</span>\n  <span class="fx-06-word">nítido</span>\n  <span class="fx-06-word">al</span>\n  <span class="fx-06-word">instante</span>\n</div>',
        css: '@keyframes fx-06-focus {\n  from { opacity: 0; filter: blur(18px); transform: scale(1.08); }\n  to { opacity: 1; filter: blur(0); transform: scale(1); }\n}',
        js: '// Usa sibling-index() con fallback automático.'
      }
    },
    {
      number: '07',
      id: '07-letter-bounce',
      slug: '07-letter-bounce',
      category: 'animaciones-texto',
      name: 'Letter Bounce',
      description: 'Rebote elástico por letra con física de resortes.',
      tags: ['CSS', 'linear()', 'Resorte'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/07-letter-bounce.html',
      hint: 'Física de resorte con linear() en transform y ease-out separado para opacidad.',
      previewHtml:
        '<div class="fx-07-word" data-stagger><span class="fx-07-char">E</span><span class="fx-07-char">L</span><span class="fx-07-char">Á</span><span class="fx-07-char">S</span><span class="fx-07-char">T</span><span class="fx-07-char">I</span><span class="fx-07-char">C</span><span class="fx-07-char">O</span></div>',
      code: {
        html: '<div class="fx-07-word" data-stagger>\n  <span class="fx-07-char">E</span><span class="fx-07-char">L</span><span class="fx-07-char">Á</span><span class="fx-07-char">S</span><span class="fx-07-char">T</span><span class="fx-07-char">I</span><span class="fx-07-char">C</span><span class="fx-07-char">O</span>\n</div>',
        css: '.fx-07-char {\n  animation-name: fx-07-bounce-y, fx-07-fade;\n  animation-duration: 1.05s, 0.28s;\n  animation-timing-function: var(--spring-easing), ease-out;\n  animation-fill-mode: both, both;\n}',
        js: '// Opacidad separada del overshooting spring para evitar parpadeo.'
      }
    },
    {
      number: '08',
      id: '08-marker-highlight',
      slug: '08-marker-highlight',
      category: 'animaciones-texto',
      name: 'Marker Highlight',
      description: 'Trazo de resaltador fluorescente detrás del texto.',
      tags: ['CSS', 'Pseudo-elemento', 'Subrayado'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/08-marker-highlight.html',
      hint: 'Subrayado orgánico inclinado mediante ::before y scaleX().',
      previewHtml:
        '<p class="fx-08-sentence">Destaca lo <mark class="fx-08-mark">realmente</mark> clave</p>',
      code: {
        html: '<p class="fx-08-sentence">\n  Destaca lo que <mark class="fx-08-mark">realmente importa</mark> en tu página\n</p>',
        css: '.fx-08-mark {\n  position: relative;\n  background: transparent;\n  color: #0e1118;\n  isolation: isolate;\n}\n.fx-08-mark::before {\n  content: "";\n  position: absolute;\n  inset: 0.08em -0.04em 0.04em;\n  background: #d4ff00;\n  z-index: -1;\n  transform-origin: left center;\n  animation: fx-08-swipe 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;\n}',
        js: '// Efecto 100% CSS.'
      }
    },
    {
      number: '09',
      id: '09-number-count-up',
      slug: '09-number-count-up',
      category: 'animaciones-texto',
      name: 'Number Count-up',
      description: 'Odómetro acelerado para métricas y prueba social.',
      tags: ['JS', 'tabular-nums', 'Métricas'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/09-number-count-up.html',
      hint: 'Usa font-variant-numeric: tabular-nums para evitar saltos horizontales.',
      previewHtml:
        '<div class="fx-09-grid"><div class="fx-09-kpi"><span class="fx-09-val" data-mini-count="98.4">+98.4%</span><span class="fx-09-label">Conversión</span></div><div class="fx-09-kpi"><span class="fx-09-val" data-mini-count="14820">14,820</span><span class="fx-09-label">Usuarios</span></div><div class="fx-09-kpi"><span class="fx-09-val">4.9★</span><span class="fx-09-label">Valoración</span></div></div>',
      code: {
        html: '<div class="fx-09-kpi">\n  <span class="fx-09-val" data-count-target="98.4" data-prefix="+" data-suffix="%" data-decimals="1">+98.4%</span>\n  <span class="fx-09-label">Retención</span>\n</div>',
        css: '.fx-09-val {\n  font-variant-numeric: tabular-nums;\n}',
        js: '// requestAnimationFrame con curva easeOutQuart (1 - Math.pow(1 - t, 4)).'
      }
    },
    {
      number: '10',
      id: '10-rotating-word',
      slug: '10-rotating-word',
      category: 'animaciones-texto',
      name: 'Rotating Word',
      description: 'Carrusel 3D vertical para alternar beneficios.',
      tags: ['CSS 3D', 'JS', 'Hero'],
      continuous: true,
      replayable: false,
      path: 'efectos/animaciones-texto/10-rotating-word.html',
      hint: 'Alterna palabras clave en perspectiva 3D con control de pausa accesible.',
      previewHtml:
        '<div class="fx-10-line"><span>Webs más</span><span class="fx-10-viewport"><span class="fx-10-word is-active">rápidas</span></span></div>',
      code: {
        html: '<div class="fx-10-line">\n  <span>Construye webs más</span>\n  <span class="fx-10-viewport" data-rotating-words>\n    <span class="fx-10-word is-active">rápidas</span>\n    <span class="fx-10-word">memorables</span>\n    <span class="fx-10-word">fluidas</span>\n    <span class="fx-10-word">rentables</span>\n  </span>\n</div>',
        css: '.fx-10-viewport { perspective: 800px; overflow: hidden; }\n.fx-10-word { transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease; }',
        js: '// Intervalo que alterna clases .is-active e .is-exiting cada 2.2s.'
      }
    },
    {
      number: '11',
      id: '11-tracking-expand',
      slug: '11-tracking-expand',
      category: 'animaciones-texto',
      name: 'Tracking Expand',
      description: 'Expansión cinemática del letter-spacing.',
      tags: ['CSS', 'Tipografía', 'Cinema'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/11-tracking-expand.html',
      hint: 'Expande el espaciado entre caracteres compensando el sangrado final con text-indent.',
      previewHtml: '<div class="fx-11-text">CINEMÁTICO</div>',
      code: {
        html: '<h2 class="fx-11-text">CINEMÁTICO</h2>',
        css: '.fx-11-text { position: relative; display: inline-block; padding-bottom: 0.28em; }\n.fx-11-text::after { content: ""; position: absolute; left: 14%; right: 14%; bottom: 0; height: 3px; background: #b7ff2a; animation: fx-11-line 1.35s cubic-bezier(0.16, 1, 0.3, 1) both; }\n@keyframes fx-11-expand {\n  from { opacity: 0; letter-spacing: -0.06em; text-indent: -0.06em; transform: scale(0.95); }\n  to { opacity: 1; letter-spacing: 0.3em; text-indent: 0.3em; transform: scale(1); }\n}\n@keyframes fx-11-line {\n  from { opacity: 0; transform: scaleX(0); }\n  to { opacity: 1; transform: scaleX(1); }\n}',
        js: '// Efecto 100% CSS.'
      }
    },
    {
      number: '12',
      id: '12-outline-to-fill',
      slug: '12-outline-to-fill',
      category: 'animaciones-texto',
      name: 'Outline to Fill',
      description: 'De contorno lineal a relleno sólido.',
      tags: ['CSS', 'clip-path', 'Tipografía'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/12-outline-to-fill.html',
      hint: 'Contorno visible desde el inicio con relleno fluido de izquierda a derecha del mismo color.',
      previewHtml: '<div class="fx-12-text" data-text="CONTORNO">CONTORNO</div>',
      code: {
        html: '<div class="fx-12-text" data-text="CONTORNO">CONTORNO</div>',
        css: '.fx-12-text { color: var(--stage-ink, var(--text)); -webkit-text-fill-color: transparent; -webkit-text-stroke: 2px var(--stage-ink, var(--text)); position: relative; }\n.fx-12-text::before { content: attr(data-text); position: absolute; inset: 0; color: var(--stage-ink, var(--text)); -webkit-text-fill-color: var(--stage-ink, var(--text)); -webkit-text-stroke: 0; animation: fx-12-fill 3.2s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both; }',
        js: '// Efecto 100% CSS.'
      }
    },
    {
      number: '13',
      id: '13-rgb-glitch',
      slug: '13-rgb-glitch',
      category: 'animaciones-texto',
      name: 'RGB Glitch',
      description: 'Separación cromática cian y rojo.',
      tags: ['CSS', 'Glitch', 'Cromático'],
      continuous: true,
      replayable: false,
      path: 'efectos/animaciones-texto/13-rgb-glitch.html',
      hint: 'Capas cian y rojo recortadas por franjas de forma constante y rápida.',
      previewHtml: '<div class="fx-13-glitch" data-text="SEÑAL RGB">SEÑAL RGB</div>',
      code: {
        html: '<div class="fx-13-glitch" data-text="SEÑAL RGB">SEÑAL RGB</div>',
        css: '.fx-13-glitch::before { color: #00f5ff; mix-blend-mode: screen; animation: fx-13-cyan 0.55s steps(1, end) infinite; }\n.fx-13-glitch::after { color: #ff2a6d; mix-blend-mode: screen; animation: fx-13-red 0.62s steps(1, end) infinite; }',
        js: '// Efecto 100% CSS.'
      }
    },
    {
      number: '14',
      id: '14-wave',
      slug: '14-wave',
      category: 'animaciones-texto',
      name: 'Wave',
      description: 'Oscilación senoidal fluida entre letras.',
      tags: ['CSS', 'Onda', 'Continuo'],
      continuous: true,
      replayable: false,
      path: 'efectos/animaciones-texto/14-wave.html',
      hint: 'Retrasos negativos escalonados para arrancar la onda senoidal completa desde el primer frame.',
      previewHtml:
        '<div class="fx-14-wave" data-stagger><span class="fx-14-char">O</span><span class="fx-14-char">N</span><span class="fx-14-char">D</span><span class="fx-14-char">A</span><span class="fx-14-char">&nbsp;</span><span class="fx-14-char">V</span><span class="fx-14-char">I</span><span class="fx-14-char">V</span><span class="fx-14-char">A</span></div>',
      code: {
        html: '<div class="fx-14-wave" data-stagger>\n  <span class="fx-14-char">O</span><span class="fx-14-char">N</span><span class="fx-14-char">D</span><span class="fx-14-char">A</span>\n</div>',
        css: '.fx-14-char { animation: fx-14-bob 1.8s ease-in-out infinite; animation-delay: calc((sibling-index() - 1) * -0.14s); }',
        js: '// Fallback automático con --sibling-index si sibling-index() no está soportado.'
      }
    },
    {
      number: '15',
      id: '15-letter-flip',
      slug: '15-letter-flip',
      category: 'animaciones-texto',
      name: 'Letter Flip',
      description: 'Rotación 3D en el eje Y.',
      tags: ['CSS 3D', 'rotateY', 'Stagger'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/15-letter-flip.html',
      hint: 'Cada letra gira pausadamente iluminándose durante el giro y apagándose al terminar.',
      previewHtml:
        '<div class="fx-15-word" data-stagger><span class="fx-15-char">G</span><span class="fx-15-char">I</span><span class="fx-15-char">R</span><span class="fx-15-char">O</span><span class="fx-15-char">&nbsp;</span><span class="fx-15-char">3</span><span class="fx-15-char">D</span></div>',
      code: {
        html: '<div class="fx-15-word" data-stagger>\n  <span class="fx-15-char">P</span><span class="fx-15-char">E</span><span class="fx-15-char">R</span><span class="fx-15-char">S</span><span class="fx-15-char">P</span><span class="fx-15-char">E</span><span class="fx-15-char">C</span><span class="fx-15-char">T</span><span class="fx-15-char">I</span><span class="fx-15-char">V</span><span class="fx-15-char">A</span>\n</div>',
        css: '.fx-15-word { perspective: 900px; }\n.fx-15-char { --stagger-step: 0.075s; animation: fx-15-flip 0.85s cubic-bezier(0.16, 1, 0.3, 1) both; }\n@keyframes fx-15-flip {\n  0% { opacity: 0; transform: rotateY(-90deg); color: #00e5ff; }\n  45% { opacity: 1; color: #00e5ff; text-shadow: 0 0 20px #00e5ff; }\n  100% { opacity: 1; transform: rotateY(0); color: inherit; text-shadow: none; }\n}',
        js: '// Usa sibling-index() con fallback automático.'
      }
    },
    {
      number: '16',
      id: '16-squiggle-underline',
      slug: '16-squiggle-underline',
      category: 'animaciones-texto',
      name: 'Squiggle Underline',
      description: 'Subrayado SVG dinámico en onda.',
      tags: ['SVG', 'stroke-dashoffset', 'Continuo'],
      continuous: true,
      replayable: true,
      path: 'efectos/animaciones-texto/16-squiggle-underline.html',
      hint: 'Trazo SVG dibujado lentamente al entrar con ondulación suave y pausable.',
      previewHtml:
        '<div class="fx-16-phrase">Detalles que <span class="fx-16-target">vibran<svg class="fx-16-svg" viewBox="0 0 220 18" preserveAspectRatio="none" aria-hidden="true"><path class="fx-16-path" d="M2 10 Q 15 2, 28 10 T 54 10 T 80 10 T 106 10 T 132 10 T 158 10 T 184 10 T 218 10"></path></svg></span></div>',
      code: {
        html: '<div class="fx-16-phrase">\n  Detalles que <span class="fx-16-target">cobran vida\n    <svg class="fx-16-svg" viewBox="0 0 220 18" preserveAspectRatio="none" aria-hidden="true">\n      <path class="fx-16-path" d="M2 10 Q 15 2, 28 10 T 54 10 T 80 10 T 106 10 T 132 10 T 158 10 T 184 10 T 218 10"/>\n    </svg>\n  </span>\n</div>',
        css: '.fx-16-path { fill: none; stroke: #ff2e93; stroke-width: 5; stroke-dasharray: 420; animation: fx-16-draw 3.2s cubic-bezier(0.22, 1, 0.36, 1) both, fx-16-ripple 7.5s ease-in-out 3.2s infinite alternate; }',
        js: '// Efecto 100% CSS + SVG.'
      }
    },
    {
      number: '17',
      id: '17-3d-extrude',
      slug: '17-3d-extrude',
      category: 'animaciones-texto',
      name: '3D Extrude',
      description: 'Extrusión volumétrica en capas profundas.',
      tags: ['CSS', 'text-shadow', 'Interactivo'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/17-3d-extrude.html',
      hint: 'Mueve el puntero sobre el escenario para inclinar las 20 capas profundas de extrusión.',
      previewHtml: '<div class="fx-17-text">VOLUMEN</div>',
      code: {
        html: '<div class="fx-17-text" data-extrude>VOLUMEN</div>',
        css: '.fx-17-text {\n  --ex-x: 1.5px; --ex-y: 1.5px;\n  transform: translate(-14px, -14px);\n  text-shadow:\n    calc(var(--ex-x) * 1) calc(var(--ex-y) * 1) 0 #7c5cff,\n    /* ... hasta 20 capas progresivas */\n    calc(var(--ex-x) * 20) calc(var(--ex-y) * 20) 0 #0b0528,\n    calc(var(--ex-x) * 22) calc(var(--ex-y) * 22) 26px rgba(0,0,0,0.55);\n}',
        js: '// pointermove actualiza --ex-x y --ex-y suavemente dentro del escenario.'
      }
    },
    {
      number: '18',
      id: '18-zoom-punch',
      slug: '18-zoom-punch',
      category: 'animaciones-texto',
      name: 'Zoom Punch',
      description: 'Impacto con onda expansiva concéntrica.',
      tags: ['CSS', 'linear()', 'Impacto'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/18-zoom-punch.html',
      hint: 'Golpe de escala con resorte linear() acompañado de dos anillos expansivos.',
      previewHtml:
        '<div class="fx-18-wrap"><span class="fx-18-ring fx-18-ring--one" aria-hidden="true"></span><span class="fx-18-text">IMPACTO</span></div>',
      code: {
        html: '<div class="fx-18-wrap">\n  <span class="fx-18-ring fx-18-ring--one" aria-hidden="true"></span>\n  <span class="fx-18-ring fx-18-ring--two" aria-hidden="true"></span>\n  <span class="fx-18-text">IMPACTO</span>\n</div>',
        css: '.fx-18-text {\n  animation-name: fx-18-slam, fx-18-fade;\n  animation-duration: 0.9s, 0.25s;\n  animation-timing-function: var(--spring-easing), ease-out;\n}',
        js: '// Pulsa Repetir para disparar el impacto y las ondas.'
      }
    },
    {
      number: '19',
      id: '19-strike-replace',
      slug: '19-strike-replace',
      category: 'animaciones-texto',
      name: 'Strike & Replace',
      description: 'Tachado de precio/objeción vieja a oferta premium.',
      tags: ['CSS', 'Conversión', 'Pricing'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/19-strike-replace.html',
      hint: 'Secuencia en 2 tiempos: tacha el precio anterior y resalta la nueva oferta debajo.',
      previewHtml:
        '<div class="fx-19-offer"><span class="fx-19-old">$199/mes</span><span class="fx-19-new">$49/mes</span></div>',
      code: {
        html: '<div class="fx-19-offer">\n  <span class="fx-19-old">$199/mes</span>\n  <span class="fx-19-new">$49/mes</span>\n</div>',
        css: '.fx-19-offer { display: flex; flex-direction: column; align-items: center; gap: 0.45rem; }\n.fx-19-old::after { animation: fx-19-slash 0.48s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }\n.fx-19-new { animation: fx-19-pop 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s both; }',
        js: '// Efecto 100% CSS.'
      }
    },
    {
      number: '20',
      id: '20-split-halves',
      slug: '20-split-halves',
      category: 'animaciones-texto',
      name: 'Split Halves',
      description: 'Fractura horizontal para revelar palabra oculta.',
      tags: ['CSS', 'clip-path', 'Interactivo'],
      continuous: false,
      replayable: true,
      path: 'efectos/animaciones-texto/20-split-halves.html',
      hint: 'Pasa el ratón o haz clic sobre la palabra para abrir o cerrar lentamente la fractura.',
      previewHtml:
        '<div class="fx-20-box is-open"><span class="fx-20-main fx-20-main--top">DESCUBRE</span><span class="fx-20-secret">EL SECRETO</span><span class="fx-20-main fx-20-main--bottom" aria-hidden="true">DESCUBRE</span></div>',
      code: {
        html: '<button type="button" class="fx-20-box" data-split-toggle>\n  <span class="fx-20-main fx-20-main--top">DESCUBRE</span>\n  <span class="fx-20-secret">EL SECRETO</span>\n  <span class="fx-20-main fx-20-main--bottom" aria-hidden="true">DESCUBRE</span>\n</button>',
        css: '.fx-20-main { transition: transform 1.45s cubic-bezier(0.22, 1, 0.36, 1); }\n.fx-20-main--top { clip-path: inset(0 0 50% 0); }\n.fx-20-main--bottom { clip-path: inset(50% 0 0 0); }\n.fx-20-box.is-open .fx-20-main--top { transform: translateY(-54%); }\n.fx-20-box.is-open .fx-20-main--bottom { transform: translateY(54%); }',
        js: '// Click alterna .is-open para dispositivos táctiles y teclado.'
      }
    },
    {
      number: '21',
      id: '21-circular-text',
      slug: '21-circular-text',
      category: 'animaciones-texto',
      name: 'Circular Text',
      description: 'Texto circular con rotación orbital pausada.',
      tags: ['SVG', 'textPath', 'Continuo'],
      continuous: true,
      replayable: false,
      path: 'efectos/animaciones-texto/21-circular-text.html',
      hint: 'Sello tipográfico trazado con <textPath> SVG girando despacio en bucle continuo.',
      previewHtml:
        '<div class="fx-21-wrap"><svg class="fx-21-svg" viewBox="0 0 260 260" aria-hidden="true"><defs><path id="fx-21-circle-mini" d="M 130, 130 m -92, 0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"></path></defs><text class="fx-21-text"><textPath href="#fx-21-circle-mini" startOffset="0%" textLength="562">DISEÑO EN MOVIMIENTO • BIBLIOTECA GRÁFICA • </textPath></text></svg></div>',
      code: {
        html: '<svg class="fx-21-svg" viewBox="0 0 260 260" role="img" aria-label="Diseño en movimiento">\n  <defs>\n    <path id="fx-21-circle-path" d="M 130, 130 m -92, 0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"/>\n  </defs>\n  <text class="fx-21-text">\n    <textPath href="#fx-21-circle-path" startOffset="0%" textLength="562">DISEÑO EN MOVIMIENTO • BIBLIOTECA GRÁFICA • </textPath>\n  </text>\n</svg>',
        css: '@media (prefers-reduced-motion: no-preference) {\n  .fx-21-svg { animation: fx-21-spin 22s linear infinite; }\n}\n@keyframes fx-21-spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}',
        js: '// Efecto 100% CSS + SVG.'
      }
    },
    {
      number: '01',
      id: 'estilo-01-claymorphism',
      slug: '01-claymorphism',
      category: 'estilos-web',
      modeLabel: 'Estilo UI',
      name: 'Claymorphism',
      description: 'Tarjetas y botones inflados en 3D suave con doble sombra interior.',
      tags: ['CSS', 'Sombras 3D', 'UI Pastel'],
      continuous: false,
      replayable: false,
      path: 'efectos/estilos-web/01-claymorphism.html',
      hint: 'Volumen tipo arcilla combinando sombra difusa exterior y dos inset-shadows opuestas.',
      previewHtml:
        '<div class="st-01-board"><div class="st-01-card"><div class="st-01-top"><span class="st-01-badge-icon">✦</span><div><div class="st-01-title">Tarjeta Clay</div></div></div><div class="st-01-track"><span class="st-01-fill"></span></div></div><div class="st-01-actions"><span class="st-01-btn st-01-btn--lilac">Acción</span><span class="st-01-btn st-01-btn--coral">Guardar</span><span class="st-01-btn st-01-btn--mint">Listo</span></div></div>',
      code: {
        html: '<div class="st-01-card">\n  <h3>Tarjeta Claymorphism</h3>\n  <button class="st-01-btn st-01-btn--lilac">Explorar</button>\n</div>',
        css: '.st-01-card {\n  border-radius: 30px;\n  background: linear-gradient(145deg, #ffffff, #eef0ff);\n  box-shadow:\n    18px 22px 38px rgba(102, 86, 178, 0.22),\n    inset 8px 8px 16px rgba(255, 255, 255, 0.9),\n    inset -10px -10px 20px rgba(124, 110, 185, 0.24);\n}',
        js: '// Estilo 100% CSS con feedback táctil :hover y :active.'
      }
    },
    {
      number: '02',
      id: 'estilo-02-brutalismo',
      slug: '02-brutalismo',
      category: 'estilos-web',
      modeLabel: 'Landing',
      name: 'Brutalismo',
      description: 'Landing estilo brutalista con bordes negros, contraste crudo y sombras sólidas.',
      tags: ['CSS', 'Landing', 'Neo-Brutalismo'],
      continuous: false,
      replayable: false,
      path: 'efectos/estilos-web/02-brutalismo.html',
      hint: 'Bordes gruesos sin radio, tipografía contundente y sombras desplazadas de desenfoque 0px.',
      previewHtml:
        '<div class="st-02-landing"><div class="st-02-nav"><span>BRUTAL.STUDIO</span><span>MENU</span></div><div class="st-02-hero"><div><span class="st-02-sticker">RAW 2026</span><div class="st-02-headline">DISEÑO SIN FILTROS.</div><span class="st-02-cta">ENTRAR →</span></div></div></div>',
      code: {
        html: '<section class="st-02-landing">\n  <nav class="st-02-nav"><span>BRUTAL.STUDIO</span><span>01 / RAW</span></nav>\n  <div class="st-02-hero">\n    <h2 class="st-02-headline">DISEÑO SIN FILTROS.</h2>\n    <button class="st-02-cta">LANZAR PROYECTO →</button>\n  </div>\n</section>',
        css: '.st-02-landing {\n  background: #f6f2e6;\n  border: 3px solid #111111;\n  box-shadow: 8px 8px 0 #111111;\n}\n.st-02-cta:active {\n  transform: translate(5px, 5px);\n  box-shadow: 0 0 0 #111111;\n}',
        js: '// Estilo 100% CSS.'
      }
    },
    {
      number: '03',
      id: 'estilo-03-skeuomorphism',
      slug: '03-skeuomorphism',
      category: 'estilos-web',
      modeLabel: 'Controles',
      name: 'Skeuomorphism',
      description: 'Controles físicos realistas con biseles metálicos, LEDs y relieve táctil.',
      tags: ['CSS', 'JS', 'Hardware UI'],
      continuous: false,
      replayable: false,
      path: 'efectos/estilos-web/03-skeuomorphism.html',
      hint: 'Prueba a pulsar el botón metálico, alternar el interruptor y deslizar el fader.',
      previewHtml:
        '<div class="st-03-console"><div class="st-03-header"><span>SYNTH PANEL</span><span class="st-03-readout">ON · 72%</span></div><div class="st-03-controls"><div class="st-03-slot"><span class="st-03-push is-on"><span class="st-03-led"></span>PWR</span></div><div class="st-03-slot"><span class="st-03-switch is-on"><span class="st-03-thumb"></span></span></div><div class="st-03-slot"><span class="st-03-knob"></span></div></div></div>',
      code: {
        html: '<div class="st-03-console">\n  <button type="button" class="st-03-push is-on" data-skeuo-push><span class="st-03-led"></span>POWER</button>\n  <button type="button" class="st-03-switch is-on" data-skeuo-switch><span class="st-03-thumb"></span></button>\n  <input type="range" min="0" max="100" value="72" class="st-03-fader" data-skeuo-fader>\n</div>',
        css: '.st-03-push {\n  background: linear-gradient(180deg, #525866 0%, #353a45 100%);\n  box-shadow: 0 5px 0 #181b22, 0 8px 14px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.34);\n}',
        js: '// Sincroniza el fader con el ángulo --dial-deg del dial rotatorio y la pantalla LED.'
      }
    },
    {
      number: '04',
      id: 'estilo-04-aurora',
      slug: '04-aurora',
      category: 'estilos-web',
      modeLabel: 'Fondo vivo',
      name: 'Aurora',
      description: 'Fondo aurora atmosférico en verde esmeralda y violeta en movimiento orgánico.',
      tags: ['CSS', 'Gradiente', 'Atmosférico'],
      continuous: true,
      replayable: false,
      path: 'efectos/estilos-web/04-aurora.html',
      hint: 'Nebulosas difuminadas en verde y violeta con blend screen; puedes pausar u ocultar el texto.',
      previewHtml:
        '<div class="st-04-aurora"><div class="st-04-blobs"><span class="st-04-blob st-04-blob--green-a"></span><span class="st-04-blob st-04-blob--violet-a"></span><span class="st-04-blob st-04-blob--green-b"></span></div><div class="st-04-content"><div class="st-04-title">AURORA</div></div></div>',
      code: {
        html: '<div class="st-04-aurora">\n  <div class="st-04-blobs" aria-hidden="true">\n    <span class="st-04-blob st-04-blob--green-a"></span>\n    <span class="st-04-blob st-04-blob--violet-a"></span>\n    <span class="st-04-blob st-04-blob--green-b"></span>\n    <span class="st-04-blob st-04-blob--violet-b"></span>\n  </div>\n  <div class="st-04-content"><h2>AURORA BOREAL</h2></div>\n</div>',
        css: '.st-04-blobs { position: absolute; inset: -25%; filter: blur(58px); }\n.st-04-blob { mix-blend-mode: screen; animation: st-04-drift-a 14s ease-in-out infinite alternate; }',
        js: '// Botón opcional para ocultar o mostrar el texto sobre el fondo.'
      }
    },
    {
      number: '05',
      id: 'estilo-05-grain',
      slug: '05-grain',
      category: 'estilos-web',
      modeLabel: 'Textura',
      name: 'Grain',
      description: 'Degradado editorial con textura de grano fílmico sutil mediante SVG.',
      tags: ['SVG', 'feTurbulence', 'Textura'],
      continuous: false,
      replayable: false,
      path: 'efectos/estilos-web/05-grain.html',
      hint: 'Ajusta la intensidad del grano con el deslizador o alterna la paleta de gradiente.',
      previewHtml:
        '<div class="st-05-grain"><svg class="st-05-noise" aria-hidden="true"><filter id="st-05-noise-mini"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#st-05-noise-mini)"/></svg><div class="st-05-content"><div class="st-05-title">GRAIN</div></div></div>',
      code: {
        html: '<div class="st-05-grain">\n  <svg class="st-05-noise" aria-hidden="true">\n    <filter id="st-05-noise-filter">\n      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>\n    </filter>\n    <rect width="100%" height="100%" filter="url(#st-05-noise-filter)"/>\n  </svg>\n  <h2>TEXTURA GRAIN</h2>\n</div>',
        css: '.st-05-noise { position: absolute; inset: 0; width: 100%; height: 100%; opacity: var(--grain-opacity, 0.24); mix-blend-mode: overlay; }',
        js: '// Control en vivo de --grain-opacity y selector de paleta.'
      }
    },
    {
      number: '06',
      id: 'estilo-06-isometrico',
      slug: '06-isometrico',
      category: 'estilos-web',
      modeLabel: 'Ilustración',
      name: 'Isométrico',
      description: 'Ilustración arquitectónica isométrica en SVG con planos flotantes.',
      tags: ['SVG', 'Isometría', 'Ilustración'],
      continuous: true,
      replayable: false,
      path: 'efectos/estilos-web/06-isometrico.html',
      hint: 'Proyección isométrica a 30° con caras iluminadas, levitación suave y respuesta al puntero.',
      previewHtml:
        '<div class="st-06-iso"><svg class="st-06-svg" viewBox="0 0 360 280" aria-hidden="true"><g class="st-06-base"><polygon points="180,235 45,165 180,95 315,165" fill="#1e2538" stroke="#3b4768" stroke-width="2"/><polygon points="45,165 180,235 180,252 45,182" fill="#141928"/><polygon points="315,165 180,235 180,252 315,182" fill="#0d111b"/></g><g class="st-06-float st-06-float--cube"><polygon points="180,82 232,109 180,136 128,109" fill="#00e5ff"/><polygon points="128,109 180,136 180,182 128,155" fill="#0891b2"/><polygon points="232,109 180,136 180,182 232,155" fill="#164e63"/></g><g class="st-06-float st-06-float--card"><polygon points="246,72 284,92 246,112 208,92" fill="#a78bfa"/><polygon points="208,92 246,112 246,144 208,124" fill="#7c3aed"/><polygon points="284,92 246,112 246,144 284,124" fill="#4c1d95"/></g></svg></div>',
      code: {
        html: '<svg class="st-06-svg" viewBox="0 0 420 320" role="img" aria-label="Ilustración isométrica">\n  <!-- Base y prismas proyectados a 30° con tres caras sombreadas -->\n</svg>',
        css: '.st-06-float--card { animation: st-06-hover 5.2s ease-in-out infinite; }\n.st-06-float--cube { animation: st-06-hover 4.4s ease-in-out 0.7s infinite; }',
        js: '// Ilustración vectorial pura SVG + animación CSS.'
      }
    },
    {
      number: '07',
      id: 'estilo-07-neo-graffiti',
      slug: '07-neo-graffiti',
      category: 'estilos-web',
      modeLabel: 'Neo-Graffiti',
      name: 'Neo-Graffiti',
      description: 'Estética neo-graffiti sobre hormigón claro con brocha negra, verde ácido y garabatos spray.',
      tags: ['SVG', 'Spray', 'Neo-Graffiti'],
      continuous: false,
      replayable: true,
      path: 'efectos/estilos-web/07-neo-graffiti.html',
      hint: 'Pulsa Repetir para volver a trazar los brochazos y garabatos en spray sobre el lienzo.',
      previewHtml:
        '<div class="st-07-neograff"><div class="st-07-nav"><span class="st-07-brand">ART DAY</span><span>HOME · GALLERY</span></div><div class="st-07-body"><div><div class="st-07-headline">CREA ALGO<br>QUE ROMPA.</div><span class="st-07-btn">VER OBRA</span></div><svg class="st-07-art" viewBox="0 0 240 160" aria-hidden="true"><defs><filter id="st-07-spray-mini"><feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="9"/></filter></defs><g filter="url(#st-07-spray-mini)"><path d="M35 125 L125 22 L205 68 L112 146 Z" fill="#111318"/><path d="M88 142 L185 38" stroke="#c8ff00" stroke-width="14" stroke-linecap="round"/><path d="M52 74 C76 42, 108 98, 136 52 C156 26, 174 84, 198 44" fill="none" stroke="#c8ff00" stroke-width="4" stroke-linecap="round"/></g><path d="M196 34 L200 44 L210 48 L200 52 L196 62 L192 52 L182 48 L192 44 Z" fill="#111318"/></svg></div></div>',
      code: {
        html: '<section class="st-07-neograff">\n  <!-- Hero editorial sobre textura hormigón + composición SVG con filtro feTurbulence/feDisplacementMap -->\n</section>',
        css: '.st-07-neograff { background: linear-gradient(145deg, #d7dae0, #bfc4ce); color: #111318; }\n.st-07-scribble { stroke-dasharray: 460; animation: st-07-draw 1.2s cubic-bezier(0.22, 1, 0.36, 1) both; }',
        js: '// Efecto 100% CSS + SVG procedural.'
      }
    },
    {
      number: '08',
      id: 'estilo-08-graffiti-vivo',
      slug: '08-graffiti-vivo',
      category: 'estilos-web',
      modeLabel: 'Graffiti Spray',
      name: 'Graffiti Vivo',
      description: 'Editorial de marco saturado con garabatos multicolores en aerosol spray.',
      tags: ['SVG', 'Aerosol', 'Colores Vivos'],
      continuous: false,
      replayable: true,
      path: 'efectos/estilos-web/08-graffiti-vivo.html',
      hint: 'Cambia entre las 3 paletas vivas o pulsa Repetir para disparar de nuevo el trazo spray.',
      previewHtml:
        '<div class="st-08-graffvivo"><div class="st-08-sheet"><div class="st-08-topbar"><span>WORK</span><span>DISTRIKT STUDIO©</span><span>CONTACT</span></div><div class="st-08-headline">distrikt studio©</div><svg class="st-08-spray-svg" viewBox="0 0 360 110" aria-hidden="true"><defs><filter id="st-08-spray-mini"><feTurbulence type="fractalNoise" baseFrequency="0.14" numOctaves="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="8"/></filter></defs><g filter="url(#st-08-spray-mini)"><path d="M12 96 L48 26 L78 88 L112 24 C134 78, 158 18, 184 82 L224 22 L254 92 L292 28 C312 72, 332 34, 348 86" fill="none" stroke="var(--graff-a)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 74 C92 18, 146 98, 214 34 C258 84, 304 20, 344 58" fill="none" stroke="var(--graff-b)" stroke-width="7" stroke-linecap="round"/><path d="M24 38 C88 86, 174 16, 266 78" fill="none" stroke="var(--graff-c)" stroke-width="5" stroke-linecap="round"/></g></svg></div></div>',
      code: {
        html: '<section class="st-08-graffvivo" data-graff-box data-graff-theme="orange">\n  <!-- Doble pasada SVG: niebla difuminada (overspray) + trazo desplazado con feTurbulence -->\n</section>',
        css: '.st-08-graffvivo { padding: 16px; background: var(--graff-a, #ff3d1f); }\n.st-08-spray-core { filter: url(#st-08-spray-stage); stroke-dasharray: 900; animation: st-08-spray-in 1.4s ease-out both; }',
        js: '// Selector de 3 paletas vivas (Naranja Vivo, Ciber Pop, Calle Neón).'
      }
    },
    {
      number: '09',
      id: 'estilo-09-sakuga-vfx',
      slug: '09-sakuga-vfx',
      category: 'estilos-web',
      modeLabel: 'Anime UI',
      name: 'Sakuga VFX',
      description: 'Controles UI que reaccionan con impactos, chispas, humo y onomatopeyas estilo anime.',
      tags: ['Web Components', 'Canvas', 'Anime VFX'],
      authorName: 'Justin Finkelman (@finktheartist)',
      authorRepo: 'https://github.com/finktheartist/sakuga-vfx/tree/main',
      continuous: false,
      replayable: false,
      path: 'efectos/estilos-web/09-sakuga-vfx.html',
      hint: 'Prueba cada uno de los 12 controles reales y copia su prompt individual o comando de instalación.',
      previewHtml:
        '<div class="st-09-mini"><div class="st-09-mini-burst"><svg class="st-09-mini-star" viewBox="0 0 160 100" aria-hidden="true"><polygon points="80,2 92,30 128,8 112,38 156,42 118,58 144,88 102,70 84,98 70,70 30,92 48,60 6,48 46,38 24,10 64,28" fill="#ffffff" stroke="#5a4fd8" stroke-width="2.5"/><polygon points="80,10 89,34 118,16 104,42 142,46 112,56 132,80 98,64 82,88 70,64 38,82 54,56 18,46 52,40 34,18 68,32" fill="#ff5fa8" opacity="0.32"/></svg><span class="st-09-mini-sfx">ドン!</span><span class="st-09-mini-btn">Confirm</span></div></div>',
      agentPrompt:
        'Añade componentes Sakuga VFX a mi proyecto web (repositorio del autor Justin Finkelman: https://github.com/finktheartist/sakuga-vfx/tree/main).\n1. Instala solo el control necesario con `npx shadcn add finktheartist/sakuga-vfx/<componente>` (disponibles: button, toggle, slider, checkbox, radio, input, tabs, progress, rating, toast, tooltip) o copia el archivo `.js` único desde el repositorio.\n2. Cárgalo con una etiqueta `<script src="..."></script>` clásica (sin `type="module"`). No reescribas ni redibujes los efectos manualmente.\n3. Usa su etiqueta custom element (`<sakuga-button>`, `<sakuga-toggle>`, etc.) respetando `prefers-reduced-motion` y personalizando colores mediante variables `--sk-*` (`--sk-ink`, `--sk-card`, `--sk-pri`, `--sk-acc`).\n4. Si solo necesitas un componente concreto, utiliza los botones "Copiar prompt" de cada tarjeta individual en esta página.',
      code: {
        html: '<script src="button.js"></script>\n<sakuga-button>Confirm</sakuga-button>\n<sakuga-button variant="secondary">Cancel</sakuga-button>',
        css: ':root {\n  --sk-ink: #1d1a4a;\n  --sk-pri: #8f8df7;\n  --sk-acc: #ff5fa8;\n  --sk-card: #ffffff;\n}',
        js: 'const btn = document.querySelector("sakuga-button");\nbtn.addEventListener("click", async () => {\n  await saveAction();\n  btn.done();\n});'
      }
    }
  ];

  window.BIBLIOTECA_DATA = {
    categories: CATEGORIES,
    effects: EFFECTS
  };
})();
