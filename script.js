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
