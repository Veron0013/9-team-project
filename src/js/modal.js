
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const modalBackdrop = document.querySelector('#modal-backdrop');
const body = document.body;
let accordionInstance = null;

export async function openModal(bookId) {
  try {
    const response = await fetch(`https://books-backend.p.goit.global/books/${bookId}`);
    if (!response.ok) {
      throw new Error('Не вдалося отримати дані про книгу');
    }

    const data = await response.json();

    document.querySelector('#book-image').src = data.book_image;
    document.querySelector('#book-title').textContent = data.title;
    document.querySelector('#book-author').textContent = data.author;
    document.querySelector('#book-price').textContent = `$${data.price}`;
    document.querySelector('#book-details').textContent = data.description;
    document.querySelector('#book-shipping').textContent =
      'We ship across the United States within 2–5 business days. All orders are processed through USPS or a reliable courier service. Enjoy free standard shipping on orders over $50.';
    document.querySelector('#book-returns').textContent =
      'You can return an item within 14 days of receiving your order, provided it hasn’t been used and is in its original condition. To start a return, please contact our support team — we’ll guide you through the process quickly and hassle-free.';

    modalBackdrop.classList.remove('is-hidden');
    body.classList.add('locked');

    const container = document.querySelector('.accordion-container');
    if (accordionInstance) {
      accordionInstance.destroy();
    }
    if (container) {
      accordionInstance = new Accordion(container, {
        duration: 300,
        showMultiple: false,
        openOnInit: [],
      });
    }

    const quantityInput = document.querySelector('#book-quantity');
    if (quantityInput) {
      quantityInput.value = 1;
    }
  } catch (error) {
    console.error('Помилка при відкритті модального вікна:', error);
  }
}

// Закрытие модального окна
function closeModal() {
  modalBackdrop.classList.add('is-hidden');
  body.classList.remove('modal-open');
}

document.addEventListener('DOMContentLoaded', () => {
  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop || e.target.closest('.modal-close')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

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
});