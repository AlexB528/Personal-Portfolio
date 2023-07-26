// Get all the anchor tags in the navbar
const navLinks = document.querySelectorAll('.nav-link-right-side');

// Function to update the active link based on the scroll position
function updateActiveLink() {
    const navBarHeight = document.querySelector('nav').offsetHeight;
    const fromTop = window.scrollY + navBarHeight;
    const screenHeightAdjustment = window.innerHeight*0.4;
    navLinks.forEach(link => {
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    if (fromTop >= (section.offsetTop - screenHeightAdjustment) && fromTop <= section.offsetHeight + section.offsetTop - screenHeightAdjustment) {
      link.classList.add('viewed');
    } else {
      link.classList.remove('viewed');
    }
  });
}

// Add scroll event listeners and update the active link on initial load
document.addEventListener('DOMContentLoaded', () => {
//   addScrollEventListeners();
  updateActiveLink();
});

// Update the active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  if (ul.classList.contains('burgerExpand')) {
    ul.classList.add('burgerCollapse');
    ul.classList.remove('burgerExpand');
  } else {
    ul.classList.add('burgerExpand');
    ul.classList.remove('burgerCollapse');
  } 
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// remove burgerExpand and burger Collapse when window resizes

let minWidth720 = window.matchMedia("(min-width: 720px)");

function match() {
    if (minWidth720.matches) {
      ul.classList.remove('burgerExpand');
      ul.classList.remove('burgerCollapse');
    }
}

minWidth720.addEventListener('change',match);