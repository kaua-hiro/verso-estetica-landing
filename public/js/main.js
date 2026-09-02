(function () {
  "use strict";

  /* Theme toggle */
  var toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var root = document.documentElement;
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      toggle.setAttribute("aria-pressed", String(next === "dark"));
      try { localStorage.setItem("verso-theme", next); } catch (e) {}
    });
  }

  /* Reveal on scroll */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Iris — signature layered protocol */
  var iris = document.querySelector("[data-iris]");
  if (iris) {
    var hits = iris.querySelectorAll(".iris__hit");
    var rings = iris.querySelectorAll(".iris__ring");
    var readout = document.querySelector("[data-readout]");
    var readoutTag = document.querySelector("[data-readout-tag]");
    var readoutTitle = document.querySelector("[data-readout-title]");
    var readoutDesc = document.querySelector("[data-readout-desc]");

    var layers = [
      { title: "Limpeza", desc: "Remove oleosidade e resíduo de poluição sem agredir o manto hidrolipídico — a base pra qualquer ativo funcionar depois." },
      { title: "Tonificação", desc: "Reequilibra o pH da pele e fecha os poros antes da entrada do ativo principal." },
      { title: "Tratamento", desc: "Ativo específico pra queixa: manchas, firmeza, acne ou textura — escolhido sessão a sessão." },
      { title: "Finalização", desc: "Barreira de proteção e FPS — sela o resultado e prepara a pele até a próxima sessão." }
    ];

    function activate(index) {
      hits.forEach(function (hit, i) { hit.classList.toggle("is-active", i === index); });
      rings.forEach(function (ring) {
        var d = parseInt(ring.getAttribute("data-ring"), 10);
        ring.classList.toggle("is-active", d === index);
      });
      var layer = layers[index];
      if (!layer) return;
      readoutTag.textContent = "Camada 0" + (index + 1);
      readoutTitle.textContent = layer.title;
      readoutDesc.textContent = layer.desc;
      if (readout) {
        readout.style.opacity = "0";
        requestAnimationFrame(function () {
          readout.style.transition = "opacity .25s ease";
          readout.style.opacity = "1";
        });
      }
    }

    hits.forEach(function (hit, index) {
      hit.addEventListener("click", function () { activate(index); });
      hit.addEventListener("mouseenter", function () { activate(index); });
    });

    activate(0);
  }

  /* Before/after compare slider */
  var compare = document.querySelector("[data-compare]");
  if (compare) {
    var after = compare.querySelector("[data-compare-after]");
    var handle = compare.querySelector("[data-compare-handle]");
    var frame = compare.querySelector(".compare__frame");
    var dragging = false;

    function setPosition(percent) {
      percent = Math.max(0, Math.min(100, percent));
      after.style.clipPath = "inset(0 " + (100 - percent) + "% 0 0)";
      handle.style.left = percent + "%";
      handle.setAttribute("aria-valuenow", String(Math.round(percent)));
    }

    function positionFromClientX(clientX) {
      var rect = frame.getBoundingClientRect();
      var percent = ((clientX - rect.left) / rect.width) * 100;
      setPosition(percent);
    }

    handle.addEventListener("pointerdown", function (e) {
      dragging = true;
      handle.setPointerCapture(e.pointerId);
    });
    handle.addEventListener("pointermove", function (e) {
      if (dragging) positionFromClientX(e.clientX);
    });
    handle.addEventListener("pointerup", function () { dragging = false; });
    frame.addEventListener("pointerdown", function (e) {
      if (e.target === handle || handle.contains(e.target)) return;
      positionFromClientX(e.clientX);
    });

    handle.addEventListener("keydown", function (e) {
      var current = parseFloat(handle.style.left) || 50;
      if (e.key === "ArrowLeft") { setPosition(current - 5); e.preventDefault(); }
      if (e.key === "ArrowRight") { setPosition(current + 5); e.preventDefault(); }
    });
  }
})();
