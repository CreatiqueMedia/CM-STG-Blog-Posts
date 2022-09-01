/* Hide Thank You Message */

$(".form--thank--you--container").hide();
$("#validation-msg").hide();

$("[id*=rating-btn-]").click(function () {
  switch (this.id) {
    case "rating-btn-1":
      $("#input-box").val("You selected 1 out of 5");
      $("#rating-btn-1").addClass("highlight-btn");
      $(
        "#rating-btn-2, #rating-btn-3, #rating-btn-4, #rating-btn-5"
      ).removeClass("highlight-btn");
      $(
        "#rating-btn-2, #rating-btn-3, #rating-btn-4, #rating-btn-5"
      ).removeClass("highlight-icon");
      $("#form-submit-btn").click(function () {
        $("#form").hide();
        $("#thank-you").show();
      });
      break;
    case "rating-btn-2":
      $("#input-box").val("You selected 2 out of 5");
      $("#rating-btn-2").addClass("highlight-btn");
      $(
        "#rating-btn-1, #rating-btn-3, #rating-btn-4, #rating-btn-5"
      ).removeClass("highlight-btn");
      $(
        "#rating-btn-1, #rating-btn-3, #rating-btn-4, #rating-btn-5"
      ).removeClass("highlight-icon");
      $("#form-submit-btn").click(function () {
        $("#form").hide();
        $("#thank-you").show();
      });
      break;
    case "rating-btn-3":
      $("#input-box").val("You selected 3 out of 5");
      $("#rating-btn-3").addClass("highlight-btn");
      $(
        "#rating-btn-1, #rating-btn-2, #rating-btn-4, #rating-btn-5"
      ).removeClass("highlight-btn");
      $(
        "#rating-btn-1, #rating-btn-2, #rating-btn-4, #rating-btn-5"
      ).removeClass("highlight-icon");
      $("#form-submit-btn").click(function () {
        $("#form").hide();
        $("#thank-you").show();
      });
      break;
    case "rating-btn-4":
      $("input-box").val("You selected 4 out of 5");
      $("#rating-btn-4").addClass("highlight-btn");
      $(
        "#rating-btn-1, #rating-btn-2, #rating-btn-3, #rating-btn-5"
      ).removeClass("highlight-btn");
      $(
        "#rating-btn-1, #rating-btn-2, #rating-btn-3, #rating-btn-5"
      ).removeClass("highlight-icon");
      $("#form-submit-btn").click(function () {
        $("#form").hide();
        $("#thank-you").show();
      });
      break;
    case "rating-btn-5":
      $("input-box").val("You selected 5 out of 5");
      $("#rating-btn-5").addClass("highlight-btn");
      $(
        "#rating-btn-1, #rating-btn-2, #rating-btn-3, #rating-btn-4"
      ).removeClass("highlight-btn");
      $(
        "#rating-btn-1, #rating-btn-2, #rating-btn-3, #rating-btn-4"
      ).removeClass("highlight-icon");
      $("#form-submit-btn").click(function () {
        $("#form").hide();
        $("#thank-you").show();
      });
      break;
  }
});
