import refs from "./js/refs.js";
import * as render from "./js/render-function.js";

refs.burgerButton.addEventListener("click", (e) => {
	render.toggleClassElement(refs.navMenu, "is-open");
})