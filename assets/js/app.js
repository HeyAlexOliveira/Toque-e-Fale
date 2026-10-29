/* Toque e Fale - logica do app (cartoes, voz, painel do professor, tema). */
(function () {
  var ICONS = {
    "preciso": "assets/img/categorias/preciso.webp",
    "sentir": "assets/img/categorias/sentimentos.webp",
    "escola": "assets/img/categorias/escola.webp",
    "brincar": "assets/img/categorias/brincar.webp",
    "pessoas": "assets/img/categorias/pessoas.webp",
    "conversa": "assets/img/categorias/conversa.webp",
    "banheiro": "assets/img/cartoes/preciso/banheiro.webp",
    "beber": "assets/img/cartoes/preciso/beber.webp",
    "comer": "assets/img/cartoes/preciso/comer.webp",
    "dor": "assets/img/cartoes/preciso/dor.webp",
    "ajuda": "assets/img/cartoes/preciso/ajuda.webp",
    "calor": "assets/img/cartoes/preciso/calor.webp",
    "frio": "assets/img/cartoes/preciso/frio.webp",
    "descansar": "assets/img/cartoes/preciso/descansar.webp",
    "bravo": "assets/img/cartoes/sentimentos/bravo.webp",
    "calmo": "assets/img/cartoes/sentimentos/calmo.webp",
    "cansado": "assets/img/cartoes/sentimentos/cansado.webp",
    "feliz": "assets/img/cartoes/sentimentos/feliz.webp",
    "medo": "assets/img/cartoes/sentimentos/medo.webp",
    "mal": "assets/img/cartoes/sentimentos/mal.webp",
    "triste": "assets/img/cartoes/sentimentos/triste.webp",
    "caderno": "assets/img/cartoes/escola/caderno.webp",
    "lapis": "assets/img/cartoes/escola/lapis.webp",
    "lanche": "assets/img/cartoes/escola/lanche.webp",
    "livro": "assets/img/cartoes/escola/livro.webp",
    "mochila": "assets/img/cartoes/escola/mochila.webp",
    "pintar": "assets/img/cartoes/escola/pintar.webp",
    "recreio": "assets/img/cartoes/escola/recreio.webp",
    "terminei": "assets/img/cartoes/escola/terminei.webp",
    "blocos": "assets/img/cartoes/brincar/blocos.webp",
    "carrinho": "assets/img/cartoes/brincar/carrinho.webp",
    "musica": "assets/img/cartoes/brincar/musica.webp",
    "parque": "assets/img/cartoes/brincar/parque.webp",
    "quebra": "assets/img/cartoes/brincar/quebra.webp",
    "ursinho": "assets/img/cartoes/brincar/ursinho.webp",
    "bola": "assets/img/cartoes/brincar/bola.webp",
    "tablet": "assets/img/cartoes/brincar/tablet.webp",
    "amigo": "assets/img/cartoes/pessoas/amigo.webp",
    "avo": "assets/img/cartoes/pessoas/avo.webp",
    "avoo": "assets/img/cartoes/pessoas/avoo.webp",
    "mae": "assets/img/cartoes/pessoas/mae.webp",
    "pai": "assets/img/cartoes/pessoas/pai.webp",
    "professor": "assets/img/cartoes/pessoas/professor.webp",
    "professora": "assets/img/cartoes/pessoas/professora.webp",
    "bomdia": "assets/img/cartoes/conversa/bomdia.webp",
    "casa": "assets/img/cartoes/conversa/casa.webp",
    "chega": "assets/img/cartoes/conversa/chega.webp",
    "desculpa": "assets/img/cartoes/conversa/desculpa.webp",
    "espera": "assets/img/cartoes/conversa/espera.webp",
    "gostei": "assets/img/cartoes/conversa/gostei.webp",
    "mais": "assets/img/cartoes/conversa/mais.webp",
    "naogostei": "assets/img/cartoes/conversa/naogostei.webp",
    "naosei": "assets/img/cartoes/conversa/naosei.webp",
    "nao": "assets/img/cartoes/conversa/nao.webp",
    "obrigado": "assets/img/cartoes/conversa/obrigado.webp",
    "oi": "assets/img/cartoes/conversa/oi.webp",
    "outro": "assets/img/cartoes/conversa/outro.webp",
    "porfavor": "assets/img/cartoes/conversa/porfavor.webp",
    "sim": "assets/img/cartoes/conversa/sim.webp",
    "tchau": "assets/img/cartoes/conversa/tchau.webp"
  }, LOGO_SRC = document.querySelector("#splash .sp-logo").src, BIRD_SRC = document.getElementById("logo").src;
  var DATA = [
    { id: "preciso", word: "Preciso", emoji: "🙋", items: [
      { id: "banheiro", word: "Banheiro", emoji: "🚽", say: "Quero ir ao banheiro" },
      { id: "beber",    word: "Beber",    emoji: "🥤", say: "Quero beber" },
      { id: "comer",    word: "Comer",    emoji: "🍽️", say: "Quero comer" },
      { id: "dor",      word: "Dor",      emoji: "🤕", say: "Estou com dor" },
      { id: "ajuda",    word: "Ajuda",    emoji: "🆘", say: "Preciso de ajuda" },
      { id: "calor",    word: "Calor",    emoji: "🥵", say: "Estou com calor" },
      { id: "frio",     word: "Frio",     emoji: "🥶", say: "Estou com frio" },
      { id: "descansar",word: "Descansar",emoji: "😴", say: "Quero descansar" } ] },
    { id: "sentir", word: "Sentimentos", emoji: "😊", items: [
      { id: "feliz",    word: "Feliz",    emoji: "😊", say: "Estou feliz" },
      { id: "triste",   word: "Triste",   emoji: "😢", say: "Estou triste" },
      { id: "bravo",    word: "Bravo",    emoji: "😠", say: "Estou bravo" },
      { id: "medo",     word: "Medo",     emoji: "😨", say: "Estou com medo" },
      { id: "cansado",  word: "Cansado",  emoji: "🥱", say: "Estou cansado" },
      { id: "calmo",    word: "Calmo",    emoji: "😌", say: "Estou calmo" },
      { id: "mal",      word: "Passando mal", emoji: "🤒", say: "Estou me sentindo mal" } ] },
    { id: "escola", word: "Escola", emoji: "🎒", items: [
      { id: "lanche",   word: "Lanche",   emoji: "🍎", say: "Quero meu lanche" },
      { id: "livro",    word: "Livro",    emoji: "📚", say: "Quero o livro" },
      { id: "lapis",    word: "Lápis",    emoji: "✏️", say: "Quero o lápis" },
      { id: "caderno",  word: "Caderno",  emoji: "📓", say: "Quero o caderno" },
      { id: "pintar",   word: "Pintar",   emoji: "🎨", say: "Quero pintar" },
      { id: "mochila",  word: "Mochila",  emoji: "🎒", say: "Quero minha mochila" },
      { id: "terminei", word: "Terminei", emoji: "✅", say: "Terminei" },
      { id: "recreio",  word: "Recreio",  emoji: "🔔", say: "Quero ir para o recreio" } ] },
    { id: "brincar", word: "Brincar", emoji: "⚽", items: [
      { id: "bola",     word: "Bola",     emoji: "⚽", say: "Quero a bola" },
      { id: "blocos",   word: "Blocos",   emoji: "🧱", say: "Quero os blocos" },
      { id: "quebra",   word: "Quebra-cabeça", emoji: "🧩", say: "Quero o quebra-cabeça" },
      { id: "carrinho", word: "Carrinho", emoji: "🚗", say: "Quero o carrinho" },
      { id: "ursinho",  word: "Ursinho",  emoji: "🧸", say: "Quero o ursinho" },
      { id: "parque",   word: "Parquinho",emoji: "🛝", say: "Quero ir ao parquinho" },
      { id: "musica",   word: "Música",   emoji: "🎵", say: "Quero ouvir música" },
      { id: "tablet",   word: "Tablet",   emoji: "📱", say: "Quero o tablet" } ] },
    { id: "pessoas", word: "Pessoas", emoji: "🧑", items: [
      { id: "professora", word: "Professora", emoji: "👩‍🏫", say: "Quero chamar a professora" },
      { id: "professor",  word: "Professor",  emoji: "👨‍🏫", say: "Quero chamar o professor" },
      { id: "mae",      word: "Mãe",      emoji: "👩", say: "Quero minha mãe" },
      { id: "pai",      word: "Pai",      emoji: "👨", say: "Quero meu pai" },
      { id: "avo",      word: "Vovó",     emoji: "👵", say: "Quero minha vovó" },
      { id: "avoo",     word: "Vovô",     emoji: "👴", say: "Quero meu vovô" },
      { id: "amigo",    word: "Amigo",    emoji: "🧒", say: "Quero brincar com meu amigo" } ] },
    { id: "conversa", word: "Conversa", emoji: "💬", items: [
      { id: "oi",       word: "Oi",       emoji: "👋", say: "Oi" },
      { id: "bomdia",   word: "Bom dia",  emoji: "☀️", say: "Bom dia" },
      { id: "tchau",    word: "Tchau",    emoji: "🖐️", say: "Tchau" },
      { id: "sim",      word: "Sim",      emoji: "👍", say: "Sim" },
      { id: "nao",      word: "Não",      emoji: "👎", say: "Não" },
      { id: "mais",     word: "Mais",     emoji: "➕", say: "Quero mais" },
      { id: "outro",    word: "Outro",    emoji: "🔄", say: "Quero outro" },
      { id: "chega",    word: "Chega",    emoji: "🛑", say: "Chega, quero parar" },
      { id: "espera",   word: "Espera",   emoji: "⏳", say: "Espera um pouco" },
      { id: "gostei",   word: "Gostei",   emoji: "❤️", say: "Eu gostei" },
      { id: "naogostei",word: "Não gostei", emoji: "💔", say: "Eu não gostei" },
      { id: "naosei",   word: "Não sei",  emoji: "🤷", say: "Não sei" },
      { id: "porfavor", word: "Por favor",emoji: "🤲", say: "Por favor" },
      { id: "obrigado", word: "Obrigado", emoji: "🙏", say: "Obrigado" },
      { id: "desculpa", word: "Desculpa", emoji: "😔", say: "Desculpa" },
      { id: "casa",     word: "Casa",     emoji: "🏠", say: "Quero ir para casa" } ] }
  ];
  var NEWIDS = ["bomdia", "tchau", "outro", "gostei", "naogostei", "naosei", "porfavor", "desculpa"];
  var ALL = [];
  DATA.forEach(function (c) { c.items.forEach(function (i) { ALL.push(i.id); }); });
  function firstN(n) { var r = []; DATA.forEach(function (c) { c.items.slice(0, n).forEach(function (i) { r.push(i.id); }); }); return r; }
  var PRESETS = { ini: ["banheiro", "comer", "beber", "dor", "sim", "nao"], med: firstN(4), all: ALL.slice() };
  var DEF = { voice: true, volume: 0.8, pitch: 1, rate: 0.9, vpreset: "natural", vname: "", chirp: false, name: "", theme: "auto", on: ALL.slice(), extra: { label: "", emoji: "⭐" } };
  var S = load(), view = null, backTimer = null;
  var home = document.getElementById("home"), slot = document.getElementById("slot"), gear = document.getElementById("gear"), who = document.getElementById("who");
  var backBtn = document.getElementById("back"), logo = document.getElementById("logo"), LOGO_HEADER = document.getElementById("logo").src, titleEl = document.getElementById("title");
  var HOST_THEME = document.documentElement.getAttribute("data-theme");
  function applyTheme() {
    var root = document.documentElement;
    if (S.theme === "auto") { if (HOST_THEME) root.setAttribute("data-theme", HOST_THEME); else root.removeAttribute("data-theme"); }
    else root.setAttribute("data-theme", S.theme);
    syncThemeBtn();
  }
  function isDark() {
    if (S.theme !== "auto") return S.theme === "dark";
    if (HOST_THEME) return HOST_THEME === "dark";
    return !!(window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function syncThemeBtn() {
    var b = document.getElementById("theme"); if (!b) return;
    var d = isDark(); b.classList.toggle("is-dark", d);
    b.setAttribute("aria-label", d ? "Mudar para o tema claro" : "Mudar para o tema escuro");
  }
  try { matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncThemeBtn); } catch (e) {}
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("#theme"); if (!b) return;
    S.theme = isDark() ? "light" : "dark"; save(); applyTheme();
    var pp = document.getElementById("panel");
    if (pp) pp.querySelectorAll("[data-theme-opt]").forEach(function (x) { x.setAttribute("aria-pressed", x.getAttribute("data-theme-opt") === S.theme); });
  });
  var hasSpeech = "speechSynthesis" in window;

  function migrate(r) {
    if (r.vpreset === "papagaio" && r.pitch === 1.55 && r.rate === 1 && !r.vname) { r.vpreset = DEF.vpreset; r.pitch = DEF.pitch; r.rate = DEF.rate; }
    return r;
  }
  function pitchLabel(v) { return v < 0.85 ? "Grave" : v < 1.15 ? "Normal" : v < 1.4 ? "Agudo" : "Muito agudo"; }
  function rateLabel(v) { return v < 0.8 ? "Devagar" : v < 1.05 ? "Normal" : "Rápido"; }
  function load() {
    try {
      var o = JSON.parse(localStorage.getItem("toque-e-fale-3"));
      if (o) return migrate({
        voice: o.voice !== false,
        volume: typeof o.volume === "number" ? o.volume : DEF.volume,
        pitch: typeof o.pitch === "number" ? o.pitch : DEF.pitch, rate: typeof o.rate === "number" ? o.rate : DEF.rate,
        vpreset: typeof o.vpreset === "string" ? o.vpreset : (typeof o.pitch === "number" ? "" : DEF.vpreset), vname: typeof o.vname === "string" ? o.vname : "", chirp: o.chirp === true,
        name: typeof o.name === "string" ? o.name : "",
        theme: o.theme === "light" || o.theme === "dark" ? o.theme : "auto",
        on: Array.isArray(o.on) && o.on.length ? o.on.concat(NEWIDS.filter(function (x) { return o.on.indexOf("sim") > -1 && o.on.indexOf("casa") > -1 && o.on.indexOf(x) < 0; })) : ALL.slice(),
        extra: o.extra && typeof o.extra.label === "string" ? o.extra : { label: "", emoji: "⭐" }
      });
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEF));
  }
  function save() { try { localStorage.setItem("toque-e-fale-3", JSON.stringify(S)); } catch (e) {} }

  var VPRE = { natural: { n: "Natural", p: 1, r: 0.9 }, alegre: { n: "Alegre", p: 1.2, r: 0.95 }, papagaio: { n: "Papagaio", p: 1.55, r: 1 }, grave: { n: "Grave", p: 0.8, r: 0.9 } };
  function ptVoices() { try { return speechSynthesis.getVoices().filter(function (v) { return /^pt/i.test(v.lang); }); } catch (e) { return []; } }
  function score(v) { return (/pt[-_]BR/i.test(v.lang) ? 4 : 0) + (/natural|neural|online/i.test(v.name) ? 3 : 0) + (/google/i.test(v.name) ? 2 : 0) + (/francisca|luciana|thalita|antonio|camila|vit[oó]ria/i.test(v.name) ? 1 : 0); }
  function pickVoice() {
    var vs = ptVoices(); if (!vs.length) return null;
    if (S.vname) { var f = vs.filter(function (v) { return v.name === S.vname; })[0]; if (f) return f; }
    return vs.slice().sort(function (a, b) { return score(b) - score(a); })[0];
  }
  function chirp() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      var ctx = chirp.c || (chirp.c = new AC()), t = ctx.currentTime;
      [0, 0.14].forEach(function (d, i) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "triangle"; o.frequency.setValueAtTime(900 + i * 300, t + d); o.frequency.exponentialRampToValueAtTime(2300 + i * 400, t + d + 0.1);
        g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.3 * S.volume, t + d + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.11);
        o.connect(g); g.connect(ctx.destination); o.start(t + d); o.stop(t + d + 0.12);
      });
    } catch (e) {}
  }
  function speak(text) {
    if (!S.voice || !hasSpeech) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text), v = pickVoice();
      u.lang = v ? v.lang : "pt-BR"; if (v) u.voice = v;
      u.volume = S.volume; u.pitch = S.pitch; u.rate = S.rate;
      if (S.chirp) { chirp(); setTimeout(function () { speechSynthesis.speak(u); }, 320); } else speechSynthesis.speak(u);
    } catch (e) {}
  }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function categories() {
    var list = DATA.filter(function (c) { return c.items.some(function (i) { return S.on.indexOf(i.id) > -1; }); });
    if (S.extra.label.trim()) list = list.concat([{ id: "meus", word: "Meus cartões", emoji: "⭐" }]);
    return list;
  }
  function itemsOf(catId) {
    if (catId === "meus") return S.extra.label.trim() ? [{ id: "extra", word: S.extra.label.trim(), emoji: S.extra.emoji || "⭐", say: S.extra.label.trim() }] : [];
    var c = DATA.filter(function (x) { return x.id === catId; })[0];
    return c ? c.items.filter(function (i) { return S.on.indexOf(i.id) > -1; }) : [];
  }
  function catById(id) { return id === "meus" ? { id: "meus", word: "Meus cartões" } : DATA.filter(function (x) { return x.id === id; })[0]; }
  function cardHTML(c) { return '<span class="disc' + (ICONS[c.id] ? ' has-ico' : '') + (c.id === "pessoas" ? ' fill' : '') + '" aria-hidden="true">' + (ICONS[c.id] ? '<img src="' + ICONS[c.id] + '" alt="">' : '<span class="emo">' + esc(c.emoji) + '</span>') + '</span><span class="word">' + esc(c.word) + '</span>'; }
  function paint(el, catId) { el.style.setProperty("--c", "var(--c-" + catId + ")"); el.style.setProperty("--d", "var(--d-" + catId + ")"); }

  var TONE = {};
  function toneCards() {
    if (view !== null) return;
    var cols = getComputedStyle(home).gridTemplateColumns.split(" ").length || 1;
    Array.prototype.forEach.call(home.children, function (el, i) {
      var t = ((Math.floor(i / cols) + (i % cols)) % 2) ? "g" : "b";
      el.dataset.tone = t; if (el.dataset.cat) TONE[el.dataset.cat] = t;
    });
  }
  window.addEventListener("resize", toneCards);
  function render() {
    who.textContent = S.name.trim() ? "Olá, " + S.name.trim() : "";
    var list, inCat = view !== null;
    if (inCat) { list = itemsOf(view); if (!list.length) { view = null; inCat = false; } }
    if (!inCat) list = categories();
    backBtn.hidden = !inCat; logo.hidden = false; logo.src = (inCat && ICONS[view]) ? ICONS[view] : LOGO_HEADER;
    document.body.classList.toggle("incat", inCat);
    document.querySelector("header").style.setProperty("--hc", inCat ? "var(--c-" + view + ")" : "var(--line)");
    titleEl.innerHTML = inCat ? esc(catById(view).word) : '<img class="brand-logo" alt="Toque e Fale" src="' + LOGO_SRC + '">';
    var n = list.length;
    home.style.setProperty("--cols", n <= 3 ? n : n === 4 ? 2 : n <= 6 ? 3 : n === 9 ? 3 : 4);
    home.style.setProperty("--cols-ph", n <= 3 ? 1 : n <= 8 ? 2 : 3);
    home.style.setProperty("--cols-p", n <= 3 ? 1 : n <= 8 ? 2 : n <= 12 ? 3 : (n % 4 === 0 ? 4 : 3));
    home.innerHTML = "";
    list.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "card" + (inCat ? " item" : ""); paint(b, inCat ? view : c.id);
      b.setAttribute("aria-label", inCat ? c.say : "Categoria " + c.word);
      b.innerHTML = cardHTML(c);
      b.addEventListener("click", function () { if (inCat) openCard(c, view); else { view = c.id; render(); } });
      if (inCat) b.dataset.tone = TONE[view] || "b"; else b.dataset.cat = c.id;
      home.appendChild(b);
    });
    toneCards();
  }
  backBtn.addEventListener("click", function () { view = null; render(); });

  function phraseHTML(c) {
    var t = c.say, w = (c.word || "").toLowerCase(), i = w ? t.toLowerCase().indexOf(w) : -1;
    if (i > -1) return esc(t.slice(0, i)) + "<mark>" + esc(t.slice(i, i + w.length)) + "</mark>" + esc(t.slice(i + w.length));
    return esc(t);
  }
  function openCard(c, catId) {
    closeFull();
    var f = document.createElement("button");
    f.type = "button"; f.id = "full"; paint(f, catId); f.dataset.tone = TONE[catId] || "b";
    f.setAttribute("aria-label", c.say + ". Toque para voltar.");
    f.innerHTML = '<span class="topbar"><span class="x" aria-hidden="true">\u2715</span><span class="track"><span class="fill"></span></span><span class="spk" role="button" aria-label="Ouvir de novo">\uD83D\uDD0A</span></span>' + cardHTML(c) + '<span class="say"><img alt="" src="' + (ICONS[catId] || BIRD_SRC) + '"><span class="phrase">' + phraseHTML(c) + '</span></span><span class="back"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg>Voltar</span>';
    f.querySelector(".spk").addEventListener("click", function (e) { e.stopPropagation(); speak(c.say); });
    f.addEventListener("click", closeFull);
    slot.appendChild(f);
    speak(c.say);
    backTimer = setTimeout(closeFull, 7000);
  }
  function closeFull() { clearTimeout(backTimer); var f = document.getElementById("full"); if (f) f.remove(); }

  var holdT = null;
  function startHold(e) { e.preventDefault(); gear.classList.add("holding"); holdT = setTimeout(function () { gear.classList.remove("holding"); openPanel(); }, 1500); }
  function endHold() { clearTimeout(holdT); gear.classList.remove("holding"); }
  gear.addEventListener("pointerdown", startHold);
  ["pointerup", "pointerleave", "pointercancel"].forEach(function (ev) { gear.addEventListener(ev, endHold); });
  gear.addEventListener("contextmenu", function (e) { e.preventDefault(); });
  document.getElementById("menu").addEventListener("click", openPanel);
  gear.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPanel(); } });

  function openPanel() {
    closePanel();
    var p = document.createElement("div");
    p.id = "panel";
    var groups = DATA.map(function (c) {
      return '<div class="group"><h3>' + c.emoji + ' ' + esc(c.word) + '</h3><div class="chips">' + c.items.map(function (i) {
        return '<button type="button" class="chip" data-id="' + i.id + '" aria-pressed="' + (S.on.indexOf(i.id) > -1) + '">' + esc(i.word) + '</button>';
      }).join("") + '</div></div>';
    }).join("");
    p.innerHTML =
      '<div class="sheet" role="dialog" aria-label="Painel do professor">' +
        '<div class="phead"><h2>Painel do professor</h2><button type="button" class="pclose" id="pclose" aria-label="Fechar o painel"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
        '<div class="ptabs" role="tablist">' +
          '<button type="button" role="tab" class="ptab" data-tab="cartoes" aria-selected="true">Cartões</button>' +
          '<button type="button" role="tab" class="ptab" data-tab="voz" aria-selected="false">Voz</button>' +
          '<button type="button" role="tab" class="ptab" data-tab="aparencia" aria-selected="false">Aparência</button>' +
        '</div>' +
        '<div class="pbody">' +
          '<section class="pane" id="pane-cartoes" role="tabpanel">' +
            '<div class="field"><label for="sname">Nome do aluno</label><input id="sname" type="text" maxlength="24" placeholder="Aparece no topo da tela" value="' + esc(S.name) + '"></div>' +
            '<div class="field"><label>Cartões liberados</label><p>Comece com poucos e aumente conforme o aluno evolui. Uma categoria sem cartões some da tela inicial.</p><div class="btns"><button type="button" class="btn quiet" data-preset="ini">Iniciante</button><button type="button" class="btn quiet" data-preset="med">Intermediário</button><button type="button" class="btn quiet" data-preset="all">Todos</button></div></div>' +
            groups +
            '<div class="field"><label for="xl">Cartão personalizado</label><p>Palavra ou frase do aluno e um emoji. Deixe a palavra vazia para ocultar.</p><div class="two"><input id="xl" type="text" maxlength="22" placeholder="Ex.: Meu ursinho" value="' + esc(S.extra.label) + '"><input id="xe" type="text" maxlength="4" value="' + esc(S.extra.emoji) + '" aria-label="Emoji"></div></div>' +
          '</section>' +
          '<section class="pane" id="pane-voz" role="tabpanel" hidden>' +
            '<div class="row"><label for="vsw">Voz ligada</label><button type="button" id="vsw" class="switch" role="switch" aria-checked="' + S.voice + '"></button></div>' +
            '<div class="field"><label>Estilo da voz</label><p>“Natural” é o padrão e o mais indicado para o dia a dia. Os outros estilos são opções.</p><div class="seg">' + Object.keys(VPRE).map(function (k) { return '<button type="button" class="chip" data-vpre="' + k + '" aria-pressed="' + (S.vpreset === k) + '">' + VPRE[k].n + '</button>'; }).join("") + '</div></div>' +
            '<div class="field"><label for="vsel">Voz do aparelho</label><p>Vozes em português instaladas no tablet. Em “Automática”, o app escolhe a melhor disponível.</p><select id="vsel"></select></div>' +
            '<div class="field"><div class="lbl"><label for="vpitch">Tom</label><span class="val" id="vpv">' + pitchLabel(S.pitch) + '</span></div><input id="vpitch" type="range" min="0.5" max="2" step="0.05" value="' + S.pitch + '"><div class="rl"><span>Grave</span><span>Agudo</span></div></div>' +
            '<div class="field"><div class="lbl"><label for="vrate">Velocidade</label><span class="val" id="vrv">' + rateLabel(S.rate) + '</span></div><input id="vrate" type="range" min="0.6" max="1.3" step="0.05" value="' + S.rate + '"><div class="rl"><span>Devagar</span><span>Rápido</span></div></div>' +
            '<div class="field"><div class="lbl"><label for="vol">Volume</label></div><input id="vol" type="range" min="0.1" max="1" step="0.1" value="' + S.volume + '"><div class="rl"><span>Baixo</span><span>Alto</span></div></div>' +
            '<div class="row"><label for="csw">Piado do papagaio antes da fala<small>Desligado por padrão</small></label><button type="button" id="csw" class="switch" role="switch" aria-checked="' + S.chirp + '"></button></div>' +
            (hasSpeech ? '' : '<div class="note">Este aparelho não tem voz disponível no navegador.</div>') +
            '<button type="button" class="btn quiet vtest" id="test">Testar voz</button>' +
          '</section>' +
          '<section class="pane" id="pane-aparencia" role="tabpanel" hidden>' +
            '<div class="field"><label>Tema</label><p>“Automático” segue o tema do aparelho. Também dá para trocar pelo botão de sol e lua no topo do app.</p><div class="seg"><button type="button" class="chip" data-theme-opt="auto" aria-pressed="' + (S.theme === "auto") + '">Automático</button><button type="button" class="chip" data-theme-opt="light" aria-pressed="' + (S.theme === "light") + '">Claro</button><button type="button" class="chip" data-theme-opt="dark" aria-pressed="' + (S.theme === "dark") + '">Escuro</button></div></div>' +
          '</section>' +
        '</div>' +
        '<div class="pfoot"><button type="button" class="btn" id="done">Pronto</button></div>' +
      '</div>';
    slot.appendChild(p);

    function sync() { p.querySelectorAll(".chip[data-id]").forEach(function (ch) { ch.setAttribute("aria-pressed", S.on.indexOf(ch.getAttribute("data-id")) > -1); }); }
    p.addEventListener("click", function (e) {
      var th = e.target.closest("[data-theme-opt]");
      if (th) {
        S.theme = th.getAttribute("data-theme-opt"); save(); applyTheme();
        p.querySelectorAll("[data-theme-opt]").forEach(function (x) { x.setAttribute("aria-pressed", x === th); });
        return;
      }
      var ch = e.target.closest(".chip[data-id]");
      if (ch) {
        var id = ch.getAttribute("data-id"), i = S.on.indexOf(id);
        if (i > -1) { if (S.on.length > 1) S.on.splice(i, 1); } else { S.on.push(id); }
        sync(); save(); render(); return;
      }
      var pb = e.target.closest("[data-preset]");
      if (pb) { S.on = PRESETS[pb.getAttribute("data-preset")].slice(); sync(); save(); view = null; render(); }
    });
    p.querySelector("#sname").addEventListener("input", function (e) { S.name = e.target.value; save(); render(); });
    p.querySelector("#xl").addEventListener("input", function (e) { S.extra.label = e.target.value; save(); render(); });
    p.querySelector("#xe").addEventListener("input", function (e) { S.extra.emoji = e.target.value; save(); render(); });
    var sw = p.querySelector("#vsw");
    sw.addEventListener("click", function () { S.voice = !S.voice; sw.setAttribute("aria-checked", S.voice); save(); });
    p.querySelector("#vol").addEventListener("input", function (e) { S.volume = parseFloat(e.target.value); save(); });
    p.querySelector("#test").addEventListener("click", function () { speak("Quero ir ao banheiro"); });
    var vsel = p.querySelector("#vsel");
    function fillVoices() {
      var vs = ptVoices(), best = pickVoice();
      vsel.innerHTML = '<option value="">Automática' + (best && !S.vname ? " (" + esc(best.name) + ")" : "") + '</option>' + vs.map(function (v) { return '<option value="' + esc(v.name) + '"' + (v.name === S.vname ? " selected" : "") + '>' + esc(v.name) + " (" + esc(v.lang) + ")</option>"; }).join("");
    }
    fillVoices(); try { speechSynthesis.onvoiceschanged = fillVoices; } catch (e) {}
    vsel.addEventListener("change", function () { S.vname = vsel.value; save(); speak("Quero ir ao banheiro"); });
    p.querySelectorAll("[data-vpre]").forEach(function (b) { b.addEventListener("click", function () {
      var k = b.getAttribute("data-vpre"); S.vpreset = k; S.pitch = VPRE[k].p; S.rate = VPRE[k].r; save();
      p.querySelector("#vpitch").value = S.pitch; p.querySelector("#vrate").value = S.rate;
      p.querySelectorAll("[data-vpre]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      speak("Quero ir ao banheiro");
    }); });
    function custom() { S.vpreset = ""; p.querySelectorAll("[data-vpre]").forEach(function (x) { x.setAttribute("aria-pressed", "false"); }); }
    p.querySelector("#vpitch").addEventListener("input", function (e) { S.pitch = parseFloat(e.target.value); custom(); save(); });
    p.querySelector("#vrate").addEventListener("input", function (e) { S.rate = parseFloat(e.target.value); custom(); save(); });
    p.querySelector("#vpitch").addEventListener("change", function () { speak("Quero ir ao banheiro"); });
    p.querySelector("#vrate").addEventListener("change", function () { speak("Quero ir ao banheiro"); });
    var csw = p.querySelector("#csw");
    csw.addEventListener("click", function () { S.chirp = !S.chirp; csw.setAttribute("aria-checked", S.chirp); save(); speak("Quero ir ao banheiro"); });
    p.querySelectorAll(".ptab").forEach(function (t) {
      t.addEventListener("click", function () {
        var k = t.getAttribute("data-tab");
        p.querySelectorAll(".ptab").forEach(function (x) { x.setAttribute("aria-selected", x === t); });
        p.querySelectorAll(".pane").forEach(function (s) { s.hidden = s.id !== "pane-" + k; });
        p.querySelector(".pbody").scrollTop = 0;
      });
    });
    p.querySelector("#pclose").addEventListener("click", closePanel);
    p.querySelector("#vpitch").addEventListener("input", function (e) { p.querySelector("#vpv").textContent = pitchLabel(parseFloat(e.target.value)); });
    p.querySelector("#vrate").addEventListener("input", function (e) { p.querySelector("#vrv").textContent = rateLabel(parseFloat(e.target.value)); });
    p.querySelectorAll("[data-vpre]").forEach(function (b) { b.addEventListener("click", function () { p.querySelector("#vpv").textContent = pitchLabel(S.pitch); p.querySelector("#vrv").textContent = rateLabel(S.rate); }); });
    p.querySelector("#done").addEventListener("click", closePanel);
  }
  function closePanel() { var p = document.getElementById("panel"); if (p) p.remove(); }

  applyTheme();
  render();
  window.addEventListener("resize", render);
})();


document.addEventListener("pointerdown",function(e){var t=e.target.closest&&e.target.closest(".card,.btn,.chip,.back-btn,#full");if(!t)return;var r=t.getBoundingClientRect(),d=Math.max(r.width,r.height)*2,s=document.createElement("span");s.className="ripple";s.style.cssText="width:"+d+"px;height:"+d+"px;left:"+(e.clientX-r.left-d/2)+"px;top:"+(e.clientY-r.top-d/2)+"px";t.appendChild(s);setTimeout(function(){s.remove()},600)});
