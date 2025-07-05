export default {
	//constants
	BASE_URL: "https://books-backend.p.goit.global",
	END_CATEGORIES: "/books/category-list",
	END_TOP_BOOKS: "/books/top-books",
	END_CATEGORIE_ID: "/books/category?category=",
	END_BOOK_ID: "/books/",
	//storage
	BOOK_LIST: "bookList",
	BOOK_CARD_LIST: "bookCardList",
	//elements
	currentCategory: "",
	itemsPerView: 24,
	viewedBooks: 0,
	body: document.body,
	scr_btn_burger_close: "ico-sprite.svg#icon-x",
	scr_btn_burger_normal: "ico-sprite.svg#icon-menu-alt-right"
};
