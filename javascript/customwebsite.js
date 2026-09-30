$(function () {
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});

$(function () {
  $(".toggleNav").on("click", function () {
    $(".flex-nav ul").toggleClass("open");
  });
});

$(document).ready(function () {
  $("a.scrollLink").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      500
    );
  });
});