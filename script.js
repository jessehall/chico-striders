const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const closeMenu = () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
};
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();

const carousel = document.querySelector('.hero-photo');
const slides = [...carousel.querySelectorAll('.hero-slide')];
let activeSlide = 0;
function showSlide(direction) {
  activeSlide = (activeSlide + direction + slides.length) % slides.length;
  slides.forEach((slide, index) => { slide.hidden = index !== activeSlide; });
  carousel.querySelector('.carousel-count').textContent = `${activeSlide + 1} / ${slides.length}`;
}
carousel.querySelector('.carousel-prev').addEventListener('click', () => showSlide(-1));
carousel.querySelector('.carousel-next').addEventListener('click', () => showSlide(1));
carousel.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showSlide(event.key === 'ArrowRight' ? 1 : -1);
  }
});
