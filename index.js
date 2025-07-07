import{S as x,N as D,K as N,i as R,a as ce,P as J}from"./assets/vendor-CT7EhRfQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();new x(".hero-swiper",{loop:!1,speed:600,grabCursor:!0,slidesPerView:1,spaceBetween:20,modules:[D,N],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{speed:700},1440:{speed:800}},on:{init:function(){F(this)},slideChange:function(){F(this)}}});function F(e){const t=document.querySelector(".swiper-btn-prev"),o=document.querySelector(".swiper-btn-next");e.isBeginning?t.classList.add("button-dis"):t.classList.remove("button-dis"),e.isEnd?o.classList.add("button-dis"):o.classList.remove("button-dis")}const de=document.querySelectorAll(".hero-btn");de.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(".books");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const i={BASE_URL:"https://books-backend.p.goit.global",END_CATEGORIES:"/books/category-list",END_TOP_BOOKS:"/books/top-books",END_CATEGORIE_ID:"/books/category?category=",END_BOOK_ID:"/books/",API_ERROR:"ApiError",NO_BOOKS:"NoBooks",ALL_CATEGORIES:"All categories",BOOK_LIST:"bookList",BOOK_CARD_LIST:"bookCardList",currentCategory:"",itemsPerView:24,viewedBooks:0,itemsToAdd:4,body:document.body,scr_btn_burger_close:"ico-sprite.svg#icon-x",scr_btn_burger_normal:"ico-sprite.svg#icon-menu-alt-right"};function d(e,t){e.classList.remove(t)}function l(e,t){e.classList.add(t)}function m(e,t){e.classList.toggle(t)}function le(){window.scrollTo({top:0,behavior:"smooth"})}async function O(e,t,o,s=!1){s&&(e.innerHTML=""),e.insertAdjacentHTML("beforeend",o(t))}function Q(e){return e.map(({_id:o,list_name:s,author:n,price:r,title:a,book_image:c,book_image_width:k,book_image_height:_})=>`<li class="books-data-itm" data-id="${o}">
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
							<p class="books-data-author">${n}</p>
						</div>
						<p class="books-data-price">$${r}</p>
					</div>
          <button type="button" class="secondary-button books-data-button">Learn More</button>
        </li>`).join("")}function ue(e){const t=e.filter(o=>o.list_name.trim()!=="").map(({list_name:o})=>`<li class="b-categories-itm" data-category="${o}">
          	<p class="b-categories-itm-text">${o}</p>
        	</li>`).join("");return`<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm-text">${i.ALL_CATEGORIES}</p>
					</li> ${t}`}function me({_id:e,list_name:t,author:o,book_image:s,description:n,price:r,title:a}){let c=n.trim()!==""?n:a;return`
		<img id="book-image" src="${s}" alt="${a}" class="modal-card-image" />
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
			</div>`}function Y(e,t){setTimeout(()=>{R.success({title:t,message:e,position:"topRight",class:"custom-toast"})},300)}const X=document.querySelector(".loader");function P(){d(X,"hidden"),console.log("loader show")}function M(){l(X,"hidden"),console.log("loader hidden")}async function K(e){var t;try{return await ce.get(e)}catch(o){const s=((t=o.response)==null?void 0:t.status)??null;throw new V({message:`API error: ${o.message}`,name:i.API_ERROR,statusCode:s,error:o})}}class V extends Error{constructor({message:t,secondaryMessage:o="",name:s="CustomError",error:n=null,statusCode:r=null}){super(t),this.name=s,this.secondaryMessage=o,this.statusCode=r,this.originalError=n}}const h={add(e,t){localStorage.setItem(e,JSON.stringify(t))},get(e){return JSON.parse(localStorage.getItem(e))||[]},addToCard(e,t,o,s=1,n=null){const r=this.get(e),a=r.findIndex(c=>c.id===t);if(a===-1)r.push({id:t,price:o,qty:s});else{const c=r[a];c.qty=s}localStorage.setItem(e,JSON.stringify(r))},removeItemFromStorage(e,t){const s=this.get(e).filter(n=>n.id!==t);localStorage.setItem(e,JSON.stringify(s))},setTotalCard(e){const t=this.get(i.BOOK_CARD_LIST);let o=0;t.length&&(o=t.reduce((s,n)=>s+n.price*n.qty,0)),console.log(o),e.textContent=`${o.toFixed(2)} $`},count(e){return this.get(e).length},isInCardList(e,t){return this.get(e).find(o=>o.id===t)!==void 0},setCountTo(e,t){e.textContent=this.count(t)||0}},v=document.querySelector("#modal-backdrop"),B=v.querySelector(".modal"),u=v.querySelector(".modal-card");function be(e,t,o){t&&o&&e&&(t.addEventListener("click",()=>{let s=parseInt(e.value,10);!isNaN(s)&&s>1&&(e.value=s-1)}),o.addEventListener("click",()=>{let s=parseInt(e.value,10);const n=parseInt(e.dataset.max,10);!isNaN(s)&&!isNaN(n)&&s<n&&(e.value=s+1)}))}function pe(){v.addEventListener("click",e=>{(e.target===v||e.target.closest(".modal-close"))&&$()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&$()})}async function fe(e){var t;try{m(v,"is-hidden"),m(i.body,"locked");const o=`${i.BASE_URL}${i.END_BOOK_ID}${e}`,s=await K(o);u.innerHTML="",await O(u,s.data,me,!0),be(u.querySelector("#book-quantity"),u.querySelector("#decrease-quantity"),u.querySelector("#increase-quantity"));const n=u.querySelector("#book-quantity"),r=((t=s==null?void 0:s.data)==null?void 0:t.quantity)||100;n&&(n.dataset.max=r,n.value=1);const a=B.querySelector("#book-form");a&&a.addEventListener("submit",_=>{_.preventDefault(),Y("Гарний вибір","Дякуємо за покупку!"),$()});const c=B.querySelector("#add-to-cart");c&&c.addEventListener("click",_=>{ge(n.value,s.data)}),pe();const k=u.querySelector(".accordion-container");k&&k.querySelectorAll(".ac").forEach(w=>{const H=w.querySelector(".ac-trigger"),L=w.querySelector(".ac-panel");!H||!L||(H.addEventListener("click",()=>{w.classList.contains("is-active")?(L.style.height="0px",w.classList.remove("is-active")):(w.classList.add("is-active"),L.style.height=L.scrollHeight+"px")}),L.style.height="0px")})}catch(o){u.innerHTML="",u.innerHTML=`Sorry!!! Book unavailable!! <br/> ID = ${e} <br/>${o.message}`,l(B,"modal-error")}}function ge(e,t){h.addToCard(i.BOOK_CARD_LIST,t._id,t.price,e),Y(`У кошику ${e} од. книжок ${t.title}`,"Кошик")}function $(){v.classList.add("is-hidden"),d(i.body,"locked")}const ye=document.querySelector(".backdrop");document.querySelector(".modal-card");const he=document.querySelector(".modal-close"),C=document.querySelector(".books-data-list"),p=document.querySelector(".b-categories-list"),E=document.querySelector(".categories-dropdown"),b=document.querySelector(".books-show-more"),Z=document.querySelector(".not-found"),ve=document.querySelector(".not-found-description"),W=document.querySelector(".not-found-title"),ke=document.querySelector(".b-categories-_text");async function we(){try{const e=`${i.BASE_URL}${i.END_CATEGORIES}`,t=await K(e);return console.log("cats",t),O(p,t.data,ue,!0),!0}catch(e){return ee(e),!1}}async function U(e,t=!1){var o;C.innerHTML="",P(),i.currentCat=e;try{const s=i.currentCat===i.ALL_CATEGORIES?`${i.BASE_URL}${i.END_TOP_BOOKS}`:`${i.BASE_URL}${i.END_CATEGORIE_ID}${i.currentCat}`,n=await K(s);let r=[];if(!((o=n==null?void 0:n.data)!=null&&o.length))throw new V({message:`No books found in "${i.currentCat}"`,secondaryMessage:"We couldn't find any books in this category.<br />Please try a different one.",name:i.NO_BOOKS});i.currentCat===i.ALL_CATEGORIES?r=n.data.map(c=>c.books).reduce((c,k)=>c.concat(k),[]):r=n.data,h.add(i.BOOK_LIST,r),i.viewedBooks=Math.min(h.count(i.BOOK_LIST),i.itemsPerView);let a=r.slice(0,i.viewedBooks);G(i.viewedBooks,r.length),O(C,a,Q,!0),t||(m(p,"is-open"),m(E,"is-open")),M(),te()}catch(s){ee(s)}}function ee(e){console.log(e),e instanceof V?(W.textContent=e.message,ve.innerHTML=e.secondaryMessage):W.textContent="Unexpected error occurred.",d(p,"is-open"),d(E,"is-open"),d(Z,"hidden"),l(b,"display-none"),G(0,0),M(),console.log("Error:",e.stack)}function te(){i.viewedBooks<h.count(i.BOOK_LIST)?d(b,"display-none"):l(b,"display-none")}function oe(){i.itemsPerView=window.innerWidth>=1440?24:10,i.itemsPerView===10&&(d(p,"is-open"),d(E,"is-open"))}function G(e,t){ke.textContent=`Showing ${e} of ${t}`}document.addEventListener("DOMContentLoaded",async()=>{P(),oe(),await we()&&U(i.ALL_CATEGORIES,!0)});window.addEventListener("resize",()=>{oe()});C.addEventListener("click",e=>{const t=e.target.closest(".books-data-button");if(!t)return;const o=t.closest(".books-data-itm");o&&fe(o.dataset.id)});E.addEventListener("click",()=>{m(p,"is-open"),m(E,"is-open")});p.addEventListener("click",e=>{l(b,"display-none"),p.querySelectorAll(".b-categories-itm").forEach(n=>{d(n,"is-active")});const o=e.target.closest("p");if(!o)return;const s=e.target.closest(".b-categories-itm");s&&l(s,"is-active"),l(Z,"hidden"),U(o.textContent)});he.addEventListener("click",()=>{l(ye,"is-hidden"),d(i.body,"locked")});b.addEventListener("click",async()=>{P(),l(b,"display-none"),await new Promise(r=>setTimeout(r,400)),console.log("wait"),b.disabled=!0;const e=h.count(i.BOOK_LIST),t=i.viewedBooks,o=i.viewedBooks+i.itemsToAdd,s=h.get(i.BOOK_LIST);if(!s.length){U(i.currentCat),i.scrollToTop();return}const n=s.slice(t,o);i.viewedBooks=Math.min(o,e),G(i.viewedBooks,s.length),O(C,n,Q,!1),te(),M(),b.disabled=!1});new x(".feedbacks-swiper",{modules:[D,N,J],loop:!1,grabCursor:!0,spaceBetween:20,slidesPerView:1,navigation:{prevEl:".feedbacks-swiper-button-left",nextEl:".feedbacks-swiper-button-right"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:".feedbacks-custom-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},on:{init:function(){j(this)},slideChange:function(){j(this)}}});function j(e){const t=document.querySelector(".feedbacks-swiper-button-left"),o=document.querySelector(".feedbacks-swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const g=document.querySelector(".burger-menu"),se=document.querySelector(".modal-menu"),Le=g.querySelector("use");g.addEventListener("click",e=>{g.disabled=!0,ne()});se.addEventListener("click",e=>{e.target.closest(".nav-link")&&ne()});function ne(){m(g,"is-open"),m(se,"is-open"),m(i.body,"locked"),Le.setAttribute("href",g.classList.contains("is-open")?i.scr_btn_burger_close:i.scr_btn_burger_normal),g.disabled=!1}const A=document.querySelector("#back-to-top");window.addEventListener("scroll",()=>{window.scrollY>600?d(A,"hidden"):l(A,"hidden")});A.addEventListener("click",()=>{le()});const f=document.querySelector(".form"),Se=f.querySelectorAll(".form-input, .form-user-comment"),Ee=document.querySelector(".modal-close-btn"),ie=document.querySelector(".modal-overlay"),_e=document.querySelector(".events-list");let I="";_e.addEventListener("click",e=>{const t=e.target.closest(".events-item");!t||!e.target.closest(".card-btn")||(I=t.querySelector(".events-card-heading").textContent.trim(),Ce(I))});f.addEventListener("submit",Oe);ie.addEventListener("click",Be);Ee.addEventListener("click",qe);function Ce(e){const t=document.querySelector(".modal-overlay");t.classList.add("is-open");const o=t.querySelector(".form-subtitle");o.textContent=e,document.body.classList.add("locked"),window.addEventListener("keydown",re)}function q(){document.querySelector(".modal-overlay").classList.remove("is-open"),document.body.classList.remove("locked"),window.removeEventListener("keydown",re)}function Oe(e){e.preventDefault();let t=!0;if(Se.forEach(o=>{const s=o.nextElementSibling,n=o.value.trim();!o.checkValidity()||n===""?(o.classList.add("error"),s&&s.classList.contains("error-text")&&(s.style.display="block"),t=!1):(o.classList.remove("error"),s&&s.classList.contains("error-text")&&(s.style.display="none"))}),t){console.log("Форма валідна. Можна відправити.");const o={fullname:f.elements.fullname.value.trim(),email:f.elements.email.value.trim(),comment:f.elements.comment.value.trim()};console.log("Дані для відправки:",o),setTimeout(()=>{R.success({title:"Дякуємо!",message:`Ви успішно зареєструвалися на ${I}`,position:"topRight",class:"custom-toast"}),f.reset(),q()},500)}}function qe(){q()}function Be(e){e.target===ie&&q()}function re(e){e.key==="Escape"&&q()}let S=null;function Te(){S=new x(".events-swiper",{modules:[D,J,N],loop:!1,grabCursor:!0,spaceBetween:24,slidesPerView:1,navigation:{prevEl:".swiper-button-left",nextEl:".swiper-button-right"},pagination:{el:".custom-swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24}},on:{init:function(){z(this)},slideChange:function(){z(this)}}})}function $e(){S&&(S.destroy(!0,!0),S=null)}function ae(){const e=window.innerWidth,t=document.querySelector(".events-control-cont"),o=document.querySelector(".swiper-pagination");e>=1440?($e(),t==null||t.classList.add("hidden"),o==null||o.classList.add("hidden")):(S||Te(),t==null||t.classList.remove("hidden"),o==null||o.classList.remove("hidden"))}ae();window.addEventListener("resize",ae);function z(e){const t=document.querySelector(".swiper-button-left"),o=document.querySelector(".swiper-button-right");e.isBeginning?t.classList.add("button-disabled"):t.classList.remove("button-disabled"),e.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const y=document.querySelector(".footer-form"),T=y==null?void 0:y.querySelector(".footer-input");y&&y.addEventListener("submit",function(e){if(e.preventDefault(),!T.checkValidity()||T.value.trim()===""){T.classList.add("error");return}setTimeout(()=>{R.success({title:"Дякуємо!",message:"Ви успішно підписались",position:"topRight",class:"custom-toast"}),y.reset()},500)});
//# sourceMappingURL=index.js.map
