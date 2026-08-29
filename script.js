/* ============================================================
   ESTUDIO FOTOINFANTIL — script.js
   Vanilla JS, sin librerías externas. Todo el contenido dinámico
   se arma a partir de data.js.
   ============================================================ */

(() => {
  "use strict";

  /* ---------- HELPERS ---------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // saca acentos
      .trim();
  }

  /* ------------------------------------------------------------
     OPTIMIZACIÓN DE IMÁGENES
     Las fotos originales pesan ~330-400kb (pensadas para verse a
     tamaño completo), pero en el catálogo se muestran en tarjetas
     chiquitas. En vez de re-subir todo, las servimos a través de
     wsrv.nl (proxy de imágenes gratuito, sin registro) que las
     redimensiona y comprime al vuelo al tamaño exacto que se
     necesita, en formato WebP. Resultado: de ~350kb a ~15-40kb
     por foto en el catálogo, sin tocar los archivos originales.
     `w` = ancho en px que se necesita mostrar (aprox. 2x para retina).
     ------------------------------------------------------------ */
  function optimizedImg(url, w, q = 76) {
    const bare = url.replace(/^https?:\/\//, "");
    return `https://wsrv.nl/?url=${encodeURIComponent(bare)}&w=${w}&q=${q}&output=webp&a=attention`;
  }

  // Red de seguridad: si el proxy de imágenes fallara alguna vez,
  // la foto cae automáticamente a la original en vez de romperse.
  window.handleImgFallback = function (img) {
    if (img.dataset.fallback && img.src !== img.dataset.fallback) {
      img.src = img.dataset.fallback;
    }
  };

  function waLink(message) {
    return `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  function waMessageForTheme(themeName) {
    return `Hola! Vi la temática ${themeName} en el catálogo de Estudio Fotoinfantil y quisiera consultar por una sesión 🤍`;
  }

  const WA_GENERIC_MESSAGES = {
    default: "Hola! Vengo del catálogo de Estudio Fotoinfantil y quisiera consultar por una sesión 🤍",
    mesames: "Hola! Vi la sección Mes a Mes de Estudio Fotoinfantil y quisiera consultar por una sesión 🤍",
    anito: "Hola! Vi la sección Pre-Añito de Estudio Fotoinfantil y quisiera consultar por una sesión 🤍",
    reserva: "Hola! Quiero reservar una sesión en Estudio Fotoinfantil 🤍"
  };

  /* ============================================================
     HEADER: estado al hacer scroll + menú mobile
     ============================================================ */
  const siteHeader = $("#siteHeader");
  const onScrollHeader = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  const hamburgerBtn = $("#hamburgerBtn");
  const mobileMenu = $("#mobileMenu");
  function toggleMenu(open) {
    const isOpen = open ?? !mobileMenu.classList.contains("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    hamburgerBtn.classList.toggle("is-open", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
  hamburgerBtn.addEventListener("click", () => toggleMenu());
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => toggleMenu(false)));

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  function observeReveals(root = document) {
    $$(".reveal", root).forEach(el => revealObserver.observe(el));
  }

  /* ============================================================
     HERO — carrusel animado, avanza solo (sin necesidad de tocar)
     ============================================================ */
  function initHeroCarousel() {
    const slides = $$(".hero-slide", $("#heroMedia"));
    if (slides.length < 2) return;
    let active = 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const interval = prefersReducedMotion ? 6000 : 4500;
    setInterval(() => {
      slides[active].classList.remove("is-active");
      active = (active + 1) % slides.length;
      slides[active].classList.add("is-active");
    }, interval);
  }

  /* ============================================================
     PICKER (Mes a Mes / Temáticos / Pre-Añito) → scroll suave
     ============================================================ */
  $$("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.goto);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ============================================================
     WHATSAPP: header, hero, footer, float, banners genéricos
     ============================================================ */
  function wireGenericWhatsappButtons() {
    const targets = [
      "#navReserveBtn", "#mobileReserveBtn", "#heroPrimaryBtn", "#waFloat"
    ];
    targets.forEach(sel => {
      const el = $(sel);
      if (el) { el.href = waLink(WA_GENERIC_MESSAGES.reserva); }
    });
    $$(".wa-trigger").forEach(el => {
      const key = el.dataset.waMsg || "default";
      el.href = waLink(WA_GENERIC_MESSAGES[key] || WA_GENERIC_MESSAGES.default);
    });
    $("#footerWhatsapp").href = waLink(WA_GENERIC_MESSAGES.default);
    $("#footerWhatsapp").textContent = studio.whatsappDisplay;
  }

  function renderFooterInfo() {
    $("#footerLocation").textContent = studio.location;
    $("#footerInstagram").textContent = studio.instagram;
    $("#footerInstagram").href = studio.instagramUrl;
    $("#footerInstagramCta").href = studio.instagramUrl;
    $("#footerHours").textContent = studio.hours;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ============================================================
     TEMÁTICAS — filtros, buscador, grilla
     ============================================================ */
  const themesGrid = $("#themesGrid");
  const resultsCount = $("#resultsCount");
  const loadMoreWrap = $("#loadMoreWrap");
  const loadMoreBtn = $("#loadMoreBtn");
  const searchInput = $("#searchInput");

  const state = {
    type: "todas",
    gender: "todos",
    query: "",
    visibleCount: 12
  };

  const PAGE_SIZE = 12;

  function themeMatchesQuery(theme, q) {
    if (!q) return true;
    const n = normalize(q);
    return normalize(theme.name).includes(n) || (theme.tags || []).some(t => normalize(t).includes(n));
  }

  function getFilteredThemes() {
    return themes.filter(t => {
      const typeOk = state.type === "todas" || t.category === state.type;
      const genderOk = state.gender === "todos" || t.gender === "todos" || t.gender === state.gender;
      const queryOk = themeMatchesQuery(t, state.query);
      return typeOk && genderOk && queryOk;
    });
  }

  function themeCardHTML(theme) {
    const hasGallery = theme.gallery && theme.gallery.length > 0;
    return `
      <button class="theme-card ${hasGallery ? "" : "no-gallery"} reveal is-visible" data-theme-id="${theme.id}" aria-label="Ver temática ${theme.name}">
        <span class="theme-card-badge">${hasGallery ? "Con sesión real" : "Nueva"}</span>
        <img src="${optimizedImg(theme.cover, 420)}" data-fallback="${theme.cover}" alt="Escenario de la temática ${theme.name}, Estudio Fotoinfantil" loading="lazy" decoding="async" width="400" height="533" onload="this.classList.add('is-loaded')" onerror="handleImgFallback(this)">
        <span class="theme-card-label">
          <span class="tname">${theme.name}</span>
        </span>
      </button>
    `;
  }

  function renderThemesGrid() {
    const filtered = getFilteredThemes();
    const visible = filtered.slice(0, state.visibleCount);

    resultsCount.textContent = filtered.length
      ? `${filtered.length} ${filtered.length === 1 ? "temática encontrada" : "temáticas encontradas"}`
      : "";

    if (!filtered.length) {
      themesGrid.innerHTML = `
        <div class="no-results">
          <div class="big-emoji">🤍</div>
          <p><strong>No encontramos esa temática todavía.</strong><br>Probá con otra palabra o consultanos directamente, ¡seguro podemos ayudarte!</p>
          <br>
          <a href="${waLink(WA_GENERIC_MESSAGES.default)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Consultar por WhatsApp</a>
        </div>`;
      loadMoreWrap.style.display = "none";
      return;
    }

    themesGrid.innerHTML = visible.map(themeCardHTML).join("");
    loadMoreWrap.style.display = filtered.length > visible.length ? "block" : "none";

    $$(".theme-card", themesGrid).forEach(card => {
      card.addEventListener("click", () => openThemeDrawer(card.dataset.themeId));
    });
  }

  loadMoreBtn.addEventListener("click", () => {
    state.visibleCount += PAGE_SIZE;
    renderThemesGrid();
  });

  $("#typeFilters").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter-type]");
    if (!chip) return;
    $$("#typeFilters .chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    state.type = chip.dataset.filterType;
    state.visibleCount = PAGE_SIZE;
    renderThemesGrid();
  });

  $("#genderFilters").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter-gender]");
    if (!chip) return;
    $$("#genderFilters .chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    state.gender = chip.dataset.filterGender;
    state.visibleCount = PAGE_SIZE;
    renderThemesGrid();
  });

  let searchDebounce;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      state.query = e.target.value;
      state.visibleCount = PAGE_SIZE;
      renderThemesGrid();
    }, 150);
  });

  /* ============================================================
     DRAWER — Escenario → Sesión real
     ============================================================ */
  const drawerOverlay = $("#drawerOverlay");
  const themeDrawer = $("#themeDrawer");
  const drawerContent = $("#drawerContent");
  let lastFocusedEl = null;

  function drawerBodyForTheme(theme) {
    const hasGallery = theme.gallery && theme.gallery.length > 0;

    const scenarioBlock = `
      <div class="compare-block">
        <div>
          <div class="compare-label"><span class="num">1</span>El escenario</div>
          <div class="scenario-photo">
            <img src="${optimizedImg(theme.cover, 700)}" data-fallback="${theme.cover}" alt="Escenario vacío de la temática ${theme.name}" loading="lazy" decoding="async" onload="this.classList.add('is-loaded')" onerror="handleImgFallback(this)">
          </div>
        </div>
        ${hasGallery ? `
        <div class="compare-arrow" aria-hidden="true">
          <span class="line"></span>
          <span class="txt">Así queda</span>
          <span class="line"></span>
        </div>
        <div>
          <div class="compare-label"><span class="num">2</span>Así queda en una sesión</div>
          <div class="result-gallery">
            ${theme.gallery.map((src, i) => `
              <div class="g-item" data-lightbox-src="${src}" data-lightbox-index="${i}">
                <img src="${optimizedImg(src, i === 0 ? 700 : 380)}" data-fallback="${src}" alt="Foto real de sesión infantil, temática ${theme.name}" loading="lazy" decoding="async" onload="this.classList.add('is-loaded')" onerror="handleImgFallback(this)">
              </div>
            `).join("")}
          </div>
        </div>` : ""}
      </div>
    `;

    const emptyBlock = hasGallery ? "" : `
      <div class="empty-theme">
        <div class="spark">✨</div>
        <h4>Una nueva historia</h4>
        <p>Esta temática ya forma parte de nuestro estudio y pronto vas a poder descubrir cómo queda en una sesión real.</p>
        <a href="${waLink(waMessageForTheme(theme.name))}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Quiero consultarla</a>
      </div>
    `;

    const ctaBlock = hasGallery ? `
      <div class="drawer-cta">
        <p class="prompt">¿Te imaginás a tu peque acá?</p>
        <a href="${waLink(waMessageForTheme(theme.name))}" target="_blank" rel="noopener" class="btn btn-primary">🤍 Quiero esta temática</a>
      </div>
    ` : "";

    return `
      <div class="drawer-head">
        <span class="eyebrow">Temática</span>
        <h3 id="drawerTitle">${theme.name}</h3>
        <p class="tagline">${theme.tagline}</p>
      </div>
      ${scenarioBlock}
      ${emptyBlock}
      ${ctaBlock}
    `;
  }

  let currentDrawerGallery = [];

  function openThemeDrawer(themeId) {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    lastFocusedEl = document.activeElement;
    drawerContent.innerHTML = drawerBodyForTheme(theme);
    currentDrawerGallery = theme.gallery || [];

    $$(".g-item", drawerContent).forEach(item => {
      item.addEventListener("click", () => {
        openLightbox(currentDrawerGallery, Number(item.dataset.lightboxIndex));
      });
    });

    drawerOverlay.classList.add("is-open");
    themeDrawer.classList.add("is-open");
    document.body.style.overflow = "hidden";
    drawerContent.scrollTop = 0;
  }

  function closeThemeDrawer() {
    drawerOverlay.classList.remove("is-open");
    themeDrawer.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus({ preventScroll: true });
  }

  $("#drawerCloseBtn").addEventListener("click", closeThemeDrawer);
  drawerOverlay.addEventListener("click", closeThemeDrawer);

  // swipe-down para cerrar en mobile
  (function enableDrawerSwipe() {
    let startY = 0, currentY = 0, dragging = false;
    const handle = $(".drawer-handle", themeDrawer);
    const onStart = (y) => { dragging = true; startY = y; themeDrawer.style.transition = "none"; };
    const onMove = (y) => {
      if (!dragging) return;
      currentY = Math.max(0, y - startY);
      themeDrawer.style.transform = `translateY(${currentY}px)`;
    };
    const onEnd = () => {
      if (!dragging) return;
      dragging = false;
      themeDrawer.style.transition = "";
      themeDrawer.style.transform = "";
      if (currentY > 110) closeThemeDrawer();
      currentY = 0;
    };
    handle.addEventListener("touchstart", (e) => onStart(e.touches[0].clientY), { passive: true });
    handle.addEventListener("touchmove", (e) => onMove(e.touches[0].clientY), { passive: true });
    handle.addEventListener("touchend", onEnd);
  })();

  /* ============================================================
     LIGHTBOX
     ============================================================ */
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxCounter = $("#lightboxCounter");
  let lbImages = [];
  let lbIndex = 0;

  function openLightbox(images, index) {
    lbImages = images;
    lbIndex = index;
    updateLightboxImage();
    lightbox.classList.add("is-open");
  }
  function updateLightboxImage() {
    lightboxImg.src = optimizedImg(lbImages[lbIndex], 1500, 82);
    lightboxImg.dataset.fallback = lbImages[lbIndex];
    lightboxCounter.textContent = `${lbIndex + 1} / ${lbImages.length}`;
  }
  function closeLightbox() { lightbox.classList.remove("is-open"); }
  function lightboxPrev() { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; updateLightboxImage(); }
  function lightboxNext() { lbIndex = (lbIndex + 1) % lbImages.length; updateLightboxImage(); }

  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", lightboxPrev);
  $("#lightboxNext").addEventListener("click", lightboxNext);
  lightboxImg.addEventListener("error", () => handleImgFallback(lightboxImg));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("is-open")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    } else if (themeDrawer.classList.contains("is-open") && e.key === "Escape") {
      closeThemeDrawer();
    }
  });

  // swipe en lightbox (mobile)
  (function enableLightboxSwipe() {
    let startX = 0;
    lightbox.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener("touchend", (e) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) { diff > 0 ? lightboxPrev() : lightboxNext(); }
    }, { passive: true });
  })();

  /* ============================================================
     MES A MES / PRE-AÑITO — tiras de fotos
     ============================================================ */
  function renderStrip(containerSel, images, altBase) {
    const el = $(containerSel);
    el.innerHTML = images.map(src => `
      <img src="${optimizedImg(src, 260)}" data-fallback="${src}" alt="${altBase}, Estudio Fotoinfantil" loading="lazy" decoding="async" onload="this.classList.add('is-loaded')" onerror="handleImgFallback(this)">
    `).join("");
  }

  /* ============================================================
     PACKS
     ============================================================ */
  function renderPacks() {
    const grid = $("#packsGrid");
    grid.innerHTML = packs.map(pack => `
      <div class="pack-card reveal ${pack.highlight ? "is-highlight" : ""}">
        ${pack.highlight ? `<span class="pack-badge">${pack.highlightLabel}</span>` : ""}
        <div class="pack-emoji">${pack.emoji}</div>
        <h3>${pack.name}</h3>
        <div class="pack-price">${pack.price}</div>
        <ul class="pack-features">
          ${pack.features.map(f => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              <span>${f}</span>
            </li>`).join("")}
        </ul>
        <p class="pack-blurb">${pack.blurb}</p>
        <a href="${waLink(`Hola! Quisiera reservar el ${pack.name} de Estudio Fotoinfantil 🤍`)}" target="_blank" rel="noopener" class="btn ${pack.highlight ? "btn-primary" : "btn-outline"} btn-block">Consultar este pack</a>
      </div>
    `).join("");
    observeReveals(grid);
  }

  /* ============================================================
     RESERVA — pasos
     ============================================================ */
  function renderReservaSteps() {
    const steps = [
      "Elegís tu sesión",
      "Elegís tu temática",
      "Reservás con $13.000",
      "Venís al estudio",
      "Creamos tus recuerdos"
    ];
    $("#reservaSteps").innerHTML = steps.map((s, i) => `
      <div class="reserva-step reveal">
        <div class="step-num">${i + 1}</div>
        <p>${s}</p>
      </div>
    `).join("");
    observeReveals($("#reservaSteps"));
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    initHeroCarousel();
    wireGenericWhatsappButtons();
    renderFooterInfo();
    renderThemesGrid();
    renderStrip("#mesAMesStrip", mesAMesGallery, "Sesión Mes a Mes");
    renderStrip("#preAnitoStrip", preAnitoGallery, "Sesión Pre-Añito");
    renderPacks();
    renderReservaSteps();
    observeReveals();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
