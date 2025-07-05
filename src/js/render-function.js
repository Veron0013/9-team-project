//Функцію для створення, рендеру або видалення розмітки
import refs from '/js/refs';

export function clearElement(element) {
	element.innerHTML = '';
}
export function removeClassElement(element, className) {
	element.classList.remove(className);
}
export function addClassElement(element, className) {
	element.classList.add(className);
}
export function toggleClassElement(element, className) {
	element.classList.toggle(className);
}

export function createMarcup(element, data, callBack, clearElement = false) {
	if (clearElement) {
		element.innerHTML = "";
	}
	element.insertAdjacentHTML("beforeend", callBack(data));
}
export function markUpBooks(data) {
	const mkData = data.map(({ _id, list_name, author, price, title, book_image, book_image_width, book_image_height }) => {
		return `<li class="books-data-itm" data-id="${_id}">
          <div class="books-data-img-container">
            <img
              src="${book_image}"
              alt="${title}"
              class="books-data-img"
            />
          </div>
          <div class="books-data-info">
						<div class="books-data-texts">
							<h3 class="books-data-title">${title}</h3>
							<p class="books-data-author">${author}</p>
						</div>
						<h3 class="books-data-price">$${price}</h3>
					</div>
          <button class="books-data-button">Learn More</button>
        </li>`	})
		.join("");

	return mkData;
}
export function markUpCategories(data) {
	const mkData = data.filter((itm) => itm.list_name.trim() !== "")
		.map(({ list_name }) => {
			return `<li class="b-categories-itm" data-category="${list_name}">
          	<p class="b-categories-itm-text">${list_name}</p>
        	</li>`	})
		.join("");

	return `<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm-text">${refs.ALL_CATEGORIES}</p>
					</li> ${mkData}`;
}
export function markUpBooksById({ _id, list_name, author, book_image, description, price, title, }) {
	return `
						<img src="${book_image}" alt="${list_name}" class="modal-card__image" />
						<h3 class="modal-card__title">${title}</h3>
						<p class="modal-card__author">${author}</p>
						<p class="modal-card__price">$${price}</p>
						<form id="book-form" class="modal-card__form">
							<div class="modal-card__quantity">
								<button type="button" id="minus-btn">-</button>
								<span id="quantity">1</span>
								<button type="button" id="plus-btn">+</button>
							</div>
							<button type="button" id="add-to-cart" class="modal-card__btn primary">Add to Cart
							</button>
							<button type="submit" class="modal-card__btn secondary">Buy Now</button>
						</form>
						<div id="accordion" class="modal-card__accordion">
						<h3 class="modal-book-details">DETAILS</h3>
						<p class="modal-book-details-text">${description}</p>
						<h3 class="modal-book-shipping">SHIPPING</h3>
						<p class="modal-book-shipping-text">We ship across the United States within 2–5 business days. All orders are processed through USPS or a reliable courier service. Enjoy free standard shipping on orders over $50.</p>
						<h3 class="modal-book-returns">RETURNS</h3>
						<p class="modal-book-returns-text">You can return an item within 14 days of receiving your order, provided it hasn’t been used and is in its original condition. To start a return, please contact our support team — we’ll guide you through the process quickly and hassle-free.</p>
						</div>`
};

//
export function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}