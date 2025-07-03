import{S as L,N as $,P as B,a as S}from"./assets/vendor-TuCaI12L.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();new L(".feedbacks-swiper",{modules:[$,B],loop:!1,grabCursor:!0,spaceBetween:20,slidesPerView:1,navigation:{prevEl:".swiper-button-left",nextEl:".swiper-button-right"},pagination:{el:".custom-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},on:{init:function(){p(this)},slideChange:function(){p(this)}}});function p(t){const e=document.querySelector(".swiper-button-left"),s=document.querySelector(".swiper-button-right");t.isBeginning?e.classList.add("button-disabled"):e.classList.remove("button-disabled"),t.isEnd?s.classList.add("button-disabled"):s.classList.remove("button-disabled")}const n={BASE_URL:"https://books-backend.p.goit.global",END_CATEGORIES:"/books/category-list",END_TOP_BOOKS:"/books/top-books",END_CATEGORIE_ID:"/books/category?category=",END_BOOK_ID:"/books/",body:document.body,scr_btn_burger_close:"ico-sprite.svg#icon-x",scr_btn_burger_normal:"ico-sprite.svg#icon-menu-alt-right"};function c(t,e){t.classList.toggle(e)}function d(t,e,s,r=!1){r&&(t.innerHTML=""),t.insertAdjacentHTML("beforeend",s(e))}function m(t){return t.map(({_id:s,list_name:r,author:o,price:a,title:i,book_image:y,book_image_width:h,book_image_height:E})=>`<li class="books__data__itm" data-id="${s}">
          <div class="books__data__img__container">
            <img
              src="${y}"
              alt="${r}"
              class="books__data__img"
							width="${h}"
							height="${E}"
            />
          </div>
          <div class="books__data__texts">
            <h3 class="books__data__title">${o}</h3>
            <h3 class="books__data__price">${a}</h3>
          </div>
          <p class="books__data__author">${o}</p>
          <button class="books__data__button">Learn More</button>
        </li>`).join("")}function v(t){return`<li class="b__categories__itm" data-category="all">
						<p class="b__categories__itm">All categories</p>
					</li> ${t.map(({list_name:s})=>`<li class="b__categories__itm" data-category="${s}">
          <p class="b__categories__itm">${s}</p>
        </li>`).join("")}`}function w({_id:t,list_name:e,author:s,book_image:r,description:o,price:a,title:i}){return`<img src="" alt="" class="modal__book_close" />
						<img src="${r}" alt="${e}" class="books__data__img" />
						<h3 class="books__data__title">${i}</h3>
						<p class="books__data__author">${s}</p>
						<p class="books__data__price">${a}</p>
						<button class="books__data__button" id="add__to__card">Add to card</button
						><button class="books__show__more"id="buy__now">Buy Now</button>
						<h3 class="modal__book__details">DETAILS</h3>
						<p class="modal__book__details__text">${o}</p>
						<h3 class="modal__book__shipping">SHIPPING</h3>
						<p class="modal__book__shipping__text">${o}</p>
						<h3 class="modal__book__returns">RETURNS</h3>
						<p class="modal__book__returns__text">${o}</p>`}const l=document.querySelector(".burger-menu"),k=document.querySelector(".modal-menu"),O=l.querySelector("use");l.addEventListener("click",t=>{l.disabled=!0,f()});k.addEventListener("click",t=>{t.target.closest(".nav-link")&&f()});function f(){c(l,"is-open"),c(k,"is-open"),c(n.body,"locked"),O.setAttribute("href",l.classList.contains("is-open")?n.scr_btn_burger_close:n.scr_btn_burger_normal),l.disabled=!1}async function _(t){return await S.get(t).then(e=>e).catch(e=>e.message)}document.querySelector(".modal-book");const g=document.querySelector(".books-data-list"),u=document.querySelector(".b-categories-list"),b=document.querySelector(".categories-dropdown");document.querySelector(".books-data-button");const D=async t=>{try{const e=`${n.BASE_URL}${n.END_BOOK_ID}${t}`,s=await _(e);console.log(s),d(n.modal_book,s.data,w,!0),c(n.modal_book,"is-open"),window.scrollTo({top:0,behavior:"smooth"});const r=document.querySelector("#add-to-card");console.log(r),r.addEventListener("click",o=>{})}catch(e){console.log(e.message)}},A=async t=>{try{const e=t==="All categories"?`${n.BASE_URL}${n.END_TOP_BOOKS}`:`${n.BASE_URL}${n.END_CATEGORIE_ID}${t}`,s=await _(e);console.log(s),d(g,s.data,m,!0),c(u,"is-open"),c(b,"is-open")}catch(e){console.log(e.message)}},N=async()=>{try{const t=`${n.BASE_URL}${n.END_TOP_BOOKS}`,e=await _(t);console.log(e),d(g,e.data[4].books,m,!0)}catch(t){console.log(t.message)}};document.addEventListener("DOMContentLoaded",()=>{C(),N()});g.addEventListener("click",t=>{const e=t.target.closest(".books-data-button");if(!e)return;const s=e.closest(".books-data-itm");s&&D(s.dataset.id)});const C=async()=>{try{const t=`${n.BASE_URL}${n.END_CATEGORIES}`,e=await _(t);d(u,e.data,v,!0)}catch(t){console.log(t.message)}};b.addEventListener("click",t=>{c(u,"is-open"),c(b,"is-open")});u.addEventListener("click",t=>{const e=t.target.closest("p");e&&(A(e.textContent),console.log(t.target,t.target.closest("p").textContent))});
//# sourceMappingURL=index.js.map
