"use strict";
// Controls Mobile Navigation Functionality
(function () {
    const openNav = document.getElementById("open-nav-js");
    const mobileNav = document.getElementById("mobile-nav-js");
    const closeNav = document.getElementById("close-nav-js");
    const body = document.getElementById("body-js");
    if (openNav && mobileNav && closeNav && body) {
        //The code below does 4 things:
        //1. Hides the mobile menu open icon.
        //2. Shows the mobile menu close icon.
        //3. Adds the "slide-left" CSS animation class to the mobile menu.
        //4. Removes the "slide-right" CSS animation class to the mobile menu.
        openNav.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!openNav.classList.contains("hidden")) {
                openNav.classList.add("hidden");
            }
            if (!mobileNav.classList.contains("slide-left")) {
                mobileNav.classList.add("slide-left");
                mobileNav.classList.remove("slide-right");
            }
            if (closeNav.classList.contains("hidden")) {
                closeNav.classList.remove("hidden");
            }
        });
        //The code below does 4 things:
        //1. Shows the mobile menu open icon.
        //2. Hides the mobile menu close icon.
        //3. Removes the "slide-left" CSS animation class to the mobile menu.
        //4. Add the "slide-right" class to the mobile menu.
        closeNav.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!closeNav.classList.contains("hidden")) {
                closeNav.classList.add("hidden");
            }
            if (mobileNav.classList.contains("slide-left")) {
                mobileNav.classList.add("slide-right");
                mobileNav.classList.remove("slide-left");
            }
            if (openNav.classList.contains("hidden")) {
                openNav.classList.remove("hidden");
            }
        });
        //This code makes sure the mobile menu closes if the window is resized to >~768px
        // window.addEventListener("resize", () => {
        //   if (window.innerWidth <= 768 && !mobileNav.classList.contains("hidden")) {
        //     mobileNav.classList.add("hidden");
        //     openNav.classList.remove("hidden");
        //   }
        // });
        //This code makes sure you can exit the mobile menu by click the body of the webpage.
        body.addEventListener("click", (e) => {
            e.stopPropagation();
            if (mobileNav.classList.contains("slide-left")) {
                mobileNav.classList.remove("slide-left");
                mobileNav.classList.add("slide-right");
                openNav.classList.remove("hidden");
            }
        });
    }
})();
