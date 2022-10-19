$(document).ready(function () {
  $(window).scrollTop(0);
});

$(document).ready(function () {
  $("#fullpage").fullpage({
    css3: true,
    autoScrolling: true,
    //	scrollOverflow:true,
    scrollBar: true,
    fitToSection: false,
    normalScrollElements: ".landing3",
  });
});
