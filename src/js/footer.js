import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const footerForm = document.querySelector('.footer-form');
const footerInput = footerForm?.querySelector('.footer-input');

if (footerForm) {
  footerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!footerInput.checkValidity() || footerInput.value.trim() === '') {
      footerInput.classList.add('error');
      return;
    }
    setTimeout(() => {
      iziToast.success({
        title: 'Дякуємо!',
        message: 'Ви успішно підписались',
        position: 'topRight',
        class: 'custom-toast',
      });
      footerForm.reset();
    }, 500);
  });
} 