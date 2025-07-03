import{S as E,N as w,P as L,a as v}from"./assets/vendor-TuCaI12L.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();new E(".feedbacks-swiper",{modules:[w,L],loop:!1,grabCursor:!0,spaceBetween:20,slidesPerView:1,navigation:{prevEl:".swiper-button-left",nextEl:".swiper-button-right"},pagination:{el:".custom-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},on:{init:function(){k(this)},slideChange:function(){k(this)}}});function k(t){const e=document.querySelector(".swiper-button-left"),o=document.querySelector(".swiper-button-right");t.isBeginning?e.classList.add("button-disabled"):e.classList.remove("button-disabled"),t.isEnd?o.classList.add("button-disabled"):o.classList.remove("button-disabled")}const n={BASE_URL:"https://books-backend.p.goit.global",END_CATEGORIES:"/books/category-list",END_TOP_BOOKS:"/books/top-books",END_CATEGORIE_ID:"/books/category?category=",END_BOOK_ID:"/books/",body:document.body,scr_btn_burger_close:"ico-sprite.svg#icon-x",scr_btn_burger_normal:"ico-sprite.svg#icon-menu-alt-right"};function B(t,e){t.classList.remove(e)}function S(t,e){t.classList.add(e)}function c(t,e){t.classList.toggle(e)}function u(t,e,o,r=!1){r&&(t.innerHTML=""),t.insertAdjacentHTML("beforeend",o(e))}function f(t){return t.map(({_id:o,list_name:r,author:s,price:a,title:i,book_image:_,book_image_width:I,book_image_height:P})=>`<li class="books-data-itm" data-id="${o}">
          <div class="books-data-img-container">
            <img
              src="${_}"
              alt="${r}"
              class="books-data-img"
            />
          </div>
          <div class="books-data-texts">
            <h3 class="books-data-title">${i}</h3>
            <h3 class="books-data-price">${a}</h3>
          </div>
          <p class="books-data-author">${s}</p>
          <button class="books-data-button">Learn More</button>
        </li>`).join("")}function $(t){return`<li class="b-categories-itm" data-category="all">
						<p class="b-categories-itm">All categories</p>
					</li> ${t.map(({list_name:o})=>`<li class="b-categories-itm" data-category="${o}">
          <p class="b-categories-itm">${o}</p>
        </li>`).join("")}`}function O({_id:t,list_name:e,author:o,book_image:r,description:s,price:a,title:i}){return`<img src="" alt="" class="modal-book_close" />
						<img src="${r}" alt="${e}" class="books-data-img" />
						<h3 class="books-data-title">${i}</h3>
						<p class="books-data-author">${o}</p>
						<p class="books-data-price">${a}</p>
						<button class="books-data-button" id="add-to-card">Add to card</button
						><button class="books-show-more"id="buy-now">Buy Now</button>
						<h3 class="modal-book-details">DETAILS</h3>
						<p class="modal-book-details-text">${s}</p>
						<h3 class="modal-book-shipping">SHIPPING</h3>
						<p class="modal-book-shipping-text">${s}</p>
						<h3 class="modal-book-returns">RETURNS</h3>
						<p class="modal-book-returns-text">${s}</p>`}const l=document.querySelector(".burger-menu"),y=document.querySelector(".modal-menu"),D=l.querySelector("use");l.addEventListener("click",t=>{l.disabled=!0,h()});y.addEventListener("click",t=>{t.target.closest(".nav-link")&&h()});function h(){c(l,"is-open"),c(y,"is-open"),c(n.body,"locked"),D.setAttribute("href",l.classList.contains("is-open")?n.scr_btn_burger_close:n.scr_btn_burger_normal),l.disabled=!1}const d=document.querySelector("#back-to-top");console.log(d);window.addEventListener("scroll",()=>{console.log(window.scrollY),window.scrollY>600?B(d,"hidden"):S(d,"hidden")});d.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});async function b(t){return await v.get(t).then(e=>e).catch(e=>e.message)}document.querySelector(".modal-book");const p=document.querySelector(".books-data-list"),g=document.querySelector(".b-categories-list"),m=document.querySelector(".categories-dropdown");document.querySelector(".books-data-button");const A=async t=>{try{const e=`${n.BASE_URL}${n.END_BOOK_ID}${t}`,o=await b(e);console.log(o),u(n.modal_book,o.data,O,!0),c(n.modal_book,"is-open"),window.scrollTo({top:0,behavior:"smooth"});const r=document.querySelector("#add-to-card");console.log(r),r.addEventListener("click",s=>{})}catch(e){console.log(e.message)}},N=async t=>{try{const e=t==="All categories"?`${n.BASE_URL}${n.END_TOP_BOOKS}`:`${n.BASE_URL}${n.END_CATEGORIE_ID}${t}`,o=await b(e);console.log(o),u(p,o.data,f,!0),c(g,"is-open"),c(m,"is-open")}catch(e){console.log(e.message)}},C=async()=>{try{const t=`${n.BASE_URL}${n.END_TOP_BOOKS}`,e=await b(t);console.log(e),u(p,e.data[4].books,f,!0)}catch(t){console.log(t.message)}};document.addEventListener("DOMContentLoaded",()=>{T(),C()});p.addEventListener("click",t=>{const e=t.target.closest(".books-data-button");if(!e)return;const o=e.closest(".books-data-itm");o&&A(o.dataset.id)});const T=async()=>{try{const t=`${n.BASE_URL}${n.END_CATEGORIES}`,e=await b(t);u(g,e.data,$,!0)}catch(t){console.log(t.message)}};m.addEventListener("click",t=>{c(g,"is-open"),c(m,"is-open")});g.addEventListener("click",t=>{const e=t.target.closest("p");e&&(N(e.textContent),console.log(t.target,t.target.closest("p").textContent))});
//# sourceMappingURL=index.js.map
