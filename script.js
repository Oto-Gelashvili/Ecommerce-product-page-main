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

  const cartBtn = document.querySelector('.cart');
  const cartCont = document.querySelector('.cartCont');
  const cartContMain = document.querySelector('.cartContMain');
  const addToCartBtn = document.querySelector('.addCartBtn');
  const amountInCartEl = document.querySelector('.amountInCart');

  function updateCart() {
    amountInCartEl.textContent = currentAmount;
    amountInCartEl.style.display = currentAmount > 0 ? 'flex' : 'none';
  }
  function renderCartContents() {
    const amount = Number(amountInCartEl.textContent);
    if (amount > 0) {
      cartContMain.innerHTML = `
    <div class="productOutline">
      <img src="./images/image-product-1-thumbnail.jpg" alt="product thumbnail" class="outlineThumbnail">
      <div class="productOutlineDesc">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${amount} <span>$${(125 * amount).toFixed(2)}</span></p>
      </div>
      <img src="./images/icon-delete.svg" alt="delete product" class="deleteProduct">
    </div>
    <button class="CheckoutBtn">
      <p class="addCart">Checkout</p>
    </button>
  `;
    } else {
      cartContMain.textContent = 'Your cart is empty.';
    }
  }
  function showCart() {
    const isVisible = cartCont.style.display === 'flex';
    cartCont.style.display = isVisible ? 'none' : 'flex';

    if (!isVisible) {
      renderCartContents();
    }
  }

  addToCartBtn.addEventListener('click', () => {
    updateCart();
    if (cartCont.style.display === 'flex') {
      renderCartContents();
    }
  });
  cartBtn.addEventListener('click', () => {
    showCart();
  });

  cartContMain.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteProduct')) {
      currentAmount = 0;
      updateCurrentAmount();
      updateCart();
      cartContMain.textContent = 'Your cart is empty.';
    }
  });
});
