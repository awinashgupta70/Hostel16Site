document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-list a");

  // Initially hide all sections except the home section
  sections.forEach((section, index) => {
    if (index === 0) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Hide current active section
      const currentSection = document.querySelector(".section.active");
      if (currentSection) {
        currentSection.classList.remove("active");
      }

      // Show target section
      targetSection.classList.add("active");

      // Update active nav link
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
