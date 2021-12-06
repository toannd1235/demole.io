$(document).ready(function () {
  $('a[href*="#"]').bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        600,
        function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );

    return false;
  });
});

// $(window)
//   .scroll(function () {
//     var scrollDistance = $(window).scrollTop();

//     // Assign active class to nav links while scolling
//     $(".section").each(function (i) {
//       if ($(this).position().top <= scrollDistance) {
//         $(".navigation a.active").removeClass("active");
//         $(".navigation a").eq(i).addClass("active");
//       }
//     });
//   })
//   .scroll();

$(window).scroll(function () {
  if ($(window).scrollTop() <= 90) {
    $(".navigation a.active").removeClass("active");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 10) {
    $(".header-desktop").addClass("header-bg");
  } else {
    $(".header-desktop").removeClass("header-bg");
  }
});
// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 10) {
//     $(".header-mobile").addClass("header-bg");
//   } else {
//     $(".header-mobile").removeClass("header-bg");
//   }
// });
