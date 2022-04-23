import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// // import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';

//Импорт не работатет (?)

const breakpoints = {
   0: {
      slidesPerView: 1,
   },
   576: {
      slidesPerView: 2,
   },
};
(function () {
   const breakpoint = window.matchMedia("(min-width: 1024px)");
   let slider = document.querySelector(".swiper-wrapper--grid");
   let news;

   const breakpointChecker = function () {
      if (breakpoint.matches === true) {
         slider.classList.remove("swiper-wrapper");
         slider.classList.add("swiper-wrapper--grid");
         if (news !== undefined) news.destroy(true, true);
         return;
      } else if (breakpoint.matches === false) {
         slider.classList.add("swiper-wrapper");
         slider.classList.remove("swiper-wrapper--grid");
         return activateSwiper();
      }
   };

   const activateSwiper = function () {
      news = new Swiper(".swiper--grid", {
         direction: "horizontal",
         slidesPerView: 2,
         spaceBetween: 20,
         simulateTouch: true,
         mousewheel: {
            sensitivity: 1,
            eventsTarget: ".swiper--grid",
         },
         breakpoints,
      });
   };

   breakpoint.addListener(breakpointChecker);
   breakpointChecker();
})();
