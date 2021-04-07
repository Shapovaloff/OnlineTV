const btnMenu = document.querySelector('.js-btn-menu');
const navMenu = document.querySelector('.js-nav-menu');
const overlay = document.querySelector('.overlay');

const closeMenu = () => {
  navMenu.classList.remove('nav-list--active');
  overlay.classList.remove('overlay--active');
  btnMenu.classList.remove('header__btn-toggle--active');
}

const openMenu = () => {
  navMenu.classList.add('nav-list--active');
  overlay.classList.add('overlay--active');
  btnMenu.classList.add('header__btn-toggle--active');
  overlay.addEventListener('click', closeMenu);
}

if (btnMenu && navMenu) {
  btnMenu.addEventListener('click', () => {
    btnMenu.classList.contains('header__btn-toggle--active')
      ? closeMenu()
      : openMenu();
  });
}
