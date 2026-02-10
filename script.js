// Subtle navbar shadow on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 6px 18px rgba(0,0,0,0.06)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
