(function () {
  'use strict';

  var data = window.BIBLIOTECA_DATA || { categories: [], effects: [] };
  var activeCategory = 'all';
  var searchQuery = '';

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

  function normalizeText(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function renderCategories() {
    var container = document.getElementById('category-pills');
    if (!container) return;

    var html =
      '<button type="button" class="category-pill is-active" data-category="all">' +
      '<span>Todas</span>' +
      '<span class="category-pill__count">' + data.effects.length + '</span>' +
      '</button>';

    data.categories.forEach(function (cat) {
      var count = data.effects.filter(function (fx) {
        return fx.category === cat.id;
      }).length;
      html +=
        '<button type="button" class="category-pill" data-category="' + cat.id + '">' +
        '<span>' + cat.name + '</span>' +
        '<span class="category-pill__count">' + count + '</span>' +
        '</button>';
    });

    container.innerHTML = html;

    container.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-category]');
      if (!btn) return;
      activeCategory = btn.getAttribute('data-category');
      container.querySelectorAll('.category-pill').forEach(function (pill) {
        pill.classList.toggle('is-active', pill === btn);
      });
      renderGrid();
    });
  }

  function matchesFilter(fx) {
    if (activeCategory !== 'all' && fx.category !== activeCategory) {
      return false;
    }
    if (!searchQuery) return true;
    var q = normalizeText(searchQuery);
    var haystack = normalizeText(
      fx.number + ' ' + fx.name + ' ' + fx.description + ' ' + fx.tags.join(' ')
    );
    return haystack.indexOf(q) !== -1;
  }

  function initMiniEffects(grid) {
    applySiblingFallback(grid);

    var reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    // Lightweight mini Typewriter loop
    var miniTw = grid.querySelector('[data-mini-typewriter]');
    if (miniTw && !miniTw.dataset.bound) {
      miniTw.dataset.bound = '1';
      var words = ['Diseño vivo', 'Texto ágil', 'Efecto #01'];
      var wi = 0;
      var ci = words[0].length;
      var deleting = true;

      setInterval(function () {
        var target = words[wi];
        if (deleting) {
          ci = Math.max(0, ci - 1);
          miniTw.textContent = target.slice(0, ci);
          if (ci === 0) {
            deleting = false;
            wi = (wi + 1) % words.length;
          }
        } else {
          ci += 1;
          miniTw.textContent = target.slice(0, ci);
          if (ci >= target.length) {
            deleting = true;
          }
        }
      }, 165);
    }

    // Lightweight mini Scramble preview on hover
    var miniScramble = grid.querySelector('[data-mini-scramble]');
    if (miniScramble) {
      var finalTxt = miniScramble.getAttribute('data-mini-scramble');
      var card = miniScramble.closest('.effect-card');
      if (card && !card.dataset.scrambleBound) {
        card.dataset.scrambleBound = '1';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%';
        card.addEventListener('mouseenter', function () {
          var lockedSpan = document.createElement('span');
          lockedSpan.className = 'fx-03-locked';
          var glyphSpan = document.createElement('span');
          glyphSpan.className = 'fx-03-glyph';
          miniScramble.textContent = '';
          miniScramble.appendChild(lockedSpan);
          miniScramble.appendChild(glyphSpan);

          var step = 0;
          var timer = setInterval(function () {
            var lockedStr = '';
            var glyphStr = '';
            for (var i = 0; i < finalTxt.length; i += 1) {
              var ch = finalTxt[i];
              if (i < step) {
                lockedStr += ch;
              } else if (ch === ' ') {
                glyphStr += ' ';
              } else {
                glyphStr += chars[Math.floor(Math.random() * chars.length)];
              }
            }
            lockedSpan.textContent = lockedStr;
            glyphSpan.textContent = glyphStr;
            step += 0.5;
            if (step > finalTxt.length) {
              miniScramble.textContent = finalTxt;
              clearInterval(timer);
            }
          }, 36);
        });
      }
    }
  }

  function renderGrid() {
    var grid = document.getElementById('catalog-grid');
    var countEl = document.getElementById('catalog-count');
    if (!grid) return;

    var filtered = data.effects.filter(matchesFilter);

    if (countEl) {
      countEl.textContent =
        filtered.length === data.effects.length
          ? filtered.length + ' efectos disponibles'
          : filtered.length + ' de ' + data.effects.length + ' efectos';
    }

    if (!filtered.length) {
      grid.innerHTML =
        '<div class="empty-state">' +
        '<h3>Sin coincidencias</h3>' +
        '<p>Prueba con otro término como "resorte", "3D", "glitch" o un número del 01 al 20.</p>' +
        '</div>';
      return;
    }

    grid.innerHTML = filtered
      .map(function (fx) {
        var modeLabel = fx.continuous ? 'Continuo' : 'Disparable';
        var tagsHtml = fx.tags
          .map(function (tag) {
            return '<span class="effect-card__tag">' + tag + '</span>';
          })
          .join('');

        return (
          '<article class="effect-card">' +
          '<a class="effect-card__link" href="' + fx.path + '">' +
          '<div class="effect-card__preview is-mini" aria-hidden="true">' +
          '<span class="effect-card__number">' + fx.number + '</span>' +
          '<span class="effect-card__mode">' + modeLabel + '</span>' +
          fx.previewHtml +
          '</div>' +
          '<div class="effect-card__body">' +
          '<div class="effect-card__title-row">' +
          '<h2 class="effect-card__title">' + fx.name + '</h2>' +
          '<span class="effect-card__arrow" aria-hidden="true">→</span>' +
          '</div>' +
          '<p class="effect-card__desc">' + fx.description + '</p>' +
          '<div class="effect-card__tags">' + tagsHtml + '</div>' +
          '</div>' +
          '</a>' +
          '</article>'
        );
      })
      .join('');

    initMiniEffects(grid);
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderCategories();
    renderGrid();

    var searchInput = document.getElementById('catalog-search');
    var clearBtn = document.getElementById('search-clear');

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchQuery = searchInput.value.trim();
        if (clearBtn) {
          clearBtn.hidden = searchQuery.length === 0;
        }
        renderGrid();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        searchQuery = '';
        clearBtn.hidden = true;
        renderGrid();
        searchInput.focus();
      });
    }
  });
})();
