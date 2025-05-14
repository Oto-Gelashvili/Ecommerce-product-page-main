document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu');
  const hamburgerMenu = document.querySelector('.hamburgerMenu');
  const closeBtn = document.querySelector('.closeBtn');
  const overlay = document.querySelector('.overlay');

  const openMenu = () => {
    hamburgerMenu.classList.add('open');
    overlay.classList.add('active');
  };

  const closeMenu = () => {
    hamburgerMenu.classList.remove('open');
    overlay.classList.remove('active');
  };

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('click', (e) => {
    if (
      hamburgerMenu.classList.contains('open') &&
      !hamburgerMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });
});
