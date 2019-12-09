// Menu Button functionality

// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");

// this puts it in a node list
const navItems = document.querySelectorAll(".nav-item");

// set inital state of menu
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");

    // loop through navItems to add show class
    navItems.forEach(item => item.classList.add("show"));

    // reset menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");

    // loop through navItems to remove show class
    navItems.forEach(item => item.classList.remove("show"));

    // reset menu state
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);
