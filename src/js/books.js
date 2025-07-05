import refs from '/js/refs';
import * as render from '/js/render-function';
import * as apiRest from '/js/products-api';

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



const renderBooksByCat = async (bookCat) => {
	try {
		const vQuery = bookCat === "All categories" ? `${refs.BASE_URL}${refs.END_TOP_BOOKS}` : `${refs.BASE_URL}${refs.END_CATEGORIE_ID}${bookCat}`;
		const dataBook = await apiRest.getApiData(vQuery);

		console.log(dataBook);


		if (!dataBook.data.length) {
			notFoundTitle.textContent = `No books found in "${bookCat}"`;
			render.removeClassElement(notFoundEl, "hidden");
			render.addClassElement(books_more_btn, "hidden");
		}

		counterText.textContent = `Showing ${dataBook.data.length} of ${dataBook.data.length}`;
		render.createMarcup(books_list, dataBook.data, render.markUpBooks, true);
		render.toggleClassElement(category_list, "is-open");
		render.toggleClassElement(category_button_dropdown, "is-open");
	}
	catch (e) {
		console.log(e.message);
	}
}

const renderTopBooks = async () => {
	try {
		const vQuery = `${refs.BASE_URL}${refs.END_TOP_BOOKS}`
		const dataBook = await apiRest.getApiData(vQuery);
		console.log(dataBook);
		render.createMarcup(books_list, dataBook.data[4].books, render.markUpBooks, true);
	}
	catch (e) {
		console.log(e.message);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	renderCategories();
	renderTopBooks();
});

books_list.addEventListener("click", (e) => {

	const button = e.target.closest(".books-data-button");
	if (!button) return;

	const bookItm = button.closest(".books-data-itm");
	if (!bookItm) return;


	renderBookById(bookItm.dataset.id);
});

const renderCategories = async () => {
	try {
		const vQuery = `${refs.BASE_URL}${refs.END_CATEGORIES}`
		const dataBook = await apiRest.getApiData(vQuery);
		render.createMarcup(category_list, dataBook.data, render.markUpCategories, true);
	}
	catch (e) {
		console.log(e.message);
	}
}

category_button_dropdown.addEventListener("click", (e) => {
	render.toggleClassElement(category_list, "is-open");
	render.toggleClassElement(category_button_dropdown, "is-open");
});

category_list.addEventListener("click", (e) => {
	const currentCat = e.target.closest("p");
	if (!currentCat) {
		return;
	}
	render.addClassElement(notFoundEl, "hidden");
	renderBooksByCat(currentCat.textContent);
	console.log(e.target, e.target.closest("p").textContent);

});

modal_book_close.addEventListener("click", (e) => {
	render.toggleClassElement(modal_book, "is-hidden");
	render.toggleClassElement(refs.body, "locked");
});