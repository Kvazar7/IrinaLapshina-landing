document.addEventListener("DOMContentLoaded", function () {
  const openMenuButton = document.querySelector(".js-open-menu");
  const closeMenuButton = document.querySelector(".js-close-menu");
  const mobileMenu = document.querySelector(".js-menu-container");

  openMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("visually-hidden");
    openMenuButton.setAttribute("aria-expanded", "true");
    openMenuButton.classList.add("visually-hidden");
   });

  closeMenuButton.addEventListener("click", function () {
    mobileMenu.classList.add("visually-hidden");
    openMenuButton.setAttribute("aria-expanded", "false");
    openMenuButton.classList.remove("visually-hidden");
  });

// Закриття меню при кліку за межами меню
document.addEventListener("click", function (event) {
  if (
    !mobileMenu.contains(event.target) && 
    !openMenuButton.contains(event.target) &&
    !closeMenuButton.contains(event.target) 
  ){
    mobileMenu.classList.add("visually-hidden");
    openMenuButton.setAttribute("aria-expanded", "false");
    openMenuButton.classList.remove("visually-hidden");
    }
  });
});