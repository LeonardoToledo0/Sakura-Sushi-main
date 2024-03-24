// ----- Tema ------
document.querySelector(".tema").onclick = () => {
  document.body.classList.toggle("dark-theme");
};
// -----Banner-----
$(".banner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 4000,
});
$(".depoimentos").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 4000,
});
$(".sobre-carrosel ").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 4000,
});

// -----Parallax-----
var image = document.getElementsByClassName("sobre-foto");
new simpleParallax(image, {
  scale: 1.5,
});
// Menu Fixo
window.onscroll = () => {
  let top = document.documentElement.scrollTop;
  if (top > 300) {
    document.getElementById("menu-fixo").classList.add("menuFixo");
  } else {
    document.getElementById("menu-fixo").classList.remove("menuFixo");
  }
};
// Animacao Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Scroll
new WOW().init();
