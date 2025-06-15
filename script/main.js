 const toggle = document.getElementById('style-toggle-btn');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark_mode');
  });
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
