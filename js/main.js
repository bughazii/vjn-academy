const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 24);
});

const menuToggle = document.getElementById("menuToggle");
const mobilePanel = document.getElementById("mobilePanel");

menuToggle?.addEventListener("click", () => {
  const open = mobilePanel?.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

mobilePanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobilePanel.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! This is a demo — submission will go live after approval.");
});
