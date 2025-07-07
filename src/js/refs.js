export default {
	//endpoints
	BASE_URL: "https://books-backend.p.goit.global",
	END_CATEGORIES: "/books/category-list",
	END_TOP_BOOKS: "/books/top-books",
	END_CATEGORIE_ID: "/books/category?category=",
	END_BOOK_ID: "/books/",
	//error types
	API_ERROR: "ApiError",
	NO_BOOKS: "NoBooks",
	//storage
	ALL_CATEGORIES: "All categories",
	BOOK_LIST: "bookList",
	BOOK_CARD_LIST: "bookCardList",
	//elements
	currentCategory: "",
	itemsPerView: 24,
	viewedBooks: 0,
	itemsToAdd: 4,
	body: document.body,
	scr_btn_burger_close: "ico-sprite.svg#icon-x",
	scr_btn_burger_normal: "ico-sprite.svg#icon-menu-alt-right"
};
