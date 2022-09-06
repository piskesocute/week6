$(function() {
  console.log('Hello Bootstrap5');
});
const swiper = new Swiper("#codeSwiper", {
  slideClass: "code-swiper-slide",
  slidesPerView: "auto",
  spaceBetween: 8,
  centeredSlides: true,
  breakpoints: {
    992: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  loop: true

});


const classSwiper = new Swiper("#classSwiper", {
  slideClass: "class-swiper-slide",
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,
  breakpoints: {
    992: {
      slidesPerView: "auto",
      spaceBetween: 48,
      centeredSlides: false,
    },
  },

});
