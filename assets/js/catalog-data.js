(function () {
  'use strict';

  var CATEGORIES = [
    {
      id: 'animaciones-texto',
      name: 'Animaciones de Texto',
      description: 'Tipografía cinética, revelados, física de resortes y efectos cromáticos para titulares e interfaces.'
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
    }
  ];

  window.BIBLIOTECA_DATA = {
    categories: CATEGORIES,
    effects: EFFECTS
  };
})();
