import refs from '/js/refs';
import * as render from '/js/render-function';
import * as apiRest from '/js/products-api';

const modal_book = document.querySelector(".modal-book");
const books_list = document.querySelector(".books-data-list");
const category_list = document.querySelector(".b-categories-list");
const category_button_dropdown = document.querySelector(".categories-dropdown");
const books_more_btn = document.querySelector(".books-data-button");


const renderBookById = async (bookId) => {
	try {
		const vQuery = `${refs.BASE_URL}${refs.END_BOOK_ID}${bookId}`
		const dataBook = await apiRest.getApiData(vQuery);
		console.log(dataBook);
		render.createMarcup(refs.modal_book, dataBook.data, render.markUpBooksById, true);
		render.toggleClassElement(refs.modal_book, "is-open");
		window.scrollTo({ top: 0, behavior: "smooth" });

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
	renderBooksByCat(currentCat.textContent);
	console.log(e.target, e.target.closest("p").textContent);

});
