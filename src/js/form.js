import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.form-input, .form-user-comment');
const closeBtn = document.querySelector('.modal-close-btn');
const backdrop = document.querySelector('.modal-overlay');
const registerButtons = document.querySelectorAll('.card-btn');

registerButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

form.addEventListener('submit', handleSubmit);
backdrop.addEventListener('click', clickClose);
closeBtn.addEventListener('click', handleClick);

function openModal() {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.add('is-open');
  document.body.classList.add('locked');

  window.addEventListener('keydown', onEscKeyPress);
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.remove('is-open');
  document.body.classList.remove('locked');

  window.removeEventListener('keydown', onEscKeyPress);
}

function handleSubmit(event) {
  event.preventDefault();

  let isValid = true;

  inputs.forEach(input => {
    const errorSpan = input.nextElementSibling;

    if (!input.checkValidity()) {
      input.classList.add('error');
      if (errorSpan && errorSpan.classList.contains('error-text')) {
        errorSpan.style.display = 'block';
      }
      isValid = false;
    } else {
      input.classList.remove('error');
      if (errorSpan && errorSpan.classList.contains('error-text')) {
        errorSpan.style.display = 'none';
      }
    }
  });

  if (isValid) {
    console.log('Форма валідна. Можна відправити.');

    const formData = {
      fullname: form.elements.fullname.value.trim(),
      email: form.elements.email.value.trim(),
      comment: form.elements.comment.value.trim(),
    };

    console.log('Дані для відправки:', formData);

    setTimeout(() => {
      iziToast.success({
        title: 'Успішно!',
        message: 'Форма відправлена.',
        position: 'topRight',
        class: 'custom-toast',
      });
      form.reset();
      closeModal();
    }, 500);
  }
}

function handleClick() {
  closeModal();
}

function clickClose(event) {
  if (event.target === backdrop) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
