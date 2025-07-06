const modalBackdrop = document.querySelector('#modal-backdrop');
const body = document.body;
let accordionInstance = null;

function onEscKeyPress(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function setupQuantityControls(quantityInput, decreaseBtn, increaseBtn) {
  if (decreaseBtn && increaseBtn && quantityInput) {
    decreaseBtn.addEventListener('click', () => {
      let value = parseInt(quantityInput.value, 10);
      if (!isNaN(value) && value > 1) {
        quantityInput.value = value - 1;
      }
    });

    increaseBtn.addEventListener('click', () => {
      let value = parseInt(quantityInput.value, 10);
      const max = parseInt(quantityInput.dataset.max, 10);
      if (!isNaN(value) && !isNaN(max) && value < max) {
        quantityInput.value = value + 1;
      }
    });
  }
}

function initModalListeners() {
  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop || e.target.closest('.modal-close')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', onEscKeyPress);
}

export async function openModal(bookId) {
  try {
    const response = await fetch(`https://books-backend.p.goit.global/books/${bookId}`);
    if (!response.ok) {
      throw new Error('Не вдалося отримати дані про книгу');
    }

    const data = await response.json();

    const elements = {
      bookImage: document.querySelector('#book-image'),
      bookTitle: document.querySelector('#book-title'),
      bookAuthor: document.querySelector('#book-author'),
      bookPrice: document.querySelector('#book-price'),
      quantityInput: document.querySelector('#book-quantity'),
      bookDetails: document.querySelector('#book-details'),
      bookShipping: document.querySelector('#book-shipping'),
      bookReturns: document.querySelector('#book-returns'),
    };

    if (elements.bookImage) elements.bookImage.src = data.book_image;

    const textContentMap = {
      bookTitle: data.title,
      bookAuthor: data.author,
      bookPrice: `$${data.price}`,
      bookDetails: data.description,
      bookShipping:
        'We ship across the United States within 2–5 business days. All orders are processed through USPS or a reliable courier service. Enjoy free standard shipping on orders over $50.',
      bookReturns:
        'You can return an item within 14 days of receiving your order, provided it hasn’t been used and is in its original condition. To start a return, please contact our support team — we’ll guide you through the process quickly and hassle-free.',
    };

    for (const [key, value] of Object.entries(textContentMap)) {
      if (elements[key]) {
        elements[key].textContent = value;
      }
    }

    const maxAvailable = data.quantity || 100;
    if (elements.quantityInput) {
      elements.quantityInput.dataset.max = maxAvailable;
      elements.quantityInput.value = 1;
    }

    modalBackdrop.classList.remove('is-hidden');
    document.body.classList.add('locked');

    const container = document.querySelector('.accordion-container');
    if (accordionInstance) {
      accordionInstance.destroy();
    }
    if (container) {
      const items = container.querySelectorAll('.ac');
      items.forEach(item => {
        const trigger = item.querySelector('.ac-trigger');
        const panel = item.querySelector('.ac-panel');

        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('is-active');

          if (isOpen) {
            panel.style.height = '0px';
            item.classList.remove('is-active');
          } else {
            item.classList.add('is-active');
            panel.style.height = panel.scrollHeight + 'px';
          }
        });

        panel.style.height = '0px';
      });
    }
  } catch (error) {
    console.error('Помилка при відкритті модального вікна:', error);
  }
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.remove('is-open');
  document.body.classList.remove('locked');
  window.removeEventListener('keydown', onEscKeyPress);
}

document.addEventListener('DOMContentLoaded', () => {
  initModalListeners();

  const form = document.querySelector('#book-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Дякуємо за покупку');
    });
  }

  const addToCartBtn = document.querySelector('#add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const quantity = document.querySelector('#book-quantity').value;
      console.log(`Кількість обраних книг: ${quantity}`);
    });
  }

  const quantityInput = document.querySelector('#book-quantity');
  const decreaseBtn = document.querySelector('#decrease-quantity');
  const increaseBtn = document.querySelector('#increase-quantity');

  setupQuantityControls(quantityInput, decreaseBtn, increaseBtn);
});