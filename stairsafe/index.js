// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 3300);
// });

// const content = document.querySelector(".content");
// const content2 = document.querySelector(".content2");
// const footer = document.querySelector("footer");
// const landing = document.querySelector(".landing");
// const hero2 = document.querySelector(".hero2");
// const hero3 = document.querySelector(".hero3");
// const checkpoint = 300;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = 1 - currentScroll / checkpoint;
//   } else {
//     opacity = 0;
//   }
//   document.querySelector(".front").style.opacity = opacity;
// });

// $(document).ready(function () {
//   $("#content").hide();
//   $("#content2").hide();
//   $("footer").hide();
//   $(".hero2").hide();
//   $(".hero3").hide();
// });

// window.addEventListener("scroll", function () {
//   if (this.window.scroll > checkpoint) {
//     $("#content").show();
//     $("#content2").show();
//     $("footer").show();
//   }
// });

// $(window).on("load", function () {
//   $(window)
//     .scroll(function () {
//       var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//       $("#landing1").each(function () {
//         var objectBottom = $(this).offset().top + $(this).outerHeight();
//         if (objectBottom < windowBottom) {
//           if ($(this).css("opacity") == 1) {
//             $(this).fadeTo(500, 1);
//           }
//         } else {
//           if ($(this).css("opacity") == 1) {
//             $(this).fadeTo(500, 0);
//           }
//         }
//       });
//     })
//     .scroll(); //invoke scroll-handler on page-load
// });
