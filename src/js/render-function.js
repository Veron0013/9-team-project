//Функцію для створення, рендеру або видалення розмітки
import refs from "./refs";

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

export async function openCloseModalMenu(imgButton) {
	toggleClassElement(refs.btn_burger, "is-open");
	toggleClassElement(refs.menu_burger, "is-open");

	imgButton.setAttribute("href", refs.btn_burger.classList.contains("is-open")
		? refs.scr_btn_burger_close
		: refs.scr_btn_burger_normal);

	refs.btn_burger.disabled = false;
}