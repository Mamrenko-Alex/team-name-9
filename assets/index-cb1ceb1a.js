import"./slow-scroll-4caa02c8.js";(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.querySelector("[data-burger]"),l=document.querySelectorAll(".mobile-menu .nav-list-link .link"),o=()=>{const n=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),s.classList.toggle("visually-hidden")};e.addEventListener("click",o),c.addEventListener("click",o),l.forEach(n=>{n==null||n.addEventListener("click",o)}),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".js-open-menu").forEach(t=>{t.addEventListener("click",function(){document.querySelectorAll("body").forEach(e=>e.classList.add("no-scroll"))})}),document.querySelectorAll(".js-close-menu").forEach(t=>{t.addEventListener("click",function(){document.querySelectorAll("body").forEach(e=>e.classList.remove("no-scroll"))})})});
