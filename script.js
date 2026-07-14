// Ambient cursor light — follows pointer, ignored on touch devices
(function () {
  var glow = document.querySelector('.cursor-glow');
  if (!glow) return;
  var supportsHover = window.matchMedia('(hover: hover)').matches;
  if (!supportsHover) { glow.style.display = 'none'; return; }
  window.addEventListener('mousemove', function (e) {
    glow.style.setProperty('--mx', e.clientX + 'px');
    glow.style.setProperty('--my', e.clientY + 'px');
  }, { passive: true });
})();

// Marquee-select scroll reveal
(function () {
  var targets = document.querySelectorAll('.marquee');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  targets.forEach(function (el) { observer.observe(el); });
})();

// Standard Burger Toggle Menu
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.classList.toggle('is-active');
  });
})();

// Interactive Expandable Rows on Career table
window.toggleTimeline = function(element) {
  element.classList.toggle('is-expanded');
}