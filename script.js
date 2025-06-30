// Get hamburger button and nav menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional: Close menu when clicking a nav link (on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
