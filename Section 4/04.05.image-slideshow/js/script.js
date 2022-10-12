$(function () {
  const galleryImg = $(".gallery").find("img").first();
  const images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  let imgIndex = 0;
  setInterval(function () {
    imgIndex = (imgIndex + 1) % images.length;
    galleryImg.fadeOut(function () {
      $(this).attr("src", images[imgIndex]);
      $(this).fadeIn();
    });
  }, 2000);
});
