import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.hero-swiper', {
  loop: false,
  speed: 600,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    768: {
      speed: 700,
    },
    1440: {
      speed: 800,
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

// функція для вмикання/вимикання стрілок
function updateNavButtons(swiperIns) {
  const prevBut = document.querySelector('.swiper-btn-prev');
  const nextBut = document.querySelector('.swiper-btn-next');

  if (swiperIns.isBeginning) {
    prevBut.classList.add('button-dis');
  } else {
    prevBut.classList.remove('button-dis');
  }

  if (swiperIns.isEnd) {
    nextBut.classList.add('button-dis');
  } else {
    nextBut.classList.remove('button-dis');
  }
}

const heroButtons = document.querySelectorAll('.hero-btn');

heroButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector('.books');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});