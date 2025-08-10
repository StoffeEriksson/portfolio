// Hamburger-toggle
const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    toggleBtn.classList.toggle("active", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Stäng menyn när man klickar på en länk (mobil)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
        toggleBtn.classList.remove("active");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Back to Top-knapp
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex"; // visar knappen
  } else {
    scrollToTopBtn.style.display = "none"; // gömmer knappen
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
