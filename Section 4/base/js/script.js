// $(function () {
//     $("ul ul:first").append("<li>Last child element</li>");
//     $("<li>Last child element appended to</li>").appendTo($("ul ul:first"));
//     $("ul ul:first").prepend("<li>First child element</li>");
//     $("ul ul").prepend("<li>First child element</li>");
//     $("<li>First child element prepended to</li>").prependTo("ul ul:first");
//     $(".red-box").after("<div class='red-box'>Next sibling</div>");
//     $(".blue-box").before("<div class='blue-box'>Blue before</div>");
//     $(".blue-box").before(() => "<div class='red-box'>Red before blue</div>");
//     $(".blue-box").before($(".red-box"));
//     $("p").after($("#list"));

//   //   Challenge
//   $(".red-box").after("<div class='red-box'>Red Clone</div>");
//   $(".blue-box").after("<div class='blue-box'>blue Clone</div>");
//   $(".green-box").after("<div class='green-box'>green Clone</div>");
// });

// $(function () {
//     $("li").replaceWith("<li>Replaced</li>");
//     $("li").replaceWith(() => "<li>Replaced with function</li>");
//     const el = $("li:first");
//     $("p:first").replaceWith(el);
//     $("p").replaceWith(el);
//     $(".red-box, .blue-box").replaceWith("<div class='green-box'>Replaced</div>");
//   $("<div class='green-box'>Replaced All</div>").replaceAll(
//     ".red-box, .blue-box"
//   );
// });

// $(function () {
//     $("li").remove();
//     $("form").children().not("textarea, input:text, br").remove();
//     const detachedListElement = $("li").detach();
//     $("#content").append(detachedListElement);

//     $("p:first").empty();
//   $("#content div").empty();
// });

// $(function () {
//   const ytLink = $("#yt-link");
//     console.log(ytLink.attr("href"));
//     console.log(ytLink.attr("title"));
//     console.log(ytLink.attr("target"));
//     ytLink.attr("href", "https://www.youtu.be/v83ksad/");

//     const cb = $("input:checkbox");
//     cb.prop("checked");

//   const textInput = $("input:text");
//   console.log(textInput.val());
//   textInput.val("Stevo");
//   console.log(textInput.val());

//   const rangeInput = $("input[type='range']");
//   console.log(rangeInput.val());
// });
