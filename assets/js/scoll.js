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
    $(".navigation li.active").removeClass("active");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 10) {
    $(".header-desktop").addClass("header-bg");
  } else {
    $(".header-desktop").removeClass("header-bg");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 10) {
    $(".header-mobile").addClass("header-bg");
  } else {
    $(".header-mobile").removeClass("header-bg");
  }
});

$(window).scroll(function () {
  active();
});
function active() {
  let height_1 = $("#intro").height();
  let height_2 = $("#feature").height();
  let height_3 = $("#token").height();
  let height_4 = $("#roadmap").height();

  let distance_1 = $("#intro").offset().top;
  let distance_2 = $("#feature").offset().top;
  let distance_3 = $("#token").offset().top;
  let distance_4 = $("#roadmap").offset().top;
  let scrollY = window.pageYOffset;
  console.log(distance_1, height_1);
  if (scrollY >= distance_1 - 100 && scrollY <= distance_1 + height_1) {
    addTo(" .header-1");
    return;
  }
  if (scrollY > distance_2 - 100 && scrollY <= distance_2 + height_2) {
    addTo(" .header-2");
    return;
  }
  if (scrollY > distance_3 - 100 && scrollY <= distance_3 + height_3) {
    addTo(" .header-3");
    return;
  }

  if (scrollY > distance_4 - 100) {
    addTo(" .header-4");
    return;
  }
}
function addTo(name) {
  const prefix = "header .navigation";
  let to = $(prefix + " li.to").index();
  let from = $(prefix + " li.from").index();
  if (from === -1) {
    $(prefix + " li").removeClass("active");
    $(prefix + name).addClass("active");
    $(prefix + " li").removeClass("to");
    $(prefix + name).addClass("to");
  } else {
    if (Math.abs(to - from) > 0) {
      if ($(prefix + name).hasClass("to")) {
        $(prefix + " li").removeClass("from");
      }
    }
  }
}
