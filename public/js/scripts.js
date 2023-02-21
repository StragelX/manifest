$(document).ready(function () {
  document
    .getElementById("video")
    .addEventListener("ended", scrollAfterVideo, false);

  function scrollAfterVideo() {
    document.getElementById("scroll_frame").scrollIntoView();
  }

  $(".one_line").click(function () {
    $(".one_line").not(this).removeClass("active");

    $(this).toggleClass("active");
  });

  var owl = $(".owl-carousel");

  owl.owlCarousel({
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
        items: 1.7,
        center: true,
        margin: 50,
        startPosition: 1,
      },
    },

    onInitialized: function (e) {
      $(".nav_info").text(e.item.index + "/" + (e.item.count - 1));
    },
  });

  if (window.innerWidth < 1025) {
    owl.trigger("remove.owl.carousel", [0]).trigger("refresh.owl.carousel");
  }

  owl.on("changed.owl.carousel", function (e) {
    $(".nav_info").text(e.item.index + "/" + (e.item.count - 1));

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

  let counter = "0001";

  $(".counter").html(counter);

  $(".increment_counter").click(function () {
    let i = parseInt($(".counter").html());
    i++;

    switch (true) {
      case i < 10:
        $(".counter").html("000" + i);
        break;

      case i < 100 && i > 9:
        $(".counter").html("00" + i);
        break;

      case i > 99 && i < 1000:
        $(".counter").html("0" + i);
        break;

      case i > 1000:
        $(".counter").html(i);
        break;

      default:
        $(".counter").html(i);
        break;
    }
  });

  AOS.init({
    once: true,
  });
});
