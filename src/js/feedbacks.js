import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.feedbacks-swiper', {
  modules: [Navigation, Pagination],
  loop: false,
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    prevEl: '.swiper-button-left',
    nextEl: '.swiper-button-right',
  },

  pagination: {
    el: '.custom-swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  on: {
    init: function () {
      updateNavButtons(this);
    },
    slideChange: function () {
      updateNavButtons(this);
    },
  },
});

function updateNavButtons(swiperInstance) {
  const left = document.querySelector('.swiper-button-left');
  const right = document.querySelector('.swiper-button-right');

  if (swiperInstance.isBeginning) {
    left.classList.add('button-disabled');
  } else {
    left.classList.remove('button-disabled');
  }

  if (swiperInstance.isEnd) {
    right.classList.add('button-disabled');
  } else {
    right.classList.remove('button-disabled');
  }
}
