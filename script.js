document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Year in Footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navList = document
    .getElementById("nav-menu")
    .querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("show");

      // Change icon based on state
      const icon = navToggle.querySelector("i");
      if (navList.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("show");
        const icon = navToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      });
    });
  }

  // Sticky Header effect on scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
    } else {
      header.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
    }
  });
});
