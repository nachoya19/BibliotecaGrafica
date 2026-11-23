(function () {
  'use strict';

  var data = window.BIBLIOTECA_DATA || { categories: [], effects: [] };
  var isPaused = false;
  var activeController = null;

  function applySiblingFallback(root) {
    if (window.CSS && CSS.supports('animation-delay: calc(sibling-index() * 0.1s)')) {
      return;
    }
    var containers = (root || document).querySelectorAll('[data-stagger]');
    containers.forEach(function (container) {
      Array.prototype.forEach.call(container.children, function (child, idx) {
        child.style.setProperty('--sibling-index', String(idx + 1));
      });
    });
  }

  function prefersReducedMotion() {
    return (
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  function replayCssStage(stage) {
    if (!stage) return;
    var demo = stage.querySelector('#effect-demo');
    if (!demo) return;
    var clone = demo.cloneNode(true);
    demo.parentNode.replaceChild(clone, demo);
    applySiblingFallback(clone);
  }

  // ------------------------------------------------------------------------
  // Effect-specific JS engines (01, 03, 09, 10, 17, 20)
  // ------------------------------------------------------------------------
  function setupTypewriter(stage) {
    var out = stage.querySelector('#fx-01-output');
    var cursor = stage.querySelector('.fx-01-cursor');
    if (!out) return null;

    var phrases = [
      'Tipografía con ritmo vivo.',
      'Microinteracciones que respiran.',
      'Diseño web hecho a medida.'
    ];
    var phraseIdx = 0;
    var charIdx = 0;
    var deleting = false;
    var timerId = null;

    if (prefersReducedMotion()) {
      out.textContent = phrases[0];
      return {
        replay: function () { out.textContent = phrases[0]; },
        pause: function () {},
        resume: function () {}
      };
    }

    function tick() {
      if (isPaused) return;
      var current = phrases[phraseIdx];

      if (!deleting) {
        charIdx += 1;
        out.textContent = current.slice(0, charIdx);
        if (cursor) cursor.classList.remove('is-blinking');

        if (charIdx >= current.length) {
          deleting = true;
          if (cursor) cursor.classList.add('is-blinking');
          timerId = setTimeout(tick, 1500);
          return;
        }
        timerId = setTimeout(tick, 55 + Math.random() * 45);
      } else {
        charIdx -= 1;
        out.textContent = current.slice(0, charIdx);
        if (cursor) cursor.classList.remove('is-blinking');

        if (charIdx <= 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          if (cursor) cursor.classList.add('is-blinking');
          timerId = setTimeout(tick, 420);
          return;
        }
        timerId = setTimeout(tick, 32);
      }
    }

    function start() {
      clearTimeout(timerId);
      phraseIdx = 0;
      charIdx = 0;
      deleting = false;
      out.textContent = '';
      tick();
    }

    start();

    return {
      replay: start,
      pause: function () {
        clearTimeout(timerId);
      },
      resume: function () {
        clearTimeout(timerId);
        tick();
      }
    };
  }

  function setupScramble(stage) {
    var el = stage.querySelector('[data-scramble-target]');
    if (!el) return null;

    var finalText = el.getAttribute('data-scramble-target') || el.textContent;
    var glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+';
    var rafId = 0;

    function run() {
      cancelAnimationFrame(rafId);
      if (prefersReducedMotion()) {
        el.textContent = finalText;
        return;
      }

      var lockedSpan = document.createElement('span');
      lockedSpan.className = 'fx-03-locked';
      var glyphSpan = document.createElement('span');
      glyphSpan.className = 'fx-03-glyph';
      el.textContent = '';
      el.appendChild(lockedSpan);
      el.appendChild(glyphSpan);

      var start = performance.now();
      var duration = 1150;

      function frame(now) {
        var progress = Math.min(1, (now - start) / duration);
        var lockedCount = Math.floor(progress * finalText.length);
        var lockedStr = '';
        var glyphStr = '';

        for (var i = 0; i < finalText.length; i += 1) {
          var ch = finalText[i];
          if (i < lockedCount) {
            lockedStr += ch;
          } else if (ch === ' ') {
            glyphStr += ' ';
          } else {
            glyphStr += glyphs[Math.floor(Math.random() * glyphs.length)];
          }
        }

        lockedSpan.textContent = lockedStr;
        glyphSpan.textContent = glyphStr;
        if (progress < 1) {
          rafId = requestAnimationFrame(frame);
        } else {
          el.textContent = finalText;
        }
      }

      rafId = requestAnimationFrame(frame);
    }

    el.addEventListener('click', run);
    run();

    return { replay: run };
  }

  function setupCountUp(stage) {
    var nodes = stage.querySelectorAll('[data-count-target]');
    if (!nodes.length) return null;

    var rafIds = [];

    function formatValue(val, decimals, useGrouping) {
      var fixed = val.toFixed(decimals);
      if (!useGrouping) return fixed;
      var parts = fixed.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    }

    function run() {
      rafIds.forEach(cancelAnimationFrame);
      rafIds = [];

      nodes.forEach(function (node) {
        var target = parseFloat(node.getAttribute('data-count-target')) || 0;
        var prefix = node.getAttribute('data-prefix') || '';
        var suffix = node.getAttribute('data-suffix') || '';
        var decimals = parseInt(node.getAttribute('data-decimals') || '0', 10);
        var grouping = node.getAttribute('data-grouping') === 'true';

        if (prefersReducedMotion()) {
          node.textContent = prefix + formatValue(target, decimals, grouping) + suffix;
          return;
        }

        var duration = 1450;
        var start = performance.now();

        function frame(now) {
          var t = Math.min(1, (now - start) / duration);
          var eased = 1 - Math.pow(1 - t, 4);
          var current = target * eased;
          node.textContent = prefix + formatValue(current, decimals, grouping) + suffix;
          if (t < 1) {
            rafIds.push(requestAnimationFrame(frame));
          } else {
            node.textContent = prefix + formatValue(target, decimals, grouping) + suffix;
          }
        }

        rafIds.push(requestAnimationFrame(frame));
      });
    }

    run();
    return { replay: run };
  }

  function setupRotatingWord(stage) {
    var viewport = stage.querySelector('[data-rotating-words]');
    if (!viewport) return null;

    var words = Array.prototype.slice.call(viewport.querySelectorAll('.fx-10-word'));
    if (words.length < 2) return null;

    var index = 0;
    var intervalId = null;

    function advance() {
      if (isPaused) return;
      var prev = words[index];
      index = (index + 1) % words.length;
      var next = words[index];

      words.forEach(function (w) {
        w.classList.remove('is-exiting');
      });
      prev.classList.remove('is-active');
      prev.classList.add('is-exiting');
      next.classList.add('is-active');
    }

    function start() {
      clearInterval(intervalId);
      if (prefersReducedMotion()) return;
      intervalId = setInterval(advance, 2200);
    }

    start();

    return {
      pause: function () { clearInterval(intervalId); },
      resume: function () { start(); }
    };
  }

  function setupExtrudePointer(stage) {
    if (!stage.querySelector('[data-extrude]') || prefersReducedMotion()) return null;

    stage.addEventListener('pointermove', function (e) {
      var el = stage.querySelector('[data-extrude]');
      if (!el) return;
      var rect = stage.getBoundingClientRect();
      var nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      var ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      el.style.setProperty('--ex-x', (1 + nx * 1.1).toFixed(2) + 'px');
      el.style.setProperty('--ex-y', (1 + ny * 1.1).toFixed(2) + 'px');
    });

    stage.addEventListener('pointerleave', function () {
      var el = stage.querySelector('[data-extrude]');
      if (!el) return;
      el.style.setProperty('--ex-x', '1px');
      el.style.setProperty('--ex-y', '1px');
    });

    return null;
  }

  function setupSplitHalves(stage) {
    var box = stage.querySelector('[data-split-toggle]');
    if (!box) return null;

    function toggle() {
      box.classList.toggle('is-open');
    }

    box.addEventListener('click', toggle);

    if (!prefersReducedMotion()) {
      setTimeout(function () {
        box.classList.add('is-open');
      }, 450);
    } else {
      box.classList.add('is-open');
    }

    return {
      replay: function () {
        box.classList.remove('is-open');
        setTimeout(function () {
          box.classList.add('is-open');
        }, 450);
      }
    };
  }

  function initEffectEngine(effectId, stage) {
    applySiblingFallback(stage);
    if (effectId === '01-typewriter') return setupTypewriter(stage);
    if (effectId === '03-scramble-decode') return setupScramble(stage);
    if (effectId === '09-number-count-up') return setupCountUp(stage);
    if (effectId === '10-rotating-word') return setupRotatingWord(stage);
    if (effectId === '17-3d-extrude') return setupExtrudePointer(stage);
    if (effectId === '20-split-halves') return setupSplitHalves(stage);
    return null;
  }

  // ------------------------------------------------------------------------
  // Page Chrome: Metadata, Pager, Code Drawer, Toolbar Controls
  // ------------------------------------------------------------------------
  function setupCodeDrawer(fx) {
    var pre = document.getElementById('code-output');
    var tabs = document.querySelectorAll('[data-code-tab]');
    var copyBtn = document.getElementById('copy-code-btn');
    if (!pre || !fx || !fx.code) return;

    var currentLang = 'html';

    function renderLang(lang) {
      currentLang = lang;
      pre.textContent = fx.code[lang] || '';
      tabs.forEach(function (tab) {
        tab.classList.toggle('is-active', tab.getAttribute('data-code-tab') === lang);
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        renderLang(tab.getAttribute('data-code-tab'));
      });
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var text = fx.code[currentLang] || '';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(showCopied, fallbackCopy);
        } else {
          fallbackCopy();
        }

        function fallbackCopy() {
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand('copy');
          } catch (_) {
            // Ignore
          }
          document.body.removeChild(ta);
          showCopied();
        }

        function showCopied() {
          var prev = copyBtn.textContent;
          copyBtn.textContent = 'Copiado ✓';
          setTimeout(function () {
            copyBtn.textContent = prev;
          }, 1500);
        }
      });
    }

    renderLang('html');
  }

  function setupPager(fxIndex) {
    var effects = data.effects;
    var prevEl = document.getElementById('pager-prev');
    var nextEl = document.getElementById('pager-next');
    var counterEl = document.getElementById('effect-counter');

    if (counterEl) {
      counterEl.textContent = effects[fxIndex].number + ' / ' + String(effects.length).padStart(2, '0');
    }

    var prevFx = effects[(fxIndex - 1 + effects.length) % effects.length];
    var nextFx = effects[(fxIndex + 1) % effects.length];

    if (prevEl && prevFx) {
      prevEl.href = prevFx.slug + '.html';
      var prevTitle = prevEl.querySelector('.pager-link__title');
      if (prevTitle) prevTitle.textContent = prevFx.number + '. ' + prevFx.name;
    }

    if (nextEl && nextFx) {
      nextEl.href = nextFx.slug + '.html';
      var nextTitle = nextEl.querySelector('.pager-link__title');
      if (nextTitle) nextTitle.textContent = nextFx.number + '. ' + nextFx.name;
    }

    return { prevEl: prevEl, nextEl: nextEl };
  }

  document.addEventListener('DOMContentLoaded', function () {
    var effectId = document.body.getAttribute('data-effect-id');
    var fxIndex = data.effects.findIndex(function (item) {
      return item.id === effectId;
    });

    if (fxIndex === -1) return;

    var fx = data.effects[fxIndex];
    var stage = document.getElementById('stage-canvas');
    var replayBtn = document.getElementById('btn-replay');
    var pauseBtn = document.getElementById('btn-pause');
    var surfaceBtns = document.querySelectorAll('[data-surface-btn]');

    var pager = setupPager(fxIndex);
    setupCodeDrawer(fx);
    activeController = initEffectEngine(effectId, stage);

    function triggerReplay() {
      if (isPaused && pauseBtn) {
        isPaused = false;
        stage.classList.remove('is-paused');
        pauseBtn.textContent = 'Pausar';
      }
      if (activeController && typeof activeController.replay === 'function') {
        activeController.replay();
      } else {
        replayCssStage(stage);
      }
    }

    function togglePause() {
      if (!pauseBtn || pauseBtn.hidden) return;
      isPaused = !isPaused;
      stage.classList.toggle('is-paused', isPaused);
      // Do NOT set aria-pressed when button label switches between Pausar / Reanudar
      pauseBtn.textContent = isPaused ? 'Reanudar' : 'Pausar';
      if (activeController) {
        if (isPaused && typeof activeController.pause === 'function') {
          activeController.pause();
        } else if (!isPaused && typeof activeController.resume === 'function') {
          activeController.resume();
        }
      }
    }

    if (replayBtn) {
      replayBtn.hidden = !fx.replayable;
      replayBtn.addEventListener('click', triggerReplay);
    }

    if (pauseBtn) {
      pauseBtn.hidden = !fx.continuous;
      pauseBtn.addEventListener('click', togglePause);
    }

    surfaceBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var surface = btn.getAttribute('data-surface-btn');
        if (stage) stage.setAttribute('data-surface', surface);
        surfaceBtns.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
      });
    });

    document.addEventListener('keydown', function (e) {
      var tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }
      if (e.code === 'KeyR' && fx.replayable) {
        e.preventDefault();
        triggerReplay();
      } else if (e.code === 'Space' && fx.continuous && tag !== 'BUTTON') {
        e.preventDefault();
        togglePause();
      } else if (e.code === 'ArrowLeft' && pager.prevEl) {
        window.location.href = pager.prevEl.getAttribute('href');
      } else if (e.code === 'ArrowRight' && pager.nextEl) {
        window.location.href = pager.nextEl.getAttribute('href');
      }
    });
  });
})();
