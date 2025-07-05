
import refs from "./refs";


export const StorageService = {
	get(key) {
		return JSON.parse(localStorage.getItem(key)) || [];
	},
	addToCard(key, id, price, qty = 1) {
		const data = this.get(key);
		const index = data.findIndex(itm => itm.id === id);

		if (index === -1) {
			data.push({ id, price, qty });
		} else {
			console.log("izitoast");
			//data[index].qty += qty;
		}
		localStorage.setItem(key, JSON.stringify(data));
	},
	// isCard = true → масив об'єктів з id, false → масив простих id
	removeFromStorage(key, id, isCard = false) {
		const data = this.get(key);
		const fArray = data.filter(itm => isCard ? itm.id !== id : itm !== id);
		localStorage.setItem(key, JSON.stringify(fArray));
	},
	setTotalCard(el) {
		const arrOfItems = this.get(refs.CD_DATA);
		let total = 0;
		if (arrOfItems.length) {
			total = arrOfItems.reduce((acc, val) => acc + val.price, 0);
		}
		console.log(total);

		el.textContent = `${total.toFixed(2)} $`;
	},
	count(key) {
		return this.get(key).length;
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
