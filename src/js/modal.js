//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

const modalBackdrop = document.getElementById('modal-backdrop');
const modalCloseBtn = document.querySelector('.modal-close');

const bookImage = document.getElementById('book-image');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPrice = document.getElementById('book-price');

const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const quantitySpan = document.getElementById('quantity');
let quantity = 1;

const addToCartBtn = document.getElementById('add-to-cart');
const bookForm = document.getElementById('book-form');

let currentBookId = null;

export async function openModal(bookId) {
  currentBookId = bookId;

  try {
    const response = await fetch(`https://books-backend.p.goit.global/books/${bookId}`);
    if (!response.ok) throw new Error('Помилка завантаження даних книги');
    const book = await response.json();

    bookImage.src = book.book_image;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPrice.textContent = `$${book.price || 15}`;

    generateAccordion(book.description);

    quantity = 1;
    quantitySpan.textContent = quantity;

    modalBackdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  } catch (error) {
    console.error(error);
  }
}

function closeModal() {
  modalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
}

function generateAccordion(description) {
  const accordion = document.getElementById('accordion');
  accordion.innerHTML = `
    <details>
      <summary>Details</summary>
      <p>${description}</p>
    </details>
    <details>
      <summary>Shipping</summary>
      <p>We ship across the United States within 2–5 business days.</p>
    </details>
    <details>
      <summary>Returns</summary>
      <p>You can return an item within 14 days of receiving it.</p>
    </details>
  `;
}

modalCloseBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

plusBtn.addEventListener('click', () => {
  quantity++;
  quantitySpan.textContent = quantity;
});

minusBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
  }
});

addToCartBtn.addEventListener('click', () => {
  console.log(`Додано книг: ${quantity}`);
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Дякуємо за покупку!');
});
