import refs from '/js/refs';
import * as render from '/js/render-function';
import * as apiRest from '/js/books-api';
import * as modal from '/js/modal';
import * as storage from '/js/storage'

const modal_book = document.querySelector(".backdrop");
const modal_book_data = document.querySelector(".modal-card");
const modal_book_close = document.querySelector(".modal-close");
const books_list = document.querySelector(".books-data-list");
const category_list = document.querySelector(".b-categories-list");
const category_button_dropdown = document.querySelector(".categories-dropdown");
const books_more_btn = document.querySelector(".books-show-more");
const notFoundEl = document.querySelector(".not-found");
const notFoundTitle = document.querySelector(".not-found-title");
const counterText = document.querySelector(".b-categories-_text");


const renderBookById = async (bookId) => {
	return;
	try {
		const vQuery = `${refs.BASE_URL}${refs.END_BOOK_ID}${bookId}`
		const dataBook = await apiRest.getApiData(vQuery);

		modal_book_data.innerHTML = "";
		render.createMarcup(modal_book_data, dataBook.data, render.markUpBooksById, true);
		render.toggleClassElement(modal_book, "is-hidden");
		render.toggleClassElement(refs.body, "locked");

		const btnAddToCard = document.querySelector("#add-to-card");
		console.log(btnAddToCard);

		btnAddToCard.addEventListener("click", (e) => {
			//helper.showMessage("Вітаю", "Вас розіграли");
		});
	}
	catch (e) {
		console.log(e.message);
	}
}

async function renderBooksByCat(bookCat) {
	//loader
	refs.currentCat = bookCat;
	try {
		const vQuery = refs.currentCat === refs.ALL_CATEGORIES ? `${refs.BASE_URL}${refs.END_TOP_BOOKS}` : `${refs.BASE_URL}${refs.END_CATEGORIE_ID}${refs.currentCat}`;
		const dataBook = await apiRest.getApiData(vQuery);

		let mkData = [];

		if (!dataBook.data.length) {
			notFoundTitle.textContent = `No books found in "${refs.currentCat}"`;
			render.removeClassElement(notFoundEl, "hidden");
			render.addClassElement(books_more_btn, "hidden");
		}

		if (refs.currentCat === refs.ALL_CATEGORIES) {
			mkData = dataBook.data
				.map(category => category.books)
				.reduce((acc, books) => acc.concat(books), []);
		} else {
			mkData = dataBook.data;
		}

		storage.StorageService.add(refs.BOOK_LIST, mkData);

		refs.viewedBooks = Math.min(storage.StorageService.count(refs.BOOK_LIST), refs.itemsPerView);

		let renderData = mkData.slice(0, refs.viewedBooks);

		//console.log(storage.StorageService.count(refs.BOOK_LIST), refs.itemsPerView);

		updateCounterText(refs.viewedBooks, mkData.length);

		render.createMarcup(books_list, renderData, render.markUpBooks, true);

		render.toggleClassElement(category_list, "is-open");
		render.toggleClassElement(category_button_dropdown, "is-open");

		showHideShowMoreButton();
	}
	catch (e) {
		console.log(e.message);
	}
}

function showHideShowMoreButton() {
	if (refs.viewedBooks < storage.StorageService.count(refs.BOOK_LIST)) {
		render.removeClassElement(books_more_btn, "display-none");
	} else {
		render.addClassElement(books_more_btn, "display-none");
	}
}

function dafaultPagination() {
	refs.itemsPerView = window.innerWidth >= 1440 ? 24 : 10;
	if (refs.itemsPerView === 10) {
		render.removeClassElement(category_list, "is-open");
		render.removeClassElement(category_button_dropdown, "is-open");
	}
}

async function renderCategories() {
	try {
		const vQuery = `${refs.BASE_URL}${refs.END_CATEGORIES}`
		const dataBook = await apiRest.getApiData(vQuery);
		render.createMarcup(category_list, dataBook.data, render.markUpCategories, true);
	}
	catch (e) {
		console.log(e.message);
	}
}

function updateCounterText(viewed, total) {
	counterText.textContent = `Showing ${viewed} of ${total}`;
}

//слухачі

document.addEventListener("DOMContentLoaded", () => {
	dafaultPagination();
	renderCategories();
	renderBooksByCat(refs.ALL_CATEGORIES);
});

window.addEventListener('resize', () => {
	dafaultPagination();
});

books_list.addEventListener("click", (e) => {

	const button = e.target.closest(".books-data-button");
	if (!button) return;

	const bookItm = button.closest(".books-data-itm");
	if (!bookItm) return;

	//console.log("modal");

	modal.openModal(bookItm.dataset.id);

	//renderBookById(bookItm.dataset.id);
});

//дропдаун списку категорій
category_button_dropdown.addEventListener("click", () => {
	render.toggleClassElement(category_list, "is-open");
	render.toggleClassElement(category_button_dropdown, "is-open");
});

//вибір категорії
category_list.addEventListener("click", (e) => {

	const items = category_list.querySelectorAll(".b-categories-itm");
	items.forEach((item) => {
		render.removeClassElement(item, "is-active");
	});

	const currentCat = e.target.closest("p");
	if (!currentCat) {
		return;
	}

	const activeLi = e.target.closest(".b-categories-itm");
	if (activeLi) {
		render.addClassElement(activeLi, "is-active");
	}

	render.addClassElement(notFoundEl, "hidden");
	renderBooksByCat(currentCat.textContent);
	//console.log(e.target, e.target.closest("p").textContent);

});

//x на модалки книжки
modal_book_close.addEventListener("click", () => {
	render.toggleClassElement(modal_book, "is-hidden");
	render.toggleClassElement(refs.body, "locked");
});

//більше!!! 
books_more_btn.addEventListener("click", () => {

	books_more_btn.disabled = true;

	const totalBooks = storage.StorageService.count(refs.BOOK_LIST);
	const viewed = refs.viewedBooks;
	const nextView = refs.viewedBooks + refs.itemsToAdd;

	const mkData = storage.StorageService.get(refs.BOOK_LIST);

	//якийсь розумник почистить local storage
	if (!mkData.length) {

		//тост 
		renderBooksByCat(refs.currentCat);
		refs.scrollToTop();
		return;
	}

	const renderData = mkData.slice(viewed, nextView);

	refs.viewedBooks = Math.min(nextView, totalBooks);

	updateCounterText(refs.viewedBooks, mkData.length);

	render.createMarcup(books_list, renderData, render.markUpBooks, false);

	showHideShowMoreButton();
	books_more_btn.disabled = false;
});
