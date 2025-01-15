 const hamburgerBtn = document.getElementById('hamburger-btn');


 hamburgerBtn.addEventListener('click', () => {
   const navLinks = document.querySelector('.nav');
   navLinks.classList.toggle('show-menu');
 });