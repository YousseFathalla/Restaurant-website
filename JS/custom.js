/* ------------------------------ NAVBAR HIDDEN ----------------------------- */

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("myNavbar");
  if (window.scrollY > 800) {
    navbar.classList.add("hidden-navbar");
  } else {
    navbar.classList.remove("hidden-navbar");
  }
});

window.screenY;

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

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);

console.log(tooltipTriggerList);

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/* -------------------------------- CopyRight ------------------------------- */

const currentYear = new Date().getFullYear();

const copyRightNotice = `@Copyright <a> ${currentYear}</a> | Images From
<a target="_blank" href="https://www.pexels.com/">Pexels.com</a>
| Created by
<a href="#"> YF</a>
WebSite inspiration
<a
  href="https://nicepage.com/website-templates/preview/lower-food-cost-4298248?device=desktop"
  target="_blank"
  >NicePage</a
>`;

document.getElementById("copyrightSection").innerHTML = copyRightNotice;
