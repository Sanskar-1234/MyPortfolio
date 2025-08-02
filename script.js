// Typing animation
const typed = new Typed("#typed-text", {
  strings: ["Web Developer", "Java Programmer", "Python Enthusiast", "UI Designer"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});

// Navigation tab switching
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-link.active").classList.remove("active");
    link.classList.add("active");

    sections.forEach(section => {
      section.classList.remove("active");
    });

    document.getElementById(link.dataset.section).classList.add("active");
  });
});
