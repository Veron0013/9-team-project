function openModal() {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.add('is-open');
  document.body.classList.add('locked');
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.remove('is-open');
  document.body.classList.remove('locked');
}

const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.form-input, .form-user-comment');

form.addEventListener('submit', function (event) {
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
});

const closeBtn = document.querySelector('.modal-close-btn');
closeBtn.addEventListener('click', handleclick);

function handleclick() {
  closeModal();
}
