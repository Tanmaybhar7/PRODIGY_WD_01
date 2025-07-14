
const nav = document.getElementById('mainNav');
const navLinks = document.getElementById('navLinks');
const mobileMenu = document.getElementById('mobileMenu');
const navItems = document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }

  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active-link');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active-link');
    }
  });
});

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

