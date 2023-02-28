"use strict";

const sectionHeroEl = document.querySelector(".hero");
const sectionHeader = document.querySelector(".header");

const btnSwitchRight = document.querySelector(".btn-switch-right");
const btnSwitchLeft = document.querySelector(".btn-switch-left");
const heroPrimary = document.querySelector(".hero-primary");
const heroSecondary = document.querySelector(".hero-secondary");

const btnAllGeneras = document.querySelector(".btnAllGenres");
const btnHeavyMetal = document.querySelector(".btnHeavyMetal");
const btnNWOFHM = document.querySelector(".btnNWOFHM");
const btnThrashMetal = document.querySelector(".btnThrashMetal");
const btnGrooveMetal = document.querySelector(".btnGrooveMetal");
const btnProgressiveMetal = document.querySelector(".btnProgressiveMetal");

const genreHeavyMetal = document.querySelector(".genre-heavy-metal");
const genreNWOFHM = document.querySelectorAll(".genre-nwobhm");
const genreThrashmetal = document.querySelector(".genre-thrash-metal");
const genreGrooveMetal = document.querySelector(".genre-groove-metal");
const genreProgressiveMetal = document.querySelector(
  ".genre-progressive-metal"
);

const yearEl = document.querySelector(".year");

/* const allGenerasArr = [
  genreHeavyMetal,
  genreNWOFHM,
  genreThrashmetal,
  genreGrooveMetal,
  genreProgressiveMetal,
];
 */

btnAllGeneras.addEventListener("click", function () {
  genreHeavyMetal.classList.remove("hidden");
  genreNWOFHM.forEach((el) => {
    el.classList.remove("hidden");
  });
  genreThrashmetal.classList.remove("hidden");
  genreGrooveMetal.classList.remove("hidden");
  genreProgressiveMetal.classList.remove("hidden");
});

btnHeavyMetal.addEventListener("click", function () {
  genreHeavyMetal.classList.remove("hidden");
  genreNWOFHM.forEach((el) => {
    el.classList.add("hidden");
  });
  genreThrashmetal.classList.add("hidden");
  genreGrooveMetal.classList.add("hidden");
  genreProgressiveMetal.classList.add("hidden");
});

btnNWOFHM.addEventListener("click", function () {
  genreHeavyMetal.classList.add("hidden");
  genreNWOFHM.forEach((el) => {
    el.classList.remove("hidden");
  });
  genreThrashmetal.classList.add("hidden");
  genreGrooveMetal.classList.add("hidden");
  genreProgressiveMetal.classList.add("hidden");
});

btnThrashMetal.addEventListener("click", function () {
  genreHeavyMetal.classList.add("hidden");
  genreNWOFHM.forEach((el) => {
    el.classList.add("hidden");
  });
  genreThrashmetal.classList.remove("hidden");
  genreGrooveMetal.classList.add("hidden");
  genreProgressiveMetal.classList.add("hidden");
});

btnGrooveMetal.addEventListener("click", function () {
  genreHeavyMetal.classList.add("hidden");
  genreNWOFHM.forEach((el) => {
    el.classList.add("hidden");
  });
  genreThrashmetal.classList.add("hidden");
  genreGrooveMetal.classList.remove("hidden");
  genreProgressiveMetal.classList.add("hidden");
});

btnProgressiveMetal.addEventListener("click", function () {
  genreHeavyMetal.classList.add("hidden");
  genreNWOFHM.forEach((el) => {
    el.classList.add("hidden");
  });
  genreThrashmetal.classList.add("hidden");
  genreGrooveMetal.classList.add("hidden");
  genreProgressiveMetal.classList.remove("hidden");
});

/* const bandList = [
  {
    name: "METALLICA",
    genre: "Heavy metal",
    members: 4,
    activeSince: 1982,
  },
  {
    name: "IRON MAIDEN",
    genre: "NWOBHM",
    members: 6,
    activeSince: 1975,
  },
  {
    name: "SLAYER",
    genre: "Thrash metal",
    members: 4,
    activeSince: 1982,
  },
  {
    name: "JUDAS PRIEST",
    genre: "NWOBHM",
    members: 5,
    activeSince: 1975,
  },
  {
    name: "PANTERA",
    genre: "Groove metal",
    members: 4,
    activeSince: 1990,
  },
  {
    name: "OPETH",
    members: 5,
    activeSince: 1995,
  },
]; */

// HERO SECTION
const toggleHero = function () {
  heroPrimary.classList.toggle("hidden");
  heroSecondary.classList.toggle("hidden");
};

btnSwitchLeft.addEventListener("click", function () {
  toggleHero();
});

btnSwitchRight.addEventListener("click", function () {
  toggleHero();
});

setInterval(toggleHero, 10000);

// MAP SECTION

const test = () => {
  const success = (position) => {
    console.log(position);

    localStorage.setItem("latitude", position.coords.latitude);
    localStorage.setItem("longitude", position.coords.longitude);
  };

  const error = (err) => console.error(err);

  navigator.geolocation.getCurrentPosition(success, error);
};

test();
console.log(localStorage.latitude, localStorage.longitude);

const map = L.map("map").setView(
  [localStorage.latitude, localStorage.longitude],
  15
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([45.81120076440669, 15.98795825702832])
  .addTo(map)
  .bindPopup("Maldoror")
  .openPopup();
L.marker([45.79702054667681, 15.978171656374032])
  .addTo(map)
  .bindPopup("Rockmark")
  .openPopup();
L.marker([45.80233125891337, 15.960287588370624])
  .addTo(map)
  .bindPopup("Dirty Old Shop")
  .openPopup();

// STICKY NAVIGATION

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      sectionHeader.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      sectionHeader.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// FOOTER SECTION

const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
