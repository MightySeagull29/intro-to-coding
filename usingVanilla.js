$("#yes").hide();
$("#no").hide();

$("#yesButton").click(function () {
  $("#yes").slideDown();
  $("#no").slideUp();
});
$("#noButton").click(function () {
  $("#yes").slideUp();
  $("#no").slideDown();
});
