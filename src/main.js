import refs from './js/refs';
import * as render from './js/render-function';

refs.btn_burger.addEventListener('click', e => {
  refs.btn_burger.disabled = true;
  const burger_icon = refs.btn_burger.querySelector('use');
  render.openCloseModalMenu(burger_icon);
});

import './js/feedbacks';

