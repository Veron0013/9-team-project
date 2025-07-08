import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.form-input, .form-user-comment');
const closeBtn = document.querySelector('.modal-close-btn');
const backdrop = document.querySelector('#event-modal');
const eventList = document.querySelector('.events-list');

let eventName = "";

eventList.addEventListener('click', event => {
  const curLi = event.target.closest('.events-item');
  if (!curLi) {
    return;
  }
  const btn = event.target.closest('.card-btn');
  if (!btn) {
    return;
  }
  eventName = curLi
    .querySelector('.events-card-heading')
    .textContent.trim();

  openModal(eventName);
});

form.addEventListener('submit', handleSubmit);
backdrop.addEventListener('click', clickClose);
closeBtn.addEventListener('click', handleClick);

function openModal(eventName) {
  //const modal = document.querySelector('.modal-overlay');
  backdrop.classList.add('is-open');

  const titleTwo = backdrop.querySelector('.form-subtitle');
  titleTwo.textContent = eventName;
  document.body.classList.add('locked');

  window.addEventListener('keydown', onEscKeyPress);
}

function closeModal() {
  //const modal = document.querySelector('.modal-overlay');
  backdrop.classList.remove('is-open');
  document.body.classList.remove('locked');

  window.removeEventListener('keydown', onEscKeyPress);
}

function handleSubmit(event) {
  event.preventDefault();

  let isValid = true;

  inputs.forEach(input => {
    const errorSpan = input.nextElementSibling;
    const trimmedValue = input.value.trim();
    const isEmptyOrInvalid = !input.checkValidity() || trimmedValue === '';

    if (isEmptyOrInvalid) {
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
        title: 'Дякуємо!',
        message: `Ви успішно зареєструвалися на ${eventName}`,
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
