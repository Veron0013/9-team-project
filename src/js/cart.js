import refs from '/js/refs';
import * as render from '/js/render-function';
import * as storage from '/js/storage';
import * as apiRest from '/js/books-api';

//змінні
const headerNav = document.querySelector(".header-nav-list");


//обробники
export async function openCartForm(eventLink) {
	eventLink.preventDefault();
	refs.cart_products.innerHTML = "";
	render.toggleClassElement(refs.cart_modal, "is-open");
	render.toggleClassElement(refs.body, "locked");

	const isEmpty = storage.StorageService.count(refs.BOOK_CARD_LIST) === 0;

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


