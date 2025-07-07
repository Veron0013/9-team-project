import refs from '/js/refs';
import { showLoader, hideLoader } from './loader';
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
const notFoundElDesc = document.querySelector(".not-found-description");
const notFoundTitle = document.querySelector(".not-found-title");

const counterText = document.querySelector(".b-categories-_text");

async function renderCategories() {
	try {
		const vQuery = `${refs.BASE_URL}${refs.END_CATEGORIES}`
		const dataBook = await apiRest.getApiData(vQuery);
		console.log("cats", dataBook);
		render.createMarcup(category_list, dataBook.data, render.markUpCategories, true);
		return true;
	}
	catch (e) {
		handleError(e);
		return false;
	}
}

async function renderBooksByCat(bookCat, firstLoad = false) {
	books_list.innerHTML = "";
	showLoader();
	//loader
	refs.currentCat = bookCat;
	try {
		const vQuery = refs.currentCat === refs.ALL_CATEGORIES ? `${refs.BASE_URL}${refs.END_TOP_BOOKS}` : `${refs.BASE_URL}${refs.END_CATEGORIE_ID}${refs.currentCat}`;
		const dataBook = await apiRest.getApiData(vQuery);

		let mkData = [];

		if (!dataBook?.data?.length) {
			throw new apiRest.ErrorService({
				message: `No books found in "${refs.currentCat}"`,
				secondaryMessage: "We couldn't find any books in this category.<br />Please try a different one.",
				name: refs.NO_BOOKS
			});
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

		if (!firstLoad) {
			render.toggleClassElement(category_list, "is-open");
			render.toggleClassElement(category_button_dropdown, "is-open");
		}
		hideLoader();
		showHideShowMoreButton();
	}
	catch (e) {
		//notFoundTitle.textContent = `No books found in "${refs.currentCat}"`;
		//render.removeClassElement(notFoundEl, "hidden");
		//render.addClassElement(books_more_btn, "display-none");
		//hideLoader();
		//console.log("error", e.message);
		handleError(e);
	}
}

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

function handleError(error) {
	console.log(error);

	if (error instanceof apiRest.ErrorService) {
		notFoundTitle.textContent = error.message;
		notFoundElDesc.innerHTML = error.secondaryMessage;
	} else {
		notFoundTitle.textContent = "Unexpected error occurred.";
	}
	render.removeClassElement(category_list, "is-open");
	render.removeClassElement(category_button_dropdown, "is-open");
	render.removeClassElement(notFoundEl, "hidden");
	render.addClassElement(books_more_btn, "display-none");

	updateCounterText(0, 0);
	hideLoader();
	console.log("Error:", error.stack);
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

function updateCounterText(viewed, total) {
	counterText.textContent = `Showing ${viewed} of ${total}`;
}

//слухачі

document.addEventListener("DOMContentLoaded", async () => {
	showLoader();
	dafaultPagination();

	const hasCategories = await renderCategories();

	if (hasCategories) {
		renderBooksByCat(refs.ALL_CATEGORIES, true);
	}
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
	render.addClassElement(books_more_btn, "display-none");

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
	render.addClassElement(modal_book, "is-hidden");
	render.removeClassElement(refs.body, "locked");
});

//більше!!! 
books_more_btn.addEventListener("click", async () => {

	showLoader();
	render.addClassElement(books_more_btn, "display-none");
	await new Promise(resolve => setTimeout(resolve, 400));
	console.log("wait");

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
	hideLoader();
	books_more_btn.disabled = false;
});
