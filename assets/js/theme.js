(function () {
  'use strict';

  var STORAGE_KEY = 'biblioteca-theme';
  var root = document.documentElement;

  function getPreferredTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    } catch (_) {
      // Ignore storage restrictions under strict file:// policies
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function applyTheme(theme) {
    var next = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    root.style.colorScheme = next;

    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var label = next === 'dark' ? 'Tema claro' : 'Tema oscuro';
      btn.setAttribute('aria-label', 'Cambiar a ' + label.toLowerCase());
      var textEl = btn.querySelector('[data-theme-label]');
      if (textEl) {
        textEl.textContent = next === 'dark' ? 'Oscuro' : 'Claro';
      }
      var iconEl = btn.querySelector('[data-theme-icon]');
      if (iconEl) {
        iconEl.textContent = next === 'dark' ? '☾' : '☀';
      }
    }
  }

  function toggleTheme() {
    var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {
      // Ignore storage errors
    }
    applyTheme(next);
  }

  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(root.getAttribute('data-theme') || getPreferredTheme());
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });

  window.BibliotecaTheme = {
    apply: applyTheme,
    toggle: toggleTheme
  };
})();
