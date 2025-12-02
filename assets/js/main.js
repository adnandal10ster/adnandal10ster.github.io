// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Expandable items on mobile
const navItems = document.querySelectorAll('.nav-item.has-children');
navItems.forEach((item) => {
  const trigger = item.querySelector('.nav-trigger');
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  }
});

// Smooth scroll for internal links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks?.classList.remove('open');
      }
    }
  });
});

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  if (button) {
    button.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  }
});

// Set current year in footer
const yearEl = document.querySelector('.current-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
