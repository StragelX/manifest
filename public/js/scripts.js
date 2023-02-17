$(document).ready(function () {
  document.getElementById("video").addEventListener("ended", myHandler, false);

  function myHandler() {
    const element = document.getElementById("scroll_frame").scrollIntoView();
  }

  $(".one_line").click(function () {
    $(".one_line").not(this).removeClass("active");

    $(this).toggleClass("active");
  });

  var owl = $(".owl-carousel");

  owl.owlCarousel({
    items: 1.4,
    margin: 50,
    nav: true,
    startPosition: 1,
    center: true,

    onInitialized: function (e) {
      $("#info").text(e.item.index + "/" + (e.item.count - 1));
    },
  });

  owl.on("changed.owl.carousel", function (e) {
    $("#info").text(e.item.index + "/" + (e.item.count - 1));

    if (e.item.index === 1) {
      $(".owl-prev").addClass("disabled");
    } else {
      $(".owl-prev").removeClass("disabled");
    }

    if (e.item.index === e.item.count - 1) {
      $(".owl-next").addClass("disabled");
    } else {
      $(".owl-next").removeClass("disabled");
    }
  });

  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
