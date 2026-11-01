// Activeer de Bootstrap-carrousels op de hobby- en cv-pagina.
document.querySelectorAll(".hobby-carousel, .skills-carousel").forEach((element) => {
  new bootstrap.Carousel(element, {
    interval: 6000,
    pause: "hover",
    touch: true,
    ride: "carousel"
  });
});
