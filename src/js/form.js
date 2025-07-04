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
const registerButtons = document.querySelectorAll('.card-btn');

registerButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.form-input, .form-user-comment');

form.addEventListener('submit', handleSubmit);

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
    closeModal();
  }
}

const closeBtn = document.querySelector('.modal-close-btn');
closeBtn.addEventListener('click', handleClick);

function handleClick() {
  closeModal();
}

const backdrop = document.querySelector('.modal-overlay');

function clickClose(event) {
  if (event.target === backdrop) {
    closeModal();
  }
}
backdrop.addEventListener('click', clickClose);

function onEscKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
