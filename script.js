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

  //choosing Quantity
  const minusBtn = document.querySelector('.minusBtn');
  const plusBtn = document.querySelector('.plusBtn');
  const currentAmountEl = document.querySelector('.currentAmount');
  let currentAmount = 0;

  function updateCurrentAmount(newAmount) {
    currentAmountEl.textContent = currentAmount;
    minusBtn.disabled = currentAmount === 0;
  }
  plusBtn.addEventListener('click', () => {
    currentAmount++;
    updateCurrentAmount();
  });
  minusBtn.addEventListener('click', () => {
    currentAmount--;
    updateCurrentAmount();
  });
  updateCurrentAmount();

  //Updating Cart

  const cartBtn = document.querySelector('.addCartBtn');
  const amountInCartEl = document.querySelector('.amountInCart');
  function updateCart() {
    amountInCartEl.textContent = currentAmount;
    if (currentAmount > 0) {
      amountInCartEl.style.display = 'flex';
    } else {
      amountInCartEl.style.display = 'none';
    }
  }
  cartBtn.addEventListener('click', () => {
    updateCart();
  });
});
