const menuButton = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const suscribeButton = document.querySelector(".suscribe-btn");
const navBar = document.querySelector(".nav-bar");
const navList = document.querySelector(".nav-ul");

menuButton.addEventListener("click", showMenu);

function changeNavBarStyles() {
  navBar.style.position = "fixed";
  navBar.style.flexDirection = "column";
  navBar.style.alignItems = "center";
  navBar.style.justifyContent = "center";
  navBar.style.backgroundColor = "rgb(29, 29, 29)";
  navBar.style.width = "93%";
  navBar.style.height = "280px";
  navBar.style.textAlign = "center";
  navBar.style.transform = "translateY(12px)";
  navBar.style.animation = "fadeIn 0.8s";
  navList.style.flexDirection = "column";
  suscribeButton.style.padding = "1.5rem";
  suscribeButton.style.paddingTop = "0.6rem";
  suscribeButton.style.height = "2.6rem";
  suscribeButton.style.marginLeft = "0.5rem"
}
  
function showMenu() {
  if (menuButton.classList.contains("showMenu")) {
    menuButton.classList.remove("showMenu");
    menu.style.display = "block";
    closeMenu.style.display = "none";
    navBar.style.display = "none";
    changeNavBarStyles();
  } else {
    menuButton.classList.add("showMenu");
    menu.style.display = "none";
    closeMenu.style.display = "block";
    navBar.style.display = "flex";
    changeNavBarStyles();
  }
}
