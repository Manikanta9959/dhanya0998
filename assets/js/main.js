/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
// sr.reveal('.home__title',{});
// sr.reveal('.button',{delay: 200});
// sr.reveal('.home__img',{delay: 400});
// sr.reveal('.home__social-icon',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

sr.reveal(".qualif__icon", { delay: 400 });
sr.reveal(".qualif__subtitle", { delay: 400 });
sr.reveal(".qualif__text", { delay: 400 });
/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 600 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });
//SCROLL FAMILIAR
sr.reveal(".familiar_cont", { interval: 200 });
sr.reveal(".familiar__img", { interval: 200 });
sr.reveal(".familiar__subtitle", { interval: 200 });
/*SCROLL WORK*/
//sr.reveal('.work__img',{});
//acheivement section
//sr.reveal('.certificate__img',{});
/*SCROLL CONTACT*/
// sr.reveal(".contact__input", { interval: 10 });

var typed = new Typed(".typing", {
  strings: [
    "Data Engineer",
    "Google Cloud Developer",
    "Python Developer",
    "Tech Enthusiast",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var modeSwitcher = document.getElementById('mode-switcher');
function toggleMode() {
  // toggle between day and night mode
  var iElement = modeSwitcher.getElementsByTagName("i")[0];
  if (iElement.classList.contains("fa-sun")) {
    iElement.className = "fas fa-moon";
    var elementsToChange = document.querySelectorAll('.home, .homebg, #certificate, .certi, .about, .experience, .education, .skills, .achievements, .contact, .Certifications');
    for (var i = 0; i < elementsToChange.length; i++) {
      elementsToChange[i].style.background = "white";
    }
    var elementsTextcolorChange = document.querySelectorAll('.home__title1, .section-title,.home__title, .about__subtitle, .home__title-color2, .about__text, .skills__subtitle, .skills__name,.skills__percentage');
    for (var i = 0; i < elementsTextcolorChange.length; i++) {
      elementsTextcolorChange[i].style.color = "black";
    }
    var modeSwitcherChange = document.querySelectorAll('#mode-switcher, #mode-switcher i');
    for (var i = 0; i < modeSwitcherChange.length; i++) {
      modeSwitcherChange[i].style.backgroundColor = "black";
    }


  } else {
    iElement.className = "fas fa-sun";
    var elementsToChange = document.querySelectorAll('.home, .homebg, #certificate, .certi, .about, .experience, .education, .skills, .achievements, .contact, .Certifications');
    for (var i = 0; i < elementsToChange.length; i++) {
      elementsToChange[i].style.background = "linear-gradient(rgba(61, 43, 43, 0.95), rgba(28, 7, 124, 0.95))";
    }
    var elementsTextcolorChange = document.querySelectorAll('.home__title1, .section-title,.home__title, .about__subtitle, .home__title-color2, .about__text, .skills__subtitle, .skills__name,.skills__percentage');
    for (var i = 0; i < elementsTextcolorChange.length; i++) {
      elementsTextcolorChange[i].style.color = "white";
    }
    var modeSwitcherChange = document.querySelectorAll('#mode-switcher, #mode-switcher i');
    for (var i = 0; i < modeSwitcherChange.length; i++) {
      modeSwitcherChange[i].style.backgroundColor = "blue";
    }
  }
}
