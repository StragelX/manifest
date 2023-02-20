$(document).ready(function () {
  document
    .getElementById("video")
    .addEventListener("ended", scrollAfterVideo, false);

  function scrollAfterVideo() {
    const element = document.getElementById("scroll_frame").scrollIntoView();
  }

  $(".one_line").click(function () {
    $(".one_line").not(this).removeClass("active");

    $(this).toggleClass("active");
  });

  var owl = $(".owl-carousel");

  owl.owlCarousel({
    nav: true,

    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 1.2,
        center: false,
        margin: 50,
        startPosition: 1,
      },
      1025: {
        items: 1.4,
        center: true,
        margin: 50,
      },
    },

    onInitialized: function (e) {
      $("#info").text(e.item.index + "/" + (e.item.count - 1));
    },
  });

  if (window.innerWidth < 1025) {
    owl.trigger("remove.owl.carousel", [0]).trigger("refresh.owl.carousel");
  }

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
