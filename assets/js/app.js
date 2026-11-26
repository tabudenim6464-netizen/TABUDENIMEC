/* TABU DENIM — catálogo, bolsa de pedido por WhatsApp, look builder y galería */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var WA = '593983077517';
  var IMG = 'assets/img/';
  var SHIRT = ['S', 'M', 'L', 'XL'];
  var PANT = ['30', '32', '34', '36', '38', '40'];
  var SHORT = ['30', '32', '34', '36', '38'];
  var ASK = 'Necesito asesoría';
  var src = function (p) { return IMG + p.img + (p.svg ? '.svg' : '.webp'); };

  /* ---------- Catálogo ---------- */
  var LINEN = ['30', '32', '34', '36', '38', '40', '42', '44'];
  /* Más vendidos: ranking según conversaciones de WhatsApp iniciadas desde anuncios de Meta (cuenta Tabu Denim 71, histórico a nov. 2026). */
  var PRODUCTS = [
    { id: 'sastrero-lino', cat: 'pantalones', name: 'Pantalón sastrero de lino', kicker: 'Old Money tailoring', sub: 'Lino fresco · Corte sastre · Tallas 30–44', price: 39.99, img: 'editorial-balcon', sizes: LINEN, colors: [['Beige', '#cdb89a']], tag: 'Más vendido',
      best: 1, proof: 'Más de 1.500 consultas por WhatsApp', short: 'El pantalón que define el estilo Old Money: lino fresco y corte sastre con caída impecable.',
      desc: 'Pantalón sastrero en tela de lino: el estilo perfecto a la hora de vestir. Fresco, con pinzas y una caída elegante. Disponible de la talla 30 a la 44.', feats: ['Tela de lino', 'Corte sastre con pinzas', 'Tallas 30 a 44'] },
    { id: 'tactico', cat: 'pantalones', name: 'Pantalón táctico TABU', kicker: 'Utility edit', sub: 'Resistente · Cómodo · Diseño premium', price: null, img: 'pantalon-tactico', svg: true, contain: true, sizes: PANT, colors: [['Negro', '#1b1b1b'], ['Beige', '#c8b48f'], ['Azul', '#1f2a4a']], tag: 'Más pedido',
      best: 2, proof: 'Más de 1.400 consultas por WhatsApp', short: 'Resistencia, comodidad y diseño premium para acompañarte en cualquier reto.',
      desc: 'Los pantalones tácticos TABU DENIM combinan resistencia, comodidad y diseño premium. Fabricados con materiales de alta calidad para quienes exigen más de su ropa.', feats: ['Tela táctica resistente', 'Bolsillos cargo', 'Negro, beige y azul'] },
    { id: 'lino-elastico', cat: 'pantalones', name: 'Pantalón de lino con elástico', kicker: 'The linen edit', sub: 'Fresco para el clima · Tonos neutros', price: null, img: 'editorial-taburete', sizes: PANT, colors: [['Marrón', '#6b4a33']], tag: 'Top ventas',
      best: 3, proof: 'Más de 370 consultas por WhatsApp', short: 'Lino fresco con cintura elástica ultra cómoda, en tonos neutros que combinan con todo.',
      desc: 'El pantalón que no sabías que necesitabas para este clima: lino fresco, ajuste con elástico ultra cómodo y tonos neutros que combinan con absolutamente todo.', feats: ['Lino fresco', 'Cintura con elástico', 'Tonos neutros'] },
    { id: 'lino-beige', cat: 'lino', name: 'Camisa de lino beige', kicker: 'The linen edit', sub: 'Textura natural · Elegancia sin esfuerzo', price: 35, img: 'camisa-lino-beige', contain: true, sizes: SHIRT, colors: [['Beige', '#e6dcc8']],
      desc: 'Camisa de manga corta en tejido de lino con textura natural. Fresca, ligera y fácil de combinar con pantalón claro o denim.', feats: ['Manga corta', 'Lino texturizado', 'Corte regular'] },
    { id: 'lino-camel', cat: 'lino', name: 'Camisa de lino camel', kicker: 'The linen edit', sub: 'La esencia del lujo discreto', price: 35, img: 'camisa-lino-camel', contain: true, sizes: SHIRT, colors: [['Camel', '#b88a5e']],
      desc: 'El tono camel que define el estilo Old Money. Perfecta con pantalón blanco, beige o jean claro.', feats: ['Manga corta', 'Lino texturizado', 'Corte regular'] },
    { id: 'vestir-marino', cat: 'vestir', name: 'Camisa de vestir azul marino', kicker: 'Tailored essentials', sub: 'Versátil y refinada', price: null, img: 'camisa-vestir-azul-marino', contain: true, sizes: SHIRT, colors: [['Azul marino', '#1f2a4a']],
      desc: 'Camisa de manga larga para la oficina o la noche. Un básico que eleva cualquier look formal o smart-casual.', feats: ['Manga larga', 'Cuello clásico', 'Puño con botón'] },
    { id: 'vestir-celeste', cat: 'vestir', name: 'Camisa de vestir celeste', kicker: 'Tailored essentials', sub: 'Frescura con carácter', price: null, img: 'camisa-vestir-celeste', contain: true, sizes: SHIRT, colors: [['Celeste', '#a9c4ea']],
      desc: 'El celeste clásico: luminoso y profesional. Funciona con azul marino, gris o beige.', feats: ['Manga larga', 'Cuello clásico', 'Puño con botón'] },
    { id: 'vestir-vino', cat: 'vestir', name: 'Camisa de vestir vinotinto', kicker: 'Tailored essentials', sub: 'Un clásico con personalidad', price: null, img: 'camisa-vestir-vinotinto', contain: true, sizes: SHIRT, colors: [['Vinotinto', '#6e1b2a']],
      desc: 'Un tono profundo para destacar con sobriedad. Ideal con pantalón gris carbón o negro.', feats: ['Manga larga', 'Cuello clásico', 'Puño con botón'] },
    { id: 'vestir-rosa', cat: 'vestir', name: 'Camisa de vestir rosa', kicker: 'Tailored essentials', sub: 'Elegancia de tono suave', price: null, img: 'camisa-vestir-rosa', contain: true, sizes: SHIRT, colors: [['Rosa pastel', '#f1c6d6']],
      desc: 'Rosa pastel con confianza: un toque de color que se combina fácil con azul y gris.', feats: ['Manga larga', 'Cuello clásico', 'Puño con botón'] },
    { id: 'jean-azul', cat: 'denim', name: 'Jean premium azul', kicker: 'Denim essentials', sub: 'Un básico que eleva cada outfit', price: null, img: 'jean-azul', sizes: PANT, colors: [['Azul', '#3f6aa3']],
      desc: 'Jean de lavado azul clásico con caída relajada y bota ligeramente recogida.', feats: ['Denim premium', 'Corte relajado', '5 bolsillos'] },
    { id: 'jean-gris', cat: 'denim', name: 'Jean premium gris', kicker: 'Denim essentials', sub: 'Corte contemporáneo · Estilo diario', price: null, img: 'jean-gris', sizes: PANT, colors: [['Gris', '#9a9a98']],
      desc: 'Gris claro de tono neutro, fácil de llevar con camisas de color o blanco total.', feats: ['Denim premium', 'Corte relajado', '5 bolsillos'] },
    { id: 'jean-carbon', cat: 'denim', name: 'Jean premium carbón', kicker: 'Denim essentials', sub: 'Tonalidad sobria y versátil', price: null, img: 'jean-carbon', sizes: PANT, colors: [['Gris carbón', '#3a3a3c']],
      desc: 'Carbón profundo: el jean que funciona de día y también de noche.', feats: ['Denim premium', 'Corte relajado', '5 bolsillos'] },
    { id: 'pantalon-mocha', cat: 'pantalones', name: 'Pantalón tono mocha', kicker: 'Trouser edit', sub: 'Acabado neutro y cálido', price: null, img: 'pantalon-mocha', sizes: SHORT, colors: [['Mocha', '#6f5a4a']],
      desc: 'Un neutro cálido que sustituye al jean cuando buscas un look más pulido.', feats: ['Tono neutro', 'Corte relajado', 'Bota recogida'] },
    { id: 'bermuda-negra', cat: 'bermudas', name: 'Bermuda cargo negra', kicker: 'Utility edit', sub: 'Tela táctica antifluido', price: 30, img: 'bermuda-cargo-negra', contain: true, sizes: SHORT, colors: [['Negro', '#1b1b1b']],
      desc: 'Bermuda cargo en tela táctica antifluido, cómoda y resistente para el día a día o el viaje.', feats: ['Antifluido', 'Bolsillos cargo', 'Corte regular'] },
    { id: 'bermuda-marino', cat: 'bermudas', name: 'Bermuda cargo azul marino', kicker: 'Utility edit', sub: 'Comodidad con actitud', price: 30, img: 'bermuda-cargo-azul-marino', contain: true, sizes: SHORT, colors: [['Azul marino', '#1d2945']],
      desc: 'La versión azul marino de nuestra bermuda táctica: funcional y fácil de combinar.', feats: ['Antifluido', 'Bolsillos cargo', 'Corte regular'] },
    { id: 'bermuda-oliva', cat: 'bermudas', name: 'Bermuda cargo oliva', kicker: 'Utility edit', sub: 'Estilo urbano funcional', price: 30, img: 'bermuda-cargo-oliva', contain: true, sizes: SHORT, colors: [['Oliva', '#5f6449']],
      desc: 'Verde oliva con espíritu utility. Combina con camisas de lino crema o blancas.', feats: ['Antifluido', 'Bolsillos cargo', 'Corte regular'] },
    { id: 'bermuda-petroleo', cat: 'bermudas', name: 'Bermuda cargo azul petróleo', kicker: 'Utility edit', sub: 'Textura y utilidad en una prenda', price: 30, img: 'bermuda-cargo-petroleo', contain: true, sizes: SHORT, colors: [['Azul petróleo', '#1f5b70']],
      desc: 'Un azul petróleo diferente, ideal para looks de playa y fin de semana.', feats: ['Antifluido', 'Bolsillos cargo', 'Corte regular'] }
  ];
  var CATS = [['todos', 'Ver todo'], ['lino', 'Lino'], ['vestir', 'Camisas de vestir'], ['pantalones', 'Pantalones'], ['denim', 'Denim'], ['bermudas', 'Bermudas']];
  var byId = {}; PRODUCTS.forEach(function (p, i) { p.order = i; byId[p.id] = p; });

  /* ---------- Helpers ---------- */
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var money = function (n) { return '$' + n.toFixed(2).replace('.', ','); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var wa = function (text) { window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener'); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- Tema claro / oscuro ---------- */
  var root = document.documentElement, themeBtn = $('#themeBtn'), metaTheme = $('#metaTheme');
  function applyTheme(t, animate) {
    if (animate && !reduce) { root.classList.add('theming'); setTimeout(function () { root.classList.remove('theming'); }, 600); }
    root.setAttribute('data-theme', t);
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    themeBtn.setAttribute('aria-pressed', String(t === 'dark'));
    if (metaTheme) metaTheme.setAttribute('content', t === 'dark' ? '#0e1210' : '#f5f1e8');
  }
  applyTheme(root.getAttribute('data-theme') || 'light');
  themeBtn.addEventListener('click', function () {
    var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(t, true);
    try { localStorage.setItem('tabu-theme', t); } catch (e) {}
  });
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  if (mq.addEventListener) mq.addEventListener('change', function (e) {
    var saved = null; try { saved = localStorage.getItem('tabu-theme'); } catch (x) {}
    if (!saved) applyTheme(e.matches ? 'dark' : 'light', true);
  });

  /* ---------- Intro ---------- */
  var intro = $('#intro');
  if (intro) {
    if (root.classList.contains('no-intro') || reduce) intro.remove();
    else { intro.addEventListener('animationend', function (e) { if (e.animationName === 'introOut') intro.remove(); }); setTimeout(function () { if (intro.parentNode) intro.remove(); }, 3200); }
  }

  /* ---------- Header / menú ---------- */
  var header = $('#header'), nav = $('#mainNav'), menuBtn = $('#menuBtn');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function setMenu(open) {
    if (open) nav.style.height = (window.innerHeight - header.getBoundingClientRect().bottom) + 'px';
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuBtn.querySelector('use').setAttribute('href', open ? '#i-x' : '#i-menu');
    document.body.classList.toggle('locked', open);
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1024 && nav.classList.contains('open')) setMenu(false); });

  /* ---------- Filtros + grid ---------- */
  var grid = $('#grid'), filtersEl = $('#filters'), sortEl = $('#sort'), countEl = $('#resultCount');
  var state = { cat: 'todos', sort: 'featured' };
  filtersEl.innerHTML = CATS.map(function (c) {
    var n = c[0] === 'todos' ? PRODUCTS.length : PRODUCTS.filter(function (p) { return p.cat === c[0]; }).length;
    return '<button class="filter" type="button" data-cat="' + c[0] + '" aria-pressed="' + (c[0] === 'todos') + '">' + c[1] + ' <sup>' + n + '</sup></button>';
  }).join('');

  function cardHTML(p, i) {
    var price = p.price ? '<span class="card-price">' + money(p.price) + '</span>' : '<span class="card-price ask">Precio por consulta</span>';
    var dots = '<span class="dots">' + p.colors.map(function (c) { return '<span class="dot" style="background:' + c[1] + '" title="' + esc(c[0]) + '"></span>'; }).join('') + '</span>';
    return '<article class="card" style="animation-delay:' + (reduce ? 0 : i * 45) + 'ms">' +
      '<div class="card-media' + (p.contain ? ' contain' : '') + '" data-open="' + p.id + '">' +
        (p.tag ? '<span class="card-tag">' + esc(p.tag) + '</span>' : '') +
        '<img src="' + src(p) + '" alt="' + esc(p.name) + ' TABU DENIM" loading="lazy" decoding="async" width="900" height="900">' +
        '<button class="card-quick" type="button" data-open="' + p.id + '"><svg><use href="#i-plus"/></svg> Elegir talla</button>' +
      '</div>' +
      '<div class="card-body">' +
        '<p class="card-kicker">' + esc(p.kicker) + '</p>' +
        '<h3 class="card-title"><button type="button" data-open="' + p.id + '">' + esc(p.name) + '</button></h3>' +
        '<p class="card-sub">' + esc(p.sub) + '</p>' +
        '<div class="card-foot">' + price + dots + '</div>' +
        '<button class="card-add" type="button" data-open="' + p.id + '"><svg><use href="#i-bag"/></svg> Agregar</button>' +
      '</div></article>';
  }
  function render() {
    var list = PRODUCTS.filter(function (p) { return state.cat === 'todos' || p.cat === state.cat; });
    var big = 1e6;
    if (state.sort === 'price-asc') list.sort(function (a, b) { return (a.price || big) - (b.price || big); });
    else if (state.sort === 'price-desc') list.sort(function (a, b) { return (b.price || -1) - (a.price || -1); });
    else if (state.sort === 'name') list.sort(function (a, b) { return a.name.localeCompare(b.name, 'es'); });
    grid.innerHTML = list.map(cardHTML).join('');
    countEl.textContent = list.length + (list.length === 1 ? ' prenda' : ' prendas');
  }
  function setCat(cat) {
    state.cat = cat;
    $$('.filter', filtersEl).forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.cat === cat)); });
    render();
  }
  filtersEl.addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) setCat(b.dataset.cat); });
  sortEl.addEventListener('change', function () { state.sort = sortEl.value; render(); });
  $$('[data-goto]').forEach(function (a) { a.addEventListener('click', function () { setCat(a.dataset.goto); }); });
  grid.addEventListener('click', function (e) { var t = e.target.closest('[data-open]'); if (t) openQV(t.dataset.open, t); });
  render();

  /* ---------- Más vendidos ---------- */
  var bestTrack = $('#bestTrack');
  if (bestTrack) {
    var bests = PRODUCTS.filter(function (p) { return p.best; }).sort(function (a, b) { return a.best - b.best; });
    bestTrack.innerHTML = bests.map(function (p) {
      return '<li class="best-card">' +
        '<button class="best-media' + (p.contain ? ' contain' : '') + '" type="button" data-open="' + p.id + '" aria-label="Ver ' + esc(p.name) + '">' +
          '<img src="' + src(p) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async" width="900" height="1100">' +
          '<span class="best-rank" aria-hidden="true">N.º ' + p.best + '</span>' +
          '<span class="best-badge">' + esc(p.tag) + '</span>' +
        '</button>' +
        '<div class="best-body">' +
          '<p class="best-proof"><svg><use href="#i-wa"/></svg>' + esc(p.proof) + '</p>' +
          '<h3>' + esc(p.name) + '</h3>' +
          '<p class="best-short">' + esc(p.short) + '</p>' +
          '<div class="best-foot"><span class="best-price">' + (p.price ? money(p.price) : 'Precio por consulta') + '</span>' +
          '<span class="dots">' + p.colors.map(function (c) { return '<span class="dot" style="background:' + c[1] + '" title="' + esc(c[0]) + '"></span>'; }).join('') + '</span></div>' +
          '<button class="btn btn-dark full" type="button" data-open="' + p.id + '"><svg><use href="#i-bag"/></svg> Elegir talla</button>' +
        '</div></li>';
    }).join('');
    bestTrack.addEventListener('click', function (e) { var t = e.target.closest('[data-open]'); if (t) openQV(t.dataset.open, t); });
    var prev = $('#bestPrev'), next = $('#bestNext'), dotsEl = $('#bestDots');
    var step = function () { var c = $('.best-card', bestTrack); return c ? c.getBoundingClientRect().width + 16 : 300; };
    dotsEl.innerHTML = bests.map(function () { return '<span></span>'; }).join('');
    var sync = function () {
      var max = bestTrack.scrollWidth - bestTrack.clientWidth - 2;
      $('#bestNav').hidden = max <= 0;
      prev.disabled = bestTrack.scrollLeft <= 2; next.disabled = bestTrack.scrollLeft >= max;
      var i = Math.round(bestTrack.scrollLeft / step());
      $$('span', dotsEl).forEach(function (d, k) { d.classList.toggle('on', k === i); });
    };
    prev.addEventListener('click', function () { bestTrack.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }); });
    next.addEventListener('click', function () { bestTrack.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }); });
    bestTrack.addEventListener('scroll', function () { window.requestAnimationFrame(sync); }, { passive: true });
    window.addEventListener('resize', sync); sync();
  }

  /* ---------- Diálogos (focus trap + Esc) ---------- */
  var openStack = [];
  function openDialog(el, overlay, returnFocus) {
    el.hidden = false; if (overlay) overlay.hidden = false;
    document.body.classList.add('locked');
    openStack.push({ el: el, overlay: overlay, ret: returnFocus || document.activeElement });
    var f = focusables(el); (f[1] || f[0] || el).focus();
  }
  function closeDialog() {
    var d = openStack.pop(); if (!d) return;
    d.el.hidden = true; if (d.overlay) d.overlay.hidden = true;
    if (!openStack.length) document.body.classList.remove('locked');
    if (d.ret && d.ret.focus && document.contains(d.ret)) d.ret.focus();
  }
  function focusables(el) { return $$('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])', el).filter(function (x) { return x.offsetParent !== null || x === document.activeElement; }); }
  document.addEventListener('keydown', function (e) {
    var top = openStack[openStack.length - 1]; if (!top) return;
    if (e.key === 'Escape') { e.preventDefault(); closeDialog(); return; }
    if (top.el.id === 'lightbox') { if (e.key === 'ArrowRight') lbGo(1); if (e.key === 'ArrowLeft') lbGo(-1); }
    if (e.key === 'Tab') {
      var f = focusables(top.el); if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  $$('[data-close]').forEach(function (b) { b.addEventListener('click', closeDialog); });
  $$('.overlay').forEach(function (o) { o.addEventListener('click', closeDialog); });

  /* ---------- Quick view ---------- */
  var qv = $('#qv'), qvOverlay = $('#qvOverlay'), cur = null, sel = {};
  function chipGroup(container, items, current, kind) {
    container.setAttribute('role', 'radiogroup');
    container.innerHTML = items.map(function (it) {
      var label = kind === 'color' ? it[0] : it, val = label;
      var dot = kind === 'color' ? '<span class="dot" style="background:' + it[1] + '"></span>' : '';
      return '<button type="button" class="chip" role="radio" data-val="' + esc(val) + '" aria-checked="' + (current === val) + '">' + dot + esc(label) + '</button>';
    }).join('');
  }
  function openQV(id, from) {
    var p = byId[id]; if (!p) return; cur = p;
    sel = { size: '', color: p.colors[0][0], qty: 1 };
    $('.qv-media', qv).classList.toggle('contain', !!p.contain);
    var img = $('#qvImg'); img.src = src(p); img.alt = p.name;
    $('#qvKicker').textContent = p.kicker;
    $('#qvTitle').textContent = p.name;
    $('#qvPrice').textContent = p.price ? money(p.price) : 'Precio por consulta';
    $('#qvDesc').textContent = p.desc;
    $('#qvFeats').innerHTML = p.feats.map(function (f) { return '<li><svg><use href="#i-check"/></svg>' + esc(f) + '</li>'; }).join('');
    chipGroup($('#qvSizes'), p.sizes.concat([ASK]), '', 'size');
    chipGroup($('#qvColors'), p.colors.concat([['Consultar otros', 'conic-gradient(#c9a96e,#1f2a4a,#6e1b2a,#5f6449,#c9a96e)']]), sel.color, 'color');
    $('#qvColorName').textContent = sel.color;
    $('#qvQty').textContent = '1';
    $('#qvSizeErr').hidden = true;
    openDialog(qv, qvOverlay, from);
  }
  function chipPick(container, key, after) {
    container.addEventListener('click', function (e) {
      var c = e.target.closest('.chip'); if (!c) return;
      $$('.chip', container).forEach(function (x) { x.setAttribute('aria-checked', String(x === c)); });
      sel[key] = c.dataset.val; if (after) after();
    });
    container.addEventListener('keydown', function (e) {
      if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].indexOf(e.key) < 0) return;
      e.preventDefault();
      var cs = $$('.chip', container), i = cs.indexOf(document.activeElement);
      var n = cs[(i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + cs.length) % cs.length];
      n.focus(); n.click();
    });
  }
  chipPick($('#qvSizes'), 'size', function () { $('#qvSizeErr').hidden = true; });
  chipPick($('#qvColors'), 'color', function () { $('#qvColorName').textContent = sel.color; });
  $('#qvMinus').addEventListener('click', function () { sel.qty = Math.max(1, sel.qty - 1); $('#qvQty').textContent = sel.qty; });
  $('#qvPlus').addEventListener('click', function () { sel.qty = Math.min(20, sel.qty + 1); $('#qvQty').textContent = sel.qty; });
  function needSize() {
    if (sel.size) return false;
    var s = $('#qvSizes'); $('#qvSizeErr').hidden = false;
    s.classList.remove('shake'); void s.offsetWidth; s.classList.add('shake');
    $('.chip', s).focus();
    return true;
  }
  $('#qvAdd').addEventListener('click', function () {
    if (needSize()) return;
    addToBag(cur.id, sel.size, sel.color, sel.qty);
    closeDialog();
    toast(cur.name + ' agregada a tu bolsa', true);
  });
  $('#qvWa').addEventListener('click', function () {
    if (needSize()) return;
    wa('Hola TABU DENIM, quiero pedir:\n\n• ' + cur.name + '\n  Talla: ' + sel.size + ' · Color: ' + sel.color + ' · Cantidad: ' + sel.qty +
      (cur.price ? '\n  Precio: ' + money(cur.price) : '') + '\n\n¿Me confirman disponibilidad, envío y formas de pago?');
  });

  /* ---------- Bolsa ---------- */
  var bag = store.get('tabu-bag', []).filter(function (it) { return byId[it.id]; });
  var bagEl = $('#bag'), bagOverlay = $('#bagOverlay');
  function save() { store.set('tabu-bag', bag); }
  function addToBag(id, size, color, qty) {
    var ex = bag.filter(function (it) { return it.id === id && it.size === size && it.color === color; })[0];
    if (ex) ex.qty = Math.min(20, ex.qty + qty); else bag.push({ id: id, size: size, color: color, qty: qty });
    save(); renderBag(true);
  }
  function renderBag(bump) {
    var count = bag.reduce(function (s, it) { return s + it.qty; }, 0);
    var subtotal = 0, pending = 0;
    $('#bagList').innerHTML = bag.map(function (it, i) {
      var p = byId[it.id];
      if (p.price) subtotal += p.price * it.qty; else pending += it.qty;
      return '<li class="bag-item"><img class="' + (p.contain ? 'contain' : '') + '" src="' + src(p) + '" alt="" width="84" height="105" loading="lazy">' +
        '<div><h3>' + esc(p.name) + '</h3><p class="bag-meta">Talla ' + esc(it.size) + ' · ' + esc(it.color) + '</p>' +
        '<div class="bag-row"><div class="qty"><button type="button" data-dec="' + i + '" aria-label="Restar uno de ' + esc(p.name) + '"><svg><use href="#i-minus"/></svg></button><output>' + it.qty + '</output><button type="button" data-inc="' + i + '" aria-label="Sumar uno de ' + esc(p.name) + '"><svg><use href="#i-plus"/></svg></button></div>' +
        '<span class="bag-price">' + (p.price ? money(p.price * it.qty) : 'Por consultar') + '</span>' +
        '<button class="bag-remove" type="button" data-rm="' + i + '" aria-label="Quitar ' + esc(p.name) + '"><svg><use href="#i-trash"/></svg></button></div></div></li>';
    }).join('');
    var empty = !bag.length;
    $('#bagEmpty').hidden = !empty; $('#orderForm').hidden = empty; $('#bagFoot').hidden = empty;
    $('#bagSubtotal').textContent = money(subtotal);
    $('#bagNote').textContent = (pending ? pending + (pending === 1 ? ' prenda con precio por confirmar. ' : ' prendas con precio por confirmar. ') : '') + 'Envío se cotiza según tu ciudad.';
    $('#bagHeadCount').textContent = count ? '(' + count + ')' : '';
    ['#bagCount', '#mbCount'].forEach(function (s) { $(s).textContent = count; });
    $('#bagBtn').setAttribute('aria-label', 'Abrir bolsa de pedido, ' + count + (count === 1 ? ' prenda' : ' prendas'));
    if (bump && !reduce) { var c = $('#bagCount'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump'); }
  }
  $('#bagList').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var i;
    if (b.dataset.inc) { i = +b.dataset.inc; bag[i].qty = Math.min(20, bag[i].qty + 1); }
    else if (b.dataset.dec) { i = +b.dataset.dec; if (bag[i].qty > 1) bag[i].qty--; else bag.splice(i, 1); }
    else if (b.dataset.rm) { bag.splice(+b.dataset.rm, 1); }
    save(); renderBag();
    if (!bag.length) { var f = $('#bagEmpty .btn'); if (f) f.focus(); }
  });
  function openBag(from) { toastEl.classList.remove('show'); renderBag(); openDialog(bagEl, bagOverlay, from); }
  $('#bagBtn').addEventListener('click', function () { openBag(this); });
  $('#mbBag').addEventListener('click', function () { openBag(this); });
  $('#clearBag').addEventListener('click', function () { if (window.confirm('¿Vaciar la bolsa?')) { bag = []; save(); renderBag(); } });

  // Recordar datos del formulario
  var form = $('#orderForm'), saved = store.get('tabu-form', {});
  ['name', 'city', 'pay'].forEach(function (k) { if (saved[k]) form.elements[k].value = saved[k]; });
  form.addEventListener('input', function () { store.set('tabu-form', { name: form.elements.name.value, city: form.elements.city.value, pay: form.elements.pay.value }); });
  form.addEventListener('submit', function (e) { e.preventDefault(); sendOrder(); });
  $('#sendOrder').addEventListener('click', sendOrder);
  function validate(input) {
    var ok = input.value.trim().length > 1, lab = input.closest('label');
    lab.classList.toggle('invalid', !ok); $('.err', lab).hidden = ok;
    input.setAttribute('aria-invalid', String(!ok));
    return ok;
  }
  ['fName', 'fCity'].forEach(function (id) { $('#' + id).addEventListener('blur', function () { if (this.value) validate(this); }); });
  function sendOrder() {
    var okN = validate($('#fName')), okC = validate($('#fCity'));
    if (!okN || !okC) { (okN ? $('#fCity') : $('#fName')).focus(); return; }
    var subtotal = 0, lines = bag.map(function (it, i) {
      var p = byId[it.id]; if (p.price) subtotal += p.price * it.qty;
      return (i + 1) + '. ' + p.name + '\n   Talla: ' + it.size + ' · Color: ' + it.color + ' · Cant.: ' + it.qty + (p.price ? ' · ' + money(p.price * it.qty) : ' · Precio por confirmar');
    });
    var f = form.elements;
    var msg = 'Hola TABU DENIM, quiero hacer este pedido:\n\n' + lines.join('\n') +
      '\n\nSubtotal referencial: ' + money(subtotal) + (bag.some(function (it) { return !byId[it.id].price; }) ? ' (+ prendas por cotizar)' : '') +
      '\n\nNombre: ' + f.name.value.trim() + '\nCiudad: ' + f.city.value.trim() + '\nForma de pago: ' + f.pay.value +
      (f.notes.value.trim() ? '\nNotas: ' + f.notes.value.trim() : '') +
      '\n\n¿Me confirman disponibilidad, costo de envío con Servientrega y total?';
    wa(msg);
  }
  renderBag();

  /* ---------- Toast ---------- */
  var toastEl = $('#toast'), toastT;
  function toast(text, withLink) {
    toastEl.innerHTML = '<svg><use href="#i-check"/></svg><span>' + esc(text) + '</span>' + (withLink ? '<button type="button">Ver bolsa</button>' : '');
    toastEl.classList.add('show');
    var b = $('button', toastEl); if (b) b.addEventListener('click', function () { toastEl.classList.remove('show'); openBag($('#bagBtn')); });
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 3800);
  }

  /* ---------- Look builder ---------- */
  var tops = PRODUCTS.filter(function (p) { return p.cat === 'lino' || p.cat === 'vestir'; });
  var bottoms = PRODUCTS.filter(function (p) { return p.cat === 'pantalones' || p.cat === 'denim' || p.cat === 'bermudas'; });
  var look = { top: tops[1], bottom: bottoms[0] };
  function swatchGroup(el, list, key, label) {
    el.setAttribute('role', 'radiogroup'); el.setAttribute('aria-label', label);
    el.innerHTML = list.map(function (p) {
      return '<button type="button" class="swatch" role="radio" data-id="' + p.id + '" aria-checked="' + (look[key] === p) + '" aria-label="' + esc(p.name) + '" title="' + esc(p.name) + '" style="background:' + p.colors[0][1] + '"></button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var s = e.target.closest('.swatch'); if (!s) return;
      look[key] = byId[s.dataset.id];
      $$('.swatch', el).forEach(function (x) { x.setAttribute('aria-checked', String(x === s)); });
      renderLook(key);
    });
    el.addEventListener('keydown', function (e) {
      if (['ArrowRight', 'ArrowLeft'].indexOf(e.key) < 0) return;
      e.preventDefault();
      var cs = $$('.swatch', el), i = cs.indexOf(document.activeElement);
      var n = cs[(i + (e.key === 'ArrowRight' ? 1 : -1) + cs.length) % cs.length]; n.focus(); n.click();
    });
  }
  function setLookImg(imgSel, nameSel, p) {
    var img = $(imgSel);
    var apply = function () { img.src = src(p); img.alt = p.name; img.classList.remove('swap'); };
    if (img.getAttribute('src') && !reduce) { img.classList.add('swap'); setTimeout(apply, 180); } else apply();
    $(nameSel).textContent = p.name;
  }
  function renderLook(which) {
    if (!which || which === 'top') setLookImg('#lookTopImg', '#lookTopName', look.top);
    if (!which || which === 'bottom') setLookImg('#lookBottomImg', '#lookBottomName', look.bottom);
    var t = look.top.price, b = look.bottom.price;
    $('#lookTotal').innerHTML = (t && b) ? money(t + b) + '<small>Precio referencial del conjunto, antes de promociones.</small>'
      : 'Precio por consulta<small>Te cotizamos el conjunto completo por WhatsApp.</small>';
  }
  swatchGroup($('#lookTops'), tops, 'top', 'Camisas');
  swatchGroup($('#lookBottoms'), bottoms, 'bottom', 'Pantalones y bermudas');
  renderLook();
  $('#lookAdd').addEventListener('click', function () {
    addToBag(look.top.id, ASK, look.top.colors[0][0], 1);
    addToBag(look.bottom.id, ASK, look.bottom.colors[0][0], 1);
    toast('Look agregado. Confirmaremos tallas contigo.', true);
  });
  $('#lookWa').addEventListener('click', function () {
    wa('Hola TABU DENIM, quiero cotizar este look:\n\n• ' + look.top.name + '\n• ' + look.bottom.name + '\n\n¿Me ayudan con tallas, precio del combo y promociones vigentes?');
  });

  /* ---------- Lightbox ---------- */
  var lbItems = $$('.lb-item'), lb = $('#lightbox'), lbIndex = 0;
  function lbShow() {
    var img = $('img', lbItems[lbIndex]);
    var big = $('#lbImg'); big.src = img.src; big.alt = img.alt;
    $('#lbCounter').textContent = (lbIndex + 1) + ' / ' + lbItems.length;
  }
  function lbGo(d) { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; lbShow(); }
  lbItems.forEach(function (b, i) { b.addEventListener('click', function () { lbIndex = i; lbShow(); openDialog(lb, null, b); }); });
  $('#lbPrev').addEventListener('click', function () { lbGo(-1); });
  $('#lbNext').addEventListener('click', function () { lbGo(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeDialog(); });
  var tx = null;
  lb.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) { if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) lbGo(dx < 0 ? 1 : -1); tx = null; });

  /* ---------- Reveal on scroll ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) { el.style.transitionDelay = ((i % 4) * 70) + 'ms'; io.observe(el); });
  } else reveals.forEach(function (el) { el.classList.add('in'); });

  $('#year').textContent = new Date().getFullYear();
})();
