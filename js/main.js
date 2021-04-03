const year = document.getElementById("year");
//get year
const currentYear = new Date().getFullYear();
year.innerText = currentYear;

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 9,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1028: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
});
