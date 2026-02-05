/* AI Generated: simple client-side i18n toggle (no plugins)
 * - Stores preference in localStorage
 * - Supports ?lang=zh|en override
 * - Toggles visibility of .zh and .en blocks (see _sass/custom.scss)
 */

(function () {
  const STORAGE_KEY = "site_lang";
  const SUPPORTED = new Set(["zh", "en"]);

  function detectDefaultLang() {
    const navLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
    return navLang.startsWith("zh") ? "zh" : "en";
  }

  function getQueryLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const lang = (params.get("lang") || "").toLowerCase();
      return SUPPORTED.has(lang) ? lang : null;
    } catch {
      return null;
    }
  }

  function getStoredLang() {
    try {
      const lang = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
      return SUPPORTED.has(lang) ? lang : null;
    } catch {
      return null;
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }

  function applyLang(lang) {
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    setStoredLang(lang);
    updateToggleLabel(lang);
  }

  function getCurrentLang() {
    const lang = (document.documentElement.dataset.lang || "").toLowerCase();
    return SUPPORTED.has(lang) ? lang : null;
  }

  function updateToggleLabel(lang) {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;
    const next = lang === "zh" ? "en" : "zh";
    btn.textContent = next === "zh" ? "中文" : "English";
    btn.setAttribute("aria-label", "Switch language");
  }

  function mountToggleButton() {
    if (document.getElementById("lang-toggle")) return;

    const btn = document.createElement("button");
    btn.id = "lang-toggle";
    btn.type = "button";
    btn.className = "lang-toggle-btn";

    btn.addEventListener("click", function () {
      const cur = getCurrentLang() || detectDefaultLang();
      applyLang(cur === "zh" ? "en" : "zh");
    });

    // Attach to body to avoid needing theme header edits
    document.body.appendChild(btn);

    updateToggleLabel(getCurrentLang() || detectDefaultLang());
  }

  // Apply language as early as possible (before first paint)
  const initial = getQueryLang() || getStoredLang() || detectDefaultLang();
  if (document.documentElement) {
    document.documentElement.dataset.lang = initial;
    document.documentElement.lang = initial === "zh" ? "zh-Hans" : "en";
  }

  // Ensure button + final state after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyLang(initial);
      mountToggleButton();
    });
  } else {
    applyLang(initial);
    mountToggleButton();
  }
})();

