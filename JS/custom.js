/* ------------------------------ NAVBAR HIDDEN ----------------------------- */

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("myNavbar");
  if (window.scrollY > 800) {
    navbar.classList.add("hidden-navbar");
  } else {
    navbar.classList.remove("hidden-navbar");
  }
});

/* ---------------------------- ARROW BACK TO TOP --------------------------- */

let scrollTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    scrollTop.classList.add("show-arrow");
  } else {
    scrollTop.classList.remove("show-arrow");
  }
});

/* ---------------------------- BACKGROUND-CHANGE --------------------------- */

const images = [
  "./images/background/background2.jpg",
  "./images/background/background3.jpg",
  "./images/background/background4.jpg",
  "./images/background/background1.jpg",
];

let currentIndex = 0;

function changeBackground() {
  document.getElementById(
    "home"
  ).style.backgroundImage = `url('${images[currentIndex]}')`;

  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackground, 4000);

/* -------------------------------------------------------------------------- */
/*                                   Bullets                                  */
/* -------------------------------------------------------------------------- */

let bullets = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    bullets.classList.add("show-navigation");
  } else {
    bullets.classList.remove("show-navigation");
  }
});
