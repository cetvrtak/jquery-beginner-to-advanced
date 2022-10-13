// $(function () {
//   $(".gallery").css("display", "none");

//   const red = $(".red-box");
//   console.log(red.css("width"));
//   console.log(red.width());

//   red.css("background-color", "#000");
//   $("p").css("font-size", "18px");
//   red.css("width", "+=20px");

//   const properties = $("p").css(["font-size", "line-height", "color"]);
//   console.log(properties);
//   console.log(properties["font-size"]);

//   red.css("user-select", "none");
// });

// $(function () {
//   $("a").addClass("fancy-link");
//   $("p:first").addClass("large emphasize");
//   $("li li").addClass(function (i) {
//     $(this).addClass(`item-${i}`);
//   });

//   $("div").addClass(function (_, curr) {
//     return curr == "dumb" ? "red-box" : "dumb";
//   });

//   $(".red-box").removeClass("red-box").addClass("green-box");

//   // Challenge
//   $(".dumb").removeClass("dumb").addClass("green-box");
// });

// $(function () {
//   const gallery = $(".gallery");
//   const images = [
//     "images/laptop-mobile_small.jpg",
//     "images/laptop-on-table_small.jpg",
//     "images/people-office-group-team_small.jpg",
//   ];

//   gallery.data("availableImages", images);
//   console.log(gallery.data("availableImages"));
//   gallery.data("name", "The Gallery");
//   console.log(gallery.data());
//   gallery.removeData("name");
//   console.log(gallery.data("name"));

//   console.log($("p:first").data("mydata"));
// });

$(function () {
  const lastP = $("p:last");
  console.log(lastP.text());
  console.log(lastP.html());

  console.log($("p").html());

  // lastP.text("<strong>Hello</strong>, is it me you're looking for?");
  lastP.html("<strong>Hello</strong>, is it me you're looking for?");

  // Challenge
  $("p:first").html(function () {
    return `${$(this).text()}<br><br>Appended text`;
  });
});
