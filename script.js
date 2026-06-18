// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Reveal-on-scroll animation
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.section .container').forEach((c) => {
  Array.from(c.children).forEach((child, i) => {
    child.setAttribute('data-reveal', '');
    child.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
    io.observe(child);
  });
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
