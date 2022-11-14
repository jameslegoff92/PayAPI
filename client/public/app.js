import { formValidation } from "./js/formvalidation.js";

//Controls Mobile Navigation Functionality
(function () {
  const openNav = document.getElementById("open-nav-js");
  const mobileNav = document.getElementById("mobile-nav-js");
  const closeNav = document.getElementById("close-nav-js");
  const body = document.getElementById("body-js");

  const mobileNavController = {
    openNav,
    mobileNav,
    closeNav,
  };

  openNav.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!openNav.classList.contains("hidden")) {
      for (const key in mobileNavController) {
        mobileNavController[key].classList.toggle("hidden");
      }
    }
  });

  closeNav.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!closeNav.classList.contains("hidden")) {
      for (const key in mobileNavController) {
        mobileNavController[key].classList.toggle("hidden");
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768 && !mobileNav.classList.contains("hidden")) {
      mobileNav.classList.add("hidden");
      openNav.classList.remove("hidden");
    }
  });

  body.addEventListener("click", () => {
    if (!mobileNav.classList.contains("hidden")) {
      mobileNav.classList.add("hidden");
      openNav.classList.remove("hidden");
    }
  });
})();

formValidation();