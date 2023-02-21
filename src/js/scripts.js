$(document).ready(function () {
  document
    .getElementById("video")
    .addEventListener("ended", scrollAfterVideo, false);

  function scrollAfterVideo() {
    document.getElementById("scroll_frame").scrollIntoView();
    $("body").removeClass("no_scroll");
  }

  $(".mobile_video").bind("ended", function () {
    scrollAfterVideo();
  });

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
      },
      1025: {
        items: 1.7,
        center: true,
        margin: 50,
      },
    },

    onInitialized: function (e) {
      $(".nav_info").text(e.item.index + 1 + "/" + e.item.count);
    },
  });

  $(".owl_pull").click(function () {
    owl.trigger("next.owl.carousel", [300]);
    $(".owl_pull").hide();
  });

  owl.on("changed.owl.carousel", function (e) {
    $(".nav_info").text(e.item.index + 1 + "/" + e.item.count);

    if (e.item.index === 0) {
      $(".owl-prev").addClass("disabled");
      $(".owl_pull").show(300);
    } else {
      $(".owl-prev").removeClass("disabled");
      $(".owl_pull").hide();
    }

    if (e.item.index === e.item.count) {
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

  $(".start_video").click(function () {
    $("#video").get(0).play();
    $(this).hide();
  });

  if (window.innerWidth < 767) {
    $(".desctop_video").remove();
  } else {
    $(".mobile_video").remove();
  }
});
