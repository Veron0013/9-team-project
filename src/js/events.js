import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

let swiperInstance = null;

function initSwiper() {
  swiperInstance = new Swiper('.events-swiper', {
    modules: [Navigation, Pagination, Keyboard],
    loop: false,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 1,

    navigation: {
      prevEl: '.swiper-button-left',
      nextEl: '.swiper-button-right',
    },

    pagination: {
      el: '.custom-swiper-pagination',
      clickable: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },

    on: {
      init: function () {
        updateBtn(this);
      },
      slideChange: function () {
        updateBtn(this);
      },
    },
  });
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

function checkScreenSize() {

  const screenWidth = window.innerWidth;
  const controls = document.querySelector('.events-control-cont');
  const pagination = document.querySelector('.swiper-pagination');

  if (screenWidth >= 1440) {
    //console.log("event");
    destroySwiper();
    controls?.classList.add('hidden');
    pagination?.classList.add('hidden');
    //console.log(swiperInstance);

  } else {
    if (!swiperInstance) {
      initSwiper();
    }
    controls?.classList.remove('hidden');
    pagination?.classList.remove('hidden');
  }
}

checkScreenSize();

window.addEventListener('resize', checkScreenSize);

function updateBtn(swiper) {
  const leftBtn = document.querySelector('.swiper-button-left');
  const rightBtn = document.querySelector('.swiper-button-right');

  if (swiper.isBeginning) {
    leftBtn.classList.add('button-disabled');
  } else {
    leftBtn.classList.remove('button-disabled');
  }

  if (swiper.isEnd) {
    rightBtn.classList.add('button-disabled');
  } else {
    rightBtn.classList.remove('button-disabled');
  }
}