import refs from '/js/refs';
import { showLoader, hideLoader } from './loader';
import * as render from '/js/render-function';
import * as storage from '/js/storage';
import * as apiRest from '/js/books-api';

//змінні
const headerNav = document.querySelector('.header-nav-list');
const emptyCart = refs.cart_modal.querySelector('.cart-empty');

const buy_now = document.querySelector('.buy-now');
const shop_more = document.querySelector('.shop-more');

const cart_loader = document.querySelector('.cart-loader');
const summary_section = document.querySelector('.cart-summary-section');

const countEl = document.querySelector('[data-count]');
const priceEl = document.querySelector('[data-price]');

//обробники
export async function openCartForm(eventLink) {
  eventLink.preventDefault();

  render.clearElement(refs.cart_products);

  render.addClassElement(emptyCart, 'display-none');
  render.toggleClassElement(refs.cart_modal, 'is-open');
  render.toggleClassElement(refs.body, 'locked');

  //const isEmpty = storage.StorageService.count(refs.BOOK_CARD_LIST) === 0;

  if (checkIfCartIsEmpty()) return;
  //{
  //render.removeClassElement(emptyCart, 'display-none');
  //render.removeClassElement(summary_section, 'hidden');
  //countEl.textContent = storage.StorageService.countItems(
  //  refs.BOOK_CARD_LIST
  //);
  //storage.StorageService.setTotalCard(priceEl);
  //buy_now.disabled = true;
  //  return;
  //}

  showLoader(cart_loader);
  //типу чекаємо
  await new Promise(resolve => setTimeout(resolve, 400));
  hideLoader(cart_loader);

  await markUpCardListItems(refs.BOOK_CARD_LIST);

  render.removeClassElement(summary_section, 'hidden');

  countEl.textContent = storage.StorageService.countItems(refs.BOOK_CARD_LIST);
  storage.StorageService.setTotalCard(priceEl);

  buy_now.disabled = false;
}

export async function markUpCardListItems(storageKey) {
  const storageData = storage.StorageService.get(storageKey);

  console.log(storageKey, storageData);
  //const mkUpData = [];
  //for (const item of storageData) {
  //	const bookId = item.id ;

  //	const vQuery = refs.BASE_URL + `/${bookId}`;
  //	try {
  //		const dataProd = await apiRest.getApiData(vQuery);
  //		console.log(dataProd.data.length);
  //		if (dataProd.data) {
  //			mkUpData.push(dataProd.data)
  //		}
  //	} catch (error) {
  //		console.log(error);
  //		continue;
  //	}
  //}
  const promises = storageData.map(item => {
    const bookId = item.id;
    const vQuery = `${refs.BASE_URL}${refs.END_BOOK_ID}${bookId}`;
    return apiRest
      .getApiData(vQuery)
      .then(data => data.data)
      .catch(error => {
        ///треба щось цікавіше
        console.log('Помилка для id:', prodId, error);
        return null; // Пропускаємо зламані
      });
  });

  //console.log(promises);

  const results = await Promise.all(promises);
  // Фільтруємо null або undefined
  const mkUpData = results.filter(Boolean);

  //console.log("марк", mkUpData);

  render.createMarcup(
    refs.cart_products,
    mkUpData,
    render.markUpCartBookList,
    true
  );
}

function closeModal() {
  storage.setQuantityFromLocalStorage(refs.BOOK_CARD_LIST);
  render.removeClassElement(refs.cart_modal, 'is-open');
  render.removeClassElement(refs.body, 'locked');
}

//слухачі
document.addEventListener('DOMContentLoaded', async () => { });

//хедер клік
headerNav.addEventListener('click', e => {
  const dataLink = e.target.closest('.cart-trigger');
  if (!dataLink) return;
  openCartForm(e);
});

//закр
refs.cart_modal.addEventListener('click', e => {
  if (e.target === refs.cart_modal || e.target === refs.cart_close) {
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

buy_now.addEventListener('click', e => {
  localStorage.removeItem(refs.BOOK_CARD_LIST);
  render.showMessage('Гарний вибір', 'Дякуємо за покупку!');
  closeModal();
  storage.StorageService.setQuantityFromLocalStorage(refs.BOOK_CARD_LIST);
});

shop_more.addEventListener('click', e => {
  closeModal();
});

refs.cart_products.addEventListener('click', onRemoveCartItemClick);

function checkIfCartIsEmpty() {

  const isEmpty = storage.StorageService.count(refs.BOOK_CARD_LIST) === 0;

  if (isEmpty) {
    render.removeClassElement(emptyCart, 'display-none');
    render.removeClassElement(summary_section, 'hidden');
    countEl.textContent = storage.StorageService.countItems(
      refs.BOOK_CARD_LIST
    );
    storage.StorageService.setTotalCard(priceEl);
    buy_now.disabled = true;
    return true;
  }

  return false;


  //const updatedData = storage.StorageService.get(refs.BOOK_CARD_LIST);

  //if (updatedData.length === 0) {
  //  render.removeClassElement(emptyCart, 'display-none');
  //  render.addClassElement(summary_section, 'hidden');
  //  buy_now.disabled = true;
  //}
}

function onRemoveCartItemClick(event) {
  const removeBtn = event.target.closest('.cart-item-btn');
  if (!removeBtn) return;

  const cartItem = removeBtn.closest('.cart-item');
  if (!cartItem) return;

  const bookId = cartItem.dataset.id;

  // виділяємо з localStorage
  storage.StorageService.removeItemFromStorage(refs.BOOK_CARD_LIST, bookId);

  //видаляємо з DOM
  cartItem.remove();

  // Оновлення кількості та суми
  countEl.textContent = storage.StorageService.countItems(refs.BOOK_CARD_LIST);
  storage.StorageService.setTotalCard(priceEl);

  // Якщо порожній
  checkIfCartIsEmpty();
}
