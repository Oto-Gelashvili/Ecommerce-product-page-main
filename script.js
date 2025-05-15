document.addEventListener('DOMContentLoaded', () => {
  // MENU STUFF
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

  //IMAGE SLIDER STUFF FOR MOBILE
  const productImg = document.querySelector('.productImg');
  const prevBtn = document.querySelector('.prevBtn');
  const nextBtn = document.querySelector('.nextBtn');

  const images = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
  ];

  let currentIndex = 0;

  function showImage(index) {
    productImg.src = images[index];
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
});
