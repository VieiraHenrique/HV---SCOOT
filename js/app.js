const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    header.classList.toggle("opened");
    body.classList.toggle("noscroll");
});
