$(document).ready(function () {
  $(".one_line").click(function () {
    $(".one_line").removeClass("active");

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 2,
      margin: 50,
      nav: true,
      startPosition: 1,
      center: true,
    });
  });
});
