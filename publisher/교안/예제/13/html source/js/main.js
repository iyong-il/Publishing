$(document).ready(function () {
  $(".mobile_tab").on("click", function () {
    $("header nav ul").toggleClass("show");
    $(".mobile_tab").toggleClass("close");
    return false;
  });
});
