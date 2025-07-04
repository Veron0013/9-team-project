import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';



const swiper = new Swiper('.swiper', {
    loop: false,
    speed: 600,
    grabCursor: true,
    slidesPerView: 1,
    modules: [Navigation],
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
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
function updateNavButtons(swiperInstance) {
  const left = document.querySelector('.swiper-btn-prev');
  const right = document.querySelector('.swiper-btn-next');

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