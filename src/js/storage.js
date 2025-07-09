
import refs from "./refs";
//{
//  bookList: [
//    { id: 1, title: "Atomic Habits", price: 15, etc },
//    { id: 2, title: "Deep Work", price: 20, etc }
//  ],
//  bookCartList: [
//    { id: 1, price: 15, qty: 2 },
//    { id: 2, price: 20, qty: 1 }
//  ]
//}

export function setQuantityFromLocalStorage(storageKey) {

	const qty = StorageService.count(storageKey) || 0;

	const labelEl = document.querySelectorAll("[data-cart-count]");

	//console.log(labelEl);

	for (const item of labelEl) {
		item.textContent = qty;
	}
}

export const StorageService = {
	add(key, data) {
		localStorage.setItem(key, JSON.stringify(data));
	},
	get(key) {
		return JSON.parse(localStorage.getItem(key)) || [];
	},
	addToCard(key, id, price, qty = 1, action = null) {
		const data = this.get(key);
		const index = data.findIndex(item => item.id === id);

		if (index === -1) {
			data.push({ id, price, qty });
		} else {
			const currentItem = data[index];
			currentItem.qty = qty;
			//currentItem.qty = Math.max(0, currentItem.qty + (action === '+' ? qty : -qty));
		}

		localStorage.setItem(key, JSON.stringify(data));
	},
	removeItemFromStorage(key, id) {
		const data = this.get(key);
		const fArray = data.filter(itm => itm.id !== id);
		localStorage.setItem(key, JSON.stringify(fArray));
	},
	setTotalCard(el) {
		const arrOfItems = this.get(refs.BOOK_CARD_LIST);
		let total = 0;
		if (arrOfItems.length) {
			total = arrOfItems.reduce((acc, val) => acc + val.price * val.qty, 0);
		}
		console.log(total);

		el.textContent = `${total.toFixed(2)} $`;
	},
	count(key) {
		return this.get(key).length;
	},
	countItems(key) {
		const data = this.get(key);
		return data.reduce((acc, item) => acc + Number(item.qty), 0);
	},
	getItem(key, id) {
		const data = this.get(key);
		return data.find(item => item.id === id);;
	},
	isInCardList(key, id) {
		return this
			.get(key)
			.find(x => x.id === id) !== undefined;
	},
	setCountTo(el, key) {
		el.textContent = this.count(key) || 0;
	},
};
