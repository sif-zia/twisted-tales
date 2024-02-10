// (function ($) {
//   "use strict";
//   jQuery(window).on("load", function () {
//     $(".egns-preloader").delay(1000).fadeOut("slow");
//   });
//   $(".mobile-menu-btn").on("click", function () {
//     $(".main-nav").addClass("show-menu");
//   });
//   $(".menu-close-btn").on("click", function () {
//     $(".main-nav").removeClass("show-menu");
//   });
//   $(".main-nav .bi").on("click", function (event) {
//     var $fl = $(this);
//     $(this).parent().siblings().find(".sub-menu, .mega-menu").slideUp();
//     $(this).parent().siblings().find(".bi").addClass("bi-chevron-down");
//     if ($fl.hasClass("bi-chevron-down")) {
//       $fl.removeClass("bi-chevron-down").addClass("bi-chevron-up");
//     } else {
//       $fl.removeClass("bi-chevron-up").addClass("bi-chevron-down");
//     }
//     $fl.next(".sub-menu, .mega-menu").slideToggle();
//   });
//   window.addEventListener("scroll", function () {
//     const header = document.querySelector(
//       "header.style-1,header.style-2, header.style-3,header.style-4,header.style-5,header.style-6"
//     );
//     if (header) {
//       header.classList.toggle("sticky", window.scrollY > 0);
//     }
//   });
//   var toggleIcon = document.querySelectorAll(".sidebar-button");
//   var closeIcon = document.querySelectorAll(".cross-icon");
//   var searchWrap = document.querySelectorAll(".sidebar-area");
//   toggleIcon.forEach((element) => {
//     element.addEventListener("click", () => {
//       document.querySelectorAll(".sidebar-area").forEach((el) => {
//         console.log(el);
//         el.classList.add("show-sidebar");
//       });
//     });
//   });
//   closeIcon.forEach((element) => {
//     element.addEventListener("click", () => {
//       document.querySelectorAll(".sidebar-area").forEach((el) => {
//         el.classList.remove("show-sidebar");
//       });
//     });
//   });
//   $(".search-btn").on("click", function () {
//     $(".mobile-search").addClass("slide");
//   });
//   $(".search-cross-btn").on("click", function () {
//     $(".mobile-search").removeClass("slide");
//   });
//   var videoClasses = [".bx bx-play", ".bi bi-fill", ".video3"];
//   $.each(videoClasses, function (index, videoClass) {
//     $(videoClass).fancybox({ type: "iframe" });
//   });
//   var swiper = new Swiper(".banner-1-slider", {
//     slidesPerView: 1,
//     speed: 1400,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: { delay: 3000 },
//     navigation: { nextEl: ".banner1-next", prevEl: ".banner1-prev" },
//     breakpoints: {
//       280: { slidesPerView: 1, spaceBetween: 15 },
//       386: { slidesPerView: 1, spaceBetween: 15 },
//       576: { slidesPerView: 2 },
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 3.3, centeredSlides: true },
//       1400: { slidesPerView: 3.7, centeredSlides: true },
//       1600: { slidesPerView: 4.4, centeredSlides: true },
//     },
//   });
//   var swiper = new Swiper(".category-1-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 20,
//     slidesPerView: 1,
//     centerSlides: true,
//     loop: true,
//     autoplay: { delay: 3000 },
//     navigation: { nextEl: ".category1-next", prevEl: ".category1-prev" },
//     breakpoints: {
//       280: { slidesPerView: 1 },
//       386: { slidesPerView: 2 },
//       576: { slidesPerView: 2 },
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 4 },
//       1400: { slidesPerView: 4 },
//     },
//   });
//   var swiper = new Swiper(".category-sidebar-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 20,
//     centerSlides: true,
//     loop: true,
//     autoplay: { delay: 2000 },
//     navigation: { nextEl: ".category1-next", prevEl: ".category1-prev" },
//   });
//   var swiper = new Swiper(".category-2-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 20,
//     slidesPerView: 1,
//     centerSlides: true,
//     loop: true,
//     autoplay: { delay: 3000 },
//     navigation: { nextEl: ".important-next", prevEl: ".important-prev" },
//     breakpoints: {
//       280: { slidesPerView: 1 },
//       386: { slidesPerView: 1 },
//       576: { slidesPerView: 2 },
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 4 },
//       1400: { slidesPerView: 5 },
//     },
//   });
//   var swiper = new Swiper(".recent-1-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 20,
//     slidesPerView: 1,
//     loop: true,
//     navigation: { nextEl: ".recent1-next", prevEl: ".recent1-prev" },
//     breakpoints: {
//       280: { slidesPerView: 1 },
//       386: { slidesPerView: 1 },
//       576: { slidesPerView: 2 },
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 4 },
//       1400: { slidesPerView: 4 },
//       1600: { slidesPerView: 5 },
//     },
//   });
//   var swiper = new Swiper(".author-1-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 30,
//     slidesPerView: 1,
//     loop: true,
//     navigation: { nextEl: ".author1-next", prevEl: ".author1-prev" },
//     breakpoints: {
//       280: { slidesPerView: 1 },
//       386: { slidesPerView: 1 },
//       576: { slidesPerView: 2 },
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 4 },
//       1400: { slidesPerView: 4 },
//     },
//   });
//   var swiper = new Swiper(".blog-multi-list-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 20,
//     loop: true,
//     navigation: { nextEl: ".blog-multi-next", prevEl: ".blog-multi-prev" },
//   });
//   var swiper = new Swiper(".hero2-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 10,
//     effect: "fade",
//     loop: true,
//     autoplay: { delay: 3000, disableOnInteraction: true },
//   });
//   var swiper = new Swiper(".entire-topic-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 30,
//     slidesPerView: 1,
//     centerSlides: true,
//     loop: true,
//     autoplay: { delay: 3000 },
//     navigation: { nextEl: ".entire-next", prevEl: ".entire-prev" },
//     breakpoints: {
//       280: { slidesPerView: 1 },
//       386: { slidesPerView: 1 },
//       576: { slidesPerView: 2 },
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 4 },
//       1400: { slidesPerView: 4 },
//     },
//   });
//   var swiper = new Swiper(".trending-article2", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 30,
//     slidesPerView: 1,
//     centerSlides: true,
//     loop: true,
//     autoplay: { delay: 3000 },
//     navigation: { nextEl: ".entire-next", prevEl: ".entire-prev" },
//     breakpoints: {
//       280: { slidesPerView: 1, spaceBetween: 10 },
//       386: { slidesPerView: 2, spaceBetween: 10 },
//       576: { slidesPerView: 1 },
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 2 },
//       1200: { slidesPerView: 2 },
//       1400: { slidesPerView: 3 },
//       1500: { slidesPerView: 3 },
//     },
//   });
//   var swiper = new Swiper(".selected-slider", {
//     slidesPerView: 1,
//     speed: 1200,
//     spaceBetween: 20,
//     loop: true,
//     roundLengths: true,
//     navigation: { nextEl: ".selected-next", prevEl: ".selected-prev" },
//     pagination: { el: ".swiper-pagination", clickable: "true" },
//     breakpoints: {
//       280: { slidesPerView: 1, navigation: false },
//       576: { slidesPerView: 1, navigation: false },
//       768: { slidesPerView: 2, navigation: false },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 3 },
//       1400: { slidesPerView: 4 },
//     },
//   });
//   var swiper = new Swiper(".important-news-slider", {
//     slidesPerView: 1,
//     speed: 1200,
//     spaceBetween: 20,
//     loop: true,
//     roundLengths: true,
//     navigation: { nextEl: ".important-next", prevEl: ".important-prev" },
//     pagination: { el: ".swiper-pagination", clickable: "true" },
//     breakpoints: {
//       280: { slidesPerView: 1, navigation: false },
//       576: { slidesPerView: 1, navigation: false },
//       768: { slidesPerView: 2, navigation: false },
//       992: { slidesPerView: 2 },
//       1200: { slidesPerView: 3 },
//     },
//   });
//   var swiper = new Swiper(".author3-slider", {
//     slidesPerView: 1,
//     speed: 1200,
//     spaceBetween: 25,
//     loop: true,
//     roundLengths: true,
//     navigation: { nextEl: ".author3-next", prevEl: ".author3-prev" },
//     pagination: { el: ".swiper-pagination", clickable: "true" },
//     breakpoints: {
//       280: { slidesPerView: 1, navigation: false },
//       576: { slidesPerView: 2, navigation: false },
//       768: { slidesPerView: 3, navigation: false },
//       992: { slidesPerView: 4 },
//       1200: { slidesPerView: 4 },
//       1600: { slidesPerView: 6 },
//     },
//   });
//   var swiper = new Swiper(".trending-news-slider", {
//     slidesPerView: 1,
//     speed: 1200,
//     spaceBetween: 20,
//     loop: true,
//     roundLengths: true,
//     navigation: {
//       nextEl: ".trending-news-next",
//       prevEl: ".trending-news-prev",
//     },
//     pagination: { el: ".swiper-pagination", clickable: "true" },
//     breakpoints: {
//       280: { slidesPerView: 1, navigation: false },
//       576: { slidesPerView: 1, navigation: false },
//       768: { slidesPerView: 2, navigation: false },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 3 },
//       1400: { slidesPerView: 4 },
//     },
//   });
//   var swiper = new Swiper(".new-post-slider", {
//     slidesPerView: 1,
//     speed: 1200,
//     spaceBetween: 20,
//     loop: true,
//     roundLengths: true,
//     navigation: {
//       nextEl: ".trending-news-next",
//       prevEl: ".trending-news-prev",
//     },
//     pagination: { el: ".swiper-pagination", clickable: "true" },
//     breakpoints: {
//       280: { slidesPerView: 1, navigation: false },
//       576: { slidesPerView: 1, navigation: false },
//       768: { slidesPerView: 2, navigation: false },
//       992: { slidesPerView: 3 },
//       1200: { slidesPerView: 3 },
//       1400: { slidesPerView: 5 },
//     },
//   });
//   var mySwiper = new Swiper(".video-slider", {
//     direction: "vertical",
//     slidesPerView: 5,
//     loop: true,
//     autoplay: { delay: 3000 },
//   });
//   var swiper = new Swiper(".banner-3-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 30,
//     slidesPerView: 1,
//     effect: "fade",
//     fadeEffect: { crossFade: true },
//     loop: true,
//     autoplay: true,
//   });
//   var swiper = new Swiper(".about-us-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: { delay: 3000, disableOnInteraction: true },
//     navigation: { nextEl: ".about-us-next", prevEl: ".about-us-prev" },
//   });
//   var swiper = new Swiper(".testimonial-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: { delay: 3000, disableOnInteraction: true },
//     navigation: { nextEl: ".testimonial-next", prevEl: ".testimonial-prev" },
//   });
//   var swiper = new Swiper(".post-gallery-card-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: { delay: 3000 },
//     navigation: { nextEl: ".blog-stand-next", prevEl: ".blog-stand-prev" },
//   });
//   const sliders = document.querySelectorAll(".blog-standard-slider");
//   sliders.forEach((slider) => {
//     const nextBtn = slider.parentElement.querySelector(".blog-stand-next");
//     const prevBtn = slider.parentElement.querySelector(".blog-stand-prev");
//     const swiper = new Swiper(slider, {
//       slidesPerView: 1,
//       speed: 1500,
//       spaceBetween: 30,
//       effect: "fade",
//       fadeEffect: { crossFade: true },
//       loop: true,
//       autoplay: false,
//       navigation: { nextEl: nextBtn, prevEl: prevBtn },
//     });
//     nextBtn.addEventListener("click", () => {
//       swiper.slideNext();
//     });
//     prevBtn.addEventListener("click", () => {
//       swiper.slidePrev();
//     });
//   });
//   $(".slider-for").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: ".slider-nav",
//   });
//   $(".slider-nav").slick({
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     vertical: true,
//     asNavFor: ".slider-for",
//     dots: false,
//     focusOnSelect: true,
//     verticalSwiping: true,
//     responsive: [
//       { breakpoint: 992, slidesToShow: 4, settings: { vertical: true } },
//       { breakpoint: 768, settings: { vertical: true, slidesToShow: 3 } },
//       { breakpoint: 580, settings: { vertical: true, slidesToShow: 3 } },
//       { breakpoint: 380, settings: { vertical: true, slidesToShow: 4 } },
//     ],
//   });
//   $(".video-list-slider").slick({
//     arrows: true,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     vertical: true,
//     dots: false,
//     focusOnSelect: true,
//     verticalSwiping: true,
//     responsive: [
//       { breakpoint: 992, slidesToShow: 4, settings: { vertical: true } },
//       { breakpoint: 768, settings: { vertical: true, slidesToShow: 3 } },
//       { breakpoint: 580, settings: { vertical: true, slidesToShow: 3 } },
//       { breakpoint: 380, settings: { vertical: true, slidesToShow: 2 } },
//     ],
//   });
//   $(".slider").slick({
//     infinite: true,
//     centerMode: false,
//     arrows: false,
//     dots: false,
//     autoplay: false,
//     speed: 800,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1400, settings: { arrows: false, slidesToShow: 2 } },
//       { breakpoint: 1200, settings: { arrows: false, slidesToShow: 2 } },
//       { breakpoint: 991, settings: { arrows: false, slidesToShow: 1 } },
//       { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
//       { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
//       { breakpoint: 480, settings: { arrows: false, slidesToShow: 1 } },
//       { breakpoint: 350, settings: { arrows: false, slidesToShow: 1 } },
//     ],
//   });
//   var percentTime;
//   var tick;
//   var time = 0.5;
//   var progressBarIndex = 0;
//   $(".progressBarContainer .progressBar").each(function (index) {
//     var progress = "<div class='inProgress inProgress" + index + "'></div>";
//     $(this).html(progress);
//   });
//   function startProgressbar() {
//     resetProgressbar();
//     percentTime = 0;
//     tick = setInterval(interval, 10);
//   }
//   function interval() {
//     if (
//       $(
//         '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
//       ).attr("aria-hidden") === "true"
//     ) {
//       progressBarIndex = $(
//         '.slider .slick-track div[aria-hidden="false"]'
//       ).data("slickIndex");
//       startProgressbar();
//     } else {
//       percentTime += 1 / (time + 5);
//       $(".inProgress" + progressBarIndex).css({ width: percentTime + "%" });
//       if (percentTime >= 100) {
//         $(".single-item").slick("slickNext");
//         progressBarIndex++;
//         if (progressBarIndex > 2) {
//           progressBarIndex = 0;
//         }
//         startProgressbar();
//       }
//     }
//   }
//   function resetProgressbar() {
//     $(".inProgress").css({ width: 0 + "%" });
//     clearInterval(tick);
//   }
//   startProgressbar();
//   $("select").niceSelect();
//   $(".counter2").counterUp({ delay: 10, time: 1000 });
// })(jQuery);
