/* Wall Street Moves — minimal site script.
   Mobile nav toggle + back-to-top button. No trackers, no external calls. */
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close \u00d7' : 'Menu \u2630';
    });
  }

  var toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 600) {
        toTop.classList.add('show');
      } else {
        toTop.classList.remove('show');
      }
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
