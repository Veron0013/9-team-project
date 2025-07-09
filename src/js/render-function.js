import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import refs from '/js/refs';
import * as storage from '/js/storage';

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

export function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

export async function createMarcup(
	element,
	data,
	callBack,
	emptyElement = false
) {
	if (emptyElement) {
		clearElement(element);
	}
	element.insertAdjacentHTML('beforeend', callBack(data));
}

//наповнювачі
export function markUpBooks(data) {
	const mkData = data
		.map(
			({
				_id,
				list_name,
				author,
				price,
				title,
				book_image,
				book_image_width,
				book_image_height,
			}) => {
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
						<p class="books-data-price">$${price}</p>
					</div>
          <button type="button" class="secondary-button books-data-button">Learn More</button>
        </li>`;
			}
		)
		.join('');

	return mkData;
}
export function markUpCategories(data) {
	const mkData = data
		.filter(itm => itm.list_name.trim() !== '')
		.map(({ list_name }) => {
			return `<li class="b-categories-itm" data-category="${list_name}">
          	<p class="b-categories-itm-text">${list_name}</p>
        	</li>`;
		})
		.join('');

	return `<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm-text">${refs.ALL_CATEGORIES}</p>
					</li> ${mkData}`;
}
export function markUpBooksById({
	_id,
	list_name,
	author,
	book_image,
	description,
	price,
	title,
}) {
	//(с) команда IX
	let desc = description.trim() !== '' ? description : title;
	return `
		<img id="book-image" src="${book_image}" alt="${title}" class="modal-card-image" />
		<div class="modal-card-right">
			<div class="modal-card-info">
				<h2 id="book-title" class="modal-card-title">${title}</h2>
				<p id="book-author" class="modal-card-author">${author}</p>
				<p id="book-price" class="modal-card-price">$${price}</p>
			</div>
			<form id="book-form" class="modal-card-form">
				<div class="modal-card-quantity">
					<button id="decrease-quantity" type="button">-</button>
					<input id="book-quantity" type="number" min="1" value="1" />
					<button id="increase-quantity" type="button">+</button>
				</div>
				<div class="modal-card-buttons">
					<button
						type="button"
						id="add-to-cart"
						class="modal-card-btn main-button"
					>
					
						Add to Cart
					</button>
					<button type="submit" class="modal-card-btn secondary-button">
						Buy Now
					</button>
				</div>
			</form>
			<div class="accordion-container">
				<div class="ac">
					<h2 class="ac-header">
						<button type="button" class="ac-trigger">
							Details
							<svg class="accordion-icon" width="16" height="16">
								<use href="ico-sprite.svg#icon-chevron-down"></use>
							</svg>
						</button>
					</h2>
					<div class="ac-panel">
						<p id="book-details">${desc}</p>
					</div>
				</div>
				<div class="ac">
					<h2 class="ac-header">
						<button type="button" class="ac-trigger">
							Shipping
							<svg class="accordion-icon" width="16" height="16">
								<use href="ico-sprite.svg#icon-chevron-down"></use>
							</svg>
						</button>
					</h2>
					<div class="ac-panel">
						<p id="book-shipping">
							We ship across the United States within 2–5 business days. All
							orders are processed through USPS or a reliable courier service.
							Enjoy free standard shipping on orders over $50.
						</p>
					</div>
				</div>
				<div class="ac">
					<h2 class="ac-header">
						<button type="button" class="ac-trigger">
							Returns
							<svg class="accordion-icon" width="16" height="16">
								<use href="ico-sprite.svg#icon-chevron-down"></use>
							</svg>
						</button>
					</h2>
					<div class="ac-panel">
						<p id="book-returns">
							You can return an item within 14 days of receiving your order,
							provided it hasn’t been used and is in its original condition.
							To start a return, please contact our support team — we’ll guide
							you through the process quickly and hassle-free.
						</p>
					</div>
				</div>
			</div>
		</div>`
};

export function markUpCartBookList(data) {
	const cartList = storage.StorageService.get(refs.BOOK_CARD_LIST);

	const mkData = data
		.map(({ _id, list_name, author, price, title, book_image }) => {
			const storageData = cartList.find(item => item.id === _id);
			const qty = storageData ? storageData.qty : 1;

			return `<li class="cart-item" data-id="${_id}">
							<div class="cart-item-wrapper">
								<div class="cart-item-thumb">
									<img src="${book_image}" alt="${title}" class="cart-item-img" />
								</div>
								<div class="cart-item-info">
									<h3 class="cart-item-title">${title}</h3>
									<p class="cart-item-author">${author}</p>
								</div>
							</div>
								<div class="cart-item-meta">
									<span class="cart-item-price">Ціна: $${price}</span>
									<span class="cart-item-qty"> Кількість: ${qty}</span>
									<span class="cart-item-total">Разом: $${(price * qty).toFixed(2)}</span>
									
								</div>
								<button class="cart-item-btn secondary-button">remove from cart</button>

						</li>`;
		})
		.join('');

	return mkData;
}

export function showMessage(message, title, color = "green") {
	setTimeout(() => {
		iziToast.success({
			title,
			message,
			color,
			position: 'topRight',
			class: 'custom-toast'
		});
	}, 300);
}
