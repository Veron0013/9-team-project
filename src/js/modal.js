import refs from '/js/refs';
import { showLoader, hideLoader } from './loader';
import * as render from '/js/render-function';
import * as apiRest from '/js/books-api';
import * as storage from '/js/storage'

const modalBackdrop = document.querySelector('#modal-backdrop');
const modalContent = modalBackdrop.querySelector(".modal");
const modalContainer = modalBackdrop.querySelector(".modal-card");
//const body = document.body;

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

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

export async function openModal(bookId) {
  try {
    // Очистка і рендер контенту
    render.clearElement(modalContainer);
    render.toggleClassElement(modalBackdrop, "is-hidden");
    render.toggleClassElement(refs.body, "locked");

    showLoader(refs.btn_loader);

    //типу завантажується
    const vQuery = `${refs.BASE_URL}${refs.END_BOOK_ID}${bookId}`;
    const dataBook = await apiRest.getApiData(vQuery);

    await new Promise(resolve => setTimeout(resolve, 400));
    hideLoader(refs.btn_loader);

    await render.createMarcup(modalContainer, dataBook.data, render.markUpBooksById, true);

    //67 +/-
    setupQuantityControls(
      modalContainer.querySelector("#book-quantity"),
      modalContainer.querySelector("#decrease-quantity"),
      modalContainer.querySelector("#increase-quantity")
    );

    const quantityInput = modalContainer.querySelector("#book-quantity");
    const maxAvailable = dataBook?.data?.quantity || 100;

    if (quantityInput) {
      quantityInput.dataset.max = maxAvailable;
      quantityInput.value = 1;
    }

    //67 submit
    const submitBuyNow = modalContent.querySelector("#book-form");

    if (submitBuyNow) {
      submitBuyNow.addEventListener("submit", (e) => {
        e.preventDefault();
        e.currentTarget.blur();
        render.showMessage("Гарний вибір", "Дякуємо за покупку!");
        storage.StorageService.removeItemFromStorage(bookId);
        closeModal();
      });
    }

    const addToCard = modalContent.querySelector("#add-to-cart");
    if (addToCard) {
      addToCard.addEventListener("click", (e) => {
        e.currentTarget.blur();
        handleAddToCard(quantityInput.value, dataBook.data);
        closeModal();
      });
    }

    // закриття
    initModalListeners();

    // Аккордеон
    const container = modalContainer.querySelector('.accordion-container');

    if (container) {
      const items = container.querySelectorAll('.ac');
      items.forEach(item => {
        const trigger = item.querySelector('.ac-trigger');
        const panel = item.querySelector('.ac-panel');

        if (!trigger || !panel) return;

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
    initModalListeners();
    hideLoader(refs.btn_loader);
    render.clearElement(modalContainer);
    modalContainer.innerHTML = `Sorry!!! Book unavailable!! <br/> ID = ${bookId} <br/>${error.message}`;
    render.addClassElement(modalContent, "modal-error");
  }
}

function handleAddToCard(qty, data) {
  storage.StorageService.addToCard(refs.BOOK_CARD_LIST, data._id, data.price, qty);
  render.showMessage(`У кошику ${qty} од. книжок ${data.title}`, "Кошик");
};

function closeModal() {
  modalBackdrop.classList.add('is-hidden');
  render.removeClassElement(refs.body, "locked");
  storage.setQuantityFromLocalStorage(refs.BOOK_CARD_LIST);
}
