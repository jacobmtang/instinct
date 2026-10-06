// site.js: header hairline on scroll, reveal-on-scroll, chat bubbles playing in, legal TOC highlight. No dependencies.
document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 4);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// reveal sections as they enter
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-in'));
}

// chat thread: bubbles arrive one by one, like a real conversation
const bubbles = document.querySelectorAll('.thread .bubble');
if (reduce) {
  bubbles.forEach((b) => b.classList.add('is-in'));
} else {
  bubbles.forEach((b, i) => setTimeout(() => b.classList.add('is-in'), 400 + i * 650));
}

// legal pages: highlight the section in view
const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
if (tocLinks.length && 'IntersectionObserver' in window) {
  const map = new Map([...tocLinks].map((a) => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        tocLinks.forEach((a) => a.classList.remove('is-active'));
        map.get(e.target.id)?.classList.add('is-active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
}
