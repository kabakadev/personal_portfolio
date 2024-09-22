function toggleMenu() {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menuLinks = document.querySelector(".menu-links");
  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}
