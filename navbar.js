// navbar.js

document.addEventListener('DOMContentLoaded', (event) => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const dropdowns = document.querySelectorAll('.dropdown');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    dropbtn.addEventListener('click', (e) => {
      if (window.innerWidth <= 770) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });
});