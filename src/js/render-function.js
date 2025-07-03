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
		return `<li class="books__data__itm" data-id="${_id}">
          <div class="books__data__img__container">
            <img
              src="${book_image}"
              alt="${list_name}"
              class="books__data__img"
							width="${book_image_width}"
							height="${book_image_height}"
            />
          </div>
          <div class="books__data__texts">
            <h3 class="books__data__title">${author}</h3>
            <h3 class="books__data__price">${price}</h3>
          </div>
          <p class="books__data__author">${author}</p>
          <button class="books__data__button">Learn More</button>
        </li>`	})
		.join("");

	return mkData;
}
export function markUpCategories(data) {
	const mkData = data.map(({ list_name }) => {
		return `<li class="b__categories__itm" data-category="${list_name}">
          <p class="b__categories__itm">${list_name}</p>
        </li>`	})
		.join("");

	return `<li class="b__categories__itm" data-category="all">
						<p class="b__categories__itm">All categories</p>
					</li> ${mkData}`;
}
export function markUpBooksById({ _id, list_name, author, book_image, description, price, title, }) {
	return `<img src="" alt="" class="modal__book_close" />
						<img src="${book_image}" alt="${list_name}" class="books__data__img" />
						<h3 class="books__data__title">${title}</h3>
						<p class="books__data__author">${author}</p>
						<p class="books__data__price">${price}</p>
						<button class="books__data__button" id="add__to__card">Add to card</button
						><button class="books__show__more"id="buy__now">Buy Now</button>
						<h3 class="modal__book__details">DETAILS</h3>
						<p class="modal__book__details__text">${description}</p>
						<h3 class="modal__book__shipping">SHIPPING</h3>
						<p class="modal__book__shipping__text">${description}</p>
						<h3 class="modal__book__returns">RETURNS</h3>
						<p class="modal__book__returns__text">${description}</p>`
};

