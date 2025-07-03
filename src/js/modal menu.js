import refs from '/js/refs';
import * as render from '/js/render-function';


const btn_burger = document.querySelector(".burger-menu");
const menu_burger = document.querySelector(".modal-menu");
const burger_icon = btn_burger.querySelector('use');

btn_burger.addEventListener('click', (e) => {
	btn_burger.disabled = true;
	openCloseModalMenu();
});
menu_burger.addEventListener("click", (e) => {
	const dataLink = e.target.closest(".nav-link");
	if (!dataLink) return;
	openCloseModalMenu();
});

function openCloseModalMenu() {
	render.toggleClassElement(btn_burger, "is-open");
	render.toggleClassElement(menu_burger, "is-open");
	render.toggleClassElement(refs.body, "locked");
	burger_icon.setAttribute("href", btn_burger.classList.contains("is-open")
		? refs.scr_btn_burger_close
		: refs.scr_btn_burger_normal);

	btn_burger.disabled = false;
}


