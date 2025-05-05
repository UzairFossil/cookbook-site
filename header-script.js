const menuButton = document.querySelector(".menu-btn");

const menu = document.querySelector(".menu");
function menuToggler() {
  menu.classList.toggle("menu-display");
  document.body.classList.toggle("scroll-stop");
}

menuButton.addEventListener("click", () => {
  menuToggler();
});
