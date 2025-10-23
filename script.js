const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
const menuLinks = document.querySelectorAll('#nav-menu a');
const yearEl = document.getElementById('year');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

menuLinks.forEach((link) => {
  const href = link.getAttribute('href') || '';
  const normalizedHref = href.split('#')[0] || 'index.html';
  if (
    normalizedHref === currentPath ||
    (normalizedHref === 'index.html' && (currentPath === '' || currentPath === 'index.html'))
  ) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }

  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('open');
  });
});
