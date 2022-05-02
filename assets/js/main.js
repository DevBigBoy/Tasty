//* ====================  SHOW MENU ====================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

//* ==================== REMOVE MENU MOBILE ====================
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => link.addEventListener("click", linkAction));

//* ==================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

scrollActive();

window.addEventListener("scroll", scrollActive);
//*==================== CHANGE BACKGROUND HEADER ====================
function scrollHeader() {
  const header = document.getElementById("header");

  this.scrollY >= 200
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

//* ==================== SHOW SCROLL TOP ====================
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  this.scrollY >= 500
    ? scrollTop.classList.add("show-scroll")
    : scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/

//* ==================== SCROLL REVEAL ANIMATION ====================
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 200,
  }
);

//* ==================== UP Date Website Date ====================
let date = new Date();
const upTODate = document.getElementById("upto-date");
upTODate.innerHTML = date.getFullYear();
