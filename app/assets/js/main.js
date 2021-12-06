new WOW().init();
$(document).ready(function() {
  var menu = $('#primary');
  var menulink = $('.menu-link');
  var menumobile = $('.header-mobile');

  menulink.click(function() {
    menulink.toggleClass('active');
    menu.toggleClass('active');
    menumobile.toggleClass('header-mobile-active');
    return false;
  });
});
$(".gameplay--list").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$(".partner--list").slick({
  dots: true,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1500,
});
$(document).ready(function () {
  var ctrlVideo = document.getElementById("trailer-video");
  var btnVideo = document.getElementById("btnVideo");

  $(btnVideo).click(function () {
    if ($(btnVideo).hasClass("active")) {
      ctrlVideo.play();

      // $(btnVideo).html("Pause");
      $(btnVideo).toggleClass("active");
    } else {
      ctrlVideo.pause();

      // $(btnVideo).html("play");
      $(btnVideo).toggleClass("active");
    }
  });
});