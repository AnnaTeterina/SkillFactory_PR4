(()=>{var e={87:()=>{const e=document.querySelector(".aside__list"),t=document.querySelectorAll(".aside__link"),n=document.querySelector(".library"),i=document.querySelector(".load-more"),s=document.querySelector(".basket-icon"),a=document.querySelector(".basket-icon__text");let o=JSON.parse(localStorage.getItem("basketId"));document.getElementsByClassName("info__buy");function r(e){e=document.querySelectorAll(".cards").length;const t=document.querySelector(".aside__link-active");fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${t.dataset.parameter}"&key=AIzaSyDwcg7FESXg7Chw9uYYdpEkgmLBZd_z44o&printType=books&startIndex=${e}&maxResults=6&langRestrict=en`).then((e=>e.json())).then((e=>{!function(e){let t=JSON.parse(localStorage.getItem("basketId"));for(let s=0;s<=e.items.length;s++){function i(){const t=' <svg width="12" height="12" viewBox="0 0 194.6 185.1">\n         <path fill="#F2C94C" d="M97.3,0 127.4,60.9 194.6,70.7 145.9,118.1 157.4,185.1 97.3,153.5 37.2,185.1 48.6,118.1 0,70.7 67.2,60.9"/>\n      </svg>',n='<svg width="12" height="12" viewBox="0 0 194.6 185.1">\n      <path fill="#EEEDF5" d="M97.3,0 127.4,60.9 194.6,70.7 145.9,118.1 157.4,185.1 97.3,153.5 37.2,185.1 48.6,118.1 0,70.7 67.2,60.9"/>\n   </svg>';return 5==Math.ceil(e.items[s].volumeInfo.averageRating)?t.repeat(5):4==Math.ceil(e.items[s].volumeInfo.averageRating)?t.repeat(4)+n:3==Math.ceil(e.items[s].volumeInfo.averageRating)?t.repeat(3)+n.repeat(2):2==Math.ceil(e.items[s].volumeInfo.averageRating)?t.repeat(2)+n.repeat(3):Math.ceil(e.items[s].volumeInfo.averageRating)?t.repeat(1)+n.repeat(4):""}n.innerHTML+=`\n   <div class="library__cards cards">\n      <div class="cards__img">\n         <img src="${e.items[s].volumeInfo.hasOwnProperty("imageLinks")?e.items[s].volumeInfo.imageLinks.thumbnail:"https://dummyimage.com/212x300/bfbfbf/3d3d3d.png"}" alt="img">\n      </div>\n      <div class="cards__info info">\n         <p class="info__authors">${e.items[s].volumeInfo.hasOwnProperty("author")?e.items[s].volumeInfo.authors:""}</p>\n         <p class="info__title">${e.items[s].volumeInfo.title.length>50?e.items[s].volumeInfo.title.substr(0,50)+"...":e.items[s].volumeInfo.title}</p>\n         <div class="info__ratings">\n            <p class="info__average-rating">${e.items[s].volumeInfo.hasOwnProperty("averageRating")?i():""}</p>\n            <p class="info__ratings-count">${e.items[s].volumeInfo.hasOwnProperty("ratingsCount")?e.items[s].volumeInfo.ratingsCount+"  review":""}</p>\n         </div>\n         <p class="info__description">${e.items[s].volumeInfo.hasOwnProperty("description")?e.items[s].volumeInfo.description.substr(0,85)+"...":" "}</p>\n         <p class="info__price">${e.items[s].saleInfo.hasOwnProperty("retailPrice")?e.items[s].saleInfo.retailPrice.amount+"  "+e.items[s].saleInfo.retailPrice.currencyCode:""}</p>\n         <button \n            class="info__buy ${null===t?"":t.includes(e.items[s].id)?"active__button":""}" \n            data-id="${e.items[s].id}">\n            ${null===t?"buy now":t.includes(e.items[s].id)?"in the cart":"buy now"}\n         </button>\n      </div>\n   </div>\n   `}}(e)})).catch((e=>{}))}document.addEventListener("DOMContentLoaded",(document.querySelector(".aside__link").classList.add("aside__link-active"),void r())),e.addEventListener("click",(e=>{e.target.classList.contains("aside__link")&&t.forEach((t=>{t.classList.contains("aside__link-active")?(t.classList.remove("aside__link-active"),e.target.classList.add("aside__link-active")):e.target.classList.add("aside__link-active")}))})),e.addEventListener("click",(e=>{e.target.classList.contains("aside__link")&&(document.querySelector(".library").innerHTML="",r())})),i.addEventListener("click",(()=>{r(document.querySelectorAll(".cards").length)})),document.addEventListener("DOMContentLoaded",(()=>{0===JSON.parse(localStorage.getItem("basketId")).length?s.style.display="none":(s.style.display="block",a.innerText=o.length)}))},471:()=>{const e=document.querySelector(".menu-burger"),t=document.querySelector(".dropdown-box"),n=document.querySelector(".dropdown-box__close"),i=document.querySelector(".modal");e.addEventListener("click",(()=>{e.style.display="none",t.style.display="block",i.style.display="block"})),n.addEventListener("click",(()=>{e.style.display="block",t.style.display="none",i.style.display="none"}))},711:()=>{const e=document.querySelector(".library");document.querySelector(".n3");const t=document.querySelector(".basket-icon"),n=[],i=document.querySelector(".basket-icon__text");function s(){event.target.classList.toggle("active__button"),event.target.classList.contains("active__button")?event.target.innerText="in the cart":event.target.innerText="buy now"}e.addEventListener("click",(e=>{e.target.classList.contains("info__buy")&&(s(),function(e){if(e.target.classList.contains("active__button"))n.push(e.target.dataset.id);else{let t=n.indexOf(e.target.dataset.id);-1!==t&&n.splice(t,1)}localStorage.setItem("basketId",JSON.stringify(n))}(e),function(){let e=JSON.parse(localStorage.getItem("basketId"));if(!e)return void(t.style.display="none");t.style.display="block",i.innerHTML=e.length;0==i.innerText&&(t.style.display="none")}())}))},785:()=>{const e=document.querySelector(".slider__image"),t=document.querySelector(".slider__dots"),n=[{src:"./img/banner1.png"},{src:"./img/banner2.png"},{src:"./img/banner3.png"}];document.addEventListener("DOMContentLoaded",(function(){function i(n){e.querySelector(".slider__image-active").classList.remove("slider__image-active"),e.querySelector(".n"+n).classList.add("slider__image-active"),t.querySelector(".slider__dot-active").classList.remove("slider__dot-active"),t.querySelector(".n"+n).classList.add("slider__dot-active")}n.forEach(((t,i)=>{let s=`<img class="slider__img n${i} ${0===i?"slider__image-active":""} " src="${n[i].src}" data-index="${i}">`;e.innerHTML+=s})),n.forEach(((e,n)=>{let i=`<div class="slider__dot n${n} ${0===n?"slider__dot-active":""}" data-index="${n}"></div>`;t.innerHTML+=i})),t.querySelectorAll(".slider__dot").forEach((e=>{e.addEventListener("click",(function(){i(this.dataset.index)}))})),setInterval((()=>{let t=+e.querySelector(".slider__image-active").dataset.index;i(t===n.length-1?0:t+1)}),5e3)}))}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}(()=>{"use strict";n(785),n(87),n(711),n(471)})()})();