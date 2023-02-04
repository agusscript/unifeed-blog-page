const menuButton = document.querySelector(".hamburger-btn");
const navBar = document.querySelector(".nav-bar");
const openMenuIcon = document.querySelector(".menu");
const closeMenuIcon = document.querySelector(".close");

menuButton.addEventListener("click", function() {
  navBar.classList.toggle("nav-bar-active");
  openMenuIcon.classList.toggle("occult");
  closeMenuIcon.classList.toggle("show");
});