let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

console.log(vh);

jQuery(document).ready(function ($) {
  var brandsSlider = new Swiper('.brands__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerMode: true,
    navigation: {
      nextEl: '.navigation__button--next',
      prevEl: '.navigation__button--prev',
    },
    pagination: {
      el: '.brands-slide__pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      1231: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

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

  var init = false;
  var mobileadvantages;
  var mobilehow;
  function swiperOn() {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        // mobileadvantages = new Swiper('.advantages-slider', {
        //   slidesPerView: 1,
        //   spaceBetween: 10,
        //   loop: true,
        //   centerMode: true,
        // });
        mobilehow = new Swiper('.levels__slider', {
          slidesPerView: 1,
          spaceBetween: 14,
          loop: false,
        });
        mobilegift = new Swiper('.gift-wrapper', {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
        });
      }
    } else if (init) {
      mobileadvantages.destroy();
      mobilehow.destroy();
      mobilegift.destroy();
      init = false;
    }
  }
  swiperOn();
  $(window).resize(swiperOn);
});
