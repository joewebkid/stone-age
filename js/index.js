var mySwiper = new Swiper(".pstSwiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 34,
  pagination: {
    el: ".swiper-pagination",
  },
});

var mySwiper2 = new Swiper(".clientsSlider .swiper-container", {
  loop: true,
  slidesPerView: 5,
  pagination: {
    el: ".swiper-pagination",
  },
});

console.log(mySwiper2);
