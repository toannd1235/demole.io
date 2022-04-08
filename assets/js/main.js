new WOW().init();
$(document).ready(function () {
  var menu = $("#primary");
  var menulink = $(".menu-link");
  var menumobile = $(".header-mobile");

  menulink.click(function () {
    menulink.toggleClass("active");
    menu.toggleClass("active");
    menumobile.toggleClass("header-mobile-active");
    return false;
  });
});

$(".hero--list").slick({
  dots: true,
  infinite: false,
  // autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // speed: 300,
});
$(".detail--list").slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
});
AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
});