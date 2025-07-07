import{S as N,N as P,K as R,i as M,a as ae,P as J}from"./assets/vendor-CT7EhRfQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();new N(".hero-swiper",{loop:!1,speed:600,grabCursor:!0,slidesPerView:1,spaceBetween:20,modules:[P,R],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{speed:700},1440:{speed:800}},on:{init:function(){F(this)},slideChange:function(){F(this)}}});function F(e){const t=document.querySelector(".swiper-btn-prev"),o=document.querySelector(".swiper-btn-next");e.isBeginning?t.classList.add("button-dis"):t.classList.remove("button-dis"),e.isEnd?o.classList.add("button-dis"):o.classList.remove("button-dis")}const ce=document.querySelectorAll(".hero-btn");ce.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(".books");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const s={BASE_URL:"https://books-backend.p.goit.global",END_CATEGORIES:"/books/category-list",END_TOP_BOOKS:"/books/top-books",END_CATEGORIE_ID:"/books/category?category=",END_BOOK_ID:"/books/",API_ERROR:"ApiError",NO_BOOKS:"NoBooks",ALL_CATEGORIES:"All categories",BOOK_LIST:"bookList",BOOK_CARD_LIST:"bookCardList",currentCategory:"",itemsPerView:24,viewedBooks:0,itemsToAdd:4,main_loader:document.querySelector(".loader"),btn_loader:document.querySelector(".btn-loader"),body:document.body,scr_btn_burger_close:"ico-sprite.svg#icon-x",scr_btn_burger_normal:"ico-sprite.svg#icon-menu-alt-right"};function d(e,t){e.classList.remove(t)}function u(e,t){e.classList.add(t)}function m(e,t){e.classList.toggle(t)}function de(){window.scrollTo({top:0,behavior:"smooth"})}async function q(e,t,o,n=!1){n&&(e.innerHTML=""),e.insertAdjacentHTML("beforeend",o(t))}function Q(e){return e.map(({_id:o,list_name:n,author:i,price:r,title:a,book_image:c,book_image_width:w,book_image_height:b})=>`<li class="books-data-itm" data-id="${o}">
          <div class="books-data-img-container">
            <img
              src="${c}"
              alt="${a}"
              class="books-data-img"
            />
          </div>
          <div class="books-data-info">
						<div class="books-data-texts">
							<h3 class="books-data-title">${a}</h3>
							<p class="books-data-author">${i}</p>
						</div>
						<p class="books-data-price">$${r}</p>
					</div>
          <button type="button" class="secondary-button books-data-button">Learn More</button>
        </li>`).join("")}function le(e){const t=e.filter(o=>o.list_name.trim()!=="").map(({list_name:o})=>`<li class="b-categories-itm" data-category="${o}">
          	<p class="b-categories-itm-text">${o}</p>
        	</li>`).join("");return`<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm-text">${s.ALL_CATEGORIES}</p>
					</li> ${t}`}function ue({_id:e,list_name:t,author:o,book_image:n,description:i,price:r,title:a}){let c=i.trim()!==""?i:a;return`
		<img id="book-image" src="${n}" alt="${a}" class="modal-card-image" />
			<div class="modal-card-right">
				<div class="modal-card-info">
					<h2 id="book-title" class="modal-card-title">${a}</h2>
					<p id="book-author" class="modal-card-author">${o}</p>
					<p id="book-price" class="modal-card-price">$${r}</p>
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
									<use href="/ico-sprite.svg#icon-chevron-down"></use>
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
									<use href="/ico-sprite.svg#icon-chevron-down"></use>
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
									<use href="/ico-sprite.svg#icon-chevron-down"></use>
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
			</div>`}function Y(e,t){setTimeout(()=>{M.success({title:t,message:e,position:"topRight",class:"custom-toast"})},300)}function B(e){d(e,"hidden")}function _(e){u(e,"hidden")}async function K(e){var t;try{return await ae.get(e)}catch(o){const n=((t=o.response)==null?void 0:t.status)??null;throw new V({message:`API error: ${o.message}`,name:s.API_ERROR,statusCode:n,error:o})}}class V extends Error{constructor({message:t,secondaryMessage:o="",name:n="CustomError",error:i=null,statusCode:r=null}){super(t),this.name=n,this.secondaryMessage=o,this.statusCode=r,this.originalError=i}}const h={add(e,t){localStorage.setItem(e,JSON.stringify(t))},get(e){return JSON.parse(localStorage.getItem(e))||[]},addToCard(e,t,o,n=1,i=null){const r=this.get(e),a=r.findIndex(c=>c.id===t);if(a===-1)r.push({id:t,price:o,qty:n});else{const c=r[a];c.qty=n}localStorage.setItem(e,JSON.stringify(r))},removeItemFromStorage(e,t){const n=this.get(e).filter(i=>i.id!==t);localStorage.setItem(e,JSON.stringify(n))},setTotalCard(e){const t=this.get(s.BOOK_CARD_LIST);let o=0;t.length&&(o=t.reduce((n,i)=>n+i.price*i.qty,0)),console.log(o),e.textContent=`${o.toFixed(2)} $`},count(e){return this.get(e).length},isInCardList(e,t){return this.get(e).find(o=>o.id===t)!==void 0},setCountTo(e,t){e.textContent=this.count(t)||0}},k=document.querySelector("#modal-backdrop"),$=k.querySelector(".modal"),l=k.querySelector(".modal-card");function me(e,t,o){t&&o&&e&&(t.addEventListener("click",()=>{let n=parseInt(e.value,10);!isNaN(n)&&n>1&&(e.value=n-1)}),o.addEventListener("click",()=>{let n=parseInt(e.value,10);const i=parseInt(e.dataset.max,10);!isNaN(n)&&!isNaN(i)&&n<i&&(e.value=n+1)}))}function be(){k.addEventListener("click",e=>{(e.target===k||e.target.closest(".modal-close"))&&I()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&I()})}async function pe(e){var t;try{l.innerHTML="",m(k,"is-hidden"),m(s.body,"locked"),B(s.btn_loader);const o=`${s.BASE_URL}${s.END_BOOK_ID}${e}`,n=await K(o);await new Promise(b=>setTimeout(b,400)),_(s.btn_loader),await q(l,n.data,ue,!0),me(l.querySelector("#book-quantity"),l.querySelector("#decrease-quantity"),l.querySelector("#increase-quantity"));const i=l.querySelector("#book-quantity"),r=((t=n==null?void 0:n.data)==null?void 0:t.quantity)||100;i&&(i.dataset.max=r,i.value=1);const a=$.querySelector("#book-form");a&&a.addEventListener("submit",b=>{b.preventDefault(),b.currentTarget.blur(),Y("Гарний вибір","Дякуємо за покупку!"),I()});const c=$.querySelector("#add-to-cart");c&&c.addEventListener("click",b=>{b.currentTarget.blur(),fe(i.value,n.data)}),be();const w=l.querySelector(".accordion-container");w&&w.querySelectorAll(".ac").forEach(L=>{const H=L.querySelector(".ac-trigger"),S=L.querySelector(".ac-panel");!H||!S||(H.addEventListener("click",()=>{L.classList.contains("is-active")?(S.style.height="0px",L.classList.remove("is-active")):(L.classList.add("is-active"),S.style.height=S.scrollHeight+"px")}),S.style.height="0px")})}catch(o){_(s.btn_loader),l.innerHTML="",l.innerHTML=`Sorry!!! Book unavailable!! <br/> ID = ${e} <br/>${o.message}`,u($,"modal-error")}}function fe(e,t){h.addToCard(s.BOOK_CARD_LIST,t._id,t.price,e),Y(`У кошику ${e} од. книжок ${t.title}`,"Кошик")}function I(){k.classList.add("is-hidden"),d(s.body,"locked")}document.querySelector(".backdrop");document.querySelector(".modal-card");document.querySelector(".modal-close");const O=document.querySelector(".books-data-list"),f=document.querySelector(".b-categories-list"),C=document.querySelector(".categories-dropdown"),p=document.querySelector(".books-show-more"),X=document.querySelector(".not-found"),ge=document.querySelector(".not-found-description"),W=document.querySelector(".not-found-title"),ye=document.querySelector(".b-categories-_text");async function ve(){try{const e=`${s.BASE_URL}${s.END_CATEGORIES}`,t=await K(e);return q(f,t.data,le,!0),!0}catch(e){return te(e),!1}}async function U(e,t=!1){var o;O.innerHTML="",B(s.main_loader),s.currentCat=e;try{const n=s.currentCat===s.ALL_CATEGORIES?`${s.BASE_URL}${s.END_TOP_BOOKS}`:`${s.BASE_URL}${s.END_CATEGORIE_ID}${s.currentCat}`,i=await K(n);let r=[];if(!((o=i==null?void 0:i.data)!=null&&o.length))throw new V({message:`No books found in "${s.currentCat}"`,secondaryMessage:"We couldn't find any books in this category.<br />Please try a different one.",name:s.NO_BOOKS});s.currentCat===s.ALL_CATEGORIES?r=i.data.map(c=>c.books).reduce((c,w)=>c.concat(w),[]):r=i.data,h.add(s.BOOK_LIST,r),s.viewedBooks=Math.min(h.count(s.BOOK_LIST),s.itemsPerView);let a=r.slice(0,s.viewedBooks);G(s.viewedBooks,r.length),q(O,a,Q,!0),t||(m(f,"is-open"),m(C,"is-open")),_(s.main_loader),Z()}catch(n){te(n)}}function Z(){s.viewedBooks<h.count(s.BOOK_LIST)?d(p,"display-none"):u(p,"display-none")}function ee(){s.itemsPerView=window.innerWidth>=1440?24:10,s.itemsPerView===10&&(d(f,"is-open"),d(C,"is-open"))}function G(e,t){ye.textContent=`Showing ${e} of ${t}`}function te(e){console.log(e),e instanceof V?(W.textContent=e.message,ge.innerHTML=e.secondaryMessage):W.textContent="Unexpected error occurred.",d(f,"is-open"),d(C,"is-open"),d(X,"hidden"),u(p,"display-none"),G(0,0),_(s.main_loader),console.log("Error:",e.stack)}document.addEventListener("DOMContentLoaded",async()=>{B(s.main_loader),ee(),await ve()&&U(s.ALL_CATEGORIES,!0)});window.addEventListener("resize",()=>{ee()});O.addEventListener("click",e=>{const t=e.target.closest(".books-data-button");if(!t)return;const o=t.closest(".books-data-itm");o&&pe(o.dataset.id)});C.addEventListener("click",()=>{m(f,"is-open"),m(C,"is-open")});f.addEventListener("click",e=>{u(p,"display-none"),f.querySelectorAll(".b-categories-itm").forEach(i=>{d(i,"is-active")});const o=e.target.closest("p");if(!o)return;const n=e.target.closest(".b-categories-itm");n&&u(n,"is-active"),u(X,"hidden"),U(o.textContent)});p.addEventListener("click",async()=>{B(s.main_loader),u(p,"display-none"),await new Promise(r=>setTimeout(r,400)),p.disabled=!0;const e=h.count(s.BOOK_LIST),t=s.viewedBooks,o=s.viewedBooks+s.itemsToAdd,n=h.get(s.BOOK_LIST);if(!n.length){U(s.currentCat),s.scrollToTop();return}const i=n.slice(t,o);s.viewedBooks=Math.min(o,e),G(s.viewedBooks,n.length),q(O,i,Q,!1),Z(),_(s.main_loader),p.disabled=!1});new N(".feedbacks-swiper",{modules:[P,R,J],loop:!1,grabCursor:!0,spaceBetween:20,slidesPerView:1,navigation:{prevEl:".feedbacks-swiper-button-left",nextEl:".feedbacks-swiper-button-right"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:".feedbacks-custom-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},on:{init:function(){j(this)},slideChange:function(){j(this)}}});function j(e){const t=document.querySelector(".feedbacks-swiper-button-left"),o=document.querySelector(".feedbacks-swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const y=document.querySelector(".burger-menu"),oe=document.querySelector(".modal-menu"),he=y.querySelector("use");y.addEventListener("click",e=>{y.disabled=!0,se()});oe.addEventListener("click",e=>{e.target.closest(".nav-link")&&se()});function se(){m(y,"is-open"),m(oe,"is-open"),m(s.body,"locked"),he.setAttribute("href",y.classList.contains("is-open")?s.scr_btn_burger_close:s.scr_btn_burger_normal),y.disabled=!1}const x=document.querySelector("#back-to-top");window.addEventListener("scroll",()=>{window.scrollY>600?d(x,"hidden"):u(x,"hidden")});x.addEventListener("click",e=>{e.currentTarget.blur(),de()});const g=document.querySelector(".form"),ke=g.querySelectorAll(".form-input, .form-user-comment"),we=document.querySelector(".modal-close-btn"),ne=document.querySelector(".modal-overlay"),Le=document.querySelector(".events-list");let D="";Le.addEventListener("click",e=>{const t=e.target.closest(".events-item");!t||!e.target.closest(".card-btn")||(D=t.querySelector(".events-card-heading").textContent.trim(),Se(D))});g.addEventListener("submit",Ee);ne.addEventListener("click",Ce);we.addEventListener("click",_e);function Se(e){const t=document.querySelector(".modal-overlay");t.classList.add("is-open");const o=t.querySelector(".form-subtitle");o.textContent=e,document.body.classList.add("locked"),window.addEventListener("keydown",ie)}function T(){document.querySelector(".modal-overlay").classList.remove("is-open"),document.body.classList.remove("locked"),window.removeEventListener("keydown",ie)}function Ee(e){e.preventDefault();let t=!0;if(ke.forEach(o=>{const n=o.nextElementSibling,i=o.value.trim();!o.checkValidity()||i===""?(o.classList.add("error"),n&&n.classList.contains("error-text")&&(n.style.display="block"),t=!1):(o.classList.remove("error"),n&&n.classList.contains("error-text")&&(n.style.display="none"))}),t){console.log("Форма валідна. Можна відправити.");const o={fullname:g.elements.fullname.value.trim(),email:g.elements.email.value.trim(),comment:g.elements.comment.value.trim()};console.log("Дані для відправки:",o),setTimeout(()=>{M.success({title:"Дякуємо!",message:`Ви успішно зареєструвалися на ${D}`,position:"topRight",class:"custom-toast"}),g.reset(),T()},500)}}function _e(){T()}function Ce(e){e.target===ne&&T()}function ie(e){e.key==="Escape"&&T()}let E=null;function Oe(){E=new N(".events-swiper",{modules:[P,J,R],loop:!1,grabCursor:!0,spaceBetween:24,slidesPerView:1,navigation:{prevEl:".swiper-button-left",nextEl:".swiper-button-right"},pagination:{el:".custom-swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24}},on:{init:function(){z(this)},slideChange:function(){z(this)}}})}function qe(){E&&(E.destroy(!0,!0),E=null)}function re(){const e=window.innerWidth,t=document.querySelector(".events-control-cont"),o=document.querySelector(".swiper-pagination");e>=1440?(qe(),t==null||t.classList.add("hidden"),o==null||o.classList.add("hidden")):(E||Oe(),t==null||t.classList.remove("hidden"),o==null||o.classList.remove("hidden"))}re();window.addEventListener("resize",re);function z(e){const t=document.querySelector(".swiper-button-left"),o=document.querySelector(".swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const v=document.querySelector(".footer-form"),A=v==null?void 0:v.querySelector(".footer-input");v&&v.addEventListener("submit",function(e){if(e.preventDefault(),!A.checkValidity()||A.value.trim()===""){A.classList.add("error");return}setTimeout(()=>{M.success({title:"Дякуємо!",message:"Ви успішно підписались",position:"topRight",class:"custom-toast"}),v.reset()},500)});
//# sourceMappingURL=index.js.map
