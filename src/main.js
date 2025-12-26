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
