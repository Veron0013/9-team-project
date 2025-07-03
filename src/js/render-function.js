//Функцію для створення, рендеру або видалення розмітки

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
              alt="${list_name}"
              class="books-data-img"
            />
          </div>
          <div class="books-data-texts">
            <h3 class="books-data-title">${title}</h3>
            <h3 class="books-data-price">${price}</h3>
          </div>
          <p class="books-data-author">${author}</p>
          <button class="books-data-button">Learn More</button>
        </li>`	})
		.join("");

	return mkData;
}
export function markUpCategories(data) {
	const mkData = data.map(({ list_name }) => {
		return `<li class="b-categories-itm" data-category="${list_name}">
          <p class="b-categories-itm">${list_name}</p>
        </li>`	})
		.join("");

	return `<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm">All categories</p>
					</li> ${mkData}`;
}
export function markUpBooksById({ _id, list_name, author, book_image, description, price, title, }) {
	return `<img src="" alt="" class="modal-book_close" />
						<img src="${book_image}" alt="${list_name}" class="books-data-img" />
						<h3 class="books-data-title">${title}</h3>
						<p class="books-data-author">${author}</p>
						<p class="books-data-price">${price}</p>
						<button class="books-data-button" id="add-to-card">Add to card</button
						><button class="books-show-more"id="buy-now">Buy Now</button>
						<h3 class="modal-book-details">DETAILS</h3>
						<p class="modal-book-details-text">${description}</p>
						<h3 class="modal-book-shipping">SHIPPING</h3>
						<p class="modal-book-shipping-text">${description}</p>
						<h3 class="modal-book-returns">RETURNS</h3>
						<p class="modal-book-returns-text">${description}</p>`
};

