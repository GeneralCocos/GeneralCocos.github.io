let checkbox = document.querySelector(".checkmark");

checkbox.addEventListener("click", () => {
	checkbox.classList.toggle("none-t");
});

let burgerBtn = document.querySelector('.burger-menu-btn');
let burgerCloseBtn = document.querySelector('.crest');
let burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
	burgerMenu.classList.remove('none')
});

burgerCloseBtn.addEventListener('click', () => {
	burgerMenu.classList.add('none')
});