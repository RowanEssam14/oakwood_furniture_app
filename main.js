//Get html elements
const sidebarEl = document.querySelector(".sidebar");
const overlayEl = document.querySelector(".overlay");
const hamburgerMenuEl = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector("#close-sidebar");

function toggleSideMenu() {
  sidebarEl.classList.toggle("active");
  overlayEl.classList.toggle("active");

}


// Add event listener to toggle side menu
hamburgerMenuEl.addEventListener("click", toggleSideMenu);
closeBtn.addEventListener("click", toggleSideMenu);
overlayEl.addEventListener("click", toggleSideMenu);``