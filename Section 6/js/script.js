// $(function () {
//   $("#btn").click(() => alert("Button clicked!"));

//   $(".red-box").click(() => $(".red-box").fadeTo(2000, 0.5));
//   $(".red-box").click();
// });

// $(function () {
//   $("#btn").hover(() => alert("Hovered over"));

//   $(".green-box").hover(function () {
//     $(this).text("Box hovered");
//   });
// });

// $(function () {
//   const blue = $(".blue-box");
//   blue.mouseenter(function () {
//     $(this).stop().fadeTo(500, 0.7);
//   });
//   blue.mouseleave(function () {
//     $(this).stop().fadeTo(500, 1);
//   });

//   blue.hover(
//     function () {
//       $(this).stop().fadeTo(500, 0.7);
//     },
//     function () {
//       $(this).stop().fadeTo(500, 1);
//     }
//   );
// });

// $(function () {
//   $("html").on("click keydown", () => console.log("Clicked or key pressed"));

//   let i = 0;
//   const images = [
//     "images/laptop-mobile_small.jpg",
//     "images/laptop-on-table_small.jpg",
//     "images/people-office-group-team_small.jpg",
//   ];

//   $(".gallery")
//     .find("img")
//     .on("click", function () {
//       i = (i + 1) % images.length;
//       $(this)
//         .fadeOut(() => $(this).attr("src", images[i]))
//         .fadeIn();
//     });
// });

// $(function () {
//   $("#content").on("click", "p", function () {
//     $(this).slideUp();
//   });
//   $("#content").append("<p>Dinamical paragraph</p>");

//   $("body").on("mouseenter", "li li", function () {
//     $(this).css("color", "orange");
//   });
// });

// $(function () {
//   let greetUser = function (user) {
//     alert(`Hello, ${user}!`);
//   };

//   $("#btn").click({ user: "Stevo" }, function (e) {
//     greetUser(e.data.user);
//   });
// });

$(function () {
  const galleryImages = $(".gallery").find("img");
  galleryImages.css("width", "30%").css("opacity", "0.7");

  galleryImages.mouseenter(function () {
    $(this).stop().fadeTo(500, 1);
  });
  galleryImages.mouseleave(function () {
    $(this).stop().fadeTo(500, 0.7);
  });

  galleryImages.click(function () {
    const src = $(this).attr("src");
    const img = $("<img>").attr("src", src).css("width", "100%");
    $(".lightbox").empty().append(img).fadeIn(2000);
  });

  $(".lightbox").click(function () {
    $(this).stop().fadeOut(500);
  });
});

$(function () {
  //   $("html").keydown(function (e) {
  //     console.log(e.which);
  //   });

  $("html").keydown(function (e) {
    if (e.which == 39) {
      $(".blue-box").stop().animate({ "margin-left": "+=10px" });
    }
  });
});
