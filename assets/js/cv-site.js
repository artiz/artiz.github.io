/* Artem Kustikov — CV site behaviour.
   Progressive enhancement only: without JS the page is fully readable. */
(function () {
  "use strict";

  var root = document.documentElement;
  var isDe = root.lang === "de";

  /* ---------- theme toggle ---------- */

  var toggle = document.getElementById("theme-toggle");
  function labelFor(theme) {
    var next = theme === "dark" ? "light" : "dark";
    if (isDe) return next === "light" ? "Zum hellen Design wechseln" : "Zum dunklen Design wechseln";
    return "Switch to " + next + " theme";
  }
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute("aria-label", labelFor(theme));
      toggle.setAttribute("title", labelFor(theme));
    }
  }
  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("cv-theme", next); } catch (e) {}
    });
  }

  /* ---------- layout: hero, sections, cards ---------- */

  var main = document.querySelector("main.page");
  if (!main) return;

  function level(node) {
    return node && node.nodeType === 1 && /^H[1-6]$/.test(node.tagName) ? +node.tagName.charAt(1) : 0;
  }
  function make(tag, cls) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    return el;
  }

  var nodes = Array.prototype.filter.call(main.childNodes, function (n) {
    return n.nodeType === 1 || (n.nodeType === 3 && n.textContent.trim() !== "");
  });
  var h1 = main.querySelector("h1");
  if (!h1) return;

  var h1Index = nodes.indexOf(h1);
  var subtitle = level(nodes[h1Index + 1]) > 1 ? nodes[h1Index + 1] : null;
  if (subtitle) subtitle.classList.add("hero-subtitle");

  var levels = nodes
    .filter(function (n) { return n !== h1 && n !== subtitle; })
    .map(level)
    .filter(function (l) { return l > 1; });
  var sectionLevel = levels.length ? Math.min.apply(null, levels) : 0;

  /* accent colour: the part after " - " if present, otherwise the last word */
  var title = h1.textContent.trim();
  var dash = title.indexOf(" - ");
  var head = dash > 0 ? title.slice(0, dash) + " " : title.replace(/\S+$/, "");
  var tail = dash > 0 ? title.slice(dash + 3) : title.slice(head.length);
  if (head.trim() && tail) {
    h1.textContent = head;
    var span = make("span", "accent");
    span.textContent = tail;
    h1.appendChild(span);
  }

  var hero = make("div", "hero");
  var i = 0;
  while (i < nodes.length && !(level(nodes[i]) === sectionLevel && nodes[i] !== subtitle)) {
    hero.appendChild(nodes[i]);
    i++;
  }

  function isFeatureList(ul) {
    if (!ul || ul.tagName !== "UL") return false;
    var items = Array.prototype.filter.call(ul.children, function (li) { return li.tagName === "LI"; });
    return items.length > 0 && items.every(function (li) {
      var first = li.firstElementChild;
      return first && first.tagName === "STRONG" && li.firstChild === first && li.textContent.length > 120;
    });
  }

  function buildBody(section, body) {
    if (body.length === 1 && isFeatureList(body[0])) {
      body[0].classList.add("feature-grid");
      /* drop the " — " that separates the title from the description */
      Array.prototype.forEach.call(body[0].children, function (li) {
        var t = li.firstElementChild && li.firstElementChild.nextSibling;
        if (t && t.nodeType === 3) t.textContent = t.textContent.replace(/^\s*[—–-]\s*/, "");
      });
      section.appendChild(body[0]);
      return;
    }
    var subLevel = sectionLevel + 1;
    var hasHr = body.some(function (n) { return n.tagName === "HR"; });
    var hasSub = body.some(function (n) { return level(n) === subLevel; });
    var groups = [[]];
    body.forEach(function (n) {
      var current = groups[groups.length - 1];
      if (hasHr) {
        if (n.tagName === "HR") { groups.push([]); return; }
      } else if (hasSub && level(n) === subLevel && current.length) {
        groups.push([]);
        current = groups[groups.length - 1];
      }
      groups[groups.length - 1].push(n);
    });
    groups = groups.filter(function (g) { return g.length; });
    if (!groups.length) return;
    var wrap = make("div", "card-stack");
    groups.forEach(function (g) {
      var card = make("article", "card");
      g.forEach(function (n) { card.appendChild(n); });
      wrap.appendChild(card);
    });
    section.appendChild(wrap);
  }

  var sections = [];
  while (i < nodes.length) {
    var heading = nodes[i++];
    var section = make("section", "section");
    heading.classList.add("section-title");
    var id = (heading.id || "").toLowerCase();
    if (/certif|zertifikat/.test(id)) section.classList.add("section-certs");
    section.appendChild(heading);
    var body = [];
    while (i < nodes.length && level(nodes[i]) !== sectionLevel) body.push(nodes[i++]);
    buildBody(section, body);
    sections.push(section);
  }

  main.textContent = "";
  main.appendChild(hero);
  sections.forEach(function (s) { main.appendChild(s); });

  /* ---------- "Stack:" lines as chips ---------- */

  function splitTopLevel(text) {
    if (text.indexOf("•") !== -1) return text.split("•");
    var parts = [], depth = 0, buf = "";
    for (var k = 0; k < text.length; k++) {
      var ch = text.charAt(k);
      if (ch === "(") depth++;
      if (ch === ")") depth = Math.max(0, depth - 1);
      if ((ch === "," || ch === ";") && depth === 0) { parts.push(buf); buf = ""; continue; }
      buf += ch;
    }
    parts.push(buf);
    return parts;
  }

  Array.prototype.forEach.call(main.querySelectorAll(".card p"), function (p) {
    var text = p.textContent.trim();
    var m = /^(Stack)\s*:\s*/.exec(text);
    if (!m) return;
    var others = Array.prototype.filter.call(p.children, function (c) { return c.tagName !== "EM"; });
    if (others.length) return; /* keep paragraphs with links untouched */
    var items = splitTopLevel(text.slice(m[0].length))
      .map(function (s) { return s.trim().replace(/\.$/, ""); })
      .filter(Boolean);
    if (items.length < 2) return;
    p.textContent = "";
    p.classList.add("stack-line");
    var label = make("span", "stack-label");
    label.textContent = m[1];
    p.appendChild(label);
    items.forEach(function (it) {
      var chip = make("span", "chip");
      chip.textContent = it;
      p.appendChild(chip);
    });
  });

  /* ---------- section navigation ---------- */

  var nav = document.getElementById("topnav");
  if (nav) {
    var links = [];
    sections.forEach(function (s) {
      var h = s.querySelector(".section-title");
      if (!h || !h.id) return;
      var a = make("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent.trim();
      nav.appendChild(a);
      links.push({ a: a, section: s });
    });
    if (links.length) {
      var ticking = false;
      var lockUntil = 0;
      var setActive = function (current) {
        links.forEach(function (l) { l.a.classList.toggle("active", l === current); });
      };
      /* a clicked item stays active while the smooth scroll runs,
         even if its section is too close to the end to reach the top */
      links.forEach(function (l) {
        l.a.addEventListener("click", function () {
          lockUntil = Date.now() + 1200;
          setActive(l);
        });
      });
      var update = function () {
        ticking = false;
        if (Date.now() < lockUntil) return;
        var current = null;
        var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (atBottom) {
          current = links[links.length - 1];
        } else {
          links.forEach(function (l) {
            if (l.section.getBoundingClientRect().top <= 140) current = l;
          });
        }
        setActive(current);
      };
      window.addEventListener("scroll", function () {
        if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
      }, { passive: true });
      window.addEventListener("resize", update);
      update();
    }
  }
})();
