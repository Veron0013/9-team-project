import refs from '/js/refs';
import * as render from '/js/render-function';
import * as storage from '/js/storage';
import * as apiRest from '/js/books-api';

//змінні
const headerNav = document.querySelector(".header-nav-list");
const emptyCart = refs.cart_modal.querySelector(".cart-empty");

const countEl = document.querySelector('[data-count]');
const priceEl = document.querySelector('[data-price]');

//обробники
export async function openCartForm(eventLink) {
	eventLink.preventDefault();

	render.clearElement(refs.cart_products);

	render.addClassElement(emptyCart, "display-none");
	render.toggleClassElement(refs.cart_modal, "is-open");
	render.toggleClassElement(refs.body, "locked");

	//лоадер

	const isEmpty = storage.StorageService.count(refs.BOOK_CARD_LIST) === 0;

	if (isEmpty) {
		render.removeClassElement(emptyCart, "display-none");
		return;
	}

	markUpCardListItems(refs.BOOK_CARD_LIST);

	countEl.textContent = storage.StorageService.countItems(refs.BOOK_CARD_LIST);
	storage.StorageService.setTotalCard(priceEl);
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
		return apiRest.getApiData(vQuery)
			.then(data => data.data)
			.catch(error => {
				console.log("Помилка для id:", prodId, error);
				return null; // Пропускаємо зламані
			});
	});

	//console.log(promises);

	const results = await Promise.all(promises);

	// Фільтруємо null або undefined
	const mkUpData = results.filter(Boolean);

	console.log("марк", mkUpData);

	render.createMarcup(refs.cart_products, mkUpData, render.markUpCartBookList, true);
}


function closeModal() {
	render.toggleClassElement(refs.cart_modal, "is-open");
	render.toggleClassElement(refs.body, "locked");
}

//слухачі
document.addEventListener("DOMContentLoaded", async () => {

});

//хедер клік
headerNav.addEventListener("click", (e) => {
	const dataLink = e.target.closest(".cart-trigger");
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
	if (e.key === 'Escape') closeModal();
});


