import{S as U,N as F,K as G,i as Q,a as ke,P as ae}from"./assets/vendor-CT7EhRfQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();new U(".hero-swiper",{loop:!1,speed:600,grabCursor:!0,slidesPerView:1,spaceBetween:20,modules:[F,G],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{speed:700},1440:{speed:800}},on:{init:function(){Z(this)},slideChange:function(){Z(this)}}});function Z(e){const t=document.querySelector(".swiper-btn-prev"),o=document.querySelector(".swiper-btn-next");e.isBeginning?t.classList.add("button-dis"):t.classList.remove("button-dis"),e.isEnd?o.classList.add("button-dis"):o.classList.remove("button-dis")}const Le=document.querySelectorAll(".hero-btn");Le.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(".books");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const s={BASE_URL:"https://books-backend.p.goit.global",END_CATEGORIES:"/books/category-list",END_TOP_BOOKS:"/books/top-books",END_CATEGORIE_ID:"/books/category?category=",END_BOOK_ID:"/books/",API_ERROR:"ApiError",NO_BOOKS:"NoBooks",ALL_CATEGORIES:"All categories",BOOK_LIST:"bookList",BOOK_CARD_LIST:"bookCardList",currentCategory:"",itemsPerView:24,viewedBooks:0,itemsToAdd:4,body:document.body,mobile_menu:document.querySelector(".modal-menu"),cart_products:document.querySelector(".cart-products"),cart_modal:document.querySelector("#cart-modal"),cart_close:document.querySelector("#cart-close-btn"),cart_buy:document.querySelector(".cart-buy-btn"),main_loader:document.querySelector(".loader"),btn_loader:document.querySelector(".btn-loader"),scr_btn_burger_close:"ico-sprite.svg#icon-x",scr_btn_burger_normal:"ico-sprite.svg#icon-menu-alt-right"};function H(e){const t=d.count(e)||0,o=document.querySelectorAll("[data-cart-count]");for(const n of o)n.textContent=t}const d={add(e,t){localStorage.setItem(e,JSON.stringify(t))},get(e){return JSON.parse(localStorage.getItem(e))||[]},addToCard(e,t,o,n=1,r=null){const a=this.get(e),i=a.findIndex(c=>c.id===t);if(i===-1)a.push({id:t,price:o,qty:n});else{const c=a[i];c.qty=n}localStorage.setItem(e,JSON.stringify(a))},removeItemFromStorage(e,t){const n=this.get(e).filter(r=>r.id!==t);localStorage.setItem(e,JSON.stringify(n))},setTotalCard(e){const t=this.get(s.BOOK_CARD_LIST);let o=0;t.length&&(o=t.reduce((n,r)=>n+r.price*r.qty,0)),console.log(o),e.textContent=`${o.toFixed(2)} $`},count(e){return this.get(e).length},countItems(e){return this.get(e).reduce((o,n)=>o+Number(n.qty),0)},getItem(e,t){return this.get(e).find(n=>n.id===t)},isInCardList(e,t){return this.get(e).find(o=>o.id===t)!==void 0},setCountTo(e,t){e.textContent=this.count(t)||0}};function O(e){e.innerHTML=""}function l(e,t){e.classList.remove(t)}function b(e,t){e.classList.add(t)}function p(e,t){e.classList.toggle(t)}function ie(){window.scrollTo({top:0,behavior:"smooth"})}async function q(e,t,o,n=!1){n&&O(e),e.insertAdjacentHTML("beforeend",o(t))}function ce(e){return e.map(({_id:o,list_name:n,author:r,price:a,title:i,book_image:c,book_image_width:u,book_image_height:m})=>`<li class="books-data-itm" data-id="${o}">
          <div class="books-data-img-container">
            <img
              src="${c}"
              alt="${i}"
              class="books-data-img"
            />
          </div>
          <div class="books-data-info">
						<div class="books-data-texts">
							<h3 class="books-data-title">${i}</h3>
							<p class="books-data-author">${r}</p>
						</div>
						<p class="books-data-price">$${a}</p>
					</div>
          <button type="button" class="secondary-button books-data-button">Learn More</button>
        </li>`).join("")}function Se(e){const t=e.filter(o=>o.list_name.trim()!=="").map(({list_name:o})=>`<li class="b-categories-itm" data-category="${o}">
          	<p class="b-categories-itm-text">${o}</p>
        	</li>`).join("");return`<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm-text">${s.ALL_CATEGORIES}</p>
					</li> ${t}`}function _e({_id:e,list_name:t,author:o,book_image:n,description:r,price:a,title:i}){let c=r.trim()!==""?r:i;return`
		<img id="book-image" src="${n}" alt="${i}" class="modal-card-image" />
		<div class="modal-card-right">
			<div class="modal-card-info">
				<h2 id="book-title" class="modal-card-title">${i}</h2>
				<p id="book-author" class="modal-card-author">${o}</p>
				<p id="book-price" class="modal-card-price">$${a}</p>
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
						<p id="book-details">${c}</p>
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
		</div>`}function we(e){const t=d.get(s.BOOK_CARD_LIST);return e.map(({_id:n,list_name:r,author:a,price:i,title:c,book_image:u})=>{const m=t.find(T=>T.id===n),g=m?m.qty:1;return`<li class="cart-item" data-id="${n}">
							<div class="cart-item-wrapper">
								<div class="cart-item-thumb">
									<img src="${u}" alt="${c}" class="cart-item-img" />
								</div>
								<div class="cart-item-info">
									<h3 class="cart-item-title">${c}</h3>
									<p class="cart-item-author">${a}</p>
								</div>
							</div>
								<div class="cart-item-meta">
									<span class="cart-item-price">Ціна: $${i}</span>
									<span class="cart-item-qty"> Кількість: ${g}</span>
									<span class="cart-item-total">Разом: $${(i*g).toFixed(2)}</span>
									
								</div>
								<button class="cart-item-btn secondary-button">remove from cart</button>

						</li>`}).join("")}function D(e,t,o="green"){setTimeout(()=>{Q.success({title:t,message:e,color:o,position:"topRight",class:"custom-toast"})},300)}function I(e){l(e,"hidden")}function S(e){b(e,"hidden")}async function x(e){var t;try{return await ke.get(e)}catch(o){const n=((t=o.response)==null?void 0:t.status)??null;throw new j({message:`API error: ${o.message}`,name:s.API_ERROR,statusCode:n,error:o})}}class j extends Error{constructor({message:t,secondaryMessage:o="",name:n="CustomError",error:r=null,statusCode:a=null}){super(t),this.name=n,this.secondaryMessage=o,this.statusCode=a,this.originalError=r}}const _=document.querySelector("#modal-backdrop"),K=_.querySelector(".modal"),f=_.querySelector(".modal-card");function Ee(e,t,o){t&&o&&e&&(t.addEventListener("click",()=>{let n=parseInt(e.value,10);!isNaN(n)&&n>1&&(e.value=n-1)}),o.addEventListener("click",()=>{let n=parseInt(e.value,10);const r=parseInt(e.dataset.max,10);!isNaN(n)&&!isNaN(r)&&n<r&&(e.value=n+1)}))}function ee(){_.addEventListener("click",e=>{(e.target===_||e.target.closest(".modal-close"))&&$()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&$()})}async function Ce(e){var t;try{O(f),p(_,"is-hidden"),p(s.body,"locked"),I(s.btn_loader);const o=`${s.BASE_URL}${s.END_BOOK_ID}${e}`,n=await x(o);await new Promise(m=>setTimeout(m,400)),S(s.btn_loader),await q(f,n.data,_e,!0),Ee(f.querySelector("#book-quantity"),f.querySelector("#decrease-quantity"),f.querySelector("#increase-quantity"));const r=f.querySelector("#book-quantity"),a=((t=n==null?void 0:n.data)==null?void 0:t.quantity)||100;r&&(r.dataset.max=a,r.value=1);const i=K.querySelector("#book-form");i&&i.addEventListener("submit",m=>{m.preventDefault(),m.currentTarget.blur(),D("Гарний вибір","Дякуємо за покупку!"),d.removeItemFromStorage(e),$()});const c=K.querySelector("#add-to-cart");c&&c.addEventListener("click",m=>{m.currentTarget.blur(),Oe(r.value,n.data),$()}),ee();const u=f.querySelector(".accordion-container");u&&u.querySelectorAll(".ac").forEach(g=>{const T=g.querySelector(".ac-trigger"),E=g.querySelector(".ac-panel");!T||!E||(T.addEventListener("click",()=>{g.classList.contains("is-active")?(E.style.height="0px",g.classList.remove("is-active")):(g.classList.add("is-active"),E.style.height=E.scrollHeight+"px")}),E.style.height="0px")})}catch(o){ee(),S(s.btn_loader),O(f),f.innerHTML=`Sorry!!! Book unavailable!! <br/> ID = ${e} <br/>${o.message}`,b(K,"modal-error")}}function Oe(e,t){d.addToCard(s.BOOK_CARD_LIST,t._id,t.price,e),D(`У кошику ${e} од. книжок ${t.title}`,"Кошик")}function $(){_.classList.add("is-hidden"),l(s.body,"locked"),H(s.BOOK_CARD_LIST)}const A=document.querySelector(".books-data-list"),v=document.querySelector(".b-categories-list"),w=document.querySelector(".categories-dropdown"),y=document.querySelector(".books-show-more"),de=document.querySelector(".not-found"),Be=document.querySelector(".not-found-description"),te=document.querySelector(".not-found-title"),qe=document.querySelector(".b-categories-_text");async function Ie(){try{const e=`${s.BASE_URL}${s.END_CATEGORIES}`,t=await x(e);return q(v,t.data,Se,!0),!0}catch(e){return me(e),!1}}async function W(e,t=!1){var o;O(A),I(s.main_loader),s.currentCat=e;try{const n=s.currentCat===s.ALL_CATEGORIES?`${s.BASE_URL}${s.END_TOP_BOOKS}`:`${s.BASE_URL}${s.END_CATEGORIE_ID}${s.currentCat}`,r=await x(n);let a=[];if(!((o=r==null?void 0:r.data)!=null&&o.length))throw new j({message:`No books found in "${s.currentCat}"`,secondaryMessage:"We couldn't find any books in this category.<br />Please try a different one.",name:s.NO_BOOKS});s.currentCat===s.ALL_CATEGORIES?a=r.data.map(c=>c.books).reduce((c,u)=>c.concat(u),[]):a=r.data,d.add(s.BOOK_LIST,a),s.viewedBooks=Math.min(d.count(s.BOOK_LIST),s.itemsPerView);let i=a.slice(0,s.viewedBooks);z(s.viewedBooks,a.length),q(A,i,ce,!0),t||(p(v,"is-open"),p(w,"is-open")),S(s.main_loader),le()}catch(n){me(n)}}function le(){s.viewedBooks<d.count(s.BOOK_LIST)?l(y,"display-none"):b(y,"display-none")}function ue(){s.itemsPerView=window.innerWidth>=1440?24:10,s.itemsPerView===10&&(l(v,"is-open"),l(w,"is-open"))}function z(e,t){qe.textContent=`Showing ${e} of ${t}`}function me(e){console.log(e),e instanceof j?(te.textContent=e.message,Be.innerHTML=e.secondaryMessage):te.textContent="Unexpected error occurred.",l(v,"is-open"),l(w,"is-open"),l(de,"hidden"),b(y,"display-none"),z(0,0),S(s.main_loader),console.log("Error:",e.stack)}document.addEventListener("DOMContentLoaded",async()=>{H(s.BOOK_CARD_LIST),I(s.main_loader),ue(),await Ie()&&W(s.ALL_CATEGORIES,!0)});window.addEventListener("resize",()=>{ue()});A.addEventListener("click",e=>{const t=e.target.closest(".books-data-button");if(!t)return;const o=t.closest(".books-data-itm");o&&Ce(o.dataset.id)});w.addEventListener("click",()=>{p(v,"is-open"),p(w,"is-open")});v.addEventListener("click",e=>{b(y,"display-none"),v.querySelectorAll(".b-categories-itm").forEach(r=>{l(r,"is-active")});const o=e.target.closest("p");if(!o)return;const n=e.target.closest(".b-categories-itm");n&&b(n,"is-active"),b(de,"hidden"),W(o.textContent)});y.addEventListener("click",async()=>{I(s.main_loader),b(y,"display-none"),await new Promise(a=>setTimeout(a,400)),y.disabled=!0;const e=d.count(s.BOOK_LIST),t=s.viewedBooks,o=s.viewedBooks+s.itemsToAdd,n=d.get(s.BOOK_LIST);if(!n.length){D("Дані не вдалося дозавантажити. Спробуйте ще раз...","Помилка!!!","red"),W(s.currentCat,!0),oe(),ie();return}const r=n.slice(t,o);s.viewedBooks=Math.min(o,e),z(s.viewedBooks,n.length),q(A,r,ce,!1),oe()});function oe(){l(v,"is-open"),l(w,"is-open"),le(),S(s.main_loader),y.disabled=!1}new U(".feedbacks-swiper",{modules:[F,G,ae],loop:!1,grabCursor:!0,spaceBetween:20,slidesPerView:1,navigation:{prevEl:".feedbacks-swiper-button-left",nextEl:".feedbacks-swiper-button-right"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:".feedbacks-custom-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},on:{init:function(){se(this)},slideChange:function(){se(this)}}});function se(e){const t=document.querySelector(".feedbacks-swiper-button-left"),o=document.querySelector(".feedbacks-swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const Te=document.querySelector(".header-nav-list"),pe=s.cart_modal.querySelector(".cart-empty"),J=document.querySelector(".buy-now"),$e=document.querySelector(".shop-more"),ne=document.querySelector(".cart-loader"),be=document.querySelector(".cart-summary-section"),Y=document.querySelector("[data-count]"),X=document.querySelector("[data-price]");async function fe(e){e.preventDefault(),O(s.cart_products),b(pe,"display-none"),p(s.cart_modal,"is-open"),p(s.body,"locked"),!ge()&&(I(ne),await new Promise(t=>setTimeout(t,400)),S(ne),await Ae(s.BOOK_CARD_LIST),l(be,"hidden"),Y.textContent=d.countItems(s.BOOK_CARD_LIST),d.setTotalCard(X),J.disabled=!1)}async function Ae(e){const t=d.get(e);console.log(e,t);const o=t.map(a=>{const i=a.id,c=`${s.BASE_URL}${s.END_BOOK_ID}${i}`;return x(c).then(u=>u.data).catch(u=>(console.log("Помилка для id:",prodId,u),null))}),r=(await Promise.all(o)).filter(Boolean);q(s.cart_products,r,we,!0)}function R(){H(s.BOOK_CARD_LIST),l(s.cart_modal,"is-open"),l(s.body,"locked")}document.addEventListener("DOMContentLoaded",async()=>{});Te.addEventListener("click",e=>{e.target.closest(".cart-trigger")&&fe(e)});s.cart_modal.addEventListener("click",e=>{(e.target===s.cart_modal||e.target===s.cart_close)&&R()});document.addEventListener("keydown",e=>{e.key==="Escape"&&R()});J.addEventListener("click",e=>{localStorage.removeItem(s.BOOK_CARD_LIST),D("Гарний вибір","Дякуємо за покупку!"),R(),d.setQuantityFromLocalStorage(s.BOOK_CARD_LIST)});$e.addEventListener("click",e=>{R()});s.cart_products.addEventListener("click",De);function ge(){return d.count(s.BOOK_CARD_LIST)===0?(l(pe,"display-none"),l(be,"hidden"),Y.textContent=d.countItems(s.BOOK_CARD_LIST),d.setTotalCard(X),J.disabled=!0,!0):!1}function De(e){const t=e.target.closest(".cart-item-btn");if(!t)return;const o=t.closest(".cart-item");if(!o)return;const n=o.dataset.id;d.removeItemFromStorage(s.BOOK_CARD_LIST,n),o.remove(),Y.textContent=d.countItems(s.BOOK_CARD_LIST),d.setTotalCard(X),ge()}const k=document.querySelector(".burger-menu"),xe=k.querySelector("use");k.addEventListener("click",e=>{k.disabled=!0,ye()});s.mobile_menu.addEventListener("click",e=>{const t=e.target.closest(".nav-link");t&&(ye(),t.classList.contains("cart-trigger")&&fe(e))});function ye(){p(k,"is-open"),p(s.mobile_menu,"is-open"),p(s.body,"locked"),xe.setAttribute("href",k.classList.contains("is-open")?s.scr_btn_burger_close:s.scr_btn_burger_normal),k.disabled=!1}const M=document.querySelector("#back-to-top");window.addEventListener("scroll",()=>{window.scrollY>600?l(M,"hidden"):b(M,"hidden")});M.addEventListener("click",e=>{e.currentTarget.blur(),ie()});const h=document.querySelector(".form"),Re=h.querySelectorAll(".form-input, .form-user-comment"),Ne=document.querySelector(".modal-close-btn"),B=document.querySelector("#event-modal"),Ke=document.querySelector(".events-list");let V="";Ke.addEventListener("click",e=>{const t=e.target.closest(".events-item");!t||!e.target.closest(".card-btn")||(V=t.querySelector(".events-card-heading").textContent.trim(),Pe(V))});h.addEventListener("submit",Me);B.addEventListener("click",Ue);Ne.addEventListener("click",Ve);function Pe(e){B.classList.add("is-open");const t=B.querySelector(".form-subtitle");t.textContent=e,document.body.classList.add("locked"),window.addEventListener("keydown",ve)}function N(){B.classList.remove("is-open"),document.body.classList.remove("locked"),window.removeEventListener("keydown",ve)}function Me(e){e.preventDefault();let t=!0;if(Re.forEach(o=>{const n=o.nextElementSibling,r=o.value.trim();!o.checkValidity()||r===""?(o.classList.add("error"),n&&n.classList.contains("error-text")&&(n.style.display="block"),t=!1):(o.classList.remove("error"),n&&n.classList.contains("error-text")&&(n.style.display="none"))}),t){console.log("Форма валідна. Можна відправити.");const o={fullname:h.elements.fullname.value.trim(),email:h.elements.email.value.trim(),comment:h.elements.comment.value.trim()};console.log("Дані для відправки:",o),setTimeout(()=>{Q.success({title:"Дякуємо!",message:`Ви успішно зареєструвалися на ${V}`,position:"topRight",class:"custom-toast"}),h.reset(),N()},500)}}function Ve(){N()}function Ue(e){e.target===B&&N()}function ve(e){e.key==="Escape"&&N()}let C=null;function Fe(){C=new U(".events-swiper",{modules:[F,ae,G],loop:!1,grabCursor:!0,spaceBetween:24,slidesPerView:1,navigation:{prevEl:".swiper-button-left",nextEl:".swiper-button-right"},pagination:{el:".custom-swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24}},on:{init:function(){re(this)},slideChange:function(){re(this)}}})}function Ge(){C&&(C.destroy(!0,!0),C=null)}function he(){const e=window.innerWidth,t=document.querySelector(".events-control-cont"),o=document.querySelector(".swiper-pagination");e>=1440?(Ge(),t==null||t.classList.add("hidden"),o==null||o.classList.add("hidden")):(C||Fe(),t==null||t.classList.remove("hidden"),o==null||o.classList.remove("hidden"))}he();window.addEventListener("resize",he);function re(e){const t=document.querySelector(".swiper-button-left"),o=document.querySelector(".swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const L=document.querySelector(".footer-form"),P=L==null?void 0:L.querySelector(".footer-input");L&&L.addEventListener("submit",function(e){if(e.preventDefault(),!P.checkValidity()||P.value.trim()===""){P.classList.add("error");return}setTimeout(()=>{Q.success({title:"Дякуємо!",message:"Ви успішно підписались",position:"topRight",class:"custom-toast"}),L.reset()},500)});
//# sourceMappingURL=index.js.map
