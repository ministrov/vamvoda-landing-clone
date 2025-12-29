let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

console.log(vh);

var reviewsSlider = new Swiper('.reviews-slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  centerMode: true,
  navigation: {
    nextEl: '.navigation__button--next',
    prevEl: '.navigation__button--prev',
  },
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1231: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
