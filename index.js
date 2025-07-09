import{S as H,N as j,K as W,i as z,a as ge,P as ae}from"./assets/vendor-CT7EhRfQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();new H(".hero-swiper",{loop:!1,speed:600,grabCursor:!0,slidesPerView:1,spaceBetween:20,modules:[j,W],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{speed:700},1440:{speed:800}},on:{init:function(){te(this)},slideChange:function(){te(this)}}});function te(e){const t=document.querySelector(".swiper-btn-prev"),o=document.querySelector(".swiper-btn-next");e.isBeginning?t.classList.add("button-dis"):t.classList.remove("button-dis"),e.isEnd?o.classList.add("button-dis"):o.classList.remove("button-dis")}const ye=document.querySelectorAll(".hero-btn");ye.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(".books");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const s={BASE_URL:"https://books-backend.p.goit.global",END_CATEGORIES:"/books/category-list",END_TOP_BOOKS:"/books/top-books",END_CATEGORIE_ID:"/books/category?category=",END_BOOK_ID:"/books/",API_ERROR:"ApiError",NO_BOOKS:"NoBooks",ALL_CATEGORIES:"All categories",BOOK_LIST:"bookList",BOOK_CARD_LIST:"bookCardList",currentCategory:"",itemsPerView:24,viewedBooks:0,itemsToAdd:4,body:document.body,mobile_menu:document.querySelector(".modal-menu"),cart_products:document.querySelector(".cart-products"),cart_modal:document.querySelector("#cart-modal"),cart_close:document.querySelector("#cart-close-btn"),cart_buy:document.querySelector(".cart-buy-btn"),main_loader:document.querySelector(".loader"),btn_loader:document.querySelector(".btn-loader"),scr_btn_burger_close:"ico-sprite.svg#icon-x",scr_btn_burger_normal:"ico-sprite.svg#icon-menu-alt-right"};function J(e){const t=c.count(e)||0,o=document.querySelectorAll("[data-cart-count]");console.log(o);for(const n of o)n.textContent=t}const c={add(e,t){localStorage.setItem(e,JSON.stringify(t))},get(e){return JSON.parse(localStorage.getItem(e))||[]},addToCard(e,t,o,n=1,r=null){const a=this.get(e),i=a.findIndex(d=>d.id===t);if(i===-1)a.push({id:t,price:o,qty:n});else{const d=a[i];d.qty=n}localStorage.setItem(e,JSON.stringify(a))},removeItemFromStorage(e,t){const n=this.get(e).filter(r=>r.id!==t);localStorage.setItem(e,JSON.stringify(n))},setTotalCard(e){const t=this.get(s.BOOK_CARD_LIST);let o=0;t.length&&(o=t.reduce((n,r)=>n+r.price*r.qty,0)),console.log(o),e.textContent=`${o.toFixed(2)} $`},count(e){return this.get(e).length},countItems(e){return this.get(e).reduce((o,n)=>o+Number(n.qty),0)},getItem(e,t){return this.get(e).find(n=>n.id===t)},isInCardList(e,t){return this.get(e).find(o=>o.id===t)!==void 0},setCountTo(e,t){e.textContent=this.count(t)||0}};function C(e){e.innerHTML=""}function l(e,t){e.classList.remove(t)}function p(e,t){e.classList.add(t)}function b(e,t){e.classList.toggle(t)}function ve(){window.scrollTo({top:0,behavior:"smooth"})}async function B(e,t,o,n=!1){n&&C(e),e.insertAdjacentHTML("beforeend",o(t))}function ie(e){return e.map(({_id:o,list_name:n,author:r,price:a,title:i,book_image:d,book_image_width:u,book_image_height:m})=>`<li class="books-data-itm" data-id="${o}">
          <div class="books-data-img-container">
            <img
              src="${d}"
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
        </li>`).join("")}function he(e){const t=e.filter(o=>o.list_name.trim()!=="").map(({list_name:o})=>`<li class="b-categories-itm" data-category="${o}">
          	<p class="b-categories-itm-text">${o}</p>
        	</li>`).join("");return`<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm-text">${s.ALL_CATEGORIES}</p>
					</li> ${t}`}function Se({_id:e,list_name:t,author:o,book_image:n,description:r,price:a,title:i}){let d=r.trim()!==""?r:i;return`
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
						<p id="book-details">${d}</p>
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
		</div>`}function ke(e){const t=c.get(s.BOOK_CARD_LIST);return e.map(({_id:n,list_name:r,author:a,price:i,title:d,book_image:u})=>{const m=t.find(T=>T.id===n),g=m?m.qty:1;return`<li class="cart-item" data-id="${n}">
							<div class="cart-item-wrapper">
								<div class="cart-item-thumb">
									<img src="${u}" alt="${d}" class="cart-item-img" />
								</div>
								<div class="cart-item-info">
									<h3 class="cart-item-title">${d}</h3>
									<p class="cart-item-author">${a}</p>
								</div>
							</div>
								<div class="cart-item-meta">
									<span class="cart-item-price">Ціна: $${i}</span>
									<span class="cart-item-qty"> Кількість: ${g}</span>
									<span class="cart-item-total">Разом: $${(i*g).toFixed(2)}</span>
									
								</div>
								<button class="cart-item-btn secondary-button">remove from cart</button>

						</li>`}).join("")}function Y(e,t){setTimeout(()=>{z.success({title:t,message:e,position:"topRight",class:"custom-toast"})},300)}function I(e){l(e,"hidden")}function L(e){p(e,"hidden")}async function x(e){var t;try{return await ge.get(e)}catch(o){const n=((t=o.response)==null?void 0:t.status)??null;throw new X({message:`API error: ${o.message}`,name:s.API_ERROR,statusCode:n,error:o})}}class X extends Error{constructor({message:t,secondaryMessage:o="",name:n="CustomError",error:r=null,statusCode:a=null}){super(t),this.name=n,this.secondaryMessage=o,this.statusCode=a,this.originalError=r}}const _=document.querySelector("#modal-backdrop"),K=_.querySelector(".modal"),f=_.querySelector(".modal-card");function Le(e,t,o){t&&o&&e&&(t.addEventListener("click",()=>{let n=parseInt(e.value,10);!isNaN(n)&&n>1&&(e.value=n-1)}),o.addEventListener("click",()=>{let n=parseInt(e.value,10);const r=parseInt(e.dataset.max,10);!isNaN(n)&&!isNaN(r)&&n<r&&(e.value=n+1)}))}function _e(){_.addEventListener("click",e=>{(e.target===_||e.target.closest(".modal-close"))&&D()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&D()})}async function we(e){var t;try{C(f),b(_,"is-hidden"),b(s.body,"locked"),I(s.btn_loader);const o=`${s.BASE_URL}${s.END_BOOK_ID}${e}`,n=await x(o);await new Promise(m=>setTimeout(m,400)),L(s.btn_loader),await B(f,n.data,Se,!0),Le(f.querySelector("#book-quantity"),f.querySelector("#decrease-quantity"),f.querySelector("#increase-quantity"));const r=f.querySelector("#book-quantity"),a=((t=n==null?void 0:n.data)==null?void 0:t.quantity)||100;r&&(r.dataset.max=a,r.value=1);const i=K.querySelector("#book-form");i&&i.addEventListener("submit",m=>{m.preventDefault(),m.currentTarget.blur(),Y("Гарний вибір","Дякуємо за покупку!"),c.removeItemFromStorage(e),D()});const d=K.querySelector("#add-to-cart");d&&d.addEventListener("click",m=>{m.currentTarget.blur(),Ee(r.value,n.data),D()}),_e();const u=f.querySelector(".accordion-container");u&&u.querySelectorAll(".ac").forEach(g=>{const T=g.querySelector(".ac-trigger"),w=g.querySelector(".ac-panel");!T||!w||(T.addEventListener("click",()=>{g.classList.contains("is-active")?(w.style.height="0px",g.classList.remove("is-active")):(g.classList.add("is-active"),w.style.height=w.scrollHeight+"px")}),w.style.height="0px")})}catch(o){L(s.btn_loader),C(f),f.innerHTML=`Sorry!!! Book unavailable!! <br/> ID = ${e} <br/>${o.message}`,p(K,"modal-error")}}function Ee(e,t){c.addToCard(s.BOOK_CARD_LIST,t._id,t.price,e),Y(`У кошику ${e} од. книжок ${t.title}`,"Кошик")}function D(){_.classList.add("is-hidden"),l(s.body,"locked"),J(s.BOOK_CARD_LIST)}document.querySelector(".backdrop");document.querySelector(".modal-card");document.querySelector(".modal-close");const A=document.querySelector(".books-data-list"),v=document.querySelector(".b-categories-list"),O=document.querySelector(".categories-dropdown"),y=document.querySelector(".books-show-more"),ce=document.querySelector(".not-found"),Ce=document.querySelector(".not-found-description"),oe=document.querySelector(".not-found-title"),Oe=document.querySelector(".b-categories-_text");async function qe(){try{const e=`${s.BASE_URL}${s.END_CATEGORIES}`,t=await x(e);return B(v,t.data,he,!0),!0}catch(e){return ue(e),!1}}async function Z(e,t=!1){var o;C(A),I(s.main_loader),s.currentCat=e;try{const n=s.currentCat===s.ALL_CATEGORIES?`${s.BASE_URL}${s.END_TOP_BOOKS}`:`${s.BASE_URL}${s.END_CATEGORIE_ID}${s.currentCat}`,r=await x(n);let a=[];if(!((o=r==null?void 0:r.data)!=null&&o.length))throw new X({message:`No books found in "${s.currentCat}"`,secondaryMessage:"We couldn't find any books in this category.<br />Please try a different one.",name:s.NO_BOOKS});s.currentCat===s.ALL_CATEGORIES?a=r.data.map(d=>d.books).reduce((d,u)=>d.concat(u),[]):a=r.data,c.add(s.BOOK_LIST,a),s.viewedBooks=Math.min(c.count(s.BOOK_LIST),s.itemsPerView);let i=a.slice(0,s.viewedBooks);ee(s.viewedBooks,a.length),B(A,i,ie,!0),t||(b(v,"is-open"),b(O,"is-open")),L(s.main_loader),de()}catch(n){ue(n)}}function de(){s.viewedBooks<c.count(s.BOOK_LIST)?l(y,"display-none"):p(y,"display-none")}function le(){s.itemsPerView=window.innerWidth>=1440?24:10,s.itemsPerView===10&&(l(v,"is-open"),l(O,"is-open"))}function ee(e,t){Oe.textContent=`Showing ${e} of ${t}`}function ue(e){console.log(e),e instanceof X?(oe.textContent=e.message,Ce.innerHTML=e.secondaryMessage):oe.textContent="Unexpected error occurred.",l(v,"is-open"),l(O,"is-open"),l(ce,"hidden"),p(y,"display-none"),ee(0,0),L(s.main_loader),console.log("Error:",e.stack)}document.addEventListener("DOMContentLoaded",async()=>{J(s.BOOK_CARD_LIST),I(s.main_loader),le(),await qe()&&Z(s.ALL_CATEGORIES,!0)});window.addEventListener("resize",()=>{le()});A.addEventListener("click",e=>{const t=e.target.closest(".books-data-button");if(!t)return;const o=t.closest(".books-data-itm");o&&we(o.dataset.id)});O.addEventListener("click",()=>{b(v,"is-open"),b(O,"is-open")});v.addEventListener("click",e=>{p(y,"display-none"),v.querySelectorAll(".b-categories-itm").forEach(r=>{l(r,"is-active")});const o=e.target.closest("p");if(!o)return;const n=e.target.closest(".b-categories-itm");n&&p(n,"is-active"),p(ce,"hidden"),Z(o.textContent)});y.addEventListener("click",async()=>{I(s.main_loader),p(y,"display-none"),await new Promise(a=>setTimeout(a,400)),y.disabled=!0;const e=c.count(s.BOOK_LIST),t=s.viewedBooks,o=s.viewedBooks+s.itemsToAdd,n=c.get(s.BOOK_LIST);if(!n.length){Z(s.currentCat),s.scrollToTop();return}const r=n.slice(t,o);s.viewedBooks=Math.min(o,e),ee(s.viewedBooks,n.length),B(A,r,ie,!1),de(),L(s.main_loader),y.disabled=!1});new H(".feedbacks-swiper",{modules:[j,W,ae],loop:!1,grabCursor:!0,spaceBetween:20,slidesPerView:1,navigation:{prevEl:".feedbacks-swiper-button-left",nextEl:".feedbacks-swiper-button-right"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:".feedbacks-custom-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},on:{init:function(){se(this)},slideChange:function(){se(this)}}});function se(e){const t=document.querySelector(".feedbacks-swiper-button-left"),o=document.querySelector(".feedbacks-swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const Be=document.querySelector(".header-nav-list"),M=s.cart_modal.querySelector(".cart-empty"),$=document.querySelector(".buy-now"),Ie=document.querySelector(".shop-more"),ne=document.querySelector(".cart-loader"),V=document.querySelector(".cart-summary-section"),U=document.querySelector("[data-count]"),F=document.querySelector("[data-price]");async function me(e){if(e.preventDefault(),C(s.cart_products),p(M,"display-none"),b(s.cart_modal,"is-open"),b(s.body,"locked"),c.count(s.BOOK_CARD_LIST)===0){l(M,"display-none"),l(V,"hidden"),U.textContent=c.countItems(s.BOOK_CARD_LIST),c.setTotalCard(F),$.disabled=!0;return}I(ne),await new Promise(o=>setTimeout(o,400)),L(ne),await Te(s.BOOK_CARD_LIST),l(V,"hidden"),U.textContent=c.countItems(s.BOOK_CARD_LIST),c.setTotalCard(F),$.disabled=!1}async function Te(e){const t=c.get(e);console.log(e,t);const o=t.map(a=>{const i=a.id,d=`${s.BASE_URL}${s.END_BOOK_ID}${i}`;return x(d).then(u=>u.data).catch(u=>(console.log("Помилка для id:",prodId,u),null))}),r=(await Promise.all(o)).filter(Boolean);B(s.cart_products,r,ke,!0)}function R(){J(s.BOOK_CARD_LIST),l(s.cart_modal,"is-open"),l(s.body,"locked")}document.addEventListener("DOMContentLoaded",async()=>{});Be.addEventListener("click",e=>{e.target.closest(".cart-trigger")&&me(e)});s.cart_modal.addEventListener("click",e=>{(e.target===s.cart_modal||e.target===s.cart_close)&&R()});document.addEventListener("keydown",e=>{e.key==="Escape"&&R()});$.addEventListener("click",e=>{localStorage.removeItem(s.BOOK_CARD_LIST),Y("Гарний вибір","Дякуємо за покупку!"),R(),c.setQuantityFromLocalStorage(s.BOOK_CARD_LIST)});Ie.addEventListener("click",e=>{R()});s.cart_products.addEventListener("click",Ae);function De(){c.get(s.BOOK_CARD_LIST).length===0&&(l(M,"display-none"),p(V,"hidden"),$.disabled=!0)}function Ae(e){const t=e.target.closest(".cart-item-btn");if(!t)return;const o=t.closest(".cart-item");if(!o)return;const n=o.dataset.id;c.removeItemFromStorage(s.BOOK_CARD_LIST,n),o.remove(),U.textContent=c.countItems(s.BOOK_CARD_LIST),c.setTotalCard(F),De()}const S=document.querySelector(".burger-menu"),$e=S.querySelector("use");S.addEventListener("click",e=>{S.disabled=!0,pe()});s.mobile_menu.addEventListener("click",e=>{const t=e.target.closest(".nav-link");t&&(pe(),t.classList.contains("cart-trigger")&&me(e))});function pe(){b(S,"is-open"),b(s.mobile_menu,"is-open"),b(s.body,"locked"),$e.setAttribute("href",S.classList.contains("is-open")?s.scr_btn_burger_close:s.scr_btn_burger_normal),S.disabled=!1}const G=document.querySelector("#back-to-top");window.addEventListener("scroll",()=>{window.scrollY>600?l(G,"hidden"):p(G,"hidden")});G.addEventListener("click",e=>{e.currentTarget.blur(),ve()});const h=document.querySelector(".form"),xe=h.querySelectorAll(".form-input, .form-user-comment"),Re=document.querySelector(".modal-close-btn"),q=document.querySelector("#event-modal"),Ne=document.querySelector(".events-list");let Q="";Ne.addEventListener("click",e=>{const t=e.target.closest(".events-item");!t||!e.target.closest(".card-btn")||(Q=t.querySelector(".events-card-heading").textContent.trim(),Ke(Q))});h.addEventListener("submit",Pe);q.addEventListener("click",Ve);Re.addEventListener("click",Me);function Ke(e){q.classList.add("is-open");const t=q.querySelector(".form-subtitle");t.textContent=e,document.body.classList.add("locked"),window.addEventListener("keydown",be)}function N(){q.classList.remove("is-open"),document.body.classList.remove("locked"),window.removeEventListener("keydown",be)}function Pe(e){e.preventDefault();let t=!0;if(xe.forEach(o=>{const n=o.nextElementSibling,r=o.value.trim();!o.checkValidity()||r===""?(o.classList.add("error"),n&&n.classList.contains("error-text")&&(n.style.display="block"),t=!1):(o.classList.remove("error"),n&&n.classList.contains("error-text")&&(n.style.display="none"))}),t){console.log("Форма валідна. Можна відправити.");const o={fullname:h.elements.fullname.value.trim(),email:h.elements.email.value.trim(),comment:h.elements.comment.value.trim()};console.log("Дані для відправки:",o),setTimeout(()=>{z.success({title:"Дякуємо!",message:`Ви успішно зареєструвалися на ${Q}`,position:"topRight",class:"custom-toast"}),h.reset(),N()},500)}}function Me(){N()}function Ve(e){e.target===q&&N()}function be(e){e.key==="Escape"&&N()}let E=null;function Ue(){E=new H(".events-swiper",{modules:[j,ae,W],loop:!1,grabCursor:!0,spaceBetween:24,slidesPerView:1,navigation:{prevEl:".swiper-button-left",nextEl:".swiper-button-right"},pagination:{el:".custom-swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24}},on:{init:function(){re(this)},slideChange:function(){re(this)}}})}function Fe(){E&&(E.destroy(!0,!0),E=null)}function fe(){const e=window.innerWidth,t=document.querySelector(".events-control-cont"),o=document.querySelector(".swiper-pagination");e>=1440?(Fe(),t==null||t.classList.add("hidden"),o==null||o.classList.add("hidden")):(E||Ue(),t==null||t.classList.remove("hidden"),o==null||o.classList.remove("hidden"))}fe();window.addEventListener("resize",fe);function re(e){const t=document.querySelector(".swiper-button-left"),o=document.querySelector(".swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const k=document.querySelector(".footer-form"),P=k==null?void 0:k.querySelector(".footer-input");k&&k.addEventListener("submit",function(e){if(e.preventDefault(),!P.checkValidity()||P.value.trim()===""){P.classList.add("error");return}setTimeout(()=>{z.success({title:"Дякуємо!",message:"Ви успішно підписались",position:"topRight",class:"custom-toast"}),k.reset()},500)});
//# sourceMappingURL=index.js.map
