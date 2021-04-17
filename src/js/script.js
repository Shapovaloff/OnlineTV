// Открытие и закрытие меню в мобильной версии
const btnMenu = document.querySelector('.js-btn-menu');
const navMenu = document.querySelector('.js-nav-menu');
const overlay = document.querySelector('.overlay');

const closeMenu = () => {
  navMenu.classList.remove('nav-list--active');
  overlay.classList.remove('overlay--active');
  btnMenu.classList.remove('header__btn-toggle--active');
  document.body.style.overflow = 'auto';
};

const openMenu = () => {
  navMenu.classList.add('nav-list--active');
  overlay.classList.add('overlay--active');
  btnMenu.classList.add('header__btn-toggle--active');
  overlay.addEventListener('click', closeMenu);
  document.body.style.overflow = 'hidden';
};

if (btnMenu && navMenu) {
  btnMenu.addEventListener('click', () => {
    btnMenu.classList.contains('header__btn-toggle--active') ? closeMenu() : openMenu();
  });
}

// Слайдеры для секций tv-shows movies genres
const tvShowsContainer = document.querySelector('.trending__container--tv-shows');
const moviesContainer = document.querySelector('.trending__container--movies');
const genresContainer = document.querySelector('.genres__container');
const breakpoint = window.matchMedia('(max-width:1400px)');
const breakpoint768 = window.matchMedia('(max-width:768px)');

let myTVShows;
let moviesShows;
let genres;

const breakpointChecker = function () {
  if (breakpoint.matches === false) {
    if (myTVShows) {
      myTVShows.destroy(true, true);
      return;
    }
  } else if (breakpoint.matches === true) {
    enableTVShows();
    enableMovies();
  }

  if (breakpoint768.matches === false) {
    if (genres) {
      genres.destroy(true, true);
    }
    return;
  } else if (breakpoint768.matches === true) {
    enableGenres();
  }
};

const enableTVShows = function () {
  if (tvShowsContainer) {
    myTVShows = new Swiper (tvShowsContainer, {
      direction: 'horizontal',
      spaceBetween: 12,
      slidesPerView: 'auto',
      freeMode: true,
      pagination: {
        el: '.trending__pagination',
        dynamicBullets: true,
      },

      breakpoints: {
        768: {
          spaceBetween: 16,
          pagination: false,
        },
      },
    });
  }
};

const enableMovies = function () {
  if (moviesContainer) {
    moviesShows = new Swiper (moviesContainer, {
      direction: 'horizontal',
      spaceBetween: 12,
      slidesPerView: 'auto',
      freeMode: true,
      pagination: {
        el: '.trending__pagination',
        dynamicBullets: true,
      },

      breakpoints: {
        768: {
          spaceBetween: 16,
          pagination: false,
        },
      },
    });
  }
};


const enableGenres = function () {
  if (genresContainer) {
    genres = new Swiper(genresContainer, {
      direction: 'horizontal',
      spaceBetween: 12,
      slidesPerView: 'auto',
      freeMode: true,
      pagination: {
        el: '.genres__pagination',
        dynamicBullets: true,
      },

    });
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();