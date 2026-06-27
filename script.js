// ===========================================================================
// Portfolio interactions: render projects, filtering, theme toggle, mobile nav.
// ===========================================================================

(function () {
  "use strict";

  // ---- Render project cards --------------------------------------------
  const grid = document.getElementById("projects-grid");

  function buildLink(href, label) {
    if (!href) return "";
    const external = href.startsWith("http");
    const attrs = external ? ' target="_blank" rel="noopener"' : "";
    return `<a href="${href}"${attrs}>${label} →</a>`;
  }

  function cardHTML(p) {
    const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
    const links = [buildLink(p.demo, "Live"), buildLink(p.source, "Code")]
      .filter(Boolean)
      .join("");
    const thumb = p.image
      ? `<div class="card-thumb has-img"><img src="${p.image}" alt="${p.title} screenshot" loading="lazy" /></div>`
      : `<div class="card-thumb">${p.icon}</div>`;
    return `
      <article class="card" data-category="${p.category}">
        ${thumb}
        <div class="card-body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tags">${tags}</div>
          <div class="card-links">${links}</div>
        </div>
      </article>`;
  }

  function render(list) {
    if (!grid) return;
    grid.innerHTML = list.map(cardHTML).join("");
  }

  // `projects` comes from projects.js
  if (typeof projects !== "undefined") {
    render(projects);
  }

  // ---- Filtering -------------------------------------------------------
  const filterBar = document.getElementById("filters");
  if (filterBar && typeof projects !== "undefined") {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      filterBar.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      const filtered =
        filter === "all" ? projects : projects.filter((p) => p.category === filter);
      render(filtered);
    });
  }

  // ---- Theme toggle (persisted) ----------------------------------------
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (prefersDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }

  // ---- Mobile nav ------------------------------------------------------
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  // ---- Placeholder links (e.g. LinkedIn) -------------------------------
  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Add your ${el.dataset.placeholder} URL in index.html.`);
    });
  });

  // ---- Footer year -----------------------------------------------------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
