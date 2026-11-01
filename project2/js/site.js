document.documentElement.classList.add("js-enabled");

// Mobiele navigatie voor alle pagina's.
document.querySelectorAll(".menu-toggle").forEach((button) => {
  const menu = document.getElementById(button.getAttribute("aria-controls"));
  if (!menu) return;

  const links = menu.querySelector(".nav-links");
  if (!links) return;

  const closeMenu = () => {
    links.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Menu openen");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    links.classList.toggle("is-open", !isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? "Menu openen" : "Menu sluiten");
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
});

// Activeer Bootstrap-carrousels alleen op pagina's waar Bootstrap geladen is.
if (window.bootstrap) {
  document.querySelectorAll(".hobby-carousel, .skills-carousel").forEach((element) => {
    bootstrap.Carousel.getOrCreateInstance(element, {
      interval: 6000,
      pause: "hover",
      touch: true,
      ride: "carousel"
    });
  });
}
